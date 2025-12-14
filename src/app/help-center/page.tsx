import type { Metadata } from "next";
import Link from "next/link";
import { Book, LifeBuoy, Terminal, Users } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Manuvoo support and documentation.",
};

export default function HelpCenterPage() {
  const guides = [
    {
      title: "Getting Started",
      icon: Book,
      items: [
        "Setting up your tenant profile",
        "Adding your first location",
        "Creating menu categories",
        "Generating table QR codes",
      ],
    },
    {
      title: "Operations & Service",
      icon: Users,
      items: [
        "Managing the order queue",
        "Station routing explained",
        "Handling bill splits (roadmap)",
        "Closing out shift reports",
      ],
    },
    {
      title: "Technical Setup",
      icon: Terminal,
      items: [
        "Connecting printers (via proxy)",
        "Network requirements",
        "Staff PIN management",
        "Troubleshooting live updates",
      ],
    },
    {
      title: "Account & Billing",
      icon: LifeBuoy,
      items: [
        "Managing subscription plans",
        "Updating payment methods",
        "Viewing invoices",
        "Contacting support",
      ],
    },
  ];

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Support"
          title="Help Center"
          description="Guides, documentation, and answers to help you run Manuvoo smoothly."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Card key={g.title}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-lg bg-surface2 p-2 text-text1">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-text1">{g.title}</h3>
              </CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-text2 transition-colors hover:text-accent1 hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-surface1 p-8 text-center border border-borderNeutral">
          <h2 className="text-lg font-semibold text-text1">
            Still need help?
          </h2>
          <p className="mt-2 text-text2">
            Our support team usually responds within 1–2 business days.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button>Contact Support</Button>
            </Link>
            <Link href="mailto:info@pollinateiq.co.za">
              <Button variant="secondary">Email us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

// Helper component for layout fixes if needed, but standard import is fine.
import { Button } from "@/components/ui/button";
