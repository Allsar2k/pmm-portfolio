import type images from './images.json';

export type ImageName = keyof typeof images;

export interface ImageRef {
  name: ImageName;
  /** Describes what the image shows; empty only for purely decorative images. */
  alt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Shown as visible text next to the icon, e.g. the handle. */
  handle: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'linktree' | 'mail';
}

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface Experience {
  company: string;
  parent?: string;
  role: string;
  location: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM
  highlights: string[];
}

export interface CaseProject {
  slug: string;
  title: string;
  context: string;
  outcome?: string;
  summary: string;
  role: string[];
  image: ImageRef;
  file: { path: string; kind: 'PDF' | 'PowerPoint'; bytes: number };
}

/**
 * A concept's status decides how its card renders. "planned" has no
 * repository yet, so it must never show a link that goes nowhere.
 */
export type ConceptStatus = 'planned' | 'in-progress' | 'published';

export interface Concept {
  slug: string;
  brand: string;
  kind: string;
  question: string;
  summary: string;
  deliverables: string[];
  status: ConceptStatus;
  repo: string;
  site?: string;
}

export interface CoreValue {
  name: string;
  body: string;
}

export interface Award {
  title: string;
  detail?: string;
  count?: number;
}
