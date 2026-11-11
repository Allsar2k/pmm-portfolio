import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { palettes, type Palette, type TokenName } from './palette';

const css = readFileSync(resolve(__dirname, '../styles/tokens.css'), 'utf8');

const cssName: Record<TokenName, string> = {
  base: '--base',
  surface: '--surface',
  raised: '--raised',
  separator: '--separator',
  text: '--text',
  textSecondary: '--text-secondary',
  textTertiary: '--text-tertiary',
  accent: '--accent',
  onAccent: '--on-accent',
};

/** Every declaration block in tokens.css, as token → value maps. */
function blocks(): Record<string, string>[] {
  const found: Record<string, string>[] = [];
  for (const match of css.matchAll(/\{([^{}]*--base[^{}]*)\}/g)) {
    const body = match[1] ?? '';
    const map: Record<string, string> = {};
    for (const decl of body.matchAll(/(--[\w-]+):\s*(#[0-9A-Fa-f]{6})/g)) {
      if (decl[1] && decl[2]) map[decl[1]] = decl[2].toUpperCase();
    }
    found.push(map);
  }
  return found;
}

function matches(block: Record<string, string>, palette: Palette): boolean {
  return (Object.keys(cssName) as TokenName[]).every(
    (t) => block[cssName[t]] === palette[t].toUpperCase(),
  );
}

describe('tokens.css', () => {
  const declared = blocks();

  it.each(Object.entries(palettes))('declares the %s palette exactly', (_name, palette) => {
    expect(declared.some((b) => matches(b, palette))).toBe(true);
  });

  it('contains no colour that is not in the palette', () => {
    const allowed = new Set(
      Object.values(palettes).flatMap((p) => Object.values(p).map((v) => v.toUpperCase())),
    );
    for (const b of declared) for (const v of Object.values(b)) expect(allowed).toContain(v);
  });
});
