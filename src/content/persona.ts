import type { CoreValue, ImageRef } from './types';

export const coreValues: CoreValue[] = [
  {
    name: 'Creativity',
    body: 'To me, creativity means finding new ways to connect, inspire, and stand out—especially when the answer isn’t obvious. It’s about turning ideas into impact by thinking beyond the expected. I express creativity through storytelling, visuals, and strategy—whether it’s transforming a class project into an NBA-themed experience or using video games like The Sims to bring concepts to life. Creativity is how I make things memorable, meaningful, and different.',
  },
  {
    name: 'Ambition',
    body: 'To me, ambition is about having a vision for yourself and being willing to put in the work to make it real. Since my freshman year, I’ve been building my professional profile from the ground up. I didn’t wait for opportunities to come to me—I went out and found them. From researching companies to applying for internships early on, I knew I had to be proactive if I wanted to stand out. That drive has helped me grow, gain experience, and shape a path that reflects not just where I am, but where I’m going.',
  },
  {
    name: 'Empathy',
    body: 'Empathy, to me, means truly understanding and connecting with others’ experiences. Growing up in different cities exposed me to diverse cultures and taught me to value different perspectives. I brought that same mindset to my role at DoorDash, where I worked closely with local restaurant owners—listening to their stories, understanding their challenges, and showing how DoorDash could support their goals in a way that felt personal and respectful.',
  },
];

export const workingStyle = {
  body: 'My working style leans toward clear and straightforward communication, as I prefer low-context environments where expectations are direct. I’m comfortable giving and receiving constructive feedback in a direct manner, and I approach problem-solving from a principles-first mindset—starting with the “why” before moving into execution. I value egalitarian leadership and prefer working in collaborative spaces where everyone’s voice matters. When it comes to decision-making, I favor a consensual approach, striving for alignment across the team. I tend to build trust through consistent action and shared goals rather than relying solely on personal relationships. While I don’t shy away from open disagreement when necessary, I always aim to keep things professional and solutions-oriented. Lastly, I work best with structure and deadlines, preferring a linear view of time that keeps projects on track.',
  image: {
    name: 'persona-working-style',
    alt: 'Culture map showing Chris’s position on eight scales: communicating, evaluating, persuading, leading, deciding, trusting, disagreeing and scheduling. The paragraph beside it summarises where he sits on each.',
  } satisfies ImageRef,
  traits: [
    ['Communicating', 'Low-context'],
    ['Evaluating', 'Direct feedback'],
    ['Persuading', 'Principles first'],
    ['Leading', 'Egalitarian'],
    ['Deciding', 'Consensual'],
    ['Scheduling', 'Linear time'],
  ] as const,
};

export const peopleStyles = {
  body: 'According to my PeopleStyles results, I naturally lean toward the Amiable style, which means I lead with empathy, prioritize relationships, and value collaboration. I’m someone who listens, supports others, and fosters a sense of trust within teams. Interestingly, others often perceive me as more Expressive and occasionally Driver—seeing me as energetic, creative, and confident in taking initiative. This blend highlights my ability to adapt: I bring a calm, people-first approach while also stepping up as a dynamic leader when the moment calls for it.',
  image: {
    name: 'persona-peoplestyles',
    alt: 'PeopleStyles grid with four quadrants: Amiable, Expressive, Analytic and Driver. Chris’s self-rating sits in Amiable; most ratings from others fall in Expressive, with a few in Driver.',
  } satisfies ImageRef,
};
