import { ShieldCheck } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company, addressOneLine } from "@/config/company";

const sections: LegalSection[] = [
  {
    heading: "1. Who is responsible for your information",
    paragraphs: [
      `${company.legalName} (registration number ${company.registrationNumber}) is the responsible party for the personal information collected through this website and the Manuvoo platform, as that term is used in the Protection of Personal Information Act 4 of 2013 (POPIA).`,
      `Address: ${addressOneLine}. Enquiries and privacy requests: ${company.contact.email} or ${company.contact.telephone}, ${company.contact.hours}.`,
    ],
  },
  {
    heading: "2. What information we collect",
    bullets: [
      {
        term: "IDENTITY AND CONTACT DETAILS.",
        text: "Your name, mobile number and email address, where you supply them so that we can confirm and fulfil your order.",
      },
      {
        term: "ORDER INFORMATION.",
        text: "The items you order, the venue and table or pickup station, order and preparation timestamps, pickup codes, and the amount paid.",
      },
      {
        term: "PAYMENT INFORMATION.",
        text: "The payment method used, the transaction reference, the authorisation result and the last four digits of the card. We never see, capture or store your full card number, expiry date or CVV. Those are handled entirely by our PCI-DSS compliant Commerce Service Provider.",
      },
      {
        term: "DELIVERY INFORMATION.",
        text: "Where an order is delivered, the delivery address and any instructions you give the driver.",
      },
      {
        term: "TECHNICAL INFORMATION.",
        text: "Device type, browser, IP address and pages viewed, used to keep the service secure and working correctly.",
      },
      {
        term: "COOKIES.",
        text: "Small files stored on your device to remember preferences and keep you signed in. These are described in full in our Cookie Policy.",
      },
    ],
  },
  {
    heading: "3. How we use your information",
    bullets: [
      { text: "To take, route, prepare and fulfil your order." },
      { text: "To process your payment and to settle funds to the venue." },
      {
        text: "To send you order confirmations, pickup codes and status updates.",
      },
      {
        text: "To handle refunds, cancellations, complaints and chargeback enquiries, and to keep the audit trail those require.",
      },
      {
        text: "To detect and prevent fraud, including monitoring for unusually high transaction values and repeated card or address patterns.",
      },
      {
        text: "To meet our obligations under South African tax, company and consumer protection law.",
      },
      {
        text: "To send marketing communications, only where you have opted in. Every marketing message includes a one-click unsubscribe.",
      },
    ],
  },
  {
    heading: "4. Who we share it with",
    paragraphs: [
      "We do not sell your personal information, and we do not share it for third-party advertising.",
    ],
    bullets: [
      {
        term: "THE VENUE.",
        text: "The venue fulfilling your order receives the order details and the contact information needed to prepare and hand over that order.",
      },
      {
        term: "PAYMENT PROVIDERS.",
        text: "Our Commerce Service Providers and our acquiring bank receive the information needed to authorise, settle and, where necessary, reverse your payment.",
      },
      {
        term: "INFRASTRUCTURE PROVIDERS.",
        text: "The application is served from Vercel and platform data is stored in a Supabase-hosted PostgreSQL database, with row-level security applied so that each venue can access only its own records.",
      },
      {
        term: "LAW ENFORCEMENT AND REGULATORS.",
        text: "Where we are legally required to disclose information, or where disclosure is necessary to investigate fraud.",
      },
    ],
  },
  {
    heading: "5. Cross-border transfers",
    paragraphs: [
      "Some of our infrastructure providers process data outside South Africa, in jurisdictions that apply data protection laws substantially similar to POPIA and under contractual safeguards requiring that level of protection. Where a transfer occurs, it is limited to what is necessary to operate the service.",
    ],
  },
  {
    heading: "6. How long we keep it",
    paragraphs: [
      "Order, payment and refund records are retained for five years, as required by South African tax and company legislation and to allow chargeback and dispute enquiries to be answered. Marketing preferences are kept until you withdraw consent. Information we no longer need is deleted or anonymised.",
    ],
  },
  {
    heading: "7. How we protect it",
    bullets: [
      {
        text: "All traffic between your device and our platform is encrypted using Transport Layer Security (TLS).",
      },
      {
        text: "Card transactions are authenticated using 3D Secure, and transactions returning an ECI indicator of 7 are blocked.",
      },
      {
        text: "Database access is controlled by row-level security policies enforced per venue and per user account.",
      },
      {
        text: "Staff access is limited to the records each person needs to do their job, and every refund and adjustment is logged with the approving user and a timestamp.",
      },
      {
        text: "If a security compromise affects your personal information, we will notify you and the Information Regulator as POPIA requires.",
      },
    ],
  },
  {
    heading: "8. Your rights",
    paragraphs: [
      `Under POPIA you may ask us to confirm what personal information we hold about you, to correct or delete it, or to stop processing it for marketing. Send your request to ${company.contact.email} and we will respond within 30 days. You do not have to pay to exercise these rights.`,
      "You may also lodge a complaint with the Information Regulator (South Africa) at enquiries@inforegulator.org.za.",
    ],
  },
  {
    heading: "9. Children",
    paragraphs: [
      "The Manuvoo platform is not directed at children under 18. We do not knowingly collect personal information from children. Where an order includes alcohol, proof of age may be required on collection.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any change is published on this page with a revised date at the top. Material changes affecting how we use your information will be brought to your attention before they take effect.",
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <LegalPage
      seo={seoConfig.privacyPolicy}
      icon={ShieldCheck}
      title="Privacy Policy"
      intro="What personal information Manuvoo collects, why we collect it, who we share it with, and the rights you have over it under South Africa's Protection of Personal Information Act."
      sections={sections}
    />
  );
}
