import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { awards, caseWins, education, leadership } from '../content/awards';

export default function Awards() {
  return (
    <>
      <PageHeader
        eyebrow="Awards"
        title="Recognition, wins and the people I led with."
        intro="Scholarships and honours from the Eller College of Management, first-place case competition finishes, and the organisations I helped run."
      />

      <section aria-labelledby="honours-title">
        <Container className="py-16">
          <SectionHeading id="honours-title" eyebrow="Honours" title="Awards" />
          <ul className="grid gap-5 sm:grid-cols-2">
            {awards.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 0.04} className="h-full">
                  <article className="flex h-full items-start gap-5 rounded-card border border-separator bg-surface p-6">
                    <p className="flex size-14 shrink-0 items-center justify-center rounded-full bg-raised font-display text-xl font-semibold text-accent">
                      {a.count ? (
                        <>
                          <span aria-hidden="true">{a.count}×</span>
                          <span className="sr-only">{a.count} times</span>
                        </>
                      ) : (
                        <span aria-hidden="true">★</span>
                      )}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{a.title}</h3>
                      {a.detail && <p className="mt-1 text-ink-2">{a.detail}</p>}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="wins-title" className="border-t border-separator">
        <Container className="py-16">
          <SectionHeading id="wins-title" eyebrow="Case competitions" title="First-place finishes" />
          <ul className="divide-y divide-separator rounded-card border border-separator bg-surface">
            {caseWins.map((w) => (
              <li key={w.title} className="flex flex-wrap items-baseline justify-between gap-2 px-6 py-5">
                <span className="text-lg font-semibold text-ink">{w.title}</span>
                <span className="font-semibold text-accent">{w.detail}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="education-title" className="border-t border-separator">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="education-title" eyebrow="Education" title={education.school} />
            <dl className="grid grid-cols-2 gap-4">
              <div className="col-span-2 flex flex-col">
                <dt className="text-sm text-ink-3">Degree</dt>
                <dd className="font-semibold text-ink">{education.degree}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-ink-3">Graduated</dt>
                <dd className="font-semibold text-ink">{education.graduated}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-ink-3">GPA</dt>
                <dd className="font-semibold text-ink">{education.gpa}</dd>
              </div>
            </dl>
            <h3 className="mt-10 font-sans text-lg font-semibold text-ink">Leadership & involvement</h3>
            <ul className="mt-3 space-y-2 text-ink-2">
              {leadership.map((l) => (
                <li key={l.title}>
                  <span className="font-semibold text-ink">{l.title}</span>
                  {l.detail && <span> · {l.detail}</span>}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-card border border-separator bg-raised">
            <Picture image={education.image} sizes="(min-width: 1024px) 34rem, 100vw" className="aspect-[3/2] h-auto w-full object-cover" />
          </figure>
        </Container>
      </section>
    </>
  );
}
