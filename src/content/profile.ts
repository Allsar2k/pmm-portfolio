import type { SocialLink, Stat } from './types';

export const profile = {
  name: 'Chris Williams',
  role: 'Product Marketing',
  focus: 'Tech & Entertainment',
  location: 'San Francisco Bay Area',
  email: 'chrisewilliams23@gmail.com',
  claim: 'I turn user insight into launches that grow.',
  intro:
    'Product marketer with a growth streak, from creator partnerships at Twitch to campus growth at DoorDash. I start with the why, find the audience, and build the plan that gets them there.',
  snapshot: [
    'My name is Chris Williams, and I’m a 2026 graduate of the University of Arizona’s Eller College of Management, where I earned a Bachelor of Science in Business Administration.',
    'I’m passionate about building a career in marketing, specifically within the entertainment and tech industries, where I can leverage my creativity and strategic thinking.',
  ],
} as const;

export const stats: Stat[] = [
  { value: '60+', label: 'creators onboarded end to end', source: 'Twitch' },
  { value: '$60M', label: 'media investment optimized', source: 'Zenith · Publicis Media' },
  { value: '1,400+', label: 'Student DashPass signups', source: 'DoorDash' },
];

export const companies = ['Twitch', 'Zenith · Publicis Media', 'Augment.us', 'DoorDash'];

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/williams-chris/',
    handle: 'williams-chris',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/Allsar2k', handle: 'Allsar2k', icon: 'github' },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/Chris.williams12',
    handle: 'Chris.williams12',
    icon: 'linktree',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chris.will12/',
    handle: 'chris.will12',
    icon: 'instagram',
  },
];
