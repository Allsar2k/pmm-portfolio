import type { ReactNode } from 'react';
import { Container } from './Container';

/** Every page's h1. It takes focus after navigation so screen readers announce the new page. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <header className="border-b border-separator pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 tabIndex={-1} className="max-w-4xl text-4xl font-semibold text-ink outline-none sm:text-6xl">
          {title}
        </h1>
        {intro && <div className="mt-6 max-w-2xl text-lg text-ink-2 sm:text-xl">{intro}</div>}
      </Container>
    </header>
  );
}
