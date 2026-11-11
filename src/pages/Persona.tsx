import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { coreValues, peopleStyles, workingStyle } from '../content/persona';

export default function Persona() {
  return (
    <>
      <PageHeader
        eyebrow="Persona"
        title="How I work, and what I won’t compromise on."
        intro="Three values, a working style built on clarity, and a people-first approach that steps up when it needs to."
      />

      <section aria-labelledby="values-title">
        <Container className="py-16">
          <SectionHeading id="values-title" eyebrow="Core values" title="Creativity, ambition, empathy" />
          <ul className="grid gap-5 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <li key={v.name} id={v.name.toLowerCase()} className="scroll-mt-24">
                <Reveal delay={i * 0.05} className="h-full">
                  <article className="h-full rounded-card border border-separator bg-surface p-6 sm:p-7">
                    <p aria-hidden="true" className="font-display text-5xl font-semibold text-accent">
                      0{i + 1}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-ink">{v.name}</h3>
                    <p className="mt-3 text-ink-2">{v.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="style-title" className="border-t border-separator">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading id="style-title" eyebrow="Working style" title="Clear, direct, principles first" />
            <dl className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {workingStyle.traits.map(([dimension, value]) => (
                <div key={dimension} className="flex flex-col rounded-xl bg-raised px-4 py-3">
                  <dt className="text-sm text-ink-3">{dimension}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-lg text-ink-2">{workingStyle.body}</p>
          </div>
          {/* The charts are white images, so their frame stays white in every theme. */}
          <figure className="overflow-hidden rounded-card border border-separator bg-white p-3">
            <Picture image={workingStyle.image} sizes="(min-width: 1024px) 34rem, 100vw" className="h-auto w-full" />
          </figure>
        </Container>
      </section>

      <section aria-labelledby="peoplestyles-title" className="border-t border-separator">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
          <figure className="order-last overflow-hidden rounded-card border border-separator bg-white p-3 lg:order-first">
            <Picture image={peopleStyles.image} sizes="(min-width: 1024px) 34rem, 100vw" className="h-auto w-full" />
          </figure>
          <div>
            <SectionHeading id="peoplestyles-title" eyebrow="PeopleStyles" title="Amiable at heart, Expressive in the room" />
            <p className="text-lg text-ink-2">{peopleStyles.body}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
