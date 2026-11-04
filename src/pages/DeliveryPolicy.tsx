import { Truck } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company } from "@/config/company";

const sections: LegalSection[] = [
  {
    heading: "1. How your order reaches you",
    paragraphs: [
      "Manuvoo supports three fulfilment channels. Which one applies is shown to you on the ordering page before you pay.",
    ],
    bullets: [
      {
        term: "DINE-IN AND TABLE SERVICE.",
        text: "Your order is captured on the platform, sent straight to the kitchen, prepared on site and brought to your table by venue staff. Preparation, ready and served times are recorded against every order.",
      },
      {
        term: "COUNTER AND PICKUP.",
        text: "On payment you receive a unique pickup code. Collect your order at the venue's designated pickup station and present that code. The platform validates and timestamps the code and records which staff member handed over the order. Pickup codes expire and attempt counts are logged, which prevents anyone other than the purchaser collecting your order.",
      },
      {
        term: "DELIVERY.",
        text: "Where a venue offers delivery, it is fulfilled by that venue's own drivers or by an integrated third-party courier. The delivery address, courier details, and estimated and actual delivery times are captured against the order.",
      },
    ],
  },
  {
    heading: "2. Timeframes",
    bullets: [
      {
        term: "DINE-IN.",
        text: "Typically 10 to 30 minutes from acceptance, depending on the item and how busy the venue is. Live status is shown on your order screen.",
      },
      {
        term: "PICKUP.",
        text: "You are notified as soon as your order is ready. Please collect within 30 minutes so that the food is at its best.",
      },
      {
        term: "DELIVERY.",
        text: "Typically 30 to 60 minutes within the venue's delivery radius. An estimated time is shown before you confirm the order.",
      },
      {
        term: "DELAYS.",
        text: "If your order will be materially later than the estimate, the venue will contact you. You may cancel and be refunded in full if it has not yet entered preparation.",
      },
    ],
  },
  {
    heading: "3. Delivery charges",
    paragraphs: [
      "Where a delivery fee applies, it is set by the venue and displayed as a separate line at checkout before you confirm payment. There are no hidden charges added after the fact. All charges are in South African Rand.",
    ],
  },
  {
    heading: "4. Delivery area and territory",
    paragraphs: [
      "Each venue sets its own delivery radius, and you will be told at checkout if your address falls outside it.",
      `All fulfilment takes place within ${company.countryOfDomicile}. No goods are shipped cross-border.`,
    ],
  },
  {
    heading: "5. Export restrictions",
    paragraphs: [company.exportRestrictions],
  },
  {
    heading: "6. Risk and acceptance",
    bullets: [
      {
        text: "Risk in the goods passes to you on hand-over: at your table, at the pickup station on presentation of a valid pickup code, or at your delivery address.",
      },
      {
        text: "Please check your order at hand-over. Report anything missing or incorrect at once so it can be corrected immediately.",
      },
      {
        text: "If nobody is available at the delivery address and the driver cannot make contact after two attempts, the order is treated as delivered and is not refundable. Please make sure the contact number you give us is reachable.",
      },
      {
        text: "Where the order includes alcohol, the person accepting it must be 18 or older and may be asked for proof of age. If proof cannot be given, those items are withheld and refunded.",
      },
    ],
  },
  {
    heading: "7. Platform access for venues",
    paragraphs: [
      "For venues subscribing to the Manuvoo platform there is no physical deliverable and nothing is shipped. Access is provisioned electronically and is available immediately on completion of onboarding.",
    ],
  },
  {
    heading: "8. Problems with fulfilment",
    paragraphs: [
      `If your order does not arrive, arrives late, or arrives incomplete, contact the venue or reach us at ${company.contact.email}, ${company.contact.hours}. Where an order is not fulfilled, is incomplete or is materially incorrect, you are refunded under the Refund and Return Policy.`,
    ],
  },
];

export function DeliveryPolicy() {
  return (
    <LegalPage
      seo={seoConfig.deliveryPolicy}
      icon={Truck}
      title="Delivery & Shipping Policy"
      intro="How orders placed through Manuvoo are fulfilled - at the table, at a pickup station, or delivered to you - and how long each takes. All fulfilment takes place within South Africa."
      sections={sections}
    />
  );
}
