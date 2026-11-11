import { Link } from 'react-router';
import { profile, socials } from '../content/profile';
import { Container } from './Container';
import { Icon } from './Icon';
import { Monogram } from './Monogram';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-separator bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Monogram size={40} />
            <p className="font-display text-2xl font-semibold text-ink">Let’s build the next launch.</p>
          </div>
          <p className="mt-4 max-w-md text-ink-2">
            Open to product marketing roles in tech and entertainment, based in the {profile.location}.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="prose-link mt-5 inline-flex items-center gap-2 font-semibold"
          >
            <Icon name="mail" />
            {profile.email}
          </a>
        </div>
        <div>
          <h2 className="eyebrow mb-4 font-sans">Elsewhere</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2.5 text-ink-2 hover:text-ink"
                >
                  <Icon name={s.icon} className="text-lg" />
                  {s.label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-separator py-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Chris Williams</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link to="/contact" className="hover:text-ink">
              Contact
            </Link>
          </li>
          <li>
            <a href="https://github.com/Allsar2k/pmm-portfolio/blob/main/ACCESSIBILITY.md" className="hover:text-ink">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://github.com/Allsar2k/pmm-portfolio" className="hover:text-ink">
              Source on GitHub
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
