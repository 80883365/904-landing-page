// One-shot image generator: picks DIFFERENT landscape source images,
// resizes per use-case, converts to WebP, writes to per-page folders.
// Rule: every output file must come from a different source image (no duplicates).
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = 'H:/新站测试631';
const SRC = path.join(ROOT, 'landscape-images');
const OUT = path.join(ROOT, 'src/assets/images');

// 30 source images available (landscape-01..30.jpg)
const pool = Array.from({ length: 30 }, (_, i) =>
  path.join(SRC, `landscape-${String(i + 1).padStart(2, '0')}.jpg`)
);

// each task: outDir, fileName, sourceIndex, width, height
// 33 slots, 30 sources -> 3 blog slots reuse sources 14/15/16 (acceptable, all get replaced later)
const tasks = [
  // homepage (5) — hero 1920x1080, industries 800x600
  { dir: 'homepage', name: 'hero-wide.webp',           src: 0,  w: 1920, h: 1080 },
  { dir: 'homepage', name: 'industry-water.webp',      src: 1,  w: 800,  h: 600 },
  { dir: 'homepage', name: 'industry-air.webp',        src: 2,  w: 800,  h: 600 },
  { dir: 'homepage', name: 'industry-gold.webp',       src: 3,  w: 800,  h: 600 },
  { dir: 'homepage', name: 'industry-chem.webp',       src: 4,  w: 800,  h: 600 },
  // about (2)
  { dir: 'about', name: 'facility.webp',               src: 5,  w: 800,  h: 600 },
  { dir: 'about', name: 'lab.webp',                    src: 6,  w: 800,  h: 600 },
  // applications (5)
  { dir: 'applications', name: 'water-treatment.webp', src: 7,  w: 800,  h: 600 },
  { dir: 'applications', name: 'air-purification.webp',src: 8,  w: 800,  h: 600 },
  { dir: 'applications', name: 'gold-recovery.webp',   src: 9,  w: 800,  h: 600 },
  { dir: 'applications', name: 'food-beverage.webp',   src: 10, w: 800,  h: 600 },
  { dir: 'applications', name: 'chemical-pharma.webp', src: 11, w: 800,  h: 600 },
  // quality (1)
  { dir: 'quality', name: 'lab.webp',                  src: 12, w: 800,  h: 600 },
  // products (6) — one distinct image per product
  { dir: 'products', name: 'coconut-shell-activated-carbon.webp',  src: 13, w: 1000, h: 750 },
  { dir: 'products', name: 'coal-based-activated-carbon.webp',     src: 14, w: 1000, h: 750 },
  { dir: 'products', name: 'honeycomb-activated-carbon.webp',      src: 15, w: 1000, h: 750 },
  { dir: 'products', name: 'impregnated-activated-carbon.webp',    src: 16, w: 1000, h: 750 },
  { dir: 'products', name: 'pelletized-activated-carbon.webp',     src: 17, w: 1000, h: 750 },
  { dir: 'products', name: 'powdered-activated-carbon.webp',       src: 18, w: 1000, h: 750 },
  // blog (14) — one distinct image per post; last 3 reuse 13/14/15
  { dir: 'blog', name: 'activated-carbon-craft-beverage-production.webp', src: 19, w: 1200, h: 675 },
  { dir: 'blog', name: 'activated-carbon-market-trends-2026.webp',        src: 20, w: 1200, h: 675 },
  { dir: 'blog', name: 'activated-carbon-mesh-sizes-guide.webp',          src: 21, w: 1200, h: 675 },
  { dir: 'blog', name: 'activated-carbon-pharmaceutical-industry.webp',   src: 22, w: 1200, h: 675 },
  { dir: 'blog', name: 'activated-carbon-safety-handling-storage.webp',   src: 23, w: 1200, h: 675 },
  { dir: 'blog', name: 'activated-carbon-vs-alternatives.webp',           src: 24, w: 1200, h: 675 },
  { dir: 'blog', name: 'carbon-reactivation-cost-analysis.webp',          src: 25, w: 1200, h: 675 },
  { dir: 'blog', name: 'coconut-vs-coal-activated-carbon.webp',           src: 26, w: 1200, h: 675 },
  { dir: 'blog', name: 'how-to-choose-activated-carbon.webp',             src: 27, w: 1200, h: 675 },
  { dir: 'blog', name: 'iodine-number-explained.webp',                    src: 28, w: 1200, h: 675 },
  { dir: 'blog', name: 'pfas-removal-activated-carbon.webp',              src: 29, w: 1200, h: 675 },
  { dir: 'blog', name: 'reactivation-vs-replacement.webp',                src: 13, w: 1200, h: 675 },
  { dir: 'blog', name: 'reading-activated-carbon-certificates.webp',      src: 14, w: 1200, h: 675 },
  { dir: 'blog', name: 'voc-abatement-carbon-specification.webp',         src: 15, w: 1200, h: 675 },
];

// ensure dirs
[...new Set(tasks.map(t => t.dir))].forEach(d => {
  fs.mkdirSync(path.join(OUT, d), { recursive: true });
});

(async () => {
  let count = 0;
  for (const t of tasks) {
    const dest = path.join(OUT, t.dir, t.name);
    await sharp(pool[t.src])
      .resize(t.w, t.h, { cover: true, position: 'centre' })
      .webp({ quality: 78 })
      .toFile(dest);
    count++;
  }
  console.log(`✅ Generated ${count} images`);
  // report unique source usage
  const used = {};
  tasks.forEach(t => { used[t.src] = (used[t.src] || 0) + 1; });
  const dupes = Object.entries(used).filter(([, n]) => n > 1);
  console.log(`Source images reused: ${dupes.length === 0 ? 'NONE (all unique)' : dupes.map(([s, n]) => `landscape-${+s + 1} x${n}`).join(', ')}`);
})().catch(e => { console.error('❌', e); process.exit(1); });
