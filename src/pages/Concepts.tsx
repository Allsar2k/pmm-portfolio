import { ConceptCard } from '../components/ConceptCard';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { concepts } from '../content/concepts';

export default function Concepts() {
  return (
    <>
      <PageHeader
        eyebrow="Product marketing concepts"
        title="Four brands. Four go-to-market problems."
        intro="A launch, a campaign, a retention plan and a growth strategy for real brands: who each is for, what it says, and how it reaches them. Each lives in its own repository, with its own design system and a one-page site."
      />
      <Container className="py-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {concepts.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={i * 0.05} className="h-full">
                <ConceptCard concept={c} headingLevel={2} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-ink-3">
          These are independent concepts for learning and discussion. They are not affiliated with or endorsed by
          Apple, Nike or Spotify.
        </p>
      </Container>
    </>
  );
}
