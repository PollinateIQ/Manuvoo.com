import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Manuvoo terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Legal"
          title="Terms of Service"
          description="The rules and regulations for using our platform."
        />
      </Section>
      <Section variant="muted">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-text2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">1. Acceptance of Terms</h3>
            <p>
              By accessing or using the Manuvoo platform, you agree to be bound
              by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">2. Use License</h3>
            <p>
              Permission is granted to temporarily access the materials (information
              or software) on Manuvoo's website for personal, non-commercial
              transitory viewing only.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">3. Disclaimer</h3>
            <p>
              The materials on Manuvoo's website are provided on an 'as is' basis.
              Manuvoo makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">4. Limitations</h3>
            <p>
              In no event shall Manuvoo or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on Manuvoo's website.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">5. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of South Africa and you irrevocably submit
              to the exclusive jurisdiction of the courts in that State or
              location.
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
