import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { metaFor, site } from '../content/routes';

/** Runs `then` with the element once it exists; lazy pages render a few frames after navigation. */
function whenPresent(find: () => HTMLElement | null, then: (el: HTMLElement) => void) {
  let frames = 0;
  let id = 0;
  const tick = () => {
    const el = find();
    if (el) then(el);
    else if (frames++ < 60) id = requestAnimationFrame(tick);
  };
  tick();
  return () => cancelAnimationFrame(id);
}

export function Layout() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta?.title ?? `Page not found · ${site.name}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta?.description ?? site.description);

    if (hash) {
      return whenPresent(
        () => document.getElementById(decodeURIComponent(hash.slice(1))),
        (el) => {
          el.scrollIntoView();
          first.current = false;
        },
      );
    }
    // On the first load the browser handles focus and scroll itself. After an
    // in-app navigation, start at the top and move focus to the new page's h1
    // so screen reader users hear where they landed.
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    return whenPresent(
      () => document.querySelector<HTMLElement>('main h1'),
      (h1) => h1.focus({ preventScroll: true }),
    );
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-accent px-5 py-3 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
