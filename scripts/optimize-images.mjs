// Converts every photo in assets-src/images into WebP at two widths and writes
// src/content/images.json with their intrinsic sizes, so each <img> can
// reserve its space and the page does not shift while images load.
//
// Usage: npm run images
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = 'assets-src/images';
const OUT = 'public/images';
const MANIFEST = 'src/content/images.json';
const WIDTHS = [640, 1280];

// Images that are crops of a larger original.
const CROPS = {
  // Square-ish head-and-shoulders crop of the event photo.
  portrait: { left: 0, top: 140, width: 1030, height: 1030 },
};

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const file of (await readdir(SRC)).sort()) {
  if (!/\.(jpe?g|png|gif|webp)$/i.test(file)) continue;
  const name = parse(file).name;
  let pipeline = sharp(join(SRC, file)).rotate();
  if (CROPS[name]) pipeline = pipeline.extract(CROPS[name]);
  const { width, height } = await pipeline.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);

  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, width)))];
  for (const w of widths) {
    await pipeline
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { width, height, widths };
  console.log(`${name}: ${width}×${height} → ${widths.join(', ')}`);
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
