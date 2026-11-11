import images from '../content/images.json';
import type { ImageRef } from '../content/types';

const BASE = import.meta.env.BASE_URL;

/**
 * Responsive WebP image with its intrinsic size set, so the browser reserves
 * the space before it loads and the layout does not jump.
 */
export function Picture({
  image,
  sizes,
  priority = false,
  className = '',
  decorative = false,
}: {
  image: ImageRef;
  sizes: string;
  priority?: boolean;
  className?: string;
  decorative?: boolean;
}) {
  const meta = images[image.name];
  const srcSet = meta.widths.map((w) => `${BASE}images/${image.name}-${w}.webp ${w}w`).join(', ');
  const fallback = `${BASE}images/${image.name}-${meta.widths[0]}.webp`;
  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={meta.width}
      height={meta.height}
      alt={decorative ? '' : image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={className}
    />
  );
}
