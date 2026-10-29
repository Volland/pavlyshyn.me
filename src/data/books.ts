// The Catalogue. One entry per work; translations are `edition`, not separate entries.
// Blurbs are DRAFTS written from the Leanpub descriptions and titles — review before launch.
// `books` is the professional catalogue (/books). Personal-project books — tea, yerba
// mate, fiction — live in `otherBooks` and have their own page, /personal.

export type Shelf = 'memory' | 'modelling' | 'substrates' | 'practice';

// How to read it: 'deep' = cover to cover; 'quick' = skim, or dip into as a reference.
export type Depth = 'deep' | 'quick';

export type ThemeId =
  | 'memory'
  | 'graph-substrate'
  | 'edge'
  | 'time'
  | 'identity'
  | 'logic'
  | 'retrieval'
  | 'architecture';

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
  depth: Depth;
  // One line on why it sits in its depth — shown in the reading guide.
  readNote: string;
  inProgress?: boolean;
  lang?: 'uk';
  edition?: Edition;
}

export interface OtherBook {
  slug: string;
  title: string;
  blurb: string;
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
  { id: 'architecture', label: 'Architecture & impact' },
];

export const depths: Record<Depth, { label: string; note: string }> = {
  deep: {
    label: 'Read in depth',
    note: 'The arguments the rest of the work stands on. Read cover to cover, and expect to come back.',
  },
  quick: {
    label: 'Read quickly',
    note: 'Skim for the idea, then keep at hand as a reference for when the problem is in front of you.',
  },
};

export const shelves: { id: Shelf; label: string; note: string }[] = [
  {
    id: 'memory',
    label: 'Agent memory',
    note: 'Start here. What memory means for an agent, how it changes over time, and the engineering loop that keeps it honest.',
  },
  {
    id: 'modelling',
    label: 'Knowledge modelling',
    note: 'How to shape what an agent knows so it can reason over it, not just retrieve it.',
  },
  {
    id: 'substrates',
    label: 'Embedded & edge substrates',
    note: 'Hands-on handbooks for the databases memory runs on. Read the one for your stack; skim the rest.',
  },
  {
    id: 'practice',
    label: 'Architecture & practice',
    note: 'How engineering decisions turn into business outcomes: clarity, judgement, and working alongside agents.',
  },
];

