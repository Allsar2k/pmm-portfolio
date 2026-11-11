import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * The only animation helper on the site: a short fade-and-rise as content
 * scrolls into view. With reduced motion it renders the content as is, so no
 * call site can forget the fallback.
 */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
