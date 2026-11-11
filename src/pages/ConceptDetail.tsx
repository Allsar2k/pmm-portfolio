import { Link, useParams } from 'react-router';
import { ButtonAnchor, ButtonLink } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { conceptBySlug, concepts } from '../content/concepts';
import NotFound from './NotFound';

export default function ConceptDetail() {
  const { slug } = useParams();
  const concept = conceptBySlug(slug);
  if (!concept) return <NotFound />;
  const others = concepts.filter((c) => c.slug !== concept.slug);

  return (
    <>
      <PageHeader eyebrow={`${concept.kind} · ${concept.brand}`} title={concept.question} intro={concept.summary} />
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <section aria-labelledby="inside-title">
          <h2 id="inside-title" className="text-3xl font-semibold text-ink">
            What’s inside
          </h2>
          <ol className="mt-6 space-y-3">
            {concept.deliverables.map((d, i) => (
              <li key={d} className="flex items-center gap-4 rounded-card border border-separator bg-surface p-5">
                <span aria-hidden="true" className="font-display text-3xl font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-semibold text-ink">{d}</span>
              </li>
            ))}
          </ol>
        </section>

        <aside aria-labelledby="status-title" className="self-start rounded-card border border-separator bg-raised p-6">
          <h2 id="status-title" className="font-sans text-lg font-semibold text-ink">
            Status
          </h2>
          <div className="mt-3">
            <StatusBadge status={concept.status} />
          </div>
          {concept.status === 'planned' ? (
            <p className="mt-4 text-ink-2">
              This concept is being written now. Its repository opens on GitHub when the first full draft is ready.
            </p>
          ) : (
            <div className="mt-5 flex flex-col gap-3">
              <ButtonAnchor href={concept.repo} icon="arrowUpRight" external>
                Read it on GitHub
              </ButtonAnchor>
              {concept.site && (
                <ButtonAnchor href={concept.site} variant="secondary" icon="arrowUpRight" external>
                  Open the concept site
                </ButtonAnchor>
              )}
            </div>
          )}
          <p className="mt-6 text-sm text-ink-3">
            An independent concept, not affiliated with or endorsed by {concept.brand}.
          </p>
        </aside>
      </Container>

      <Container>
        <nav aria-label="Other concepts" className="border-t border-separator pt-10">
          <ul className="flex flex-wrap gap-3">
            <li>
              <ButtonLink to="/concepts" variant="secondary">
                All concepts
              </ButtonLink>
            </li>
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/concepts/${c.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 font-semibold text-accent hover:bg-raised"
                >
                  {c.brand} {c.kind.toLowerCase()} <Icon name="arrowRight" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </>
  );
}
