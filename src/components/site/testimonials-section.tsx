"use client";

import { Star } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardHeader, CardBody } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We finally have a single view of orders, bills, and payments during peak service.",
      by: "Floor Manager",
      role: "Operations",
      initials: "FM",
    },
    {
      quote:
        "Tables and QR workflows reduced payment delays and improved turnover.",
      by: "Owner / GM",
      role: "Management",
      initials: "GM",
    },
    {
      quote:
        "Inventory receiving and waste tracking made our cost conversations real.",
      by: "Head Chef",
      role: "Kitchen",
      initials: "HC",
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-bg1">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
             backgroundSize: "32px 32px" 
           }} 
      />
      
      {/* Top Gradient Fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg2 to-transparent" />

      <div className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Operators"
            title="Designed for real venues."
            description="Built for the people who actually run the floor, the pass, and the back office."
            className="mx-auto text-center mb-16"
          />
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-borderNeutral bg-surface1/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent1/30 hover:bg-surface1 hover:shadow-2xl hover:shadow-accent1/5">
                <div>
                  <div className="mb-6 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-accent1 text-accent1" />
                    ))}
                  </div>
                  <p className="text-lg font-medium leading-relaxed text-text1">
                    “{t.quote}”
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-4 border-t border-borderNeutral/50 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface2 font-bold text-text2 ring-2 ring-borderNeutral transition-colors group-hover:bg-accent1 group-hover:text-white group-hover:ring-accent1/50">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-text1">{t.by}</p>
                    <p className="text-sm text-text3">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg2 to-transparent" />
    </Section>
  );
}
