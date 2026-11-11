import type { Award, ImageRef } from './types';

export const awards: Award[] = [
  {
    title: 'Eller African American Honorary Top 50 Scholar',
    detail: 'Recognised three times',
    count: 3,
  },
  { title: 'Altria Values in Action Scholar' },
  { title: 'Senior Nebula Award' },
  { title: 'Social Justice and Public Policy Award' },
];

export const caseWins: Award[] = [
  { title: 'Dry Heat Co Case Competition', detail: '1st place' },
  { title: 'Eller School-Wide Case Competition', detail: '1st place' },
  { title: 'BCOM 314 Case Competition', detail: '1st place in presentation room' },
];

export const education = {
  school: 'University of Arizona, Eller College of Management',
  degree: 'Bachelor of Science in Business Administration',
  graduated: 'May 2026',
  gpa: '3.5',
  image: {
    name: 'eller',
    alt: 'The Eller College of Management building at the University of Arizona at sunset.',
  } satisfies ImageRef,
};

export const leadership = [
  { title: 'AdCats', detail: 'Vice President' },
  { title: 'Eller Diversity Leadership Council', detail: 'Mentor' },
  { title: 'GRAMMY U', detail: 'Member since 2024' },
  { title: 'KAMP Student Radio' },
  { title: 'UA Men’s Lacrosse' },
];
