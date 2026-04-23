export interface ServiceItem {
  number: string
  title: string
  description: string
  timeline: string
  price: string
  tags: string[]
}

export interface CaseStudyItem {
  slug: string
  title: string
  category: 'Client' | 'Case Study'
  description: string
  metric: string
  stack: string[]
  valueProposition: string
  challenge: string
  solution: string
  outcome: string
  videoUrl?: string
  photos?: string[]
}

export const defaultServices: ServiceItem[] = [
  {
    number: '01',
    title: 'API Build Sprint',
    description:
      'From architecture to deployment, I build production-ready backend systems and REST APIs that give your product a reliable core.',
    timeline: 'Typical timeline: 2-4 weeks',
    price: 'Investment: $150-$5,000',
    tags: ['Django', 'Laravel', 'FastAPI', 'Java', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'AI Feature Integration',
    description:
      'I integrate LLM-powered capabilities into existing tools and workflows so your team can automate high-friction decisions and repetitive tasks.',
    timeline: 'Typical timeline: 1-3 weeks',
    price: 'Investment: $150-$5,000',
    tags: ['LLM Integrations', 'Gemini API', 'RAG', 'Prompt Workflows'],
  },
  {
    number: '03',
    title: 'Process Automation Build',
    description:
      'I replace spreadsheet-and-WhatsApp workflows with tailored internal tools that reduce manual steps and make operations predictable.',
    timeline: 'Typical timeline: scoped per workflow',
    price: 'Investment: $150-$5,000',
    tags: ['Workflow Design', 'Internal Tools', 'Automation', 'Web Apps'],
  },
]

export const defaultCaseStudies: CaseStudyItem[] = [
  {
    slug: 'automated-lead-qualiier-system',
    title: 'Automated Lead Qualiier system',
    category: 'Case Study',
    description:
      'Built a sales-conversion workflow that screens inbound leads, routes only qualified buyers to the team, and automates proposal follow-up.',
    metric: 'Reduced lead screening-to-match cycle time by about 50%',
    stack: ['Tally', 'Make.com', 'Airtable', 'Gmail', 'Slack', 'Claude'],
    valueProposition:
      'Improves conversion efficiency by helping the business focus on high-intent leads, respond faster, and reduce time wasted on low-quality prospects.',
    challenge:
      'The business was spending too much time manually screening leads, with many prospects failing qualification after long back-and-forth communication.',
    solution:
      'Implemented a 3-part automated pipeline: personalized first response with clear CTAs, instant proposal generation for qualified requests, and automated no-response status updates to keep the pipeline clean.',
    outcome:
      'The team now reviews fewer but better leads, reaches qualified prospects faster, and cut the lead handling cycle by about 50%.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    photos: [
      'https://picsum.photos/seed/leadflow-1/1200/750',
      'https://picsum.photos/seed/leadflow-2/1200/750',
      'https://picsum.photos/seed/leadflow-3/1200/750',
      'https://picsum.photos/seed/leadflow-4/1200/750',
      'https://picsum.photos/seed/leadflow-5/1200/750',
    ],
  },
]
