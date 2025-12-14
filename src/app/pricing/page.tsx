import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Manuvoo pricing models.",
};

export default function PricingPage() {
  const models = [
    {
      name: "Starter",
      audience: "Cafes & Quick Service",
      description: "Essential QR ordering and order management.",
      features: [
        "Table QR codes + seating",
        "Menu browsing & ordering",
        "Live order tracking",
        "Basic kitchen display",
        "Email support",
      ],
    },
    {
      name: "Growth",
      audience: "Restaurants & Bars",
      description: "Full service flow with payments and inventory.",
      features: [
        "Everything in Starter",
        "Payment requests + tips",
        "Invoice history + PDF export",
        "Inventory management",
        "Staff schedules",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      audience: "Multi-location Groups",
      description: "Scale, control, and custom rollout.",
      features: [
        "Everything in Growth",
        "Multi-tenant management",
        "Customer profiles & loyalty",
        "Advanced analytics (coming soon)",
        "Dedicated account manager",
        "SLA support",
      ],
    },
  ];

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Pricing"
          title="Scoped to your operation."
          description="We tailor our rollout to your venue type. No hidden fees, just clear value."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-8 lg:grid-cols-3">
          {models.map((m, i) => (
            <Card
              key={m.name}
              className={`flex flex-col ${
                i === 1 ? "border-accent1 shadow-lg shadow-accent1/10" : ""
              }`}
            >
              <CardHeader>
                <p className="text-sm font-medium text-accent2">{m.audience}</p>
                <h3 className="mt-2 text-2xl font-bold text-text1">{m.name}</h3>
                <p className="mt-2 text-sm text-text2">{m.description}</p>
              </CardHeader>
              <CardBody className="flex flex-1 flex-col justify-between">
                <ul className="space-y-4">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text2">
                      <Check className="h-5 w-5 shrink-0 text-accent1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="block w-full">
                    <Button
                      variant={i === 1 ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Request quote
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-text1">
            Need a custom integration?
          </h2>
          <p className="mt-4 text-text2">
            Manuvoo is API-driven and ready to integrate with your existing
            payment providers or custom workflows.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="tertiary">Contact sales team →</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
