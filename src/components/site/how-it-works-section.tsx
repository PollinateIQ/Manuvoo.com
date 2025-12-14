"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Store, ChefHat, Receipt, Boxes, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/site/section-header";
import { Section } from "@/components/site/section";

const STEPS = [
  {
    title: "Set up your business",
    description: "Add your profile, locations, branding, and settings.",
    icon: Store,
  },
  {
    title: "Create your menu",
    description: "Build categories, items, images, and recipes/ingredients.",
    icon: ChefHat,
  },
  {
    title: "Run service",
    description: "Manage tables + QR, orders, bills, and payments in one flow.",
    icon: Receipt,
  },
  {
    title: "Control stock",
    description: "Track inventory, record receiving and waste, export data.",
    icon: Boxes,
  },
  {
    title: "Manage your team",
    description: "Add staff, manage activation, and view schedules.",
    icon: Users,
  },
];

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start 80%" -> Start filling when top of container hits 80% of viewport (near bottom)
    // "end 50%"   -> Finish filling when bottom of container hits 50% of viewport (center)
    offset: ["start 50%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section className="relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent1/5 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center">
        <SectionHeader
          eyebrow="How it works"
          title="Built around real service flow."
          description="Setup → menu → service → stock → team. Simple steps, repeatable patterns."
          className="mb-20 text-center"
        />

        <div 
          ref={containerRef} 
          className="relative w-full max-w-5xl"
        >
          {/* Central Line */}
          <div className="absolute left-[28px] top-4 bottom-10 w-1 bg-surface3 md:left-1/2 md:-translate-x-1/2">
             <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-accent1 via-accent2 to-accent1 shadow-[0_0_15px_1px_var(--accent1)]"
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {STEPS.map((step, index) => (
              <TimelineStep 
                key={index} 
                step={step} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineStep({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "relative flex w-full items-center gap-8 md:gap-12",
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Text Side (Desktop) */}
      <div className="hidden md:block flex-1 text-right">
        {isEven ? (
          <div className="text-left">
             <h3 className="text-2xl font-bold text-text1 mb-2">{step.title}</h3>
             <p className="text-lg text-text2 leading-relaxed">{step.description}</p>
          </div>
        ) : (
          <div className="text-right">
             <h3 className="text-2xl font-bold text-text1 mb-2">{step.title}</h3>
             <p className="text-lg text-text2 leading-relaxed">{step.description}</p>
          </div>
        )}
      </div>

      {/* Center Icon Node */}
      <div className="relative z-10 flex shrink-0">
        <div className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-borderNeutral bg-surface1 shadow-xl transition-transform duration-300 hover:scale-110 md:h-20 md:w-20 md:rounded-[24px]">
          {/* Active State Ring (Static or Animated on Hover) */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-accent1/20 blur-lg transition-opacity duration-300 group-hover:opacity-100 md:rounded-[24px]" />
          
          <step.icon className="h-6 w-6 text-text1 transition-colors duration-300 group-hover:text-accent1 md:h-9 md:w-9" />
          
          {/* Number Badge */}
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent1 text-xs font-bold text-white shadow-sm ring-4 ring-bg1 md:h-7 md:w-7">
            {index + 1}
          </div>
        </div>
      </div>

      {/* Text Side (Mobile & Desktop Balance) */}
      <div className="flex-1">
        {/* Mobile Only Text */}
        <div className="block md:hidden">
          <h3 className="text-xl font-bold text-text1 mb-2">{step.title}</h3>
          <p className="text-base text-text2 leading-relaxed">{step.description}</p>
        </div>
        
        {/* Desktop Spacer */}
        <div className="hidden md:block" />
      </div>
    </motion.div>
  );
}
