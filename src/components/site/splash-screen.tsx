"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/cn";

export function SplashScreen() {
  const [show, setShow] = React.useState(true);
  const [phase, setPhase] = React.useState<"threeD" | "flat">("threeD");

  React.useEffect(() => {
    // Phase 1: 3D Logo (0s - 1.5s)
    // Phase 2: Switch to 2D Logo (1.5s)
    const t1 = window.setTimeout(() => setPhase("flat"), 1500);
    
    // Phase 3: Finish loading (3s)
    const t2 = window.setTimeout(() => setShow(false), 3000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Light Beam Animation */}
          <motion.div
            className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: 0 }}
          />

          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Ambient Background Glow */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="relative h-32 w-32 md:h-40 md:w-40 grid place-items-center">
              <AnimatePresence>
                {phase === "threeD" ? (
                  <motion.div
                    key="3d"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1, filter: "blur(5px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <div className="relative h-full w-full drop-shadow-2xl">
                        <Image
                          src="/Main Logo bw 3d.png"
                          alt="Manuvoo 3D Logo"
                          fill
                          priority
                          className="object-contain"
                        />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="flat"
                    initial={{ opacity: 0, scale: 1, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <div className="relative h-full w-full">
                        <Image
                          src="/Main Logo bwb.png"
                          alt="Manuvoo Logo"
                          fill
                          priority
                          className="object-contain"
                        />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
               <div className="flex items-center gap-2 justify-center mb-3">
                  <motion.span 
                    className="h-1.5 w-1.5 rounded-full bg-white"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium tracking-widest text-white/80 uppercase">Loading Experience</span>
               </div>
               
               {/* Progress Bar */}
               <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div 
                     className="absolute top-0 left-0 h-full bg-white"
                     initial={{ width: "0%" }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 3, ease: "easeInOut" }}
                  />
               </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
