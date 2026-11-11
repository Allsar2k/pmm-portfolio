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
        title="Three brands. Three go-to-market problems."
        intro="Each concept is a complete product marketing plan for a real brand: who it is for, what it says, and how it reaches them. Each one lives in its own repository so the thinking is open to read."
      />
      <Container className="py-16">
        <ul className="grid gap-5 md:grid-cols-3">
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
