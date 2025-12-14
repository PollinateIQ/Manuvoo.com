import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "POPIA Compliance",
  description: "Protection of Personal Information Act compliance.",
};

export default function PopiaPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Legal"
          title="POPIA Compliance"
          description="Our commitment to protecting your personal information under South African law."
        />
      </Section>
      <Section variant="muted">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-text2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">1. Overview</h3>
            <p>
              Manuvoo is committed to compliance with the Protection of Personal
              Information Act (POPIA). We respect your right to privacy and take
              our responsibility to protect your personal information seriously.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">2. Information we collect</h3>
            <p>
              We collect and process personal information mainly to contact you for
              the purposes of understanding your requirements and delivering our
              services. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Contact details (name, email, phone number)</li>
              <li>Business details (venue name, address, registration info)</li>
              <li>Usage data (how you interact with our platform)</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">3. Your rights</h3>
            <p>
              As a data subject, you have the right to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">4. Contact Information Officer</h3>
            <p>
              If you have any questions about this notice or our treatment of your
              personal information, please address them to our Information
              Officer at <a href="mailto:info@pollinateiq.co.za" className="text-accent1 hover:underline">info@pollinateiq.co.za</a>.
            </p>
          </div>
          <div className="pt-8 border-t border-borderNeutral">
            <p className="text-xs text-text3">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
