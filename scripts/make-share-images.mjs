// Renders the touch icon and the Open Graph share card from SVG.
// Usage: node scripts/make-share-images.mjs
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const favicon = await readFile('public/favicon.svg');
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: '#FAF8F5' }).png().toFile('public/apple-touch-icon.png');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="0.9" cy="0.05" r="0.75">
      <stop offset="0" stop-color="#FF7A45" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#FF7A45" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0F0E12"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(96 96)">
    <rect width="112" height="112" rx="26" fill="#FF7A45"/>
    <text x="54" y="75" text-anchor="middle" font-family="Georgia, serif" font-size="52" font-weight="700" letter-spacing="-2" fill="#0F0E12">CW</text>
    <path d="M77 30l12-12m0 0h-9m9 0v9" stroke="#0F0E12" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <text x="96" y="318" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="5" fill="#FF7A45">PRODUCT MARKETING · TECH &amp; ENTERTAINMENT</text>
  <text x="92" y="410" font-family="Georgia, serif" font-size="92" font-weight="700" fill="#F4F1EC">Chris Williams</text>
  <text x="96" y="480" font-family="Georgia, serif" font-size="38" fill="#B9B4BF">I turn user insight into launches that grow.</text>
  <text x="96" y="560" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#8E8996">Twitch · Zenith · Augment.us · DoorDash</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
console.log('Wrote public/apple-touch-icon.png and public/og-image.png');
