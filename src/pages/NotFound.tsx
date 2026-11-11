import { Link } from 'react-router';
import { ButtonLink } from '../components/Button';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { navRoutes } from '../content/routes';

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="This page isn’t here."
        intro="The link may be old, or the page may have moved when this site left Wix."
      />
      <Container className="py-12">
        <ButtonLink to="/" icon="arrowRight">
          Go to the home page
        </ButtonLink>
        <h2 className="mt-12 font-sans text-lg font-semibold text-ink">Or try one of these</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {navRoutes
            .filter((r) => r.path !== '/')
            .map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="prose-link">
                  {r.nav}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </>
  );
}
