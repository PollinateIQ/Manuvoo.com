import { ShieldCheck } from "lucide-react";
import {
  LegalPage,
  type LegalAppendix,
  type LegalSection,
} from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company, addressOneLine } from "@/config/company";

/*
 * Source of truth: "02 Legal and Policies/Privacy Policy/Drafts/privacy-policy.md".
 * Keep this page word-for-word with that file; edit the file first, then here.
 */

const LAST_UPDATED = "4 November 2026";

const sections: LegalSection[] = [
  {
    heading: "1. Who is responsible for your information",
    paragraphs: [
      `${company.legalName} (registration number ${company.registrationNumber}) is the responsible party for the personal information collected through this website and the Manuvoo platform, as that term is used in the Protection of Personal Information Act 4 of 2013 (POPIA).`,
      `Address: ${addressOneLine}. Information Officer: the Director of ${company.legalName}. All privacy enquiries, requests and complaints: ${company.contact.email}.`,
    ],
  },
  {
    heading: "2. What information we collect",
    groups: [
      {
        label: "From customers",
        bullets: [
          {
            term: "Identity and contact details.",
            text: "Your name and surname, mobile number and email address. This is the only identity information we ask customers for, and we use it to confirm and fulfil your orders.",
          },
          {
            term: "Order information.",
            text: "The items you order, the venue and table or pickup station, order and preparation timestamps, pickup codes, and the amount paid.",
          },
          {
            term: "Payment information.",
            text: "Manuvoo does not collect, process or store card details or bank login details. All payments are processed by our payment providers (Ozow for instant EFT, and PCI DSS compliant card gateways once card payments are available), and you enter your payment details on their pages, never with Manuvoo. We keep only the type of payment method, the provider's transaction reference, the amount and the result, and for cards the last four digits as shown to us by the provider.",
          },
          {
            term: "Wallet information.",
            text: "Your venue wallet balances, top-ups, wallet purchases and refunds.",
          },
          {
            term: "Refund bank details.",
            text: "Normally none: refunds go back to your original payment method through our payment provider. Only if that is not possible do we ask for a bank account in your own name for that one refund, and the information needed to verify it is yours. After the refund we keep only a masked account number in our records.",
          },
          {
            term: "Technical information.",
            text: "Device type, browser, IP address and pages viewed, used to keep the service secure and working correctly.",
          },
          {
            term: "Cookies.",
            text: "Small files stored on your device to remember preferences and keep the service secure, described in full in the Cookie Policy section below.",
          },
        ],
      },
      {
        label: "From venues",
        bullets: [
          {
            text: "Company registration documents, ID documents of directors and owners, proof of business address, and a bank confirmation letter for the venue's payout account.",
          },
          {
            text: "The results of screening the venue, its directors and owners against targeted financial sanctions lists.",
          },
          { text: "Payout, settlement and statement records." },
        ],
      },
    ],
  },
  {
    heading: "3. How we use your information",
    bullets: [
      { text: "To take, route, prepare and hand over your order for pickup." },
      {
        text: "To process your payment, run your venue wallet, and settle funds to the venue.",
      },
      {
        text: "To refund unused wallet balances back to your original payment method or, only where that is not possible, to a verified bank account in your own name.",
      },
      {
        text: "To send you order confirmations, pickup codes and status updates.",
      },
      {
        text: "To handle refunds, cancellations, complaints and chargeback enquiries, and to keep the audit trail those require.",
      },
      {
        text: "To verify and screen venues before they trade and before payout details change.",
      },
      {
        text: "To detect and prevent fraud and money laundering, including monitoring for unusually high or repeated transactions.",
      },
      {
        text: "To meet our obligations under South African tax, company, payments, financial-crime and consumer protection law, and the requirements of our sponsoring bank.",
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
        term: "The venue.",
        text: "The venue fulfilling your order receives the order details and the contact information needed to prepare and hand over that order, and sees the wallet balance and transactions you hold for that venue.",
      },
      {
        term: "Payment providers and banks.",
        text: "Ozow, our card payment providers and our bank receive the information needed to process, settle, pay out, refund and, where necessary, reverse payments.",
      },
      {
        term: "Infrastructure providers.",
        text: "The application is served from Vercel, our backend runs on Railway, platform data is stored in a Supabase-hosted PostgreSQL database with row-level security so that each venue can access only its own records, and emails are sent through Plunk.",
      },
      {
        term: "Law enforcement and regulators.",
        text: "Where we are legally required to disclose information, including to the Financial Intelligence Centre and the South African Reserve Bank, or where disclosure is necessary to investigate fraud.",
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
      "Order, payment, wallet, refund, payout and venue verification records are kept for at least five years, as required by South African tax, company and financial-crime legislation and to answer chargeback and dispute enquiries. Marketing preferences are kept until you withdraw consent. Information we no longer need is deleted or anonymised.",
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
        text: "Wallet balances and masked refund account numbers are visible only to the account holder and to authorised Manuvoo staff who need them.",
      },
      {
        text: "Staff access is limited to the records each person needs to do their job, and every refund, payout and adjustment is logged with the approving user and a timestamp.",
      },
      {
        text: "If a security compromise affects your personal information, we will notify you and the Information Regulator as POPIA requires.",
      },
    ],
  },
  {
    heading: "8. Your rights",
    paragraphs: [
      `Under POPIA you may ask us to confirm what personal information we hold about you, to correct or delete it, or to stop processing it for marketing. Some records, such as payment and wallet records, must be kept for the legal periods in section 6 even if you close your account. Send your request to ${company.contact.email} and we will respond within 30 days. You do not have to pay to exercise these rights.`,
      "You may also lodge a complaint with the Information Regulator (South Africa) at enquiries@inforegulator.org.za.",
    ],
  },
  {
    heading: "9. Age",
    paragraphs: [
      "The Manuvoo platform is for people aged 18 and older. We do not knowingly collect personal information from anyone under 18, and we will delete it if we learn that we have. Where an order includes alcohol, proof of age may be required on collection.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any change is published on this page with a revised date at the top. Material changes affecting how we use your information will be brought to your attention before they take effect.",
    ],
  },
];

