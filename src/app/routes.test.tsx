import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axe from 'axe-core';
import { MemoryRouter } from 'react-router';
import { concepts } from '../content/concepts';
import { routes } from '../content/routes';
import { AppRoutes } from './App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

async function axeViolations(container: HTMLElement) {
  // jsdom has no layout or computed colours, so contrast is covered by
  // src/design/contrast.test.ts instead.
  const result = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
  return result.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
}

describe.each(routes.map((r) => r.path))('%s', (path) => {
  it('renders exactly one h1 and passes axe', async () => {
    const { container } = renderAt(path);
    const h1s = await screen.findAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(await axeViolations(container)).toEqual([]);
  });
});

it('shows the not-found page for unknown paths', async () => {
  renderAt('/does-not-exist');
  expect(await screen.findByRole('heading', { level: 1, name: /isn’t here/ })).toBeInTheDocument();
});

it('links each concept to its repository only once it is published', async () => {
  for (const c of concepts) {
    const { unmount } = renderAt(`/concepts/${c.slug}`);
    await screen.findByRole('heading', { level: 1 });
    const repoLink = document.querySelector(`a[href="${c.repo}"]`);
    if (c.status === 'planned') expect(repoLink).toBeNull();
    else expect(repoLink).not.toBeNull();
    if (c.status === 'published' && c.site) expect(document.querySelector(`a[href="${c.site}"]`)).not.toBeNull();
    unmount();
  }
});

it('has a pre-rendered route for every concept', () => {
  for (const c of concepts) expect(routes.map((r) => r.path)).toContain(`/concepts/${c.slug}`);
});

it('opens and closes the mobile menu with its button and Escape', async () => {
  const user = userEvent.setup();
  renderAt('/');
  const button = screen.getByRole('button', { name: 'Menu' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  await user.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  const menu = document.getElementById(button.getAttribute('aria-controls') ?? '');
  expect(menu).not.toBeNull();
  expect(within(menu as HTMLElement).getByRole('link', { name: 'Projects' })).toBeVisible();
  await user.keyboard('{Escape}');
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button).toHaveFocus();
});
