/**
 * SEO Configuration
 * Default SEO values and utilities
 */

export const SEO_DEFAULTS = {
  // Default OG Image (1200x630px recommended)
  defaultOgImage: "/og-default.jpg",

  // Title Template
  titleTemplate: (title: string) => `${title} | GoldCore`,
  homeTitleTemplate: () => "GoldCore — Gold Mining Grinding Equipment",

  // Default Meta Description (fallback)
  defaultDescription:
    "Ball mills, wet pan mills and forged grinding steel balls for gold ore processing and mineral grinding plants.",

  // Structured Data Defaults
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoldCore Mining Equipment Co., Ltd.",
    url: "https://www.goldcore-machinery.com",
    logo: "https://www.goldcore-machinery.com/logo.png",
    description:
      "Supplier of gold ore grinding equipment and forged grinding media.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mining Equipment Industrial Zone",
      addressLocality: "Zhengzhou",
      addressRegion: "Henan",
      postalCode: "450000",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-173-3579-1762",
      contactType: "sales",
      email: "info@miningzd.com",
      availableLanguage: ["en", "zh"],
    },
    sameAs: [
      "https://www.linkedin.com",
      "https://www.youtube.com",
      "https://www.x.com",
    ],
  },
} as const;

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Product Schema
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "GoldCore",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0.00",
      priceCurrency: "USD",
      url: product.url,
    },
  };
}

/**
 * Generate Article Schema (for blog posts)
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: Date;
  dateModified?: Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "GoldCore",
      logo: {
        "@type": "ImageObject",
        url: "https://www.carbopure.com/logo.png",
      },
    },
    datePublished: article.datePublished.toISOString(),
    dateModified: (article.dateModified ?? article.datePublished).toISOString(),
  };
}

export type SEOConfig = typeof SEO_DEFAULTS;