export const books: Book[] = [
  // ─── Agent memory ───────────────────────────────────────────────────
  {
    slug: 'ai-agents-memory',
    title: 'AI Agents Memory Empowered by Knowledge Graphs',
    blurb:
      'The starting point: why retrieval alone is not memory, and how a knowledge graph gives an agent something it can reason over instead of merely search.',
    shelf: 'memory',
    themes: ['memory', 'graph-substrate'],
    depth: 'deep',
    readNote: 'The foundation — the vocabulary every other book assumes.',
  },
  {
    slug: 'beyondcontextgraphs',
    title: 'Beyond Context Graphs',
    blurb:
      'Agentic memory as a set of cognitive processes rather than a store — extraction, consolidation, and promise graphs for agents that cooperate without a central authority.',
    shelf: 'memory',
    themes: ['memory', 'graph-substrate'],
    depth: 'deep',
    readNote: 'Memory as process, not storage — the shift that changes the architecture.',
  },
  {
    slug: 'time-aware-ai-memory',
    title: 'Temporal Aware AI Memory',
    blurb:
      'Time as a first-class dimension in agent memory: bi-temporal facts, decay, recency-aware retrieval, and causal ordering across episodic and semantic stores.',
    shelf: 'memory',
    themes: ['memory', 'time', 'retrieval'],
    depth: 'deep',
    readNote: 'Most production memory bugs are time bugs. This is where they are solved.',
  },
  {
    slug: 'graphengineering',
    title: 'Graph Engineering: The Loop That Remembers',
    blurb:
      'The engineering loop around a graph that keeps learning: what to extract, what to consolidate, what to forget, and how to keep the whole thing honest over time.',
    shelf: 'memory',
    themes: ['memory', 'graph-substrate', 'time'],
    depth: 'deep',
    readNote: 'For teams running memory in production, not just designing it.',
  },
  {
    slug: 'agenticworldmodels',
    title: 'World Models for AI Agents',
    blurb:
      'A structured representation of the environment an agent reasons about, and how to build one that supports decisions rather than descriptions.',
    shelf: 'memory',
    themes: ['memory', 'graph-substrate'],
    depth: 'quick',
    readNote: 'A framing to borrow: read for the model of the environment, skip the detail until you need it.',
  },

  // ─── Knowledge modelling ────────────────────────────────────────────
  {
    slug: 'fact-basedagents',
    title: 'Fact-Based Agents',
    blurb:
      'Elementary facts as the unit of agent knowledge. Attribute-free modelling that a domain expert can read back as sentences — and an agent can reason over without guessing.',
    shelf: 'modelling',
    themes: ['logic', 'graph-substrate'],
    depth: 'deep',
    readNote: 'The modelling discipline that lets domain experts and agents share one model.',
  },
  {
    slug: 'metagraphforaiagents',
    title: 'Metagraph for AI Agents',
    blurb:
      'Higher-order structure — edges over edges, hyperedges, reified relations — for agents that must reason about statements, not just facts. Bipartite encodings aligned with HyperGraphRAG.',
    shelf: 'modelling',
    themes: ['graph-substrate', 'logic'],
    depth: 'deep',
    readNote: 'Provenance, context and statements about statements — read before you pick a schema.',
  },
  {
    slug: 'sst-4-agenticai',
    title: 'Semantic Space Time for AI Agent Ready Graphs',
    blurb:
      "Mark Burgess's Semantic Spacetime ontology — NEAR, LEADS-TO, CONTAINS, EXPRESSES — applied to build graphs whose semantics stay consistent under retrieval and reasoning.",
    shelf: 'modelling',
    themes: ['graph-substrate', 'time'],
    depth: 'quick',
    readNote: 'Four relation types worth knowing; the idea lands in a chapter.',
  },
  {
    slug: 'bulletproofknowledge',
    title: 'Bulletproof Knowledge',
    blurb:
      'Hallucination-resistant neurosymbolic agents in Lean 4 and λProlog. A fact enters memory only with a kernel-checked proof that memory stays consistent, and an answer leaves it only with a proof from what is stored. The LLM proposes; Lean decides.',
    shelf: 'modelling',
    themes: ['logic', 'memory', 'graph-substrate'],
    depth: 'deep',
    readNote: 'Where the modelling becomes provable — every snippet compiles, and the last chapter is a working agent.',
    inProgress: true,
  },
  {
    slug: 'dependenttypesdttlogicholforaiagentreadyknowledgegraphs',
    title: 'Dependent Types & Logic for AI Agent Ready Knowledge Graphs',
    blurb:
      'What dependent type theory and higher-order logic offer a knowledge graph: constraints that hold by construction, and models that cannot express nonsense.',
    shelf: 'modelling',
    themes: ['logic', 'graph-substrate'],
    depth: 'quick',
    readNote: 'Formal foundations — skim for the ideas, go deep only if you design the schema layer.',
  },

  // ─── Embedded & edge substrates ─────────────────────────────────────
  {
    slug: 'edgeai-pocket-knowledgegraphs-on-user-device',
    title: 'Edge AI: Pocket Knowledge Graphs on User Device',
    blurb:
      'A knowledge graph that fits in a pocket. Local-first, privacy-first memory that ships as a file and runs in-process — no server, no network hop, nothing leaving the device.',
    shelf: 'substrates',
    themes: ['edge', 'memory'],
    depth: 'deep',
    readNote: 'The architecture case for on-device memory — privacy, cost and latency together.',
  },
  {
    slug: 'ladybugdb',
    title: 'LadybugDB for Edge Agent AI Memory',
    blurb:
      'An embedded columnar graph database as the substrate for agent memory: how it stores, how it traverses, and why in-process changes what an agent can afford to ask.',
    shelf: 'substrates',
    themes: ['edge', 'graph-substrate', 'memory'],
    depth: 'quick',
    readNote: 'A handbook: read the first chapters, return when you build on it.',
  },
  {
    slug: 'typedbforedgeaiagents',
    title: 'TypeDB for Edge AI Agents',
    blurb:
      'Strongly-typed knowledge graphs as on-device agent memory: PERA modelling, polymorphic entity-relation-attributes, and SHACL-style validation at the edge.',
    shelf: 'substrates',
    themes: ['edge', 'logic', 'graph-substrate'],
    depth: 'quick',
    readNote: 'A handbook: the modelling chapters travel to any typed store.',
  },
  {
    slug: 'graphduck',
    title: 'GraphDuck: DuckDB for Embedded AI Agents and Graphs',
    blurb:
      'Graph workloads on a columnar analytical engine. What DuckDB gives you for free, where it needs help, and how far an embedded analytical store carries agent memory.',
    shelf: 'substrates',
    themes: ['edge', 'graph-substrate'],
    depth: 'quick',
    readNote: 'A handbook: useful when DuckDB is already in your stack.',
  },
  {
    slug: 'cypher103withladybugdb',
    title: 'Cypher 103 with LadybugDB',
    blurb:
      'Cypher past the tutorials — the query patterns that actually come up when a graph is doing an agent’s remembering for it.',
    shelf: 'substrates',
    themes: ['graph-substrate', 'retrieval'],
    depth: 'quick',
    readNote: 'A pattern catalogue — keep it open next to the editor.',
  },
  {
    slug: 'rustygraphs-airedy',
    title: 'Rusty Graphs — AI Ready Graphs for Rust Developers',
    blurb:
      'Building agent-ready graph infrastructure in Rust: the crates, the trade-offs, and the parts you still have to write yourself.',
    shelf: 'substrates',
    themes: ['graph-substrate', 'edge'],
    depth: 'quick',
    readNote: 'A survey of the Rust ecosystem — for Rust teams.',
  },

  // ─── Architecture & practice ────────────────────────────────────────
  {
    slug: 'clarityengineer',
    title: 'Clarity Engineer: Code Is the Side Effect',
    blurb:
      'The argument that an engineer’s real output is clarity, and the code is what falls out of it. What changes when you take that seriously.',
    shelf: 'practice',
    themes: ['architecture'],
    depth: 'deep',
    readNote: 'For architects and leads: how clear decisions, not more code, create business impact.',
  },
  {
    slug: 'clarityforge',
    title: 'Clarity Forge: Local Coding Agent Done Right',
    blurb:
      'Building a coding agent that runs on your machine and earns its place in the loop — context, memory, and the discipline that keeps it useful past the demo.',
    shelf: 'practice',
    themes: ['architecture', 'memory'],
    depth: 'quick',
    readNote: 'Practical setup for a hybrid human-and-agent workflow; read the parts you will use.',
  },
  {
    slug: 'philosophical-wednesdays-with-ai-powered-architect',
    title: 'Philosophical Wednesdays with an AI Powered Architect',
    blurb:
      'Weekly arguments with a machine about architecture, meaning, and what we are actually doing. Less a manual than a record of thinking out loud.',
    shelf: 'practice',
    themes: ['architecture'],
    depth: 'quick',
    readNote: 'Short essays — one at a time, in any order.',
  },
];

