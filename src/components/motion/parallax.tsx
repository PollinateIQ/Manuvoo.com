"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

import { cn } from "@/lib/cn";

export function ParallaxGlow({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [0.18, 0.08]);

  return (
    <motion.div
      aria-hidden
      style={{ y, opacity }}
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl",
        "bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.22),rgba(255,90,31,0.06),transparent_70%)]",
        className
      )}
    />
  );
}

export function ParallaxCard({
  children,
  className,
  strength = 14,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useTransform(my, [-1, 1], [strength, -strength]);
  const ry = useTransform(mx, [-1, 1], [-strength, strength]);

  const springX = useSpring(rx, { stiffness: 220, damping: 20, mass: 0.6 });
  const springY = useSpring(ry, { stiffness: 220, damping: 20, mass: 0.6 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    mx.set((px - 0.5) * 2);
    my.set((py - 0.5) * 2);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className={cn("[perspective:900px]", className)}
    >
      {children}
    </motion.div>
  );
}
