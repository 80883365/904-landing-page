/**
 * Site Configuration
 * Central source of truth for site-wide settings
 */

export const SITE = {
  // Brand Identity
  name: "ZD Mining",
  legalName: "ZD Mining Products Co., Ltd.",
  tagline: "Built for Better Gold Recovery",
  url: "https://miningzd.com",

  // SEO & Meta
  description:
    "ZD Mining supplies ball mills, wet pan mills and forged grinding steel balls for gold ore processing and mineral grinding projects worldwide.",

  // Language & Locale
  locale: "en_US",
  lang: "en",

  // Forms
  web3formsKey: "10ab1f82-8d01-4e92-9fc2-6067e554eee9", // Web3Forms access key

  // Contact Information
  contact: {
    email: "info@miningzd.com",
    phone: "+86 173 3579 1762",
    whatsapp: "+86 173 3579 1762",
    addressLine1: "Mining Equipment Industrial Zone",
    addressLine2: "Zhengzhou, Henan, China",
    hours: "Mon – Fri, 8:30 – 17:30 (GMT+8)",
  },

  // Social Media Links
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "X", href: "https://www.x.com" },
  ],
} as const;

export type SiteConfig = typeof SITE;
