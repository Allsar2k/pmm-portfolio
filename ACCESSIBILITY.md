# Accessibility

This site aims to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Level AA.

## What's supported

- Every page works with a keyboard, with a visible focus ring and a "Skip to content" link.
- Text and controls meet AA contrast in the light, dark and high-contrast themes. The palette is checked by an automated test (`src/design/contrast.test.ts`).
- Pages reflow at 320px width and 200% zoom without losing content.
- Animations are turned off when your system asks for reduced motion.
- Images have text alternatives, and charts are described in text next to them.
- Status labels (for example "In progress") are written out, never shown by colour alone.

## Known issues

- The downloadable PDFs and slide decks were made before this site and may not be fully tagged for screen readers.

Anything else that is open is listed in the Issues tab.

## Report a barrier

Open an issue describing:

1. the page and what you were trying to do
2. what happened instead
3. the browser and any assistive technology you used (for example VoiceOver, NVDA, Voice Control, zoom)
