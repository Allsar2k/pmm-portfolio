import type { ElementType, ReactNode } from 'react';

/** The one container shape on the site. `raised` is the only emphasis level. */
export function Card({
  children,
  as: Tag = 'div',
  raised = false,
  className = '',
}: {
  children: ReactNode;
  as?: ElementType;
  raised?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={`rounded-card border border-separator ${raised ? 'bg-raised' : 'bg-surface'} ${className}`}
    >
      {children}
    </Tag>
  );
}
