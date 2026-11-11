/**
 * Every colour on the site, defined once as plain data so tests can check it.
 * `src/styles/tokens.css` mirrors these values for the browser, and
 * `tokens.test.ts` fails if the two ever drift apart.
 */
export type ThemeName = 'light' | 'dark' | 'lightContrast' | 'darkContrast';

export type TokenName =
  | 'base'
  | 'surface'
  | 'raised'
  | 'separator'
  | 'text'
  | 'textSecondary'
  | 'textTertiary'
  | 'accent'
  | 'onAccent';

export type Palette = Record<TokenName, string>;

/**
 * "Launch Orange". The light theme needs a darker value than the dark theme:
 * the bright orange only reaches 3.6:1 on paper, below the 4.5:1 that body-size
 * link text needs, while the dark value clears 5:1 and still reads as orange.
 */
export const BRAND_ORANGE = '#FF7A45';

export const palettes: Record<ThemeName, Palette> = {
  light: {
    base: '#FAF8F5',
    surface: '#FFFFFF',
    raised: '#F1EEE8',
    separator: '#E2DDD4',
    text: '#16151A',
    textSecondary: '#4A4752',
    textTertiary: '#6B6773',
    accent: '#B83E12',
    onAccent: '#FFFFFF',
  },
  dark: {
    base: '#0F0E12',
    surface: '#17161B',
    raised: '#201E25',
    separator: '#2C2A31',
    text: '#F4F1EC',
    textSecondary: '#B9B4BF',
    textTertiary: '#8E8996',
    accent: BRAND_ORANGE,
    onAccent: '#0F0E12',
  },
  lightContrast: {
    base: '#FFFFFF',
    surface: '#FFFFFF',
    raised: '#F4F2EE',
    separator: '#8A8590',
    text: '#000000',
    textSecondary: '#2A2830',
    textTertiary: '#45424C',
    accent: '#8F2E0B',
    onAccent: '#FFFFFF',
  },
  darkContrast: {
    base: '#000000',
    surface: '#0B0A0D',
    raised: '#16151A',
    separator: '#77727E',
    text: '#FFFFFF',
    textSecondary: '#DAD6DF',
    textTertiary: '#B8B3BF',
    accent: '#FF9A70',
    onAccent: '#000000',
  },
};

/** Text tokens and the backgrounds each must be readable on. */
export const textTokens = ['text', 'textSecondary', 'textTertiary', 'accent'] as const;
export const backgroundTokens = ['base', 'surface', 'raised'] as const;
