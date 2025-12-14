import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Manuvoo privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="How we collect, use, and protect your data."
        />
      </Section>
      <Section variant="muted">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-text2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">1. Introduction</h3>
            <p>
              This Privacy Policy explains how Manuvoo ("we", "us", or "our")
              collects, uses, and discloses your information when you use our
              website and services.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">2. Data Collection</h3>
            <p>
              We collect information you provide directly to us, such as when you
              create an account, subscribe to our newsletter, request customer
              support, or communicate with us.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">3. Data Usage</h3>
            <p>
              We use the information we collect to operate, maintain, and provide
              to you the features and functionality of the Service, to
              communicate with you, and to address security or technical issues.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">4. Data Sharing</h3>
            <p>
              We do not sell your personal data. We may share information with
              third-party service providers who help us provide our services,
              subject to confidentiality obligations.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at <a href="mailto:info@pollinateiq.co.za" className="text-accent1 hover:underline">info@pollinateiq.co.za</a>.
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
