export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

const baseUrl = "https://manuvoo.com";
const defaultOgImage = `${baseUrl}/images/og-image.jpg`;

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "Manuvoo - All-in-One Hospitality Operations Platform",
    description: "Transform your hospitality operations with Manuvoo's cloud-based platform. Streamline bookings, guest management, housekeeping, maintenance, and more. Built for hotels, resorts, and hospitality businesses.",
    keywords: [
      "hospitality management software",
      "hotel management system",
      "property management system",
      "PMS",
      "hotel operations software",
      "resort management",
      "guest management system",
      "housekeeping management",
      "maintenance management",
      "hospitality technology",
      "cloud hotel software",
      "all-in-one hospitality platform"
    ],
    ogImage: defaultOgImage,
    canonical: baseUrl
  },
  about: {
    title: "About Manuvoo - Revolutionizing Hospitality Operations",
    description: "Learn about Manuvoo's mission to empower hospitality businesses with innovative technology. Discover our story, values, and commitment to transforming the hospitality industry.",
    keywords: [
      "hospitality software company",
      "Manuvoo about",
      "hospitality innovation",
      "hotel technology company",
      "property management solutions",
      "hospitality industry transformation"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/about`
  },
  services: {
    title: "Services - Comprehensive Hospitality Solutions | Manuvoo",
    description: "Explore Manuvoo's comprehensive hospitality services including guest management, housekeeping operations, maintenance tracking, staff coordination, and business intelligence for hotels and resorts.",
    keywords: [
      "hospitality services",
      "hotel management services",
      "guest management",
      "housekeeping services",
      "maintenance tracking",
      "staff coordination",
      "hospitality operations",
      "hotel services software",
      "resort management services"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/services`
  },
  features: {
    title: "Features - Powerful Tools for Hospitality Management | Manuvoo",
    description: "Discover Manuvoo's powerful features: real-time booking management, guest profiles, automated housekeeping workflows, maintenance scheduling, staff management, analytics, and mobile access.",
    keywords: [
      "hospitality management features",
      "hotel software features",
      "PMS features",
      "booking management",
      "guest profiles",
      "housekeeping automation",
      "maintenance scheduling",
      "hotel analytics",
      "mobile hotel management",
      "real-time operations"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/features`
  },
  pricing: {
    title: "Pricing Plans - Flexible Solutions for Every Property | Manuvoo",
    description: "Choose the perfect Manuvoo plan for your hospitality business. Transparent pricing for hotels, resorts, and properties of all sizes. Start your free trial today.",
    keywords: [
      "hospitality software pricing",
      "hotel management pricing",
      "PMS pricing",
      "hotel software cost",
      "property management pricing",
      "hospitality management cost",
      "affordable hotel software",
      "hospitality software plans"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/pricing`
  },
  roadmap: {
    title: "Product Roadmap - Future of Hospitality Management | Manuvoo",
    description: "See what's next for Manuvoo. Explore our product roadmap featuring upcoming features, integrations, and innovations in hospitality management technology.",
    keywords: [
      "hospitality software roadmap",
      "hotel technology roadmap",
      "upcoming features",
      "product development",
      "hospitality innovation",
      "future features",
      "software updates"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/roadmap`
  },
  contact: {
    title: "Contact Us - Get in Touch with Manuvoo",
    description: "Have questions about Manuvoo? Contact our team for demos, support, or partnership inquiries. We're here to help transform your hospitality operations.",
    keywords: [
      "contact Manuvoo",
      "hospitality software support",
      "hotel software demo",
      "get in touch",
      "customer support",
      "sales inquiry",
      "partnership opportunities"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/contact`
  },
  cookiePolicy: {
    title: "Cookie Policy - Privacy & Data Protection | Manuvoo",
    description: "Learn about how Manuvoo uses cookies to enhance your browsing experience. Our commitment to privacy and data protection.",
    keywords: [
      "cookie policy",
      "privacy policy",
      "data protection",
      "GDPR compliance",
      "cookies",
      "privacy"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/cookie-policy`,
    noindex: true
  },
  terms: {
    title: "Terms & Conditions | Manuvoo",
    description: "The terms and conditions governing use of the Manuvoo platform and all orders and payments made through it. All transactions are in South African Rand (ZAR). Country of domicile: South Africa.",
    keywords: [
      "terms and conditions",
      "terms of service",
      "Manuvoo terms",
      "governing law",
      "jurisdiction South Africa",
      "ecommerce terms",
      "ZAR transactions"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/terms`
  },
  privacyPolicy: {
    title: "Privacy Policy - How We Use Your Information | Manuvoo",
    description: "How Manuvoo collects, uses, stores and protects the personal information of customers and venues, in line with South Africa's Protection of Personal Information Act (POPIA).",
    keywords: [
      "privacy policy",
      "POPIA",
      "data protection South Africa",
      "personal information",
      "customer data",
      "Manuvoo privacy"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/privacy-policy`
  },
  refundPolicy: {
    title: "Refund & Return Policy | Manuvoo",
    description: "Manuvoo's refund and return policy for food, beverage and platform orders. Refunds are credited to the original card, in South African Rand, within 10 business days.",
    keywords: [
      "refund policy",
      "return policy",
      "food refund",
      "card refund",
      "chargeback",
      "Manuvoo refunds"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/refund-policy`
  },
  cancellationPolicy: {
    title: "Cancellation Policy | Manuvoo",
    description: "When and how a customer can cancel an order on the Manuvoo platform, when a venue may cancel, and how cancelled payments are reversed to the original payment method.",
    keywords: [
      "cancellation policy",
      "cancel order",
      "order cancellation",
      "payment reversal",
      "Manuvoo cancellations"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/cancellation-policy`
  },
  deliveryPolicy: {
    title: "Delivery & Shipping Policy | Manuvoo",
    description: "How orders placed through Manuvoo are fulfilled: dine-in table service, counter and pickup collection, and delivery. Fulfilment takes place within South Africa only.",
    keywords: [
      "delivery policy",
      "shipping policy",
      "fulfilment",
      "pickup collection",
      "delivery South Africa",
      "export restrictions"
    ],
    ogImage: defaultOgImage,
    canonical: `${baseUrl}/delivery-policy`
  }
};

// Default fallback SEO config
export const defaultSEO: SEOConfig = {
  title: "Manuvoo - Hospitality Operations Platform",
  description: "All-in-one cloud-based platform for modern hospitality operations. Manage bookings, guests, housekeeping, maintenance, and more.",
  keywords: [
    "hospitality management",
    "hotel software",
    "property management",
    "hotel operations"
  ],
  ogImage: defaultOgImage,
  canonical: baseUrl
};

// Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Manuvoo",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "ZAR",
    "description": "Free trial available"
  },
  "description": "All-in-one hospitality operations platform for hotels, resorts, and hospitality businesses",
  "provider": {
    "@type": "Organization",
    "name": "Manuvoo (Pty) Ltd",
    "legalName": "Manuvoo (Pty) Ltd",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.svg`,
    "email": "info@manuvoo.com",
    "telephone": "+27696848796",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Angola Rd, Selcourt",
      "addressLocality": "Springs",
      "addressRegion": "Gauteng",
      "postalCode": "1567",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@manuvoo.com",
      "telephone": "+27696848796",
      "areaServed": "ZA",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add social media profiles here when available
    ]
  },
  "currenciesAccepted": "ZAR",
  "paymentAccepted": "Visa, Mastercard",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "featureList": [
    "Guest Management",
    "Booking Management",
    "Housekeeping Operations",
    "Maintenance Tracking",
    "Staff Coordination",
    "Business Analytics",
    "Mobile Access"
  ]
};
