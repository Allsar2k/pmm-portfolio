import type { Concept } from './types';

/**
 * The three product marketing concepts. Each will live in its own repository;
 * until one is public its status stays "planned" and the card shows no link.
 */
export const concepts: Concept[] = [
  {
    slug: 'apple',
    brand: 'Apple',
    kind: 'Launch concept',
    question: 'Who is this launch for, and why should they believe it?',
    summary:
      'An Apple product launch built from the customer out: who it is for, what it claims, and how it reaches them.',
    deliverables: ['Target personas', 'Positioning statement', 'Messaging pillars', 'Go-to-market plan'],
    status: 'planned',
    repo: 'https://github.com/Allsar2k/apple-launch-concept',
  },
  {
    slug: 'nike',
    brand: 'Nike',
    kind: 'Campaign concept',
    question: 'Which audience moves first, and where do we meet them?',
    summary:
      'A Nike campaign that segments the audience, sizes up the competition and rolls out channel by channel.',
    deliverables: ['Audience segmentation', 'Competitive analysis', 'Channel-by-channel rollout'],
    status: 'planned',
    repo: 'https://github.com/Allsar2k/nike-campaign-concept',
  },
  {
    slug: 'spotify',
    brand: 'Spotify',
    kind: 'Growth concept',
    question: 'Where does the funnel leak, and what would we test first?',
    summary:
      'A Spotify growth plan that finds the drop-off in the funnel and tests its way to better retention.',
    deliverables: ['Funnel analysis', 'A/B test hypotheses', 'Success metrics tied to retention'],
    status: 'planned',
    repo: 'https://github.com/Allsar2k/spotify-growth-concept',
  },
];

export const conceptBySlug = (slug: string | undefined) => concepts.find((c) => c.slug === slug);
