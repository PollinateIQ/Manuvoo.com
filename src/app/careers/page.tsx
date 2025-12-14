import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Manuvoo team.",
};

export default function CareersPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Careers"
          title="Build the future of hospitality."
          description="We’re a team of operators, engineers, and designers building the operating system for modern venues."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold text-text1">Why join us?</h3>
            <p className="mt-4 text-sm leading-7 text-text2">
              We solve real problems for real people in a fast-paced industry.
              Our work directly impacts the livelihood of business owners and the
              experience of millions of diners.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h3 className="mb-6 text-xl font-semibold text-text1">Open Roles</h3>
            <div className="space-y-4">
              <Card>
                <CardBody className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-text1">
                      Senior Full Stack Engineer
                    </h4>
                    <p className="text-sm text-text2">Remote / Hybrid • Engineering</p>
                  </div>
                  <Button variant="secondary" size="sm" disabled>
                    Closed
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-text1">
                      Product Designer
                    </h4>
                    <p className="text-sm text-text2">Remote • Design</p>
                  </div>
                  <Button variant="secondary" size="sm" disabled>
                    Closed
                  </Button>
                </CardBody>
              </Card>
            </div>
            <div className="mt-8 rounded-xl border border-dashed border-borderNeutral p-6 text-center">
              <p className="text-text2">
                Don't see a role? We're always looking for talent.
              </p>
              <Link
                href="mailto:info@pollinateiq.co.za"
                className="mt-2 inline-flex items-center gap-1 font-medium text-accent1 hover:underline"
              >
                Send us your CV <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
