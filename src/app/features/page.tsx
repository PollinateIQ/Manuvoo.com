import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Boxes,
  ChefHat,
  Clock,
  Layout,
  Receipt,
  ShieldCheck,
  Store,
  UserCog,
  Smartphone,
} from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the Manuvoo platform modules.",
};

export default function FeaturesPage() {
  const implemented = [
    {
      title: "Orders & Transactions Hub",
      description:
        "View orders, bills, and payments in one workspace. Cancel orders, resolve disputes, and get instant visibility into what’s happening.",
      icon: Receipt,
    },
    {
      title: "Menu Builder",
      description:
        "Create categories and items, upload images, and manage recipes/ingredients for operational readiness.",
      icon: ChefHat,
    },
    {
      title: "Tables + QR",
      description:
        "Manage sections, table status, and generate QR codes that link directly to your customer ordering flow.",
      icon: Layout,
    },
    {
      title: "Inventory Management",
      description:
        "Track stock levels, record receiving and waste, and export data to protect your margins.",
      icon: Boxes,
    },
    {
      title: "Staff & Schedules",
      description:
        "Manage your team directory, activate/deactivate staff, and view aggregated schedules.",
      icon: UserCog,
    },
    {
      title: "Tenant Admin Portal",
      description:
        "The command center for owners: business profile, locations, branding, gallery, and settings.",
      icon: Store,
    },
    {
      title: "Secure Authentication",
      description:
        "Email/password and Google OAuth login with strict tenant data separation.",
      icon: ShieldCheck,
    },
    {
      title: "Operations Dashboard",
      description:
        "Real-time KPIs including order trends, activity feeds, and top products.",
      icon: BarChart3,
    },
  ];

  const ecosystem = [
    {
      title: "ManuvooOMS (PaaS)",
      description:
        "The operations layer: station routing, kitchen display workflows, and live status updates for the floor team.",
      icon: Clock,
    },
    {
      title: "Customer Ordering App",
      description:
        "The guest experience: scan → browse → order → track → pay. A PWA-ready app that plugs into your Manuvoo backend.",
      icon: Smartphone,
    },
  ];

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Features"
          title="The complete toolkit."
          description="Everything you need to run modern hospitality operations, from the floor to the back office."
        />
      </Section>

      <Section variant="muted">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-text1">Available Today</h2>
          <Badge variant="implemented">Live</Badge>
        </div>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {implemented.map((f) => (
            <StaggerItem key={f.title}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface2 text-accent1">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text1">{f.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-relaxed text-text2">
                    {f.description}
                  </p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Ecosystem"
          title="Beyond the admin panel."
          description="Manuvoo is more than just settings—it’s a connected platform for staff and guests."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ecosystem.map((e) => (
            <Card key={e.title} className="border-accent1/20 bg-surface1/50">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent1/10 text-accent1">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-text1">{e.title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-base leading-relaxed text-text2">
                  {e.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="rounded-[32px] border border-borderNeutral bg-bg1 p-8 text-center md:p-16">
          <h2 className="text-2xl font-semibold text-text1 md:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text2">
            Book a demo to see how these modules come together for your venue.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Book a demo</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">
                View pricing model
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
