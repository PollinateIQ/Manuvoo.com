import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Onboarding, rollout, and training to get hospitality teams live with Manuvoo.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Onboarding & setup",
      description:
        "Tenant setup, locations, tables, menus, and initial configuration to get you service-ready.",
    },
    {
      title: "Operations rollout",
      description:
        "Stations, routing, and status-driven workflows for kitchen, bar, and floor teams.",
    },
    {
      title: "Customer ordering rollout",
      description:
        "QR strategy and guest flow enablement — scan → browse → order → track → pay.",
    },
    {
      title: "Training & support",
      description:
        "Hands-on training for managers and staff with repeatable operating patterns.",
    },
  ];

  const modulesSummary = [
    { label: "Orders + Bills + Payments", status: "implemented" as const },
    { label: "Menu builder + recipes", status: "implemented" as const },
    { label: "Tables + QR", status: "implemented" as const },
    { label: "Inventory (receiving + waste)", status: "implemented" as const },
    { label: "Sales dashboards", status: "comingSoon" as const },
    { label: "Suppliers UI", status: "comingSoon" as const },
    { label: "Refunds + splits UI", status: "serviceReady" as const },
    { label: "Roles/permissions UI", status: "serviceReady" as const },
  ];

  return (
    <>
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Get onboarded fast, then scale with confidence."
              description="We help hospitality teams roll out Manuvoo with clear operating patterns — from tables and stations to inventory and training."
            />
          </Reveal>
          <Link href="/contact">
            <Reveal delay={0.05}>
              <Button variant="primary" size="lg">
                Book a demo
              </Button>
            </Reveal>
          </Link>
        </div>
      </Section>

      <Section variant="muted">
        <Stagger className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Card>
                <CardHeader>
                  <h3 className="text-base font-semibold text-text1">
                    {s.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-7 text-text2">{s.description}</p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="What’s included"
            title="Truth-labeled modules (high level)."
            description="A quick scan of what’s implemented today, what’s coming soon, and what’s service-ready for the next UI increments."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modulesSummary.map((m) => (
            <StaggerItem key={m.label}>
              <Card>
                <CardHeader className="flex flex-row items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-text1">{m.label}</h3>
                  <Badge variant={m.status}>
                    {m.status === "implemented"
                      ? "Implemented"
                      : m.status === "comingSoon"
                        ? "Coming soon"
                        : "Service-ready"}
                  </Badge>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-7 text-text2">
                    Built for tables, stations, bills, and payments — with clear
                    status-driven workflows.
                  </p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10">
          <Link href="/roadmap">
            <Reveal>
              <Button variant="secondary">View full roadmap</Button>
            </Reveal>
          </Link>
        </div>
      </Section>

      <Section variant="muted">
        <Reveal>
          <Card>
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-text1 sm:text-3xl">
                Ready to talk rollout?
              </h2>
              <p className="mt-3 text-base leading-7 text-text2">
                Book a demo and we’ll map Manuvoo to your venue’s service flow.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button size="lg">Book a demo</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
