// The Catalogue. One entry per work; translations are `edition`, not separate entries.
// Blurbs are DRAFTS written from the Leanpub descriptions and titles — review before launch.

export type Shelf = 'agents-graphs' | 'craft' | 'other-worlds';

export type ThemeId =
  | 'memory'
  | 'graph-substrate'
  | 'edge'
  | 'time'
  | 'identity'
  | 'logic'
  | 'retrieval';

export interface Edition {
  lang: 'uk';
  title: string;
  slug: string;
}

export interface Book {
  slug: string;
  title: string;
  blurb: string;
  shelf: Shelf;
  themes: ThemeId[];
  inProgress?: boolean;
  lang?: 'uk';
  edition?: Edition;
}

export const themes: { id: ThemeId; label: string }[] = [
  { id: 'memory', label: 'Agentic memory' },
  { id: 'graph-substrate', label: 'Graph substrate' },
  { id: 'retrieval', label: 'Retrieval' },
  { id: 'edge', label: 'Edge & local-first' },
  { id: 'time', label: 'Time' },
  { id: 'identity', label: 'Identity & trust' },
  { id: 'logic', label: 'Logic & types' },
];

export const shelves: { id: Shelf; label: string; note: string }[] = [
  {
    id: 'agents-graphs',
    label: 'Agents & Graphs',
    note: 'The core work — how an agent remembers, and what it remembers on.',
  },
  {
    id: 'craft',
    label: 'The Craft',
    note: 'On engineering itself: clarity, judgement, and what the code is a side effect of.',
  },
  {
    id: 'other-worlds',
    label: 'Other Worlds',
    note: 'Tea, yerba mate, and one techno-horror novella. Not everything is about graphs.',
  },
];

