// GitHub Pages serves files, not an app router: a visit to /pmm-portfolio/projects
// looks for projects/index.html. This writes one copy of the built index.html per
// route, each with its own title, description and share tags, plus a 404.html
// so unknown paths still load the app and show its "not found" page.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const { site, routes } = JSON.parse(await readFile('src/content/routes.json', 'utf8'));
const template = await readFile(join(DIST, 'index.html'), 'utf8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const urlFor = (path) => new URL(path === '/' ? '' : path.slice(1) + '/', site.url).href;

function render({ title, description, url, noindex = false }) {
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escape(title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`);
  if (noindex) html = html.replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>');
  return html;
}

for (const r of routes) {
  const html = render({ title: r.title, description: r.description, url: urlFor(r.path) });
  const dir = r.path === '/' ? DIST : join(DIST, r.path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html);
}

await writeFile(
  join(DIST, '404.html'),
  render({ title: `Page not found · ${site.name}`, description: site.description, url: site.url, noindex: true }),
);

// The Wix "resume" path is kept for old links but is not a page of its own.
const indexed = routes.filter((r) => r.path !== '/resume');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((r) => `  <url><loc>${urlFor(r.path)}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap);

console.log(`Pre-rendered ${routes.length} routes, 404.html and sitemap.xml`);
