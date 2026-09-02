// Timeline data for /cv. Source: cv/pavlyshyn_cv_2026.pdf

export type Domain = 'graph' | 'identity' | 'agentic' | 'leadership' | 'frontend' | 'systems';

export const domains: { id: Domain; label: string }[] = [
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'graph', label: 'Graph systems' },
  { id: 'identity', label: 'Identity & trust' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'systems', label: 'Systems & scale' },
];

export interface Role {
  from: string;
  to: string;
  title: string;
  org: string;
  strap: string;
  domains: Domain[];
  bullets: string[];
}

export const roles: Role[] = [
  {
    from: '2025',
    to: 'Present',
    title: 'Founding Engineer · Senior Staff Engineer',
    org: 'Affinidi',
    strap: 'Privacy-preserving identity and verifiable data infrastructure — founding engineer, returning',
    domains: ['identity', 'agentic', 'leadership'],
    bullets: [
      'Returning founding engineer; partner with the CTO and founding team on technical vision and architecture for agent identity and trust protocols.',
      'Lead Office of CTO R&D initiatives: agent identity solutions, trust protocol specifications, agent reputation and trust registry design.',
      'Define and communicate an agent architecture education programme across the engineering organisation.',
    ],
  },
  {
    from: '2023',
    to: '2025',
    title: 'Founding Engineer · Principal Engineer / Architect',
    org: 'Mykin.ai (Kin)',
    strap: 'Privacy-first personal AI — local-first architecture, on-device ML, sovereign data',
    domains: ['agentic', 'graph', 'leadership'],
    bullets: [
      'Founding engineer; shaped technical vision alongside the CTO from the earliest stage and pioneered a local-first, edge-ML stack for mobile (React Native + Turso).',
      'Designed and delivered core semantic memory for AI agents: a personal knowledge graph with vector search and clustering, on-device.',
      'Established company-wide tech standards, a testing strategy for non-deterministic AI systems, and agentic data pipeline architecture.',
      'Contributed directly to a $2M investment round; represented technical architecture to investors.',
      'Partnered with Turso to enable vector search on mobile devices — a first for the platform.',
    ],
  },
  {
    from: '2020',
    to: '2023',
    title: 'Founding Engineer · Staff Engineer / SSI Architect',
    org: 'Affinidi',
    strap: 'Self-sovereign identity platform and verifiable credentials infrastructure',
    domains: ['identity', 'leadership', 'systems'],
    bullets: [
      'Founding engineer on the SSI platform; member of the architecture group and Office of CTO; led cross-company architectural reviews.',
      'Delivered a working COVID verifiable credentials platform from zero to live airport integration in Singapore in four weeks.',
      'Led L2-level DID/Sidetree protocol support for core identity services.',
      'Introduced an Architecture Decision Log and C4 documentation discipline across engineering.',
      'Performance-tuned the core SDK for 10k concurrent connections.',
      'Built the engineering recruitment process and technical interviewing standards.',
    ],
  },
  {
    from: '2020',
    to: '2020',
    title: 'Senior Engineer / Architect',
    org: '21re.de',
    strap: 'Smart geo-data platform for real-estate valuation and market analytics',
    domains: ['frontend', 'systems'],
    bullets: [
      'Designed a full-stack valuation system with a rule-based DSL and an incremental re-computation engine.',
      'Introduced XState/statechart-based modelling for the frontend: ~30% faster feature delivery and significant codebase reduction.',
      'Built observability infrastructure (AWS OpenDistro / ELK) and owned infrastructure maintenance.',
    ],
  },
  {
    from: '2018',
    to: '2020',
    title: 'Senior Engineer / Front-end Platform Owner',
    org: 'LiveIntent',
    strap: 'AdMarTech identity graph — 3M events per minute',
    domains: ['frontend', 'systems', 'identity'],
    bullets: [
      'Owned high-throughput JS data-feeder services at 3M events/min and drove reliability engineering.',
      'Architected a tag management application of Google Tag Manager class with sub-millisecond execution.',
      'Full-stack delivery from React frontend to Scala backend.',
    ],
  },
  {
    from: '2016',
    to: '2018',
    title: 'Lead Full-Stack Engineer',
    org: 'Zalando',
    strap: 'Transaction Core, Loyalty Platform, Checkout — serving 40M+ customers',
    domains: ['leadership', 'systems'],
    bullets: [
      'Architected and led Transaction Core, the order lifecycle backend serving the full Zalando customer base.',
      'Led migration of the checkout monolith to microservices (Mosaic9); improved reliability and release cadence.',
      'Built and led teams of 5–15 engineers; ran a 24/7 support organisation including the Black Friday war room.',
      'Co-ordinated integration across 18+ teams (~100 developers) for the loyalty programme rollout.',
      'Shipped real-time WebSocket services, secure payment flows, and multilingual order pages for 14M customers.',
    ],
  },
  {
    from: '2015',
    to: '2016',
    title: 'Lead Engineer / Big Data R&D',
    org: 'TomTom',
    strap: 'Geospatial and traffic analytics — large-scale graph data at scale',
    domains: ['graph', 'systems', 'frontend'],
    bullets: [
      'Designed a frontend visualisation platform for geospatial and traffic big data (React, TopoJSON/GeoJSON).',
      'Implemented memory-efficient GPS probe path-reconstruction algorithms in Java — graph traversal at scale.',
      'Prototyped traffic analytics across Python, C++, NodeJS and QGIS; owned binary big-data provider design.',
    ],
  },
  {
    from: '2014',
    to: '2015',
    title: 'Senior Web Developer',
    org: 'Smava.de',
    strap: 'Consumer fintech — credit comparison and origination',
    domains: ['frontend'],
    bullets: [
      'Owned a large-scale UX surface on Backbone and vanilla JS with measurable client-side performance gains.',
      'Integrated and tuned an in-house Java CMS (JSP / Spring MVC) while shipping new features on a legacy stack.',
    ],
  },
  {
    from: '2013',
    to: '2014',
    title: 'Technical Consultant / Senior Web Developer',
    org: 'lieferando.de',
    strap: 'Food-delivery marketplace — force.com and high-traffic web frontend',
    domains: ['frontend', 'systems'],
    bullets: [
      'Tuned initial-page performance by 60% on the discount/stamp-card feature.',
      'Built a company-wide customer feedback and survey system on force.com.',
      'Set up CI/CD delivery tooling for force.com.',
    ],
  },
  {
    from: '2012',
    to: '2013',
    title: 'Technical Consultant',
    org: 'Tquila',
    strap: 'Salesforce consultancy — enterprise SaaS and hybrid cloud delivery',
    domains: ['systems'],
    bullets: [
      'Delivered GIPSY, a single-page deal-flow and cross-border scheduling planner extending Salesforce.',
      'Architected Lab Forum, a Heroku-based reusable digital-forum framework for enterprise customers.',
      'Built STORM, a force.com recruitment platform covering the full HR workflow.',
    ],
  },
  {
    from: '2011',
    to: '2012',
    title: 'Senior / Lead Software Engineer',
    org: 'EPAM (for Credit Suisse)',
    strap: 'Equity derivatives and exotic-risk trading — distributed SOA with grid computation',
    domains: ['systems'],
    bullets: [
      'Performance-tuned WCF services on a large distributed SOA risk-management platform.',
      'Second-line 24/7 production support for a live trading system.',
    ],
  },
  {
    from: '2010',
    to: '2011',
    title: 'Technical Lead / Architect',
    org: 'SoftServe',
    strap: 'Web, SOA and SaaS security platforms — healthcare and public sector',
    domains: ['identity', 'leadership', 'systems'],
    bullets: [
      'Led a security sub-system redesign for healthcare and public-sector platforms; migration to Windows Identity Foundation and ADFS 2.0.',
      'Architected a personal-information management cloud product with rich object semantics across mixed media.',
      'Owned team management, technical interviewing, competence audit and estimation across multiple streams.',
    ],
  },
  {
    from: '2008',
    to: '2010',
    title: 'System / Cloud Solutions Architect',
    org: 'Eleks Software',
    strap: 'Scalable architecture and cloud migration across .NET / Azure',
    domains: ['systems', 'leadership'],
    bullets: [
      'Designed architecture for an MMOG platform serving 80,000+ concurrent users across 46 countries.',
      'Architected an iris-recognition cloud service: 10× fewer maintenance pitstops, 4× better recognition latency.',
      'Department-wide architecture auditor; led legacy cloud migration strategy and estimations of 10,000+ hours.',
    ],
  },
  {
    from: '2005',
    to: '2008',
    title: 'Software Engineer / Lead',
    org: 'Eleks Software',
    strap: 'Shared web platform and component libraries for e-government delivery',
    domains: ['systems', 'frontend'],
    bullets: [
      'Designed a shared web core platform powering 15+ e-government projects, used in mission-critical work from 2006 onward.',
      'Built a unified testing process that halved development time and cut full-regression cycles to under a day.',
      'Shipped a reusable client-side controls library with a declarative configuration model, in pure JavaScript.',
    ],
  },
  {
    from: '2002',
    to: '2005',
    title: 'Unix / Web Solutions Software Engineer',
    org: 'Freelance',
    strap: 'Independent delivery across web, desktop and Unix',
    domains: ['systems'],
    bullets: [
      'Web development, Win32 and Unix desktop development, and systems administration for SMB and education clients.',
      'Delivered e-learning platforms, e-commerce systems, reputation systems, and small-business CMS/CRM.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Special Computer Systems, with Honours',
    school: 'Lviv Polytechnic National University',
    years: '2006–2008',
  },
  {
    degree: 'Bachelor of System Engineering, with Honours',
    school: 'Lviv Polytechnic National University',
    years: '2003–2006',
  },
];

export const expertise = [
  {
    label: 'Architecture & systems design',
    body: 'Distributed graph systems · columnar and embedded databases · Semantic Spacetime ontology · bipartite knowledge graphs · HyperGraphRAG · HNSW vector search · Reciprocal Rank Fusion · local-first architecture',
  },
  {
    label: 'Agentic & AI infrastructure',
    body: 'Agent memory pipelines · semantic extraction-consolidation · promise-graph cooperation · agentic world models · multi-agent trust registries · LLM orchestration',
  },
  {
    label: 'Identity & trust protocols',
    body: 'Self-sovereign identity · DID methods (did:web, did:webvh, did:webs) · KERI · verifiable credentials · GLEIF vLEI · agent reputation systems',
  },
  {
    label: 'Languages & runtimes',
    body: 'Rust · TypeScript · Python · Go · Kotlin · Scala · C++ · Zig · Clojure — language chosen to fit the problem',
  },
];
