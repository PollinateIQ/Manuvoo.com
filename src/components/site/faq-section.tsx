"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Reveal } from "@/components/motion/reveal";

export function FAQSection() {
  const faq = [
    {
      id: "setup-time",
      question: "How long does setup take?",
      answer:
        "Typically minutes to create your tenant, menu, and tables — then generate QR codes and run service. Our onboarding wizard guides you through every step.",
    },
    {
      id: "hardware",
      question: "Do I need special hardware?",
      answer:
        "No. QR-first experiences work with standard smartphones, and your ops team runs the platform in the browser on any tablet, laptop, or POS screen.",
    },
    {
      id: "multi-venue",
      question: "Can I run multiple venues?",
      answer:
        "Yes. Multi-tenant access is designed for teams operating across locations and brands. You can switch between venues instantly from a single dashboard.",
    },
    {
      id: "refunds-splits",
      question: "Do you support refunds, splits, and verification workflows?",
      answer:
        "These workflows are supported at the platform/service layer and are rolling into the UI based on the roadmap. We prioritize compliance and auditability.",
    },
    {
      id: "pricing",
      question: "Do you show pricing publicly?",
      answer:
        "Not currently. We scope based on your operation size and rollout requirements to ensure you get the right package for your needs.",
    },
  ];

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="sticky top-24">
              <SectionHeader
                eyebrow="FAQ"
                title="Common questions."
                description="Everything you need to know about getting started with Manuvoo."
              />
              <div className="mt-8 hidden lg:block">
                 <div className="h-64 w-64 rounded-full bg-accent1/5 blur-3xl" />
              </div>
            </div>
          </Reveal>
        </div>
        
        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.map((item) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id} 
                  className="rounded-2xl border border-borderNeutral bg-surface1/50 px-6 transition-all hover:border-accent1/30 hover:bg-surface1"
                >
                  <AccordionTrigger className="py-6 text-lg font-medium text-text1 hover:text-accent1 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-text2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
