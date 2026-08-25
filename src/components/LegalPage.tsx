import type { LucideIcon } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import type { SEOConfig } from "@/config/seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { company } from "@/config/company";
import { useTheme } from "@/hooks/useTheme";

export interface LegalBullet {
  /** Optional bolded lead-in, e.g. "CANCELLATION." */
  term?: string;
  text: string;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: LegalBullet[];
}

interface LegalPageProps {
  seo: SEOConfig;
  icon: LucideIcon;
  title: string;
  intro: string;
  sections: LegalSection[];
  /** Show the customer-service contact block at the bottom. Defaults to true. */
  showContact?: boolean;
}

/**
 * Shared layout for the public legal and policy pages (Terms, Privacy, Refund,
 * Cancellation, Delivery). Keeps every policy page visually identical and
 * guarantees that the customer service contact details, transaction currency
 * and country of domicile appear on each one, as Visa / MasterCard require.
 */
export function LegalPage({
  seo,
  icon: Icon,
  title,
  intro,
  sections,
  showContact = true,
}: LegalPageProps) {
  const { theme } = useTheme();
  const border = theme === "dark" ? "border-white/10" : "border-gray-200";

  return (
    <div className="pt-20">
      <SEO config={seo} />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">
              <Icon className="h-10 w-10 text-orange-500" />
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
            {/*
              Company name and registration number are in the Footer on this
              page already — only the version date belongs here.
            */}
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated:{" "}
              <span className="font-medium">{company.policyLastUpdated}</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy body */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <AnimatedSection key={section.heading}>
              <div
                className={`border-t py-10 ${border} ${
                  index === 0 ? "border-t-0 pt-0" : ""
                }`}
              >
                <h2 className="mb-5 text-2xl font-bold text-foreground sm:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-2 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.text.slice(0, 40)}
                        className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                        <span>
                          {bullet.term && (
                            <span className="font-semibold text-foreground">
                              {bullet.term}{" "}
                            </span>
                          )}
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/*
        A single line of actionable contact for this specific policy. The full
        registered address, card marks, currency, domicile and the links to
        every other policy all live in the Footer, which is on this page too —
        repeating them here would show the same information twice per page.
      */}
      {showContact && (
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div
                className={`flex flex-col items-center gap-4 rounded-xl border bg-muted/30 p-6 text-center sm:flex-row sm:justify-between sm:text-left ${border}`}
              >
                <p className="text-sm text-muted-foreground">
                  Questions about this policy, an order or a payment? We respond
                  within one business day.
                </p>
                <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-3">
                  <a
                    href={company.contact.telephoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                  >
                    <Phone className="h-4 w-4" />
                    {company.contact.telephone}
                  </a>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-orange-500/40 ${border}`}
                  >
                    <Mail className="h-4 w-4" />
                    {company.contact.email}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
}
