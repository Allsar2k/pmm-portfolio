import type { Experience } from './types';

export const experience: Experience[] = [
  {
    company: 'Twitch',
    parent: 'Amazon',
    role: 'Product Marketing Intern (Partnerships)',
    location: 'San Francisco, CA',
    start: '2025-06',
    end: '2025-08',
    highlights: [
      'Analyzed cross-platform user behavior and creator trends to uncover under-25 growth opportunities for acquisition',
      'Spearheaded end-to-end onboarding for 60+ creators, aligning talent managers and internal teams on launch milestones',
      'Orchestrated 5 creator launches across partnerships, marketing, and operations for creators with 1M+ followers',
      'Directed real-time operational support during live activations reaching up to 70K concurrent viewers',
      'Pitched data-driven recommendations to senior leadership that shaped creator growth and future acquisition strategy',
    ],
  },
  {
    company: 'Zenith',
    parent: 'Publicis Media',
    role: 'Program Manager Intern',
    location: 'New York, NY',
    start: '2024-06',
    end: '2024-08',
    highlights: [
      'Optimized a $60M media investment through campaign analysis and data-driven recommendations to senior leadership',
      'Refined audience targeting and channel strategy for Haleon brands Advil, Voltaren, and Excedrin via consumer insights',
      'Coordinated timelines and deliverables across 15 agency partners and internal stakeholders to drive campaign execution',
      'Earned a full-time return recommendation for analytical problem solving and cross-functional project execution',
    ],
  },
  {
    company: 'Augment.us',
    role: 'Product Marketing Manager & Product Manager',
    location: 'Tucson, AZ',
    start: '2024-01',
    end: '2025-05',
    highlights: [
      'Led a 5-person cross-functional team across 5 universities, owning product strategy, marketing, and execution',
      'Conducted quantitative and qualitative user research with 100+ students to pinpoint pain points and prioritize features',
      'Translated customer insights into product recommendations and feature priorities in partnership with company founders',
      'Bridged founders and university teams to align product priorities, deliverables, and execution timelines with business goals',
    ],
  },
  {
    company: 'DoorDash',
    role: 'Product Growth',
    location: 'Tucson, AZ',
    start: '2024-01',
    end: '2025-05',
    highlights: [
      'Launched data-informed campus marketing campaigns and activations that generated 1,400+ Student DashPass signups',
      'Secured 7 new restaurant partnerships by managing merchant onboarding from first outreach through platform launch',
      'Evaluated campaign performance and customer engagement trends to sharpen outreach strategy and boost regional adoption',
      'Presented platform solutions to local business owners, driving stronger merchant engagement and customer acquisition',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Growth',
    items: ['Growth Strategy', 'A/B Testing', 'Funnel Analysis', 'Audience Segmentation', 'Creator & Merchant Acquisition', 'Data Analysis'],
  },
  {
    group: 'Product Marketing',
    items: ['Go-to-Market Strategy', 'Positioning & Messaging', 'Competitive Analysis', 'Campaign Execution'],
  },
  {
    group: 'Product Management',
    items: ['Product Strategy', 'Product Operations', 'Product Analytics', 'User Research', 'Stakeholder Management'],
  },
  { group: 'Tools & Languages', items: ['Tableau', 'Jira', 'SQL', 'Python'] },
];
