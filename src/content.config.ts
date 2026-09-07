import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* --------------------------------------------------------------------------
   Products collection — markdown files in src/content/products
   Each product gets its own page at /products/<id>.
   ------------------------------------------------------------------------ */
const products = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      /** Short marketing line shown on cards. */
      excerpt: z.string(),
      /** Product family / category label. */
      category: z.string(),
      /** Icon name from the Icon component set. */
      icon: z.string().default("layers"),
      /** Distinguishing badge, e.g. "Best seller". */
      badge: z.string().optional(),
      featured: z.boolean().default(false),
      /** Sort weight — lower appears first. */
      order: z.number().default(100),
      /** Bullet list of headline features. */
      features: z.array(z.string()).default([]),
      /** Industry applications this product serves. */
      applications: z.array(z.string()).default([]),
      /** Technical spec rows: { label, value }. */
      specs: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .default([]),
      /** Packaging options. */
      packaging: z.array(z.string()).default([]),
      /** Certifications / standards met. */
      certifications: z.array(z.string()).default([]),
      /** Optional hero image (local, optimized via Sharp). */
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
    }),
});

/* --------------------------------------------------------------------------
   Blog collection — markdown articles in src/content/blog
   Each post gets its own page at /blog/<id>.
   ------------------------------------------------------------------------ */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("CarboPure Technical Team"),
      category: z.string().default("Insights"),
      tags: z.array(z.string()).default([]),
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { products, blog };
