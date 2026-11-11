import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  level?: 2 | 3;
}) {
  const H = `h${level}` as const;
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <H id={id} className="text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </H>
      {intro && <div className="mt-4 text-lg text-ink-2">{intro}</div>}
    </div>
  );
}
