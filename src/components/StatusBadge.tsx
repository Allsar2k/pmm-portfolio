import type { ConceptStatus } from '../content/types';
import { Icon, type IconName } from './Icon';

// Each status pairs a written label with its own glyph, so it never relies on colour.
const statuses: Record<ConceptStatus, { label: string; icon: IconName }> = {
  planned: { label: 'Coming soon', icon: 'clock' },
  'in-progress': { label: 'In progress', icon: 'dot' },
  published: { label: 'Published', icon: 'check' },
};

export function StatusBadge({ status }: { status: ConceptStatus }) {
  const s = statuses[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-separator px-3 py-1 text-sm font-medium text-ink-2">
      <Icon name={s.icon} />
      {s.label}
    </span>
  );
}
