/**
 * Configuration Index
 * Central export point for all site configurations
 */

export * from "./site";
export * from "./seo";
export * from "./navigation";

// Re-export commonly used items for convenience
export { SITE } from "./site";
export { SEO_DEFAULTS, generateBreadcrumbSchema, generateProductSchema, generateArticleSchema } from "./seo";
export { MAIN_NAV, FOOTER_LINKS } from "./navigation";
