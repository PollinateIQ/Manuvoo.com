"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";

export function CTASection() {
  return (
    <Section className="py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] border border-accent1/20 bg-surface1 px-6 py-24 shadow-2xl sm:px-12 md:py-20 lg:px-24">
          {/* Background Effects */}
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-accent1/20 blur-[100px]" />
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-accent2/20 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          
          <div className="relative z-10 flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-text1 sm:text-4xl md:text-5xl">
                Ready to modernize your <br className="hidden lg:block" />
                <span className="text-accent1">hospitality operations?</span>
              </h2>
              <p className="text-lg leading-relaxed text-text2 max-w-xl">
                Book a demo and see Manuvoo in action — from QR tables to
                real-time service visibility. No hardware required.
              </p>
            </div>
            
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-accent1/20 hover:shadow-accent1/40 hover:-translate-y-1 transition-all">
                  Book a demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
