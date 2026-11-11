export type Theme = 'light' | 'dark';

const KEY = 'theme';

/** The theme the page is showing right now, whether chosen or from the system. */
export function currentTheme(): Theme {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // Storage can be blocked (private mode, site settings); the choice then lasts for this visit.
  }
}
