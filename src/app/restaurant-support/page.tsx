import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChefHat, Layout, Smartphone } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Restaurant Support",
  description: "Operational support for venues.",
};

export default function RestaurantSupportPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Operations"
          title="Restaurant Support"
          description="Dedicated support for the unique needs of dine-in, fast-casual, and multi-venue operators."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Layout className="mb-4 h-8 w-8 text-accent1" />
              <h3 className="text-lg font-semibold text-text1">Floor Operations</h3>
            </CardHeader>
            <CardBody>
              <p className="mb-4 text-sm leading-6 text-text2">
                Help with table management, QR codes, section assignments, and
                waiter workflows.
              </p>
              <Link href="/help-center" className="text-sm font-medium text-accent2 hover:underline">
                View floor guides →
              </Link>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <ChefHat className="mb-4 h-8 w-8 text-accent1" />
              <h3 className="text-lg font-semibold text-text1">Kitchen & Bar</h3>
            </CardHeader>
            <CardBody>
              <p className="mb-4 text-sm leading-6 text-text2">
                Setting up stations, routing logic, KDS views, and managing 86'd
                items.
              </p>
              <Link href="/help-center" className="text-sm font-medium text-accent2 hover:underline">
                View BOH guides →
              </Link>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="mb-4 h-8 w-8 text-accent1" />
              <h3 className="text-lg font-semibold text-text1">Guest Experience</h3>
            </CardHeader>
            <CardBody>
              <p className="mb-4 text-sm leading-6 text-text2">
                Troubleshooting customer ordering, payments, and loyalty
                workflows.
              </p>
              <Link href="/help-center" className="text-sm font-medium text-accent2 hover:underline">
                View app guides →
              </Link>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-text1">Urgent operational issue?</h2>
          <p className="mt-4 max-w-xl text-text2">
            If you are live in service and experiencing a critical outage, please
            call our emergency support line.
          </p>
          <div className="mt-8">
            <a href="tel:+27696848796">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none">
                Call Support: +27 69 684 8796
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
