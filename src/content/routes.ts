import data from './routes.json';

export interface RouteMeta {
  path: string;
  nav?: string;
  title: string;
  description: string;
}

export const site = data.site;
export const routes: RouteMeta[] = data.routes;
export const navRoutes = routes.filter((r): r is RouteMeta & { nav: string } => Boolean(r.nav));

export function metaFor(pathname: string): RouteMeta | undefined {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === clean);
}
