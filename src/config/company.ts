/**
 * Single source of truth for Manuvoo's registered business, contact, currency
 * and jurisdiction details.
 *
 * These values are surfaced publicly on the website to satisfy the Visa /
 * MasterCard e-commerce merchant website requirements required by FNB
 * Merchant Services (business address, customer service contact, transaction
 * currency, country of domicile, governing law).
 */

export const company = {
  legalName: "Manuvoo (Pty) Ltd",
  tradingName: "Manuvoo",
  registrationNumber: "2026/263523/07",
  // NOTE: VAT registration status is deliberately NOT published. It is not one
  // of the Visa / MasterCard website requirements, so it stays off the site.

  address: {
    line1: "18 Angola Rd",
    suburb: "Selcourt",
    city: "Springs",
    province: "Gauteng",
    postalCode: "1567",
    country: "South Africa",
  },

  contact: {
    email: "info@manuvoo.com",
    supportEmail: "support@manuvoo.com",
    // No public telephone number: email is the only published contact.
    whatsapp:"https://wa.me/27696848796",
    hours: "Monday – Sunday, 08:00 – 20:00 (SAST)",
  },

  website: "https://manuvoo.com",

  /** Visa / MasterCard requirement: one transaction currency per website. */
  currency: {
    code: "ZAR",
    symbol: "R",
    name: "South African Rand",
    statement:
      "All prices and transactions on this website are processed in South African Rand (ZAR) only. We do not process transactions in any other currency.",
  },

  /** Visa / MasterCard requirement: country of domicile. */
  countryOfDomicile: "South Africa",

  /** Visa / MasterCard requirement: governing law and jurisdiction. */
  governingLaw:
    "The laws of the Republic of South Africa govern these terms and all transactions concluded on this website.",
  jurisdiction:
    "The parties consent to the jurisdiction of the Magistrate's Court of South Africa having jurisdiction, without prejudice to Manuvoo's right to institute proceedings in the High Court of South Africa, Gauteng Division, Johannesburg.",

  /** Visa / MasterCard requirement: export restrictions (if known). */
  exportRestrictions:
    "Manuvoo trades only within the borders of the Republic of South Africa. No goods are shipped or exported cross-border and no import or export restrictions apply to any goods or services sold through this website.",

  policyLastUpdated: "25 August 2026",
} as const;

/** Street address on one line, e.g. for meta tags and short footers. */
export const addressOneLine = `${company.address.line1}, ${company.address.suburb}, ${company.address.city}, ${company.address.province}, ${company.address.postalCode}, ${company.address.country}`;

/** Street address as separate lines, e.g. for the footer and contact blocks. */
export const addressLines = [
  company.address.line1,
  company.address.suburb,
  `${company.address.city}, ${company.address.province}, ${company.address.postalCode}`,
  company.address.country,
];
