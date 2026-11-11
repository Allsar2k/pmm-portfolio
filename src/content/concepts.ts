import type { Concept } from './types';

/**
 * The product marketing concepts. Each lives in its own repository with a
 * one-page site on GitHub Pages. A concept whose repository isn't public yet
 * must stay "planned" so its card never links somewhere that 404s.
 */
const GITHUB = 'https://github.com/Allsar2k';
const PAGES = 'https://allsar2k.github.io';

export const concepts: Concept[] = [
  {
    slug: 'apple',
    brand: 'Apple',
    kind: 'Vision Air · Launch',
    question: 'Who is a lighter, cheaper Vision for, and why would they wear it every day?',
    summary:
      'A launch plan for Apple Vision Air, an imagined lighter, lower-priced spatial computer for students and creators who need more screen in less space. Positioned on room, not reality: “Room to think. Wherever you are.”',
    deliverables: ['Target personas', 'Positioning statement', 'Messaging pillars', 'Go-to-market plan'],
    status: 'published',
    repo: `${GITHUB}/apple-launch-concept`,
    site: `${PAGES}/apple-launch-concept/`,
  },
  {
    slug: 'nike',
    brand: 'Nike',
    kind: '“Show Up” · Campaign',
    question: 'How does Nike become the brand of the run club?',
    summary:
      'A campaign built on one insight: the hardest part of running is showing up the first time. It targets Gen Z runners who join clubs for friends, not finish times, with the Pegasus as the shoe for every pace in the group.',
    deliverables: ['Audience segmentation', 'Competitive analysis', 'Channel-by-channel rollout'],
    status: 'published',
    repo: `${GITHUB}/nike-campaign-concept`,
    site: `${PAGES}/nike-campaign-concept/`,
  },
  {
    slug: 'spotify',
    brand: 'Spotify',
    kind: '“Graduation Day” · Growth',
    question: 'How do you keep students paying when the student discount ends?',
    summary:
      'A growth plan for Spotify’s most predictable churn moment: graduation, when the bill roughly doubles. A funnel model finds where graduates leave, and five ranked experiments aim to close each leak.',
    deliverables: ['Funnel analysis', 'A/B test hypotheses', 'Success metrics tied to retention'],
    status: 'published',
    repo: `${GITHUB}/spotify-growth-concept`,
    site: `${PAGES}/spotify-growth-concept/`,
  },
  {
    slug: 'apple-music',
    brand: 'Apple Music',
    kind: '“Second Listen” · Strategy',
    question: 'How does Apple Music win back iPhone owners who pay for Spotify?',
    summary:
      'A growth strategy to rival Spotify. Its lead is built on switching costs, not a better product, so this plan removes them one by one and pairs each with something only Apple can offer. The companion to “Graduation Day”: the same fight from the other side.',
    deliverables: ['Market share analysis', 'Target segments', 'Four growth levers', 'Roadmap and KPIs'],
    status: 'published',
    repo: `${GITHUB}/apple-music-growth-strategy`,
    site: `${PAGES}/apple-music-growth-strategy/`,
  },
];

export const conceptBySlug = (slug: string | undefined) => concepts.find((c) => c.slug === slug);
