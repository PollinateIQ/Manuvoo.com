"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/cn";

export function SplashScreen() {
  const [show, setShow] = React.useState(false);
  const [phase, setPhase] = React.useState<"threeD" | "flat">("threeD");

  React.useEffect(() => {
    // Show once per session.
    try {
      const seen = sessionStorage.getItem("manuvoo_splash_seen");
      if (seen) return;
      sessionStorage.setItem("manuvoo_splash_seen", "1");
    } catch {
      // ignore
    }

    setShow(true);
    const t1 = window.setTimeout(() => setPhase("flat"), 550);
    const t2 = window.setTimeout(() => setShow(false), 1250);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-bg1"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.20),transparent_60%)] blur-3xl"
              initial={{ opacity: 0.2, scale: 0.95 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            />

            <div className="relative grid place-items-center">
              <AnimatePresence mode="wait">
                {phase === "threeD" ? (
                  <motion.div
                    key="3d"
                    initial={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(8px)" }}
                    transition={{ type: "spring", stiffness: 520, damping: 34 }}
                    className="grid place-items-center"
                  >
                    <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-[28px] border border-borderAccent bg-surface2 shadow-[0_0_60px_-18px_var(--glowAccent)]">
                      <Image
                        src="/Main Logo bwb 3d.png"
                        alt="Manuvoo logo"
                        width={80}
                        height={80}
                        priority
                        className="h-20 w-20 object-cover"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="flat"
                    initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, scale: 0.995, filter: "blur(8px)" }}
                    transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                    className="grid place-items-center"
                  >
                    <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-[28px] border border-borderNeutral bg-surface2 shadow-[0_0_60px_-18px_var(--glowAccent)]">
                      <Image
                        src="/Main Logo bw.png"
                        alt="Manuvoo logo"
                        width={80}
                        height={80}
                        priority
                        className="h-20 w-20 object-contain p-2"
                      />
                    </div>
                    <motion.p
                      className={cn(
                        "mt-4 text-sm font-semibold tracking-[0.22em] text-text1"
                      )}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      MANUVOO
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              className="mt-6 text-xs text-text3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              Loading experience…
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