// Personal-project books: not part of the professional catalogue. Rendered on /personal.
export const otherBooks: OtherBook[] = [
  {
    slug: 'qi-book',
    title: 'Qi: The Neuroscience, Chemistry, and Microbiology of Tea Meditation',
    blurb:
      'What is actually happening — in the leaf, in the gut, and in the nervous system — when tea is used as a method of meditation rather than a drink.',
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
    lang: 'uk',
  },
  {
    slug: '97-',
    title: '97%',
    blurb:
      'A techno-horror novella.',
  },
];

// Books from a publisher, sold through a retailer rather than Leanpub. Each gets a page
// at /books/<slug>. The cover is public/covers/<slug>.jpg, from the retailer listing.
export interface PrintBook {
  slug: string;
  title: string;
  subtitle: string;
  publisher: string;
  published: string; // ISO
  pages: number;
  isbn10: string;
  isbn13: string;
  formats: string[];
  href: string;
  blurb: string;
  body: string[];
  features: string[];
  learn: string[];
  audience: string;
  // The Leanpub title on the same subject, if there is one.
  related?: string;
}

export const printBooks: PrintBook[] = [
  {
    slug: 'graph-engineering',
    title: 'Graph Engineering — The Loop Memory Model',
    subtitle: 'Give agentic workflows durable memory, traceability, and shared knowledge with graphs',
    publisher: 'Packt',
    published: '2026-10-19',
    pages: 138,
    isbn10: '1808812476',
    isbn13: '978-1808812477',
    formats: ['Paperback', 'Kindle'],
    href: 'https://www.amazon.com/dp/1808812476',
    blurb:
      'Agent loops are good at producing work, but the reasoning behind it disappears when the context window closes. This book moves that reasoning into a graph that outlives the run.',
    body: [
      `Agent loops are good at producing work, but the reasoning behind that work
      disappears the moment the context window closes. The next run starts from a
      transcript, or from nothing, and the decision that mattered last week is
      rediscovered — or contradicted — this week.`,
      `The book moves decisions, evidence and execution history out of transcripts and
      into an explicit graph. Markdown stays the source of truth; the graph is a query
      index you can rebuild, not a second copy that drifts. From there it walks through
      parsing a repository into the graph, resolving entities, retrieving small
      neighbourhoods within a token budget, checking claims against graph paths,
      coordinating parallel workers, and tracing lineage from an objective to the
      artifact that met it.`,
      `It ends on judgement: how to measure whether the graph is any good, how it
      fails, what it costs — and when an ADR log or a relational table is the better
      answer.`,
    ],
    features: [
      'Separate work history from durable knowledge with a two-graph architecture and clear bridge rules.',
      'Retrieve small, provenance-tracked context windows from graph paths, within token budgets.',
      'Run parallel workers with scoped promises, validated writes, reducer contracts and hard budgets.',
    ],
    learn: [
      'Choose between a loop, chain, swarm, DAG or graph architecture.',
      'Define schemas for work history and for current knowledge.',
      'Turn Markdown into a query index without making it a second source of truth.',
      'Give every assertion provenance, confidence and a validity interval.',
      'Use NEAR links to surface duplicates before they become contradictions.',
      'Build a time-aware context assembler.',
      'Check an evaluation’s claims against paths in the graph.',
      'Measure graph quality — and know when not to build one.',
    ],
    audience:
      'Senior software engineers, AI and agent engineers, software architects and platform teams already experimenting with agent loops, coding agents or multi-agent workflows.',
    related: 'graphengineering',
  },
];

export const leanpubUrl = (slug: string) => `https://leanpub.com/${slug}`;
export const coverUrl = (slug: string) => `/covers/${slug}.jpg`;

export const readingPaths = [
  {
    label: 'Start here',
    slug: 'ai-agents-memory',
    reader: 'For anyone designing their first agent memory system.',
    outcome: 'Understand where retrieval ends and memory begins, and how a knowledge graph helps an agent reason.',
  },
  {
    label: 'For working engineers',
    slug: 'graphengineering',
    reader: 'For engineers maintaining a graph that changes over time.',
    outcome: 'Explore the loop of extraction, consolidation and forgetting that keeps agent memory useful.',
  },
  {
    label: 'For architects and leads',
    slug: 'clarityengineer',
    reader: 'For architects and engineering leads accountable for outcomes, not output.',
    outcome: 'See how clear decisions — not more code — are what move the business.',
  },
].map((path) => ({ ...path, book: books.find((book) => book.slug === path.slug)! }));
