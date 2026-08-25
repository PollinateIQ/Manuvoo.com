import { XCircle } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";
import { company } from "@/config/company";

const sections: LegalSection[] = [
  {
    heading: "1. Cancelling a food or beverage order",
    bullets: [
      {
        term: "BEFORE PREPARATION - FREE.",
        text: "You may cancel at no charge at any time before the venue accepts your order into preparation. The full amount is reversed to your original payment method. Cancel from the order screen in the Manuvoo app, or by telling the venue.",
      },
      {
        term: "AFTER PREPARATION HAS STARTED.",
        text: "Once the venue has accepted the order and preparation has begun, the order cannot be cancelled, because the ingredients have been committed and the food cannot be resold. If something is wrong with what you receive, the Refund and Return Policy applies instead.",
      },
      {
        term: "HOW YOU KNOW WHICH APPLIES.",
        text: "The order status is shown live on your order screen. While it reads Pending or Awaiting acceptance, free cancellation is available. Once it reads In preparation, it is not.",
      },
    ],
  },
  {
    heading: "2. When we or the venue cancel",
    paragraphs: [
      "A venue may need to cancel an order it has already accepted. Where that happens, you are refunded in full and no fee is charged to you. Common reasons are:",
    ],
    bullets: [
      { text: "An item turns out to be out of stock." },
      { text: "The venue closes unexpectedly or has an equipment failure." },
      { text: "Collection or delivery cannot be completed." },
      {
        text: "The transaction is flagged by our fraud controls or fails 3D Secure authentication.",
      },
    ],
  },
  {
    heading: "3. How a cancelled payment is reversed",
    bullets: [
      {
        term: "ORIGINAL METHOD.",
        text: "Cancellations are reversed to the same card or account used to pay. We do not reverse a card payment in cash, to a different card, or by EFT.",
      },
      {
        term: "CURRENCY.",
        text: company.currency.statement,
      },
      {
        term: "TIMING.",
        text: "Reversals are submitted within 2 business days of the cancellation and in all cases within 10 business days. Your bank may take a further 3 to 5 business days to reflect the credit.",
      },
      {
        term: "NO CANCELLATION FEE.",
        text: "Manuvoo does not charge a cancellation or restocking fee, and the Manuvoo service fee on a cancelled order is not retained.",
      },
    ],
  },
  {
    heading: "4. Cancelling a table booking or reservation",
    paragraphs: [
      "Where a venue takes bookings through Manuvoo, a booking may be cancelled free of charge up to 2 hours before the reserved time. Any deposit taken is refunded in full. Cancellations inside 2 hours, and no-shows, are handled according to that venue's own booking terms, which are shown to you at the time you book.",
    ],
  },
  {
    heading: "5. Venues cancelling their Manuvoo subscription",
    paragraphs: [
      "Manuvoo is pay-as-you-use. There is no minimum term, no lock-in contract and no monthly licence fee, so there is nothing to cancel in the usual sense - a venue that stops trading simply stops accruing service fees.",
    ],
    bullets: [
      {
        term: "NOTICE.",
        text: `A venue may close its account at any time by writing to ${company.contact.email}. We action closure within 5 business days.`,
      },
      {
        term: "OUTSTANDING FEES.",
        text: "Service fees already accrued on completed orders remain payable and are invoiced in the normal cycle.",
      },
      {
        term: "FINAL SETTLEMENT.",
        text: "Funds held on the venue's behalf are settled in the next scheduled payout, reconciled line by line to the underlying orders.",
      },
      {
        term: "YOUR DATA.",
        text: "On request we export the venue's menu, order and staff records before the account is closed. Transaction records are then retained for five years as South African tax and company law requires.",
      },
    ],
  },
  {
    heading: "6. How to cancel",
    paragraphs: [
      `Use the cancel option on your order screen, speak to the venue, or contact Manuvoo on ${company.contact.telephone} or at ${company.contact.email}, ${company.contact.hours}. Every cancellation is logged against the originating order with the reason, the approving user and a timestamp.`,
    ],
  },
];

export function CancellationPolicy() {
  return (
    <LegalPage
      seo={seoConfig.cancellationPolicy}
      icon={XCircle}
      title="Cancellation Policy"
      intro="When you can cancel an order, what it costs you, and how quickly the money comes back. Cancel before preparation starts and it is always free."
      sections={sections}
    />
  );
}
