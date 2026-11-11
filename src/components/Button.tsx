import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Icon, type IconName } from './Icon';

type Variant = 'primary' | 'secondary';

const styles: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:brightness-110',
  secondary: 'border border-separator bg-surface text-ink hover:border-ink-3',
};

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.9375rem] font-semibold transition';

interface Props {
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
}

/** Internal navigation styled as a button. */
export function ButtonLink({ to, children, variant = 'primary', icon, className = '' }: Props & { to: string }) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {icon && <Icon name={icon} />}
    </Link>
  );
}

/** External link or file styled as a button. */
export function ButtonAnchor({
  href,
  children,
  variant = 'primary',
  icon,
  className = '',
  download,
  external,
}: Props & { href: string; download?: boolean; external?: boolean }) {
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(download ? { download: '' } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {icon && <Icon name={icon} />}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

export function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  type = 'button',
}: Props & { type?: 'button' | 'submit' }) {
  return (
    <button type={type} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {icon && <Icon name={icon} />}
    </button>
  );
}
