/**
 * GoldCore — central site configuration.
 * Single source of truth for brand, navigation, contact info, and Web3Forms.
 * Edit values here to update them across the whole site.
 */

export const SITE = {
  name: "GoldCore",
  legalName: "GoldCore Mining Equipment Co., Ltd.",
  tagline: "Built for Better Gold Recovery",
  /** Short SEO description used in <meta> + hero subtitles. */
  description:
    "GoldCore supplies ball mills, wet pan mills and forged grinding steel balls for practical, efficient gold ore grinding and mineral processing projects worldwide.",
  url: "https://www.goldcore-machinery.com",
  // Replace with your access key from https://web3forms.com
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  locale: "en_US",
  lang: "en",
} as const;

export const CONTACT = {
  email: "info@miningzd.com",
  phone: "+86 173 3579 1762",
  whatsapp: "+86 173 3579 1762",
  addressLine1: "Mining Equipment Industrial Zone",
  addressLine2: "Zhengzhou, Henan, China",
  hours: "Mon – Fri, 8:30 – 17:30 (GMT+8)",
} as const;

export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "X", href: "https://www.x.com" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Gold Ore Ball Mill",
        href: "/products/gold-ore-ball-mill",
        blurb: "Continuous fine grinding for hard-rock gold processing plants.",
      },
      {
        label: "Wet Pan Mill for Gold",
        href: "/products/wet-pan-mill-for-gold",
        blurb: "Compact, economical ore grinding for small-scale gold mines.",
      },
      {
        label: "Forged Grinding Steel Balls",
        href: "/products/forged-grinding-steel-balls",
        blurb: "Wear-resistant grinding media in application-matched grades.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/applications",
    children: [
      { label: "Small-Scale Gold Mining", href: "/applications#small-scale-gold-mining" },
      { label: "Hard-Rock Gold Processing", href: "/applications#hard-rock-gold" },
      { label: "Grinding Media Supply", href: "/applications#grinding-media" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Case Studies", href: "/resources/case-studies", blurb: "Project lessons, delivery scope and operating context." },
      { label: "Blog", href: "/resources/blog", blurb: "Practical guidance for planning and procurement." },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Products",
    links: [
      { label: "Gold Ore Ball Mill", href: "/products/gold-ore-ball-mill" },
      { label: "Wet Pan Mill", href: "/products/wet-pan-mill-for-gold" },
      { label: "Grinding Steel Balls", href: "/products/forged-grinding-steel-balls" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Solutions", href: "/applications" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Ball Mill Selection", href: "/products/gold-ore-ball-mill" },
      { label: "Wet Pan Mill Models", href: "/products/wet-pan-mill-for-gold" },
      { label: "Grinding Media Guide", href: "/products/forged-grinding-steel-balls" },
      { label: "Resources", href: "/resources" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