const cookiePolicy: LegalAppendix = {
  id: "cookie-policy",
  title: "Cookie Policy",
  intro:
    "This section explains the cookies and similar technologies (such as local storage) used on the Manuvoo website (manuvoo.com), and how you can control them. Manuvoo's business applications (the customer app, tenant portal and order management system) are covered by their own terms. It forms part of our Privacy Policy above.",
  sections: [
    {
      heading: "1. What cookies are",
      paragraphs: [
        "Cookies are small files saved on your device by your browser. Similar technologies, such as local storage, work the same way. They let a website remember you between pages and visits.",
      ],
    },
    {
      heading: "2. Cookies we use",
      table: {
        headers: ["Type", "What it does", "Consent needed?"],
        rows: [
          [
            "Strictly necessary",
            "Keeps the website secure, protects forms (such as contact and sign-up forms) from spam and abuse, and remembers your cookie choices. The website cannot work properly without these.",
            "No. These are always on.",
          ],
          [
            "Preferences",
            "Remembers choices such as language or display settings.",
            "No, but you can clear them in your browser.",
          ],
          [
            "Analytics",
            "Counts visits and shows us which pages are used, so we can improve the service. Data is aggregated and not used to identify you.",
            "Yes. Only set if you accept them.",
          ],
          [
            "Marketing",
            "Manuvoo does not currently use advertising or tracking cookies. If we ever do, we will ask for your consent first.",
            "Yes.",
          ],
        ],
      },
    },
    {
      heading: "3. Links to other sites",
      paragraphs: [
        "The website may link to other sites and services, such as the Manuvoo customer app, social media pages or our payment providers. Those sites may set their own cookies, governed by their own cookie and privacy policies, which Manuvoo cannot read or control.",
      ],
    },
    {
      heading: "4. Your choices",
      bullets: [
        {
          text: "When you first visit, you can accept or decline non-essential cookies. You can change your choice at any time through the cookie settings link at the bottom of the page.",
        },
        {
          text: "You can also block or delete cookies in your browser settings. If you block strictly necessary cookies, parts of the website, such as forms, may not work.",
        },
        {
          text: "Declining non-essential cookies does not affect your ability to use the website.",
        },
      ],
    },
    {
      heading: "5. How long cookies last",
      paragraphs: [
        "Session cookies are deleted when you close your browser. Preference and cookie-choice cookies last up to 12 months. Analytics cookies, where accepted, last no longer than 13 months.",
      ],
    },
    {
      heading: "6. Changes and contact",
      paragraphs: [
        `We update this section when the cookies we use change, with a revised date at the top of the Privacy Policy. Questions: ${company.contact.email}.`,
      ],
    },
  ],
};

export function PrivacyPolicy() {
  return (
    <LegalPage
      seo={seoConfig.privacyPolicy}
      icon={ShieldCheck}
      title="Privacy Policy"
      intro="What personal information Manuvoo collects, why we collect it, who we share it with, and the rights you have over it under South Africa's Protection of Personal Information Act."
      lastUpdated={LAST_UPDATED}
      sections={sections}
      appendix={cookiePolicy}
    />
  );
}
