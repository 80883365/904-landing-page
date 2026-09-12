// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://miningzd.com",
  integrations: [sitemap()],
  // Sharp is used by Astro's built-in image optimization (astro:assets)
  // for <Image /> and <Picture /> components. No extra integration required.
  image: {
    // Reserved for future service-config (domains, remotePatterns) when real
    // remote imagery is wired in.
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Clean, descriptive URLs for the marketing site.
  trailingSlash: "ignore",
});
