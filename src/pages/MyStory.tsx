import { ButtonLink } from '../components/Button';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { journey, story, storyImages, whatsNext } from '../content/story';

export default function MyStory() {
  const [lacrosse, family] = storyImages;
  return (
    <>
      <PageHeader
        eyebrow="My Story"
        title="Dallas, Toronto, and a lot of moving in between."
        intro="Sports taught me to compete. Music and gaming showed me where I wanted to compete."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="space-y-6 text-lg text-ink-2">
          {story.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 self-start lg:grid-cols-1">
          {lacrosse && (
            <figure className="overflow-hidden rounded-card border border-separator bg-raised">
              <Picture image={lacrosse} sizes="(min-width: 1024px) 24rem, 50vw" className="aspect-[4/5] h-auto w-full object-cover" />
            </figure>
          )}
          {family && (
            <figure className="overflow-hidden rounded-card border border-separator bg-raised">
              <Picture image={family} sizes="(min-width: 1024px) 24rem, 50vw" className="aspect-[4/5] h-auto w-full object-cover" />
            </figure>
          )}
        </div>
      </Container>

      <section aria-labelledby="journey-title" className="border-t border-separator">
        <Container className="py-16">
          <Reveal>
            <SectionHeading id="journey-title" eyebrow="From freshman year" title="Professional journey" />
          </Reveal>
          <div className="max-w-3xl space-y-6 text-lg text-ink-2">
            {journey.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="next-title" className="border-t border-separator bg-surface">
        <Container className="py-16">
          <Reveal>
            <SectionHeading id="next-title" eyebrow="Where I am now" title="What’s next" />
          </Reveal>
          <div className="max-w-3xl space-y-6 text-lg text-ink-2">
            {whatsNext.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/experience" icon="arrowRight">
              See my experience
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
