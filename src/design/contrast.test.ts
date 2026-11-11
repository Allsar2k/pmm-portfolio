import { contrastRatio } from './contrast';
import { backgroundTokens, palettes, textTokens, type ThemeName } from './palette';

const AA_BODY = 4.5;
const themes = Object.keys(palettes) as ThemeName[];

describe('contrastRatio', () => {
  it('matches the reference values from the WCAG definition', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5);
    expect(contrastRatio('#777777', '#FFFFFF')).toBeCloseTo(4.48, 2);
  });
});

describe.each(themes)('%s theme', (theme) => {
  const p = palettes[theme];

  it.each(textTokens.flatMap((t) => backgroundTokens.map((b) => [t, b] as const)))(
    '%s on %s meets WCAG AA for body text',
    (text, background) => {
      expect(contrastRatio(p[text], p[background])).toBeGreaterThanOrEqual(AA_BODY);
    },
  );

  it('content on the accent fill meets WCAG AA', () => {
    expect(contrastRatio(p.onAccent, p.accent)).toBeGreaterThanOrEqual(AA_BODY);
  });
});

describe('high-contrast themes', () => {
  // A high-contrast theme that is not actually higher contrast is a bug that
  // users cannot report, because it looks the same to them.
  it.each([
    ['light', 'lightContrast'],
    ['dark', 'darkContrast'],
  ] as const)('%s → %s raises every text pairing', (standard, high) => {
    for (const text of textTokens) {
      const before = contrastRatio(palettes[standard][text], palettes[standard].base);
      const after = contrastRatio(palettes[high][text], palettes[high].base);
      expect(after, `${text}`).toBeGreaterThan(before);
    }
  });
});
