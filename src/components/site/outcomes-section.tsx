"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Layout,
  TrendingUp,
  ArrowRight,
  X,
  Timer,
  ClipboardCheck,
  PieChart,
} from "lucide-react";

import { Section } from "@/components/site/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

export function OutcomesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const outcomes = [
    {
      id: "outcome-1",
      title: "Faster ordering & turnover",
      description:
        "Reduce friction at the table with QR-first flows and clearer service signals.",
      details:
        "Turn tables 15% faster. Customers scan to order immediately, reducing wait times for servers. Kitchen gets orders instantly. Payments happen at the table without the terminal shuffle.",
      icon: Zap,
      backIcon: Timer,
    },
    {
      id: "outcome-2",
      title: "Less operational chaos",
      description:
        "Run service in real time with statuses for orders, bills, and payments.",
      details:
        "Kitchen Display Systems (KDS) sync with POS. Servers know exactly when food is ready. No more 'Is table 4 ready?' shouting. Managers see live bottlenecks.",
      icon: Layout,
      backIcon: ClipboardCheck,
    },
    {
      id: "outcome-3",
      title: "Better margin control",
      description:
        "Track receiving and waste to protect costs behind the scenes.",
      details:
        "Real-time inventory deduction. See exact food costs per dish. Track waste as it happens. Alerts for low stock before service starts. Data-driven menu engineering.",
      icon: TrendingUp,
      backIcon: PieChart,
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-bg2 to-bg1">
      {/* Background glow for "nice styling" */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent1/5 blur-3xl"
      />

      <Reveal>
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent1/30 bg-accent1/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent1 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent1"></span>
            </span>
            <span className="text-sm font-medium text-accent1">
              Outcomes
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-text1 sm:text-4xl">
            Clear wins for service and margins.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text2">
            Faster throughput, fewer mistakes, and better control—without adding complexity.
          </p>
        </div>
      </Reveal>
      
      <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
        {outcomes.map((o) => (
          <StaggerItem key={o.id} className="h-[320px]">
            <motion.div
              layoutId={`card-${o.id}`}
              onClick={() => setSelectedId(o.id)}
              className="group cursor-pointer relative flex h-full flex-col justify-between rounded-[24px] border border-borderNeutral bg-surface1 p-6 transition-all duration-300 hover:border-accent1/50 hover:bg-surface2 hover:shadow-lg hover:shadow-accent1/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <motion.div 
                  layoutId={`icon-container-${o.id}`}
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent1/10 text-accent1 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent1 group-hover:text-white"
                >
                  <o.icon className="h-6 w-6" />
                </motion.div>
                <motion.h3 
                  layoutId={`title-${o.id}`}
                  className="text-lg font-semibold text-text1 group-hover:text-accent1 transition-colors"
                >
                  {o.title}
                </motion.h3>
                <motion.p 
                  layoutId={`description-${o.id}`}
                  className="mt-3 text-base leading-relaxed text-text2"
                >
                  {o.description}
                </motion.p>
              </div>
              <motion.p 
                layoutId={`cta-${o.id}`}
                className="mt-3 flex items-center text-sm font-medium text-accent1/80 group-hover:text-accent1"
              >
                Tap for details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {outcomes.map((o) => {
              if (o.id !== selectedId) return null;
              return (
                <motion.div
                  key={o.id}
                  layoutId={`card-${o.id}`}
                  className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[32px] border border-accent1/30 bg-surface2 shadow-2xl"
                  style={{ maxHeight: "85vh" }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                >
                  <div className="flex h-full flex-col md:flex-row">
                    {/* Left Panel: Visual/Header */}
                    <motion.div 
                      className="relative flex flex-col items-start justify-between bg-surface1 p-8 md:w-2/5 md:p-12 overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Background decoration */}
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent1/5 blur-3xl" />
                      
                      <div className="relative z-10">
                        <motion.div 
                          layoutId={`icon-container-${o.id}`}
                          className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent1 text-white shadow-xl shadow-accent1/20"
                        >
                          <o.backIcon className="h-10 w-10" />
                        </motion.div>
                        
                        <motion.h3 
                          layoutId={`title-${o.id}`}
                          className="text-3xl font-bold leading-tight text-text1 md:text-4xl"
                        >
                          {o.title}
                        </motion.h3>
                      </div>

                      <motion.div
                         layoutId={`cta-${o.id}`}
                         className="mt-8 relative z-10"
                       >
                         <button 
                           onClick={(e) => {
                             e.stopPropagation();
                             setSelectedId(null);
                           }}
                           className="group flex items-center gap-2 rounded-full border border-borderNeutral bg-surface2 px-6 py-2.5 text-sm font-medium text-text2 hover:border-accent1/50 hover:text-white transition-all"
                         >
                           <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                           Back to overview
                         </button>
                       </motion.div>
                    </motion.div>

                    {/* Right Panel: Content */}
                    <div className="flex flex-1 flex-col justify-center bg-bg0/50 p-8 md:p-12 backdrop-blur-sm">
                      <motion.p 
                        layoutId={`description-${o.id}`}
                        className="text-xl font-medium leading-relaxed text-text1"
                      >
                        {o.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-8 space-y-6"
                      >
                         <div className="h-px w-full bg-gradient-to-r from-accent1/50 to-transparent" />
                         
                         <div className="prose prose-invert">
                           <p className="text-lg leading-relaxed text-text2">
                             {o.details}
                           </p>
                         </div>

                         {/* Additional stats or benefits could go here if we had them */}
                         <div className="flex gap-4 pt-4">
                            <div className="rounded-xl bg-surface3 px-4 py-3 border border-borderNeutral/50">
                              <span className="block text-xs font-semibold uppercase tracking-wider text-text3">Impact</span>
                              <span className="font-mono text-accent1">High</span>
                            </div>
                            <div className="rounded-xl bg-surface3 px-4 py-3 border border-borderNeutral/50">
                              <span className="block text-xs font-semibold uppercase tracking-wider text-text3">Setup</span>
                              <span className="font-mono text-accent1">Instant</span>
                            </div>
                         </div>
                      </motion.div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(null);
                    }}
                    className="absolute right-6 top-6 rounded-full bg-surface3/50 p-2 text-text2 backdrop-blur-sm transition hover:bg-surface3 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
