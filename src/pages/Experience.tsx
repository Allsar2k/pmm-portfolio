import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../components/Tag';
import { experience, skills } from '../content/experience';
import { formatMonth } from '../lib/format';

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Partnerships, media, product and growth."
        intro="Four roles, one thread: find out what the audience needs, then build the plan that reaches them."
      />
      <Container className="py-16">
        <ol className="relative space-y-6 border-l border-separator pl-6 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-8 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-accent sm:-left-[calc(2.5rem+5px)]"
              />
              <Reveal>
                <article className="rounded-card border border-separator bg-surface p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                      {job.company}
                      {job.parent && <span className="font-normal text-ink-3"> · {job.parent}</span>}
                    </h2>
                    <p className="text-ink-3">
                      <time dateTime={job.start}>{formatMonth(job.start)}</time>
                      {' – '}
                      <time dateTime={job.end}>{formatMonth(job.end)}</time>
                    </p>
                  </div>
                  <p className="mt-1 font-semibold text-ink-2">
                    {job.role} <span className="font-normal text-ink-3">· {job.location}</span>
                  </p>
                  <ul className="mt-5 space-y-2.5 text-ink-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden="true" className="mt-0.5 text-accent">
                          →
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>

      <section aria-labelledby="skills-title" className="border-t border-separator">
        <Container className="py-16">
          <SectionHeading id="skills-title" eyebrow="Toolkit" title="Skills" />
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-sans text-lg font-semibold text-ink">{g.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
