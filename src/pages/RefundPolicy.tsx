import { RotateCcw } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company } from "@/config/company";

const sections: LegalSection[] = [
  {
    heading: "1. Scope of this policy",
    paragraphs: [
      "Manuvoo sells prepared food and beverage on behalf of hospitality venues, and supplies platform access to those venues. Prepared food cannot practically be returned once it has been made, so this policy is built around order accuracy, prompt correction and full refunds where we get it wrong.",
      "This policy is published here and is shown to you at checkout, before you confirm payment.",
    ],
  },
  {
    heading: "2. When you are entitled to a refund",
    bullets: [
      {
        term: "CANCELLATION BEFORE PREPARATION.",
        text: "If you cancel before the venue accepts your order into preparation, the full amount is reversed to your original payment method at no charge. See our Cancellation Policy for the detail.",
      },
      {
        term: "ORDER NOT FULFILLED.",
        text: "If the order is not fulfilled at all - the venue closes, the item is out of stock, or collection cannot take place - you are refunded in full.",
      },
      {
        term: "INCOMPLETE OR INCORRECT ORDER.",
        text: "If an item is missing or materially different from what you ordered, that item is refunded in full, or remade at your choice.",
      },
      {
        term: "QUALITY COMPLAINTS.",
        text: "Complaints raised within 24 hours of the transaction are investigated jointly with the venue. Where the complaint is upheld, you are refunded in full or in part.",
      },
      {
        term: "DUPLICATE OR FAILED PAYMENT.",
        text: "If you are charged twice, or charged for a transaction that did not complete, the excess is reversed in full as soon as it is identified.",
      },
    ],
  },
  {
    heading: "3. Returns of goods",
    paragraphs: [
      "Prepared food and beverage cannot be returned once supplied, for health and safety reasons. Where a quality or accuracy complaint is upheld we resolve it by remaking the item or refunding it, not by taking the goods back.",
      "Sealed, unopened packaged goods sold through a venue may be returned to that venue within 7 days of purchase, in their original condition and with proof of purchase, for a full refund.",
      "Nothing in this policy limits your rights under the Consumer Protection Act 68 of 2008, including your right to goods that are safe, of good quality and fit for purpose.",
    ],
  },
  {
    heading: "4. How to request a refund",
    bullets: [
      {
        term: "STEP 1.",
        text: "Raise it with the venue at the time, or contact Manuvoo directly - whichever is easier for you.",
      },
      {
        term: "STEP 2.",
        text: `Email ${company.contact.email} (${company.contact.hours}) with your order number, the date, and what went wrong.`,
      },
      {
        term: "STEP 3.",
        text: "We acknowledge the request within one business day and confirm the outcome in writing.",
      },
    ],
  },
  {
    heading: "5. How refunds are paid",
    bullets: [
      {
        term: "ORIGINAL METHOD ONLY.",
        text: "Card refunds are credited to the same card used for the purchase. Manuvoo does not refund a card transaction in cash, to a different card, or by EFT.",
      },
      {
        term: "CURRENCY.",
        text: company.currency.statement,
      },
      {
        term: "TURNAROUND.",
        text: "Approved refunds are processed within 2 business days and in all cases within 10 business days. Once processed, your bank may take a further 3 to 5 business days to reflect the credit on your statement.",
      },
      {
        term: "NO FEE.",
        text: "We do not charge an administration or handling fee on a refund. The Manuvoo service fee on a refunded item is refunded with it.",
      },
    ],
  },
  {
    heading: "6. Our record",
    paragraphs: [
      "Every refund is recorded against its originating transaction in the platform refund ledger, with the reason, the approving user and a timestamp, giving a complete audit trail for any chargeback enquiry.",
      "As at 24 August 2026, 4 refund requests totalling R63 had been raised and approved against 8 362 completed orders - a rate of 0,05%.",
    ],
  },
  {
    heading: "7. Chargebacks",
    paragraphs: [
      `If you do not recognise a transaction, please contact us first at ${company.contact.email}. We can usually identify and resolve it faster than a bank dispute, and we hold a full record of every order and payment. Your right to raise a dispute with your card issuer is unaffected.`,
    ],
  },
  {
    heading: "8. Platform fees charged to venues",
    paragraphs: [
      "Where a venue has been invoiced a Manuvoo service fee on an order that is subsequently refunded to the customer, that service fee is credited back to the venue in the next settlement cycle. Venues are not charged for orders that did not complete.",
    ],
  },
];

export function RefundPolicy() {
  return (
    <LegalPage
      seo={seoConfig.refundPolicy}
      icon={RotateCcw}
      title="Refund & Return Policy"
      intro="When you get your money back, how much, how it is paid, and how long it takes. Refunds are always credited to the original payment method, in South African Rand."
      sections={sections}
    />
  );
}
