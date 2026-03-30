export interface ServiceItem {
  number: string
  title: string
  description: string
  timeline: string
  tags: string[]
}

export interface CaseStudyItem {
  title: string
  category: string
  description: string
  metric: string
  stack: string[]
  href: string
}

export const defaultServices: ServiceItem[] = [
  {
    number: '01',
    title: 'API Build Sprint',
    description:
      'From architecture to deployment, I build production-ready backend systems and REST APIs that give your product a reliable core.',
    timeline: 'Typical timeline: 2-4 weeks',
    tags: ['Django', 'Laravel', 'FastAPI', 'Java', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'AI Feature Integration',
    description:
      'I integrate LLM-powered capabilities into existing tools and workflows so your team can automate high-friction decisions and repetitive tasks.',
    timeline: 'Typical timeline: 1-3 weeks',
    tags: ['LLM Integrations', 'Gemini API', 'RAG', 'Prompt Workflows'],
  },
  {
    number: '03',
    title: 'Process Automation Build',
    description:
      'I replace spreadsheet-and-WhatsApp workflows with tailored internal tools that reduce manual steps and make operations predictable.',
    timeline: 'Typical timeline: scoped per workflow',
    tags: ['Workflow Design', 'Internal Tools', 'Automation', 'Web Apps'],
  },
]

export const defaultCaseStudies: CaseStudyItem[] = [
  {
    title: 'FeverDiff AI',
    category: 'Healthcare AI',
    description:
      "Built an AI differential diagnosis assistant tailored to Ghana's disease context to support faster first-pass triage decisions.",
    metric: '~75% average diagnostic accuracy',
    stack: ['MedGemma', 'Gemini 2.5', 'FastAPI', 'Modal Labs'],
    href: 'https://portfolio.grandkojo.my/projects/feverdiff-ai',
  },
  {
    title: 'Hub Map GH',
    category: 'Community Platform',
    description:
      "Launched a community-maintained ecosystem directory for Ghana's tech hubs, creating shared visibility for founders and builders.",
    metric: '19 verified listings at launch',
    stack: ['Next.js', 'Firebase', 'Gemini Pro', 'Leaflet'],
    href: 'https://portfolio.grandkojo.my/projects/hubmap',
  },
  {
    title: 'EpiScope',
    category: 'Public Health Analytics',
    description:
      'Developed an outbreak monitoring and prediction platform combining ML forecasts and contextual AI summaries for public health teams.',
    metric: '84% outbreak prediction accuracy',
    stack: ['Django', 'XGBoost', 'Gemini', 'PostgreSQL'],
    href: 'https://portfolio.grandkojo.my/projects/episcope',
  },
]
