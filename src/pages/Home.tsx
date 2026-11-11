import { ButtonLink } from '../components/Button';
import { ConceptCard } from '../components/ConceptCard';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { Picture } from '../components/Picture';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { concepts } from '../content/concepts';
import { companies, profile, stats } from '../content/profile';
import { projects } from '../content/projects';
import { Link } from 'react-router';

const featured = projects.filter((p) => p.slug === 'dry-heat-co' || p.slug === 'hoka');

export function Home() {
  return (
    <>
      {/* Hero: the claim first, the proof right under it. */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-accent opacity-[0.08] blur-3xl"
        />
        <Container className="grid items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-24">
          <div>
            <p className="eyebrow mb-5">
              {profile.role} · {profile.focus}
            </p>
            <h1 id="hero-title" tabIndex={-1} className="text-5xl font-semibold text-ink outline-none sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 font-display text-2xl text-ink sm:text-3xl">{profile.claim}</p>
            <p className="mt-5 max-w-xl text-lg text-ink-2">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/concepts" icon="arrowRight">
                See the concepts
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-separator bg-raised">
              <Picture
                image={{ name: 'portrait', alt: 'Chris Williams smiling in a navy blazer and tie at an Eller College event.' }}
                sizes="(min-width: 1024px) 26rem, 80vw"
                priority
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
            <p className="absolute -bottom-4 left-4 rounded-full border border-separator bg-surface px-4 py-2 text-sm font-medium text-ink-2 shadow-sm">
              Eller College of Management · Class of 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Proof strip */}
      <section aria-labelledby="proof-title" className="border-y border-separator bg-surface">
        <Container className="py-10">
          <h2 id="proof-title" className="sr-only">
            Experience at a glance
          </h2>
          <ul aria-label="Companies" className="flex flex-wrap items-center gap-x-8 gap-y-3 text-lg font-semibold text-ink-3">
            {companies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col border-l-2 border-accent pl-4">
                <dt className="text-ink-2">
                  {s.label} <span className="text-ink-3">· {s.source}</span>
                </dt>
                <dd className="order-first font-display text-4xl font-semibold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Snapshot */}
      <section aria-labelledby="about-title">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading id="about-title" eyebrow="Snapshot" title="About me" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-5 text-lg text-ink-2">
              {profile.snapshot.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                <Link to="/my-story" className="prose-link font-semibold">
                  Read my story
                </Link>
                <span aria-hidden="true"> · </span>
                <Link to="/experience" className="prose-link font-semibold">
                  See my experience
                </Link>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Concepts */}
      <section aria-labelledby="concepts-title" className="border-t border-separator">
        <Container className="py-20">
          <Reveal>
            <SectionHeading
              id="concepts-title"
              eyebrow="Product marketing concepts"
              title="Three brands, three go-to-market problems."
              intro="Each concept is a full product marketing plan for a real brand, built in public in its own repository."
            />
          </Reveal>
          <ul className="grid gap-5 md:grid-cols-3">
            {concepts.map((c, i) => (
              <li key={c.slug}>
                <Reveal delay={i * 0.05} className="h-full">
                  <ConceptCard concept={c} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured projects */}
      <section aria-labelledby="projects-title" className="border-t border-separator">
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <SectionHeading id="projects-title" eyebrow="Case work" title="Selected projects" />
            </Reveal>
            <Link to="/projects" className="prose-link mb-8 inline-flex items-center gap-1.5 font-semibold">
              All six projects <Icon name="arrowRight" />
            </Link>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <li key={p.slug}>
                <Reveal className="h-full">
                  <ProjectCard project={p} compact />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
