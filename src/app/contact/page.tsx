import type { Metadata } from "next";

import { ContactForm } from "@/components/site/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a demo or contact Manuvoo.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s map Manuvoo to your service flow."
            description="Share your venue type, number of locations, and where you want more speed, visibility, or margin control."
          />
        </Reveal>
      </Section>

      <Section variant="muted">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <Card>
                <CardHeader>
                  <p className="text-xs font-medium text-text3">Alternatives</p>
                  <h3 className="mt-2 text-lg font-semibold text-text1">
                    Other ways to reach us
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4 text-sm text-text2">
                    <div>
                      <p className="text-xs font-medium text-text3">Email</p>
                      <p className="mt-1">sales@manuvoo.com (placeholder)</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text3">Phone</p>
                      <p className="mt-1">+00 000 000 000 (placeholder)</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text3">
                        Response time
                      </p>
                      <p className="mt-1">
                        We usually respond within 1–2 business days.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
