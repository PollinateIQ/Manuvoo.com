"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="relative">
      {isActive ? (
        <motion.span
          layoutId="navActivePill"
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-surface2",
            "shadow-[0_0_0_1px_var(--borderAccent),0_0_20px_-5px_var(--glowAccent)]"
          )}
          transition={{ type: "spring", stiffness: 520, damping: 38 }}
        />
      ) : null}
      <Link
        href={href}
        className={cn(
          "relative z-10 inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors",
          isActive ? "text-text1" : "text-text2 hover:text-text1"
        )}
      >
        {label}
      </Link>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderNeutral/60 bg-bg1/70 backdrop-blur-xl transition-all duration-200">
      <div className="container-site">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-surface2 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-text1 focus:shadow-xl focus:outline-none"
        >
          Skip to content
        </a>
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo variant="inverse" size="xl" />

          <nav className="hidden md:flex">
            <div
              className={cn(
                "relative flex items-center gap-1 rounded-full",
                "border border-borderNeutral bg-surface1/40 p-1.5 backdrop-blur-md",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_40px_-20px_rgba(0,0,0,0.4)]"
              )}
            >
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
                className="group relative overflow-hidden bg-accent1/90 hover:bg-accent1 hover:shadow-[0_0_40px_-10px_var(--glowAccent)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-borderNeutral bg-surface1 text-text1 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden pb-4 md:hidden"
          >
            <div
              id="mobile-nav"
              className="grid gap-2 rounded-[24px] border border-borderNeutral bg-surface1/95 p-3 backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text2 hover:bg-surface2 hover:text-text1"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full" variant="primary" size="lg">
                  Book a demo
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
