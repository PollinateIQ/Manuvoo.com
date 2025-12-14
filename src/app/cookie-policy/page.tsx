import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Manuvoo cookie policy.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Legal"
          title="Cookie Policy"
          description="How we use cookies and similar technologies."
        />
      </Section>
      <Section variant="muted">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-text2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">1. What are cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit
              our website or use our app. They help us recognize your device and
              store information about your preferences or past actions.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">2. How we use cookies</h3>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Required for the operation of
                the platform (e.g., authentication, session security).
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> Allow us to
                recognize and count the number of visitors and see how visitors
                move around our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Used to recognize you when
                you return to our website (e.g., remembering your language or
                region).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text1">3. Managing cookies</h3>
            <p>
              You can block cookies by activating the setting on your browser that
              allows you to refuse the setting of all or some cookies. However, if
              you use your browser settings to block all cookies (including
              essential cookies), you may not be able to access all or parts of
              our site.
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
