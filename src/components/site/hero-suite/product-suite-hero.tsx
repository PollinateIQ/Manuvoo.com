"use client";

import Link from "next/link";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  preview: React.ReactNode;
};

const products: Product[] = [
  {
    id: "admin",
    name: "Admin Portal",
    subtitle: "Owners & managers run the business",
    detailTitle: "Tenant Admin Portal",
    details: [
      "KPI dashboard for orders, bills, and payments",
      "Menu builder (categories, items, recipes)",
      "Tables + QR foundations",
      "Inventory receiving + waste + export",
    ],
    preview: <AdminPortalPreview className="h-[360px]" />,
  },
  {
    id: "oms",
    name: "OMS",
    subtitle: "Stations, routing, and live statuses",
    detailTitle: "ManuvooOMS",
    details: [
      "Table states and alerts",
      "Item-level status progression",
      "Station routing (kitchen/bar)",
      "Real-time operational visibility",
    ],
    preview: <OMSPreview className="h-[360px]" />,
  },
  {
    id: "customer",
    name: "Customer App",
    subtitle: "Scan → browse → order → pay",
    detailTitle: "Customer Ordering App",
    details: [
      "QR table entry and seating session",
      "Cart + ordering + live tracking",
      "Payment request flow + tips",
      "Invoices and history",
    ],
    preview: <CustomerMobilePreview className="h-[360px]" />,
  },
];

function FlipCard({
  product,
  selected,
  onSelect,
}: {
  product: Product;
  selected: ProductId | null;
  onSelect: (id: ProductId) => void;
}) {
  const isSelected = selected === product.id;
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    if (!isSelected) setFlipped(false);
  }, [isSelected]);

  const z = isSelected ? 30 : product.id === "oms" ? 20 : 10;

  return (
    <motion.div
      layout
      style={{ zIndex: z }}
      className={cn(
        "relative",
        isSelected ? "" : "cursor-pointer",
        "[perspective:1200px]"
      )}
      onClick={() => {
        if (!isSelected) {
          onSelect(product.id);
          return;
        }
        setFlipped((v) => !v);
      }}
      animate={
        isSelected
          ? { scale: 1.03, y: 0, opacity: 1 }
          : { scale: 0.94, y: 0, opacity: selected ? 0.35 : 1 }
      }
      transition={{ type: "spring", stiffness: 420, damping: 36 }}
    >
      <motion.div
        className={cn(
          "relative rounded-[28px] border border-borderNeutral bg-surface1",
          "shadow-[0_0_0_1px_var(--borderNeutral),0_40px_120px_-90px_var(--glowAccent)]",
          "overflow-hidden"
        )}
        animate={{ rotateY: isSelected && flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div style={{ backfaceVisibility: "hidden" }}>
          <div className="flex items-center justify-between gap-3 border-b border-borderNeutral bg-bg1/30 px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold text-text1">{product.name}</p>
              <p className="text-[11px] text-text3">{product.subtitle}</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <Badge variant="implemented">Preview</Badge>
              <span className="grid h-9 w-9 place-items-center rounded-2xl border border-borderNeutral bg-surface2 text-text2">
                <Info className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="p-4">{product.preview}</div>

          <div className="px-4 pb-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text3">Click to focus • Click again to flip</p>
              <span className="text-xs font-semibold text-accent2">Flip →</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="h-full w-full bg-bg1">
            <div className="flex items-center justify-between border-b border-borderNeutral px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text1">
                  {product.detailTitle}
                </p>
                <p className="text-xs text-text3">What it’s about</p>
              </div>
              <Button size="sm" variant="secondary">
                Close
              </Button>
            </div>

            <div className="p-4">
              <div className="rounded-[22px] border border-borderNeutral bg-surface1 p-4">
                <p className="text-xs font-semibold text-text1">Key capabilities</p>
                <ul className="mt-3 space-y-2 text-sm text-text2">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full" size="lg">
                    Book a demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/roadmap" className="w-full sm:w-auto">
                  <Button className="w-full" size="lg" variant="secondary">
                    View roadmap
                  </Button>
                </Link>
              </div>

              <p className="mt-3 text-xs text-text3">
                Click anywhere to flip back.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProductSuiteHero({ className }: { className?: string }) {
  const [selected, setSelected] = React.useState<ProductId | null>("admin");

  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,31,0.18),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,90,31,0.09),transparent_60%)] blur-2xl" />

      <div className="relative grid gap-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-text3">Interactive previews</p>
          <button
            type="button"
            className="text-xs font-semibold text-accent2"
            onClick={() => setSelected(null)}
          >
            Reset
          </button>
        </div>

        <div className="grid gap-4">
          <AnimatePresence initial={false}>
            {products.map((p) => (
              <FlipCard
                key={p.id}
                product={p}
                selected={selected}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
