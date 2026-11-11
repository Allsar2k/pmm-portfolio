import { Link } from 'react-router';
import type { Concept } from '../content/types';
import { Icon } from './Icon';
import { StatusBadge } from './StatusBadge';

/**
 * The signature component: brand, the strategic question, what's inside and
 * where it stands. The whole card is one link to the concept page.
 */
export function ConceptCard({ concept, headingLevel = 3 }: { concept: Concept; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-separator bg-surface p-6 transition hover:border-ink-3 sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">{concept.kind}</p>
        <StatusBadge status={concept.status} />
      </div>
      <H className="text-3xl font-semibold text-ink">
        <Link
          to={`/concepts/${concept.slug}`}
          className="outline-none after:absolute after:inset-0 after:rounded-card focus-visible:after:outline-3 focus-visible:after:outline-offset-3 focus-visible:after:outline-accent"
        >
          {concept.brand}
        </Link>
      </H>
      <p className="mt-3 text-lg text-ink-2">{concept.question}</p>
      <ul className="mt-6 flex flex-col gap-2 border-t border-separator pt-5 text-[0.9375rem] text-ink-2">
        {concept.deliverables.map((d) => (
          <li key={d} className="flex gap-2">
            <span aria-hidden="true" className="text-accent">
              →
            </span>
            {d}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.9375rem] font-semibold text-accent">
        View concept
        <Icon name="arrowRight" className="transition group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
