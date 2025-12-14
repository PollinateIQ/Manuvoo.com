"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { IsoCubeIcon, IsoQrIcon, IsoStationIcon } from "@/components/icons";

export function HeroArt({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,31,0.22),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,90,31,0.10),transparent_55%)] blur-2xl"
        animate={{ opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-[420px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-borderNeutral bg-surface1 shadow-[0_0_0_1px_var(--borderNeutral),0_30px_90px_-60px_var(--glowAccent)]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,90,31,0.18),transparent_55%)]" />

          <div className="relative p-6">
            <p className="text-xs font-medium text-text3">Operational preview</p>
            <h3 className="mt-2 text-base font-semibold text-text1">
              A status-driven service UI
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {["QR tables", "Stations", "Inventory"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-borderNeutral bg-surface2 px-3 py-2 text-center text-xs font-medium text-text2"
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent2 shadow-[0_0_0_6px_var(--glowSoft)]" />
                <p className="text-xs font-medium text-text2">
                  Live updates across service
                </p>
              </div>
              <Image
                src="/Main Logo bwb 3d.png"
                alt="Manuvoo"
                width={36}
                height={36}
                className="h-9 w-9 opacity-90"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating 3D-style icons */}
        <motion.div
          aria-hidden
          className="absolute -left-10 top-10"
          animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <IsoQrIcon size={56} className="drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]" />
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute -right-10 top-20"
          animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <IsoStationIcon size={56} className="drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]" />
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute left-6 -bottom-10"
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <IsoCubeIcon size={60} className="drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
