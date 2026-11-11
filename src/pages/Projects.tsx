import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Picture } from '../components/Picture';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { designs, projects } from '../content/projects';

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case work, from first idea to final pitch."
        intro="Case competitions, client proposals and brand plans. Every deck is here to download."
      />
      <Container className="py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <Reveal className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>

      <section aria-labelledby="designs-title" className="border-t border-separator">
        <Container className="py-16">
          <SectionHeading
            id="designs-title"
            eyebrow="Graphic design"
            title="Designs"
            intro="Social graphics made for campaign and event concepts."
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {designs.map((d) => (
              <li key={d.name}>
                <figure className="overflow-hidden rounded-card border border-separator bg-raised">
                  <Picture image={d} sizes="(min-width: 640px) 34rem, 100vw" className="aspect-square h-auto w-full object-cover" />
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
