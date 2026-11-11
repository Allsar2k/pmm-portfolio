import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { navRoutes } from '../content/routes';
import { Container } from './Container';
import { Icon } from './Icon';
import { Monogram } from './Monogram';
import { ThemeToggle } from './ThemeToggle';

const links = navRoutes.filter((r) => r.path !== '/');

function navClass({ isActive }: { isActive: boolean }) {
  return `rounded-full px-3 py-2 text-[0.9375rem] font-medium transition ${
    isActive ? 'bg-raised text-ink' : 'text-ink-2 hover:text-ink'
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  // Close the menu after navigating: reset during render when the path changes.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Close on Escape, returning focus to the button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-separator bg-base/90 backdrop-blur supports-[backdrop-filter]:bg-base/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 rounded-lg font-semibold text-ink">
          <Monogram size={34} />
          <span className="text-[1.0625rem] tracking-tight">Chris Williams</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((r) => (
              <li key={r.path}>
                <NavLink to={r.path} className={navClass}>
                  {r.nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-2xl text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </Container>

      <nav
        id={menuId}
        aria-label="Main"
        hidden={!open}
        className="border-t border-separator bg-base lg:hidden"
      >
        <Container>
          <ul className="flex flex-col py-3">
            {links.map((r) => (
              <li key={r.path}>
                <NavLink
                  to={r.path}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-lg font-medium ${isActive ? 'bg-raised text-ink' : 'text-ink-2'}`
                  }
                >
                  {r.nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
