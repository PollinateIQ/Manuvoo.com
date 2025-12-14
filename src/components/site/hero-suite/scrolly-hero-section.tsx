"use client";

import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight, ArrowDown, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ParallaxGlow } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";

import { AdminPortalPreview } from "./admin-preview";
import OMSPreview from "./oms-preview";
import { CustomerMobilePreview } from "./mobile-preview";

type ProductId = "admin" | "oms" | "customer";

type Product = {
  id: ProductId;
  name: string;
  subtitle: string;
  detailTitle: string;
  details: string[];
  render: (opts: { interactive: boolean; heightClass: string }) => React.ReactNode;
};

const products: Product[] = [
  {
    id: "admin",
    name: "Admin Portal",
    subtitle: "Owners & managers run the business",
    detailTitle: "Tenant Admin Portal",
    details: [
      "Dashboard KPIs + operational widgets",
      "Orders, bills, and payments visibility",
      "Menu builder foundations",
      "Inventory receiving + waste + export",
    ],
    render: ({ interactive, heightClass }) => (
      <AdminPortalPreview interactive={interactive} className={heightClass} />
    ),
  },
  {
    id: "oms",
    name: "OMS",
    subtitle: "Stations, routing, and live statuses",
    detailTitle: "ManuvooOMS",
    details: [
      "Tables view + floor control",
      "Orders queue by status",
      "Item-level routing readiness",
      "Status-driven operations",
    ],
    render: ({ interactive, heightClass }) => (
      <OMSPreview interactive={interactive} className={heightClass} />
    ),
  },
  {
    id: "customer",
    name: "Customer App",
    subtitle: "Scan → browse → order → pay",
    detailTitle: "Customer Ordering App",
    details: [
      "Table session + QR flow",
      "Browse menu and place orders",
      "Track statuses",
      "Request payment + invoices",
    ],
    render: ({ interactive, heightClass }) => (
      <CustomerMobilePreview interactive={interactive} className={heightClass} />
    ),
  },
];

function HeroGeometry() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -top-24 left-1/2 h-[420px] w-[1200px] -translate-x-1/2 opacity-[0.22]"
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1200" y2="0">
            <stop stopColor="rgba(255,255,255,0.00)" />
            <stop offset="0.25" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="0.75" stopColor="rgba(255,90,31,0.14)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.00)" />
          </linearGradient>
        </defs>
        <path d="M40 70H1160" stroke="url(#g)" strokeWidth="1" />
        <path d="M40 150H1160" stroke="url(#g)" strokeWidth="1" opacity="0.65" />
        <path d="M40 230H1160" stroke="url(#g)" strokeWidth="1" opacity="0.5" />
        <path d="M40 310H1160" stroke="url(#g)" strokeWidth="1" opacity="0.35" />
        <path d="M220 30V390" stroke="url(#g)" strokeWidth="1" opacity="0.28" />
        <path d="M600 30V390" stroke="url(#g)" strokeWidth="1" opacity="0.22" />
        <path d="M980 30V390" stroke="url(#g)" strokeWidth="1" opacity="0.18" />
        <path
          d="M80 360C220 240 360 320 520 200C680 80 860 140 1120 40"
          stroke="rgba(255,90,31,0.18)"
          strokeWidth="1.2"
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,90,31,0.10),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.06),transparent_45%)]" />
    </div>
  );
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function useActiveProduct(target: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target,
    // IMPORTANT: align 0→1 progress to the sticky lifecycle.
    // Sticky ends when section end reaches viewport end (end end), not end start.
    offset: ["start start", "end end"],
  });

  const [active, setActive] = React.useState<ProductId>("admin");
  const [progress, setProgress] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = clamp(v, 0, 1);
    setProgress(p);
    setActiveIndex(p * (products.length - 1));

    // 3 segments
    if (p < 1 / 3) setActive("admin");
    else if (p < 2 / 3) setActive("oms");
    else setActive("customer");
  });

  return { active, progress, activeIndex };
}

