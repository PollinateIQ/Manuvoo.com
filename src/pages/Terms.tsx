import { Scale } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company, addressOneLine } from "@/config/company";

const sections: LegalSection[] = [
  {
    heading: "1. Who you are contracting with",
    paragraphs: [
      `This website and the Manuvoo platform are owned and operated by ${company.legalName}, a private company registered in the Republic of South Africa under registration number ${company.registrationNumber}.`,
      `Registered and physical business address: ${addressOneLine}.`,
      `Customer service can be reached at ${company.contact.email},${company.contact.hours}.`,
      "By accessing this website, placing an order or making a payment through the Manuvoo platform, you agree to these Terms and Conditions.",
    ],
  },
  {
    heading: "2. Description of the goods and services offered",
    paragraphs: [
      "Manuvoo is a cloud-based hospitality commerce platform. Two distinct groups buy from us, and what each receives is set out below.",
    ],
    bullets: [
      {
        term: "TO CUSTOMERS (DINERS).",
        text: "Through a Manuvoo digital menu, QR code or ordering page you may browse a participating venue's menu, place an order for food and beverage, and pay for that order online. The goods you purchase are the food and beverage items listed on that venue's menu, prepared and supplied by the venue. Every item shows its price, inclusive of the Manuvoo service fee, before you confirm payment.",
      },
      {
        term: "TO VENUES (RESTAURANTS, TAVERNS, FOOD TRUCKS AND HOTELS).",
        text: "Manuvoo supplies access to a software platform covering QR and table ordering, counter and pickup orders, split and shared bills, kitchen workflow, inventory and recipe costing, supplier and stock requests, staff scheduling, payroll, loyalty and discounting, customer reviews, real-time analytics, and automated settlement and reconciliation. Access is provisioned electronically. There is no physical product and nothing is shipped.",
      },
      {
        term: "HOW MANUVOO IS PAID.",
        text: "Manuvoo charges a flat service fee per item on a completed transaction, built into the displayed menu price. There is no monthly licence fee. A venue that does not trade pays nothing.",
      },
      {
        term: "WHO SUPPLIES THE FOOD.",
        text: "The venue, not Manuvoo, prepares and supplies the food and beverage. Manuvoo provides the ordering, payment and settlement infrastructure and acts as the merchant of record for the online payment.",
      },
    ],
  },
  {
    heading: "3. Transaction currency",
    paragraphs: [
      company.currency.statement,
      "Prices displayed on a venue's menu are the prices charged and include the Manuvoo service fee. Where value-added tax applies to a venue's goods, that tax is included in the displayed price.",
    ],
  },
  {
    heading: "4. Orders and acceptance",
    bullets: [
      {
        term: "PLACING AN ORDER.",
        text: "An order is placed when you submit it through the Manuvoo ordering page and complete payment. You will receive an on-screen confirmation and, where applicable, a unique pickup code.",
      },
      {
        term: "ACCEPTANCE.",
        text: "A contract of sale comes into existence only when the venue accepts your order into preparation. Until then the order may be cancelled at no charge under our Cancellation Policy.",
      },
      {
        term: "AVAILABILITY.",
        text: "Menu items are subject to availability. If an item cannot be supplied, we will contact you to substitute it or refund that item in full.",
      },
      {
        term: "PRICING ERRORS.",
        text: "If an item is displayed at an obviously incorrect price, we may cancel the order and refund you in full rather than supply at that price.",
      },
    ],
  },
  {
    heading: "5. Payment and card security",
    bullets: [
      {
        term: "CARDS ACCEPTED.",
        text: "We accept Visa and Mastercard credit and debit cards, and instant EFT.",
      },
      {
        term: "ENCRYPTION.",
        text: "All payment information is transmitted over Transport Layer Security (TLS), which encrypts your details in transit between your browser and the payment gateway.",
      },
      {
        term: "3D SECURE.",
        text: "All card transactions are authenticated using 3D Secure. Transactions returning an ECI indicator of 7 are blocked in line with our acquiring bank's policy.",
      },
      {
        term: "CARD DATA.",
        text: "Manuvoo does not see, capture or store your full card number. Card handling is performed entirely by our PCI-DSS compliant Commerce Service Providers.",
      },
      {
        term: "STATEMENT DESCRIPTOR.",
        text: `Card transactions will appear on your bank statement as ${company.tradingName.toUpperCase()}.`,
      },
    ],
  },
  {
    heading: "6. Fulfilment, cancellation and refunds",
    paragraphs: [
      "How your order reaches you is set out in the Delivery Policy. When and how you may cancel is set out in the Cancellation Policy. When you are entitled to money back, and how quickly you receive it, is set out in the Refund and Return Policy. Those three policies form part of these Terms and Conditions.",
    ],
  },
  {
    heading: "7. Export restrictions",
    paragraphs: [company.exportRestrictions],
  },
  {
    heading: "8. Country of domicile",
    paragraphs: [
      `The country of domicile of ${company.legalName} is ${company.countryOfDomicile}. The business is registered, operated, banked and taxed in South Africa.`,
    ],
  },
  {
    heading: "9. Your responsibilities",
    bullets: [
      {
        text: "Provide accurate contact and collection details so your order can be fulfilled and, if needed, corrected.",
      },
      {
        text: "Use only a card or bank account you are authorised to use. Fraudulent transactions are reported to the acquiring bank and to the South African Police Service.",
      },
      {
        text: "Where the goods include alcohol, confirm that you are 18 years of age or older. The venue may refuse service and request proof of age on collection.",
      },
      {
        text: "Do not misuse the platform, attempt to gain unauthorised access to it, or interfere with its operation.",
      },
    ],
  },
  {
    heading: "10. Limitation of liability",
    paragraphs: [
      "Manuvoo supplies the ordering and payment platform. Responsibility for the preparation, quality, safety and legal compliance of food and beverage rests with the supplying venue.",
      "Nothing in these terms limits or excludes any right you have under the Consumer Protection Act 68 of 2008 or the Electronic Communications and Transactions Act 25 of 2002. To the maximum extent permitted by law, Manuvoo is not liable for indirect or consequential loss, and our total liability in respect of any order is limited to the amount you paid for that order.",
    ],
  },
  {
    heading: "11. Governing law and jurisdiction",
    paragraphs: [company.governingLaw, company.jurisdiction],
  },
  {
    heading: "12. Complaints and dispute resolution",
    paragraphs: [
      `Raise any complaint with us first, at ${company.contact.email}. We acknowledge complaints within one business day and aim to resolve them within five business days.`,
      "If a complaint is not resolved to your satisfaction, you may refer it to the Consumer Goods and Services Ombud or the National Consumer Commission. Referring a dispute to us or to an ombud does not affect your right to approach a court.",
    ],
  },
  {
    heading: "13. Changes to these terms",
    paragraphs: [
      "We may update these Terms and Conditions from time to time. The version published on this page at the time you place an order is the version that applies to that order. The date of the current version is shown at the top of this page.",
    ],
  },
];

export function Terms() {
  return (
    <LegalPage
      seo={seoConfig.terms}
      icon={Scale}
      title="Terms & Conditions"
      intro="The terms on which Manuvoo supplies its platform, and on which orders and payments are made through it. Please read them before you place an order."
      sections={sections}
    />
  );
}
