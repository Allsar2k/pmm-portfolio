import type { CaseProject, ImageRef } from './types';

export const projects: CaseProject[] = [
  {
    slug: 'dry-heat-co',
    title: 'Dry Heat Co Case Competition',
    context: 'Case competition',
    outcome: '1st place',
    summary:
      'In the Dry Heat Co Case Competition, I was challenged to choose between adding a drive-through or a patio to enhance a restaurant’s customer experience. While my team was split, I proposed building a patio—emphasizing community, ambiance, and long-term brand value. To bring the idea to life, I used The Sims 4 to create a visual mockup, helping judges and teammates see the concept in action. The creative presentation and strategic thinking helped lead my team to win first place.',
    role: ['Recommendation', 'Visual mockup', 'Presentation'],
    image: { name: 'project-dry-heat', alt: 'Title slide reading “Dry Heat Roasting Co, presented by Chris Williams” beside an illustrated coffee shop storefront.' },
    file: { path: 'files/dry-heat-co-case-competition.pdf', kind: 'PDF', bytes: 3421977 },
  },
  {
    slug: 'netflix',
    title: 'Netflix New Business Plan',
    context: 'Class project',
    summary:
      'For a class project, I developed a new business idea for Netflix aimed at expanding its value beyond streaming. I analyzed market trends, customer behaviors, and competitive gaps, then proposed a strategic plan that introduced an interactive, community-driven feature to increase engagement and retention. The plan included branding, user experience flows, and monetization strategies. I presented the idea to faculty and peers, receiving strong feedback for innovation and execution.',
    role: ['Market analysis', 'UX flows', 'Monetization'],
    image: { name: 'project-netflix', alt: 'Title slide styled like the Netflix home screen, reading “Netflix Case” above a top-five row of problems the team diagnosed.' },
    file: { path: 'files/netflix-new-business-plan.pptx', kind: 'PowerPoint', bytes: 15930031 },
  },
  {
    slug: 'ej-gallo',
    title: 'E. & J. Gallo Analytics Report',
    context: 'Analytics report',
    summary:
      'I conducted an in-depth analytics report for E. & J. Gallo, focusing on consumer behavior, market trends, and brand performance. Using tools like Tableau and survey data, I identified key insights into audience preferences and purchasing patterns. The final report included data visualizations and strategic recommendations to support marketing and product decisions. It was presented to peers and evaluated by industry professionals for clarity, depth, and actionable takeaways.',
    role: ['Tableau', 'Survey analysis', 'Recommendations'],
    image: { name: 'project-gallo', alt: 'Memo header for an analytics report to E and J Gallo Winery from Chris Williams: wine data preliminary analysis.' },
    file: { path: 'files/ej-gallo-analytics-report.pdf', kind: 'PDF', bytes: 370574 },
  },
  {
    slug: 'western-national-parks',
    title: 'Western National Parks Association',
    context: 'AdCats client proposal',
    summary:
      'As Vice President of AdCats, I was part of leading the development and presentation of a summer campaign media proposal for the Western National Parks Association. I helped guide the team through audience research, media planning, and creative strategy to design a campaign focused on increasing engagement with younger audiences. I also played a key role in presenting the final proposal to WNPA leadership, where it was praised for its strategic insight and creative execution.',
    role: ['Audience research', 'Media planning', 'Client pitch'],
    image: { name: 'project-wnpa', alt: 'Burnt-orange title slide: “Western National Parks Association, Summer Social Media Campaign Advice, AdCats.”' },
    file: { path: 'files/western-national-parks-media-proposal.pdf', kind: 'PDF', bytes: 15168943 },
  },
  {
    slug: 'hoka',
    title: 'HOKA Communication Plan',
    context: 'Group project',
    summary:
      'As part of a group project, my team and I developed a comprehensive final communication plan for HOKA. We analyzed the brand’s current reputation and market positioning, then crafted strategies to strengthen its image, particularly around sustainability and inclusivity. I contributed to the messaging framework, audience segmentation, and channel strategy to ensure our recommendations aligned with HOKA’s values and growth goals. The final plan was presented to our class and evaluated for clarity, creativity, and strategic depth.',
    role: ['Messaging framework', 'Segmentation', 'Channel strategy'],
    image: { name: 'project-hoka', alt: 'Title slide with the HOKA logo and the line “Run Renew Repeat.”' },
    file: { path: 'files/hoka-communication-plan.pdf', kind: 'PDF', bytes: 25052810 },
  },
  {
    slug: 'bcom-314',
    title: 'BCOM 314 Case Competition',
    context: 'Eller business communication',
    outcome: '1st place in room',
    summary:
      'As part of Eller College’s Business Communication course, I participated in a semester-long case competition where student teams developed strategic communication plans for real-world business challenges. My team created and presented a comprehensive proposal to industry judges—and we won first place in our presentation room, showcasing our ability to think critically, collaborate effectively, and communicate with impact.',
    role: ['Strategic communication', 'Team presentation'],
    image: { name: 'project-bcom314', alt: 'Title slide: “Chandler Symphony Orchestra Student Ambassador Program, fostering a new era of classical music appreciation,” over a photo of the orchestra.' },
    file: { path: 'files/bcom-314-case-competition.pdf', kind: 'PDF', bytes: 12521421 },
  },
];

export const designs: ImageRef[] = [
  { name: 'design-patio', alt: 'Social graphic for a downtown Tucson coffee shop: “Patio coming soon” over a photo of an outdoor patio with wooden chairs.' },
  { name: 'design-mocktails', alt: 'Event flyer: “Unscrewed Theaters presents Broadway in Tucson — free mocktails!” over a night skyline.' },
];
