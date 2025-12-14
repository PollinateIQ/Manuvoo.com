import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Press",
  description: "Manuvoo media resources.",
};

export default function PressPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Press"
          title="Newsroom & Assets"
          description="Latest news, brand assets, and media contact information."
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-text1">
              About Manuvoo
            </h3>
            <div className="prose prose-invert text-sm text-text2">
              <p>
                Manuvoo is a hospitality operations platform that connects the
                front-of-house guest experience with back-of-house operations.
              </p>
              <p className="mt-4">
                Founded to solve the fragmentation of traditional POS systems,
                Manuvoo offers a unified suite for orders, payments, menu management,
                and inventory control—designed for the modern, QR-first era.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-text1">
              Media Contact
            </h3>
            <Card>
              <CardBody>
                <p className="text-sm text-text2">
                  For press enquiries, interviews, or brand asset requests,
                  please contact our media team.
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:info@pollinateiq.co.za"
                    className="text-lg font-medium text-text1 hover:text-accent1"
                  >
                    info@pollinateiq.co.za
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