function ScreenStack({
  activeId,
  activeIndex,
  onOpen,
}: {
  activeId: ProductId;
  activeIndex: number;
  onOpen: (id: ProductId) => void;
}) {
  const activeIdxInt = products.findIndex((x) => x.id === activeId);
  const activeFloat = Number.isFinite(activeIndex) ? activeIndex : activeIdxInt;

  return (
    <LayoutGroup>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,31,0.16),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,90,31,0.07),transparent_60%)] blur-2xl" />

        <div className="relative h-[600px] w-full">
          {products.map((p, idx) => {
            const isActive = p.id === activeId;
            const dist = Math.abs(idx - activeFloat);
            const scale = 1 - dist * 0.06;
            const y = (idx - activeFloat) * 140;
            const zIndex = isActive ? 60 : 40 - Math.round(dist * 10);
            const blur = dist * 1.1;
            const brightness = clamp(1 - dist * 0.12, 0.76, 1);

            return (
              <motion.div
                key={p.id}
                layoutId={`suite-${p.id}`}
                role="button"
                tabIndex={0}
                aria-label={`Open ${p.name} preview`}
                onClick={() => onOpen(p.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onOpen(p.id);
                }}
                className={cn(
                  "absolute left-0 right-0",
                  "rounded-[28px] border border-borderNeutral bg-bg1",
                  "shadow-[0_0_0_1px_var(--borderNeutral),0_60px_180px_-120px_var(--glowAccent)]",
                  "overflow-hidden text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg1",
                  "will-change-transform"
                )}
                style={{
                  top: 0,
                  zIndex,
                }}
                animate={{
                  y,
                  scale,
                  opacity: 1,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.8 }}
              >
                <div className="flex items-center justify-between gap-3 border-b border-borderNeutral bg-bg1/95 px-4 py-3 backdrop-blur">
                  <div>
                    <p className="text-[11px] font-semibold text-text1">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-text3">{p.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Badge variant="implemented">Preview</Badge>
                    <span className="text-xs font-semibold text-accent2">
                      Click to zoom
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none p-4">
                  {p.render({ interactive: false, heightClass: "h-[420px]" })}
                </div>

                {/* keep stacks clean: dark overlay on inactive cards */}
                {!isActive ? (
                  <div className="pointer-events-none absolute inset-0 bg-black/55" />
                ) : null}
              </motion.div>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-text3">
          Scroll to cycle screens • Click any screen to zoom and explore
        </p>
      </div>
    </LayoutGroup>
  );
}

function ProductModal({
  openId,
  onClose,
}: {
  openId: ProductId;
  onClose: () => void;
}) {
  const product = products.find((p) => p.id === openId)!;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          type="button"
          aria-label="Close"
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
        />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            layoutId={`suite-${openId}`}
            className={cn(
              "w-full max-w-6xl overflow-hidden rounded-[28px]",
              "border border-borderNeutral bg-bg1",
              "shadow-[0_0_0_1px_var(--borderNeutral),0_60px_160px_-100px_var(--glowAccent)]"
            )}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-borderNeutral px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text1">
                  {product.detailTitle}
                </p>
                <p className="text-xs text-text3">Interactive mock UI</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-borderNeutral bg-surface1 text-text2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 p-4 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="rounded-[24px] border border-borderNeutral bg-surface1 p-3">
                  {product.render({
                    interactive: true,
                    heightClass: "h-[72vh] min-h-[520px]",
                  })}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-[24px] border border-borderNeutral bg-surface1 p-4">
                  <p className="text-xs font-semibold text-text1">
                    What you’re seeing
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-text2">
                    {product.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-col gap-3">
                    <Link href="/contact">
                      <Button className="w-full" size="lg">
                        Book a demo <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/roadmap">
                      <Button className="w-full" size="lg" variant="secondary">
                        View roadmap
                      </Button>
                    </Link>
                  </div>

                  <p className="mt-3 text-xs text-text3">
                    Tip: try the tabs, click statuses, and scroll within the
                    preview.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ScrollyHeroSection() {
  const router = useRouter();
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { active, progress, activeIndex } = useActiveProduct(sectionRef);

  const [open, setOpen] = React.useState<ProductId | null>(null);
  const [ctaOpen, setCtaOpen] = React.useState<null | "demo" | "explore">(null);

  const activeProduct = products.find((p) => p.id === active) ?? products[0];

  type DemoPayload = {
    name: string;
    email: string;
    company: string;
    locations: string;
    notes: string;
    day: string;
    slot: string;
  };

  type SubmitState =
    | { status: "idle" }
    | { status: "submitting" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };

  const [demo, setDemo] = React.useState<DemoPayload>({
    name: "",
    email: "",
    company: "",
    locations: "1",
    notes: "",
    day: "",
    slot: "",
  });

  const [days, setDays] = React.useState<Array<{ id: string; label: string }>>([]);
  const slots = React.useMemo(
    () => ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"],
    []
  );

  const [submit, setSubmit] = React.useState<SubmitState>({ status: "idle" });

  React.useEffect(() => {
    // Avoid hydration mismatch by computing dates on client only.
    const base = new Date();
    const list = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const label = d.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      return { id: d.toISOString().slice(0, 10), label };
    });
    setDays(list);
    setDemo((v) => ({
      ...v,
      day: v.day || list[0]?.id || "",
      slot: v.slot || "10:30",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submitDemoRequest(e: React.FormEvent) {
    e.preventDefault();
    setSubmit({ status: "submitting" });

    const name = demo.name.trim();
    const email = demo.email.trim();
    const company = demo.company.trim();
    const locations = demo.locations.trim();
    const day = demo.day.trim();
    const slot = demo.slot.trim();
    const notes = demo.notes.trim();

    if (!name || !email || !company || !locations || !day || !slot) {
      setSubmit({ status: "error", message: "Please fill in all required fields." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          locations,
          message: `DEMO REQUEST\nPreferred slot: ${day} @ ${slot}\nNotes: ${notes || "(none)"}`,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !json.ok) {
        setSubmit({
          status: "error",
          message:
            json.message ?? "Something went wrong sending your request. Please try again.",
        });
        return;
      }

      setSubmit({
        status: "success",
        message: json.message ?? "Thanks — we’ll reach out to confirm a time.",
      });
    } catch {
      setSubmit({ status: "error", message: "Network error. Please try again." });
    }
  }

  // Calculate opacity for the scroll indicator
  // Fade out quickly as user scrolls
  const scrollIndicatorOpacity = Math.max(0, 1 - progress * 15);

  return (
    <section ref={sectionRef} className="relative bg-bg1 h-[280vh]">
      <ParallaxGlow className="-top-56" />
      <HeroGeometry />

      <div className="sticky top-16">
        <div className="container-site">
          <div className="h-[calc(100dvh-4rem)] py-10 flex items-center relative">
            
            {/* Scroll Indicator */}
            {scrollIndicatorOpacity > 0.05 && (
              <motion.div 
                className="absolute bottom-8 left-0 lg:left-12 flex items-center gap-3 text-text3/60 pointer-events-none z-10"
                style={{ opacity: scrollIndicatorOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollIndicatorOpacity }}
              >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-text3/30 p-1">
                  <motion.div 
                    className="h-1.5 w-1.5 rounded-full bg-text3/60"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
                  <span className="text-[9px] text-text3/40">to explore the suite</span>
                </div>
              </motion.div>
            )}

            <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <Reveal>
                  <p className="mb-4 inline-flex rounded-full border border-borderNeutral bg-surface1 px-3 py-1 text-xs font-medium text-text2">
                    Hospitality-first • Real-time • Status-driven
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="text-4xl font-semibold tracking-tight text-text1 sm:text-5xl">
                    Run smarter hospitality operations — from table to cash-up.
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-text2 sm:text-lg">
                    Manuvoo connects your QR table experience, orders & payments,
                    menu management, inventory control, and staff operations into
                    one platform built for modern hospitality.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      size="lg"
                      variant="primary"
                      onClick={() => setCtaOpen("demo")}
                    >
                      Book a demo
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={() => setCtaOpen("explore")}
                    >
                      Explore platform
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <Badge variant="implemented">Implemented today</Badge>
                    <Badge variant="comingSoon">Coming soon</Badge>
                    <Badge variant="serviceReady">Service-ready</Badge>
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="mt-7 rounded-[24px] border border-borderNeutral bg-surface1 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-text1">
                        Now viewing
                      </p>
                      <p className="text-xs text-text3">
                        {Math.round(progress * 100)}%
                      </p>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-bg2">
                      <div
                        className="h-2 rounded-full bg-accent1/80"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <p className="mt-3 text-lg font-semibold text-text1">
                          {activeProduct.name}
                        </p>
                        <p className="mt-1 text-base text-text2">
                          {activeProduct.subtitle}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-text2">
                          {activeProduct.details.slice(0, 3).map((d) => (
                            <li key={d} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </AnimatePresence>

                    <p className="mt-4 text-sm text-text3">
                      Scroll to explore the suite. Click a screen to zoom and
                      interact with mock data.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <ScreenStack activeId={active} activeIndex={activeIndex} onOpen={setOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? <ProductModal openId={open} onClose={() => setOpen(null)} /> : null}

      <AnimatePresence>
        {ctaOpen ? (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/60"
              onClick={() => setCtaOpen(null)}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, scale: 0.99, filter: "blur(8px)" }}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className={cn(
                  "w-full max-w-xl overflow-hidden rounded-[28px]",
                  "border border-borderNeutral bg-bg1",
                  "shadow-[0_0_0_1px_var(--borderNeutral),0_60px_160px_-100px_var(--glowAccent)]"
                )}
              >
                <div className="flex items-center justify-between border-b border-borderNeutral px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-text1">
                      {ctaOpen === "demo" ? "Book a demo" : "Explore platform"}
                    </p>
                    <p className="mt-1 text-sm text-text2">
                      {ctaOpen === "demo"
                        ? "Choose a slot and leave your details — we’ll confirm over email."
                        : "Jump into our product catalogue, story, and roadmap."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCtaOpen(null)}
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-borderNeutral bg-surface1 text-text2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5">
                  {ctaOpen === "demo" ? (
                    <form onSubmit={submitDemoRequest} className="grid gap-4">
                      <div className="rounded-[22px] border border-borderNeutral bg-surface1 p-4">
                        <p className="text-xs font-semibold text-text1">Pick a slot</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          <div className="grid gap-2">
                            <label className="text-xs font-medium text-text2" htmlFor="demo-day">
                              Day
                            </label>
                            <Select
                              id="demo-day"
                              value={demo.day}
                              onChange={(e) => setDemo((v) => ({ ...v, day: e.target.value }))}
                            >
                              {days.length ? null : <option value="">Loading…</option>}
                              {days.map((d) => (
                                <option key={d.id} value={d.id}>
                                  {d.label}
                                </option>
                              ))}
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <label className="text-xs font-medium text-text2" htmlFor="demo-slot">
                              Time
                            </label>
                            <Select
                              id="demo-slot"
                              value={demo.slot}
                              onChange={(e) => setDemo((v) => ({ ...v, slot: e.target.value }))}
                            >
                              {slots.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </Select>
                          </div>
                        </div>
                        <p className="mt-3 text-xs text-text3">
                          We’ll confirm the slot by email. (Availability is mock for now.)
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <label className="text-xs font-medium text-text2" htmlFor="demo-name">
                            Name
                          </label>
                          <Input
                            id="demo-name"
                            required
                            value={demo.name}
                            onChange={(e) => setDemo((v) => ({ ...v, name: e.target.value }))}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label className="text-xs font-medium text-text2" htmlFor="demo-email">
                            Email
                          </label>
                          <Input
                            id="demo-email"
                            type="email"
                            required
                            value={demo.email}
                            onChange={(e) => setDemo((v) => ({ ...v, email: e.target.value }))}
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <label className="text-xs font-medium text-text2" htmlFor="demo-company">
                            Company / Restaurant
                          </label>
                          <Input
                            id="demo-company"
                            required
                            value={demo.company}
                            onChange={(e) => setDemo((v) => ({ ...v, company: e.target.value }))}
                            placeholder="Business name"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label className="text-xs font-medium text-text2" htmlFor="demo-locations">
                            Number of locations
                          </label>
                          <Select
                            id="demo-locations"
                            value={demo.locations}
                            onChange={(e) => setDemo((v) => ({ ...v, locations: e.target.value }))}
                          >
                            <option value="1">1</option>
                            <option value="2-3">2–3</option>
                            <option value="4-10">4–10</option>
                            <option value="10+">10+</option>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <label className="text-xs font-medium text-text2" htmlFor="demo-notes">
                          Notes (optional)
                        </label>
                        <Textarea
                          id="demo-notes"
                          value={demo.notes}
                          onChange={(e) => setDemo((v) => ({ ...v, notes: e.target.value }))}
                          placeholder="Anything you want us to prepare (menu, tables, payments, inventory, staff)?"
                        />
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Button
                          type="submit"
                          size="lg"
                          className="sm:w-auto"
                          disabled={submit.status === "submitting"}
                        >
                          {submit.status === "submitting" ? "Sending…" : "Request demo"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>

                        {submit.status === "success" ? (
                          <p className="text-sm text-text2">{submit.message}</p>
                        ) : null}
                        {submit.status === "error" ? (
                          <p className="text-sm text-accent2">{submit.message}</p>
                        ) : null}
                      </div>
                    </form>
                  ) : (
                    <div className="grid gap-3">
                      <button
                        type="button"
                        className={cn(
                          "w-full rounded-[22px] border px-5 py-4 text-left transition",
                          "border-borderAccent bg-surface1 hover:bg-surface2",
                          "shadow-[0_0_0_1px_var(--borderNeutral)]"
                        )}
                        onClick={() => router.push("/services")}
                      >
                        <p className="text-sm font-semibold text-text1">Product catalogue</p>
                        <p className="mt-1 text-sm text-text2">
                          See the suite: Admin Portal, OMS, and the Customer App.
                        </p>
                      </button>

                      <button
                        type="button"
                        className={cn(
                          "w-full rounded-[22px] border px-5 py-4 text-left transition",
                          "border-borderNeutral bg-surface1 hover:bg-surface2"
                        )}
                        onClick={() => router.push("/about")}
                      >
                        <p className="text-sm font-semibold text-text1">About MANUVOO</p>
                        <p className="mt-1 text-sm text-text2">
                          Mission, positioning, and why we’re building this.
                        </p>
                      </button>

                      <button
                        type="button"
                        className={cn(
                          "w-full rounded-[22px] border px-5 py-4 text-left transition",
                          "border-borderNeutral bg-surface1 hover:bg-surface2"
                        )}
                        onClick={() => router.push("/roadmap")}
                      >
                        <p className="text-sm font-semibold text-text1">
                          View roadmap <ArrowRight className="ml-2 inline h-4 w-4" />
                        </p>
                        <p className="mt-1 text-sm text-text2">
                          What’s implemented, coming soon, and service-ready.
                        </p>
                      </button>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-text3">
                    Tip: you can still click any screen to open the interactive mock UI.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