export const books: Book[] = [
  // ─── Agents & Graphs ────────────────────────────────────────────────
  {
    slug: 'ai-agents-memory',
    title: 'AI Agents Memory Empowered by Knowledge Graphs',
    blurb:
      'The starting point: why retrieval alone is not memory, and how a knowledge graph gives an agent something it can reason over instead of merely search.',
    shelf: 'agents-graphs',
    themes: ['memory', 'graph-substrate'],
  },
  {
    slug: 'beyondcontextgraphs',
    title: 'Beyond Context Graphs',
    blurb:
      'Agentic memory as a set of cognitive processes rather than a store — extraction, consolidation, and promise graphs for agents that cooperate without a central authority.',
    shelf: 'agents-graphs',
    themes: ['memory', 'graph-substrate'],
  },
  {
    slug: 'agenticworldmodels',
    title: 'World Models for AI Agents',
    blurb:
      'A structured representation of the environment an agent reasons about, and how to build one that supports decisions rather than descriptions.',
    shelf: 'agents-graphs',
    themes: ['memory', 'graph-substrate'],
  },
  {
    slug: 'time-aware-ai-memory',
    title: 'Temporal Aware AI Memory',
    blurb:
      'Time as a first-class dimension in agent memory: bi-temporal facts, decay, recency-aware retrieval, and causal ordering across episodic and semantic stores.',
    shelf: 'agents-graphs',
    themes: ['memory', 'time', 'retrieval'],
  },
  {
    slug: 'sst-4-agenticai',
    title: 'Semantic Space Time for AI Agent Ready Graphs',
    blurb:
      "Mark Burgess's Semantic Spacetime ontology — NEAR, LEADS-TO, CONTAINS, EXPRESSES — applied to build graphs whose semantics stay consistent under retrieval and reasoning.",
    shelf: 'agents-graphs',
    themes: ['graph-substrate', 'time'],
  },
  {
    slug: 'metagraphforaiagents',
    title: 'Metagraph for AI Agents',
    blurb:
      'Higher-order structure — edges over edges, hyperedges, reified relations — for agents that must reason about statements, not just facts. Bipartite encodings aligned with HyperGraphRAG.',
    shelf: 'agents-graphs',
    themes: ['graph-substrate', 'logic'],
  },
  {
    slug: 'dependenttypesdttlogicholforaiagentreadyknowledgegraphs',
    title: 'Dependent Types & Logic for AI Agent Ready Knowledge Graphs',
    blurb:
      'What dependent type theory and higher-order logic offer a knowledge graph: constraints that hold by construction, and models that cannot express nonsense.',
    shelf: 'agents-graphs',
    themes: ['logic', 'graph-substrate'],
  },
  {
    slug: 'edgeai-pocket-knowledgegraphs-on-user-device',
    title: 'Edge AI: Pocket Knowledge Graphs on User Device',
    blurb:
      'A knowledge graph that fits in a pocket. Local-first, privacy-first memory that ships as a file and runs in-process — no server, no network hop, nothing leaving the device.',
    shelf: 'agents-graphs',
    themes: ['edge', 'memory'],
  },
  {
    slug: 'ladybugdb',
    title: 'LadybugDB for Edge Agent AI Memory',
    blurb:
      'An embedded columnar graph database as the substrate for agent memory: how it stores, how it traverses, and why in-process changes what an agent can afford to ask.',
    shelf: 'agents-graphs',
    themes: ['edge', 'graph-substrate', 'memory'],
  },
  {
    slug: 'graphduck',
    title: 'GraphDuck: DuckDB for Embedded AI Agents and Graphs',
    blurb:
      'Graph workloads on a columnar analytical engine. What DuckDB gives you for free, where it needs help, and how far an embedded analytical store carries agent memory.',
    shelf: 'agents-graphs',
    themes: ['edge', 'graph-substrate'],
  },
  {
    slug: 'typedbforedgeaiagents',
    title: 'TypeDB for Edge AI Agents',
    blurb:
      'Strongly-typed knowledge graphs as on-device agent memory: PERA modelling, polymorphic entity-relation-attributes, and SHACL-style validation at the edge.',
    shelf: 'agents-graphs',
    themes: ['edge', 'logic', 'graph-substrate'],
  },
  {
    slug: 'cypher103withladybugdb',
    title: 'Cypher 103 with LadybugDB',
    blurb:
      'Cypher past the tutorials — the query patterns that actually come up when a graph is doing an agent’s remembering for it.',
    shelf: 'agents-graphs',
    themes: ['graph-substrate', 'retrieval'],
  },
  {
    slug: 'graphengineering',
    title: 'Graph Engineering: The Loop That Remembers',
    blurb:
      'The engineering loop around a graph that keeps learning: what to extract, what to consolidate, what to forget, and how to keep the whole thing honest over time.',
    shelf: 'agents-graphs',
    themes: ['memory', 'graph-substrate', 'time'],
  },
  {
    slug: 'fact-basedagents',
    title: 'Fact-Based Agents',
    blurb:
      'Elementary facts as the unit of agent knowledge. Attribute-free modelling that a domain expert can read back as sentences — and an agent can reason over without guessing.',
    shelf: 'agents-graphs',
    themes: ['logic', 'graph-substrate'],
  },
  {
    slug: 'sovereign-ai-agents',
    title: 'Sovereign AI Agents',
    blurb:
      'Agents that own their memory, hold their own credentials, and never ask a cloud for permission to think. DIDs, verifiable credentials, and trust without a central authority.',
    shelf: 'agents-graphs',
    themes: ['identity', 'edge', 'memory'],
    inProgress: true,
  },
  {
    slug: 'rustygraphs-airedy',
    title: 'Rusty Graphs — AI Ready Graphs for Rust Developers',
    blurb:
      'Building agent-ready graph infrastructure in Rust: the crates, the trade-offs, and the parts you still have to write yourself.',
    shelf: 'agents-graphs',
    themes: ['graph-substrate', 'edge'],
    inProgress: true,
  },

  // ─── The Craft ──────────────────────────────────────────────────────
  {
    slug: 'clarityengineer',
    title: 'Clarity Engineer: Code Is the Side Effect',
    blurb:
      'The argument that an engineer’s real output is clarity, and the code is what falls out of it. What changes when you take that seriously.',
    shelf: 'craft',
    themes: [],
  },
  {
    slug: 'clarityforge',
    title: 'Clarity Forge: Local Coding Agent Done Right',
    blurb:
      'Building a coding agent that runs on your machine and earns its place in the loop — context, memory, and the discipline that keeps it useful past the demo.',
    shelf: 'craft',
    themes: [],
  },
  {
    slug: 'philosophical-wednesdays-with-ai-powered-architect',
    title: 'Philosophical Wednesdays with an AI Powered Architect',
    blurb:
      'Weekly arguments with a machine about architecture, meaning, and what we are actually doing. Less a manual than a record of thinking out loud.',
    shelf: 'craft',
    themes: [],
  },

  // ─── Other Worlds ───────────────────────────────────────────────────
  {
    slug: 'qi-book',
    title: 'Qi: The Neuroscience, Chemistry, and Microbiology of Tea Meditation',
    blurb:
      'What is actually happening — in the leaf, in the gut, and in the nervous system — when tea is used as a method of meditation rather than a drink.',
    shelf: 'other-worlds',
    themes: [],
    edition: {
      lang: 'uk',
      title: 'Ці — нейронаука, хімія та психологія чайної медитації',
      slug: 'qi-au',
    },
  },
  {
    slug: 'yerbamatehaking-ua',
    title: 'Ерва Мате для Характерників',
    blurb:
      'Yerba mate, taken seriously: preparation, chemistry, and ritual. Written in Ukrainian.',
    shelf: 'other-worlds',
    themes: [],
    lang: 'uk',
  },
  {
    slug: '97-',
    title: '97%',
    blurb:
      'A techno-horror novella. Two prequels — 87% and 37% — are published on Leaflet.',
    shelf: 'other-worlds',
    themes: [],
  },
];

export const leanpubUrl = (slug: string) => `https://leanpub.com/${slug}`;
export const coverUrl = (slug: string) => `/covers/${slug}.jpg`;
