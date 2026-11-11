import { Link } from 'react-router';
import type { CaseProject } from '../content/types';
import { formatBytes } from '../lib/format';
import { ButtonAnchor } from './Button';
import { Picture } from './Picture';
import { Tag } from './Tag';

const BASE = import.meta.env.BASE_URL;

export function ProjectCard({ project, compact = false }: { project: CaseProject; compact?: boolean }) {
  return (
    <article
      id={compact ? undefined : project.slug}
      aria-labelledby={`project-${project.slug}`}
      className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-card border border-separator bg-surface"
    >
      <div className="aspect-[16/9] overflow-hidden border-b border-separator bg-raised">
        <Picture
          image={project.image}
          sizes="(min-width: 1024px) 34rem, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-ink-3">
          {project.context}
          {project.outcome && (
            <>
              <span aria-hidden="true"> · </span>
              <span className="font-semibold text-accent">{project.outcome}</span>
            </>
          )}
        </p>
        <h3 id={`project-${project.slug}`} className="mt-2 text-2xl font-semibold text-ink">
          {compact ? (
            <Link to={`/projects#${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        {!compact && <p className="mt-3 text-ink-2">{project.summary}</p>}
        <ul aria-label="What I did" className="mt-4 flex flex-wrap gap-2">
          {project.role.map((r) => (
            <li key={r}>
              <Tag>{r}</Tag>
            </li>
          ))}
        </ul>
        {!compact && (
          <div className="mt-auto pt-6">
            <ButtonAnchor href={`${BASE}${project.file.path}`} variant="secondary" icon="download" download>
              Download {project.file.kind}
              <span className="font-normal text-ink-3">({formatBytes(project.file.bytes)})</span>
              <span className="sr-only">: {project.title}</span>
            </ButtonAnchor>
          </div>
        )}
      </div>
    </article>
  );
}
