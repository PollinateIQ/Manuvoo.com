import { Scale } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { seoConfig } from "@/config/seo";

/*
 * Customer Terms and Conditions v1.0.
 * The editable master is customer-terms.md in
 * Manuvoo\02 Legal and Policies\Customer Terms and Conditions\Drafts — change the
 * wording there first, then here, so the website and the signed PDF stay identical.
 */

const sections: LegalSection[] = [
  {
    heading: "1. What Manuvoo does",
    paragraphs: [
      "Manuvoo lets you order and pay ahead for food and drinks from participating tenants and collect your order when it is ready. The tenant prepares and supplies the food and is responsible for its quality and safety. Manuvoo provides the ordering platform and collects payment on the tenant's behalf.",
    ],
  },
  {
    heading: "2. Your account",
    numbered: true,
    bullets: [
      { text: "You must give your real name and surname, mobile number and email address, and keep them up to date." },
      { text: "You must be 18 or older to use the app." },
      { text: "You are responsible for keeping your login details safe. Tell us immediately at info@manuvoo.com if you think someone else has used your account." },
      { text: "One person may hold one account." },
    ],
  },
  {
    heading: "3. Prices and the Manuvoo service fee",
    numbered: true,
    bullets: [
      { text: "Menu prices are set by the tenant and shown in South African Rand (ZAR)." },
      { text: "Manuvoo adds a service fee of **R2 per item** to app orders. The fee is shown before you pay." },
      { text: "Payment-provider charges, if any, are shown before you confirm a payment." },
    ],
  },
  {
    heading: "4. Paying for orders",
    numbered: true,
    bullets: [
      { text: "You can pay per order through our payment providers (instant EFT via Ozow, and card once available), or from a wallet where wallets are offered." },
      { text: "You enter your payment details on our payment provider's pages, never with Manuvoo. Manuvoo does not collect, process or store your card details or bank login details." },
      { text: "An order is confirmed only once payment succeeds." },
    ],
  },
  {
    heading: "5. Wallets",
    numbered: true,
    bullets: [
      { text: "A wallet is a prepaid balance you load for **one specific tenant** (currently canteens only, for example your workplace canteen). It can only be spent at that tenant." },
      { text: "The maximum balance in a wallet is **R1 000**. Orders above your balance can be paid directly through our payment providers." },
      { text: "Wallet balances cannot be withdrawn as cash, transferred to other users, or used at other tenants." },
      { text: "Wallet balances do not earn interest." },
      { text: "Wallet funds are held on your behalf and recorded separately from Manuvoo's own money. Manuvoo does not use them for its own purposes." },
      {
        term: "Refund of unused balance:",
        text: "you may ask for your unused balance to be refunded at any time. We refund it to the payment method you used to top up, starting with your most recent top-up (as a partial refund of that top-up where needed), so you do not need to give us any bank details. Only if that is not possible, for example because the payment provider's refund period has passed or the original account is closed, do we pay it once to a bank account in your own name, after verifying that the account is yours. Refunds are completed within 5 business days. Refunds of unused balances are free of charge.",
      },
      { text: "If your account has been inactive for 12 months, we will contact you about refunding your balance." },
    ],
  },
  {
    heading: "6. Collecting your order",
    numbered: true,
    bullets: [
      { text: "You will receive a unique pickup code. Show it at the tenant's pickup point to collect your order." },
      { text: "Do not share your pickup code. Anyone holding it may be able to collect your order." },
      { text: "Orders not collected by the tenant's closing time are handled under section 7." },
    ],
  },
  {
    heading: "7. Cancellations and refunds",
    numbered: true,
    bullets: [
      { term: "Before preparation:", text: "you can cancel free of charge until the tenant accepts your order. You get a full refund." },
      { term: "Failed or wrong orders:", text: "if an item is out of stock, the tenant closes, or your order is incomplete or materially wrong, you get a full refund for the affected items." },
      { term: "Quality complaints:", text: "report them within 24 hours through the app or at info@manuvoo.com. We will investigate with the tenant and may refund in full or in part." },
      { term: "Uncollected orders:", text: "prepared orders that you do not collect are not refunded unless the tenant agrees." },
      {
        term: "How refunds are paid:",
        text: "if you paid from your wallet, back to that same wallet; otherwise to your original payment method, or, if you choose, as credit to your wallet for that same tenant. A refund can never take a wallet above the R1 000 cap; any amount over the cap goes back to your original payment method. Refunds are never paid out in cash. Refunds are processed within 2 business days of approval and in all cases within 10 business days.",
      },
    ],
  },
  {
    heading: "8. Fair use and fraud",
    paragraphs: [
      "We may suspend or close an account, and hold or reverse transactions, if we reasonably suspect fraud, money laundering, misuse of payment methods, or a breach of these terms. We may be required by law to report suspicious activity to the authorities.",
    ],
  },
  {
    heading: "9. Privacy",
    paragraphs: [
      "We collect and use your personal information to run your account, process orders and payments, prevent fraud and meet legal duties, in line with the Protection of Personal Information Act (POPIA). Our full Privacy Policy is at https://manuvoo.com/privacy-policy. We share your order details with the tenant you order from, and payment details only with our payment providers.",
    ],
  },
  {
    heading: "10. Liability",
    paragraphs: [
      "The tenant is responsible for the food, drinks and service it supplies. Manuvoo is responsible for operating the platform with reasonable care. Nothing in these terms limits your rights under the Consumer Protection Act or the Electronic Communications and Transactions Act.",
    ],
  },
  {
    heading: "11. Changes to these terms",
    paragraphs: [
      "We may update these terms. We will notify you in the app or by email before material changes take effect.",
    ],
  },
  {
    heading: "12. Contact and law",
    paragraphs: [
      "Manuvoo (Pty) Ltd, 18 Angola Road, Selcourt, Springs, Gauteng, 1567. Email: info@manuvoo.com. These terms are governed by South African law. All transactions are in South African Rand and Manuvoo is domiciled in South Africa.",
    ],
  },
];

export function Terms() {
  return (
    <LegalPage
      seo={seoConfig.terms}
      icon={Scale}
      title="Customer Terms and Conditions"
      intro={'Manuvoo (Pty) Ltd, registration number 2026/263523/07, 18 Angola Road, Selcourt, Springs, Gauteng, 1567, South Africa ("Manuvoo", "we"). These terms apply to anyone who uses the Manuvoo customer app at app.manuvoo.com ("you").'}
      preamble={[
        "**Tenant** means any business that sells to you through the Manuvoo platform, such as a company canteen, university canteen, restaurant, event vendor or mobile kitchen.",
      ]}
      lastUpdated="[publish date]"
      sections={sections}
    />
  );
}
