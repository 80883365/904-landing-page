# CarboPure — Activated Carbon B2B Website

A production-ready B2B marketing website for an activated-carbon manufacturer, built on **Astro v6**, **Tailwind CSS v4**, and **TypeScript**. Design language is adapted from the industrial-B2B DNA of [krones.com](https://www.krones.com) — deep navy + carbon black, cyan accent, angular components with pill CTAs, and a precise, engineering-grade feel.

![CarboPure](public/og-default.svg)

## Tech stack

| | |
| --- | --- |
| **Framework** | Astro v6 (static output, content-driven) |
| **Styling** | Tailwind CSS v4 (CSS-first `@theme` config — no `tailwind.config.js`) |
| **Language** | TypeScript (strict) |
| **Content** | Astro Content Collections (`products`, `blog`) with the Content Layer `glob` loader |
| **Images** | Sharp (Astro `astro:assets` `<Image />` / `<Picture />`) |
| **Forms** | Web3Forms (no-backend form submissions) |
| **CMS** | Decap CMS at `/admin/` (optional) |
| **Fonts** | Self-hosted in `public/fonts/` |

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server  →  http://localhost:4321
npm run dev

# 3. Production build  →  ./dist
npm run build

# 4. Preview the production build
npm run preview

# 5. Type-check
npm run check
```

> Requires Node.js 18.20+, 20.3+, or 22+ (Node 24 recommended).

## Project structure

```
新站测试631/
├── public/
│   ├── admin/                 # Decap CMS (index.html + config.yml)  →  /admin/
│   ├── fonts/                 # ← put your .woff2 files here
│   ├── favicon.svg
│   ├── og-default.svg
│   └── robots.txt
├── src/
│   ├── components/            # Header, Footer, Button, Section, ProductCard,
│   │                          # BlogCard, PageHero, StatStrip, Field, Icon, …
│   ├── content/
│   │   ├── products/          # 6 sample products (.md)
│   │   └── blog/              # 4 sample articles (.md)
│   ├── content.config.ts      # Collection schemas (Zod)
│   ├── layouts/
│   │   └── BaseLayout.astro   # <head> SEO, header, footer, scroll-reveal
│   ├── pages/
│   │   ├── index.astro              # HOME
│   │   ├── about.astro              # About us
│   │   ├── applications.astro       # Industries / applications
│   │   ├── quality.astro            # Quality & certifications
│   │   ├── contact.astro            # Contact + Web3Forms
│   │   ├── privacy.astro  terms.astro
│   │   ├── 404.astro
│   │   ├── products/
│   │   │   ├── index.astro          # Products listing
│   │   │   └── [...slug].astro      # Product detail (per product .md)
│   │   └── blog/
│   │       ├── index.astro          # Blog listing
│   │       └── [...slug].astro      # Blog post (per article .md)
│   ├── styles/global.css      # Tailwind v4 @theme tokens + base + components
│   └── consts.ts              # ⭐ Site config: brand, nav, contact, Web3Forms key
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Where to make changes

| I want to… | Edit |
| --- | --- |
| Change the brand name, tagline, nav, contact info, or Web3Forms key | **`src/consts.ts`** |
| Change colors, fonts, radius, spacing | **`src/styles/global.css`** (`@theme` block) |
| Add/edit a product | `src/content/products/*.md` (or use the CMS at `/admin/`) |
| Add/edit a blog article | `src/content/blog/*.md` (or use the CMS) |
| Edit the header / footer | `src/components/Header.astro`, `Footer.astro` |

## Content collections

Products and blog posts are Markdown files validated by Zod schemas in
`src/content.config.ts`. To add a product, copy an existing file in
`src/content/products/`, edit the frontmatter, and it automatically gets:

- a listing card on `/products`,
- a detail page at `/products/<filename>`,
- and (if `featured: true`) a card on the home page.

## Forms (Web3Forms)

The contact form posts to Web3Forms — no backend required.

1. Create a form at **[web3forms.com](https://web3forms.com)** and copy your **Access Key**.
2. Paste it into `WEB3FORMS_KEY` in `src/consts.ts` (or set `PUBLIC_WEB3FORMS_KEY` in `.env`).
3. Submissions arrive in your email inbox.

The form submits via AJAX with a success/error message, and falls back to a
standard POST redirect if JavaScript is disabled.

## Optional: Decap CMS (`/admin/`)

A visual editor for products and blog posts is bundled at `/admin/`.

1. **Authentication** — Decap needs an identity backend. The config defaults to
   **Netlify Git Gateway** (enable Netlify Identity + Git Gateway on Netlify). For
   GitHub OAuth on any host, see the commented block in `public/admin/config.yml`.
2. Open `https://your-domain/admin/` and log in.
3. Edit content; commits flow back to your repo, then re-deploy.

For local editing, run `npx decap-server` alongside `npm run dev` and the CMS
will read/write the local files (`local_backend: true`).

## Fonts (self-hosted)

`@font-face` declarations in `src/styles/global.css` reference Noto Sans files
in `public/fonts/`. See `public/fonts/README.txt` for filenames and where to
download them (free, SIL Open Font License). Until the files are added, the site
falls back gracefully to the system sans-serif.

## Design tokens (from the DNA)

| Token | Value | Use |
| --- | --- | --- |
| `--color-brand-600` | `#052a68` | Primary navy |
| `--color-brand-700` | `#004075` | Darker navy |
| `--color-accent-500` | `#0099d6` | Cyan accent / CTAs |
| `--color-carbon-900` | `#16181d` | Carbon-black surfaces |
| `--color-carbon-800` | `#242526` | Body text |
| `--font-display` | Noto Sans Display | Headings |
| `--font-condensed` | Noto Sans Condensed (800) | Eyebrows / big numbers |
| `--radius-pill` | `20px` | CTA buttons |

## Next steps before launch

- [ ] Replace placeholder brand name, phone, email, address in `src/consts.ts`
- [ ] Add real `.woff2` fonts to `public/fonts/`
- [ ] Add real product photography (drop into `src/assets/`, use `<Image />`)
- [ ] Set the Web3Forms access key
- [ ] Configure Decap CMS auth backend (or remove `/admin/` if unused)
- [ ] Update `site` in `astro.config.mjs` and the domain in `public/robots.txt`
- [ ] Have legal review the Privacy Policy and Terms templates
- [ ] Add a sitemap integration (`@astrojs/sitemap`) before launch

---

Built with the **design-dna** skill — extracted DNA → tokens → pages.
