export interface Tool {
  name: string;
  slug: string;
  tagline: string;
  body: string;
  docs: string;
  repo: string;
  marketplace: string;
  plate: 'factum' | 'lpg' | 'causal';
}

export const thesis = {
  headline: 'Draw the model. Ship the text.',
  body: `Three VS Code extensions, one conviction. You model visually because a
  diagram is how a person understands structure — and then you commit plain,
  schema-validated JSON, because text is what diffs, merges, reviews and
  generates. The picture is a projection you can throw away and redraw. The
  model is the asset.`,
};

export const tools: Tool[] = [
  {
    name: 'Factum ORM',
    slug: 'factum-orm',
    tagline: 'Conceptual schemas in ORM 2 — drawn, verbalized, and checked.',
    body: `Object-Role Modeling describes a domain as elementary facts — *Person works
    for Company* — instead of tables or classes. Because those facts are
    attribute-free, every constraint is explicit and the whole model reads back as
    plain English sentences a domain expert can confirm or reject. Draw the schema,
    read the FORML verbalization, validate it, then map it to a relational **or** a
    property graph schema. In the spirit of NORMA, but native to VS Code.`,
    docs: 'https://www.factum-orm.com/',
    repo: 'https://github.com/Volland/factum-orm',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=pavlyshyn.factum-orm',
    plate: 'factum',
  },
  {
    name: 'LPG Modeler',
    slug: 'lpg-modeler',
    tagline: 'Design a property graph once. Generate every schema from it.',
    body: `Author a Labeled Property Graph schema as text, view it as an ERD-like
    diagram, and generate the artifacts from that single model: LadybugDB DDL, Neo4j
    constraints, SHACL shapes, and an OWL ontology. One source of truth instead of
    four drifting ones. VS Code extension and CLI.`,
    docs: 'https://volland.github.io/lpg-modeler/',
    repo: 'https://github.com/Volland/lpg-modeler',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=pavlyshyn.lpg-modeler',
    plate: 'lpg',
  },
  {
    name: 'Causal Canvas',
    slug: 'causal-canvas',
    tagline: 'Causal models that tell you when you are wrong.',
    body: `A visual editor for causal models whose real output is a plain,
    schema-validated JSON file — not a picture. It also knows what a causal model
    *means*: it will tell you when you are adjusting for a collider, when an
    instrument violates the exclusion restriction, and when your exposure has no
    path to your outcome at all.`,
    docs: 'https://causalcanvas.org',
    repo: 'https://github.com/Volland/causal-canvas',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=pavlyshyn.causal-canvas',
    plate: 'causal',
  },
];

// Open-source products — each gets a small page at /projects/<slug>.
export interface Product {
  name: string;
  slug: string;
  tagline: string;
  summary: string;
  body: string[];
  points: { label: string; body: string }[];
  sample?: { caption: string; code: string };
  home: { label: string; href: string };
  links: { label: string; href: string }[];
  plate: 'oxigraph' | 'shacl' | 'typedgraph' | 'tiramemsu';
  // 'memory' products form the Memory & agents line; the rest are graph tooling.
  group: 'memory' | 'tooling';
}

export const products: Product[] = [
  {
    name: 'OxigraphDB',
    slug: 'oxigraphdb',
    tagline: 'A graph database small enough to live where the agent lives.',
    summary:
      'An embeddable RDF / SPARQL graph database, built as the knowledge and memory layer for agentic AI running at the edge.',
    body: [
      `An agent that has to ask a cloud for its own memory does not really own it.
      OxigraphDB is an open-source, embeddable graph database for agentic AI at the
      edge: what the agent knows lives in a standards-based graph, next to the model,
      on the device.`,
      `RDF for the data, SPARQL for the questions, SHACL for the shape — so the memory
      is not a proprietary blob. It outlives the agent that wrote it, and any tool that
      speaks the standards can read it.`,
    ],
    points: [
      { label: 'Time travel', body: 'Queries over versioned graph state, so an agent can ask not only what is true, but what it knew at any point in time.' },
      { label: 'Datalog reasoning', body: 'A Datalog engine as a recursive reasoning layer: rule-based inference over the knowledge graph.' },
      { label: 'Edge first', body: 'Local-first, on-device agent memory with a lightweight footprint and no mandatory cloud dependency.' },
      { label: 'Standards, not formats', body: 'RDF, SPARQL and SHACL. Memory stays portable across agents, models and vendors.' },
    ],
    home: { label: 'Visit oxigraphdb.com', href: 'https://oxigraphdb.com' },
    links: [],
    plate: 'oxigraph',
    group: 'memory',
  },
  {
    name: 'TypedGraph',
    slug: 'typedgraph',
    tagline: 'A shared space for agents and humans.',
    summary:
      'Turns Markdown notes and code into a typed, validated knowledge graph that people and AI agents read and write together.',
    body: [
      `People keep what they know in notes and code. Agents keep it in a context
      window that is gone tomorrow. TypedGraph puts both in the same place: plain
      Markdown files in which every link is a typed, signed edge with properties — so
      a human reads a page and an agent queries a graph, and they are looking at the
      same thing.`,
      `The files stay the single source of truth. On top of them sit an openCypher
      query engine, vector search and GraphRAG, a CLI (tg) that validates the graph
      and flags drift between documentation and code, and an MCP server so Claude
      Code and other agents can use it as shared, institutional memory for a team.`,
    ],
    points: [
      { label: 'Typed, signed edges', body: 'Relationships carry a type, properties and a signature, written in plain Markdown syntax — validated against a schema.' },
      { label: 'Humans and agents, one graph', body: 'Works in Obsidian, VS Code and Cursor for people, and through an MCP server and the tg CLI for agents.' },
      { label: 'Query it', body: 'openCypher traversal, vector search and GraphRAG over the same files, with graph visualisation and query blocks inside notes.' },
      { label: 'Catches drift', body: 'Validation checks the graph against code and documentation, so shared context does not quietly go stale.' },
    ],
    home: { label: 'Visit typedgraph.org', href: 'https://typedgraph.org' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/obsigraph' },
      { label: 'VS Code extension', href: 'https://marketplace.visualstudio.com/items?itemName=pavlyshyn.typegraph-vscode' },
      { label: 'Obsidian plugin', href: 'https://community.obsidian.md/plugins/typed-graph' },
    ],
    plate: 'typedgraph',
    group: 'memory',
  },
  {
    name: 'Tiramemsu',
    slug: 'tiramemsu',
    tagline: 'Layered, never-forget memory for agents.',
    summary:
      'An embedded graph database on SQLite in which every fact has an id, so facts carry provenance and belief — and every change is kept with when it was made and when it was true.',
    body: [
      `A knowledge graph stores facts. An agent also has to say how sure it is, where it
      read something, what it concludes from it — and later, that it was wrong. Those
      are statements about statements. In Tiramemsu a fact is a row with its own id,
      and that id can be the subject of another statement: layers of provenance and
      belief, with no second data structure.`,
      `It is bitemporal — when the database believed something, and when it was true —
      and it never forgets: triggers inside the file reject deletes, so forgetting
      means retracting. SPARQL and openCypher share one store, and an MCP server
      hands the memory to Claude Code or any other client. One Rust library, one SQLite
      file, also running in the browser on WebAssembly.`,
    ],
    points: [
      { label: 'Layers', body: 'Provenance, confidence and beliefs stack to any depth. Retracting a fact retracts its layers; correcting it replays them.' },
      { label: 'Two clocks', body: 'Transaction time and valid time, with now, as_of, history and valid_at views — ask what the agent believed last Tuesday.' },
      { label: 'Never forgets', body: 'SQLite triggers reject DELETE and any second change to a row. Memory is corrected by superseding, never overwritten.' },
      { label: 'SPARQL and Cypher', body: 'One store, two query languages, one semantics. Metagraphs and named graphs are ordinary statements.' },
    ],
    home: { label: 'Visit tiramemsu.com', href: 'https://www.tiramemsu.com' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/tiramemsu' },
      { label: 'crates.io', href: 'https://crates.io/crates/tiramemsu' },
      { label: 'PyPI', href: 'https://pypi.org/project/tiramemsu/' },
    ],
    plate: 'tiramemsu',
    group: 'memory',
  },
  {
    name: 'shacl2cypher',
    slug: 'shacl2cypher',
    tagline: 'Validate a property graph with shapes, not hand-written queries.',
    summary:
      'Compiles W3C SHACL shapes into named, read-only Cypher that checks Neo4j, LadybugDB and FalkorDB and points at every broken rule.',
    body: [
      `SHACL is the W3C language for saying what a graph must look like — every
      Person has a name, works for at most one Company. shacl2cypher reads those
      shapes and compiles each constraint into a named, read-only Cypher query: one
      that lists the violations, and one that counts them.`,
      `It can run the queries itself against Neo4j 5, LadybugDB or FalkorDB and report
      what it finds as a table, JSON, JUnit or SARIF — so the same shapes that
      document a model can fail a CI build. A CLI in Rust, with Python and Node
      packages whose output is byte-identical to it.`,
    ],
    points: [
      { label: 'Read-only by construction', body: 'Neo4j queries run in a transaction that is always rolled back; LadybugDB files open read-only; FalkorDB uses GRAPH.RO_QUERY.' },
      { label: 'Most of SHACL Core', body: 'Cardinality, datatypes, ranges, patterns, sh:in, sh:closed, logical and qualified shapes, and property paths.' },
      { label: 'Deterministic output', body: 'A manifest with provenance and one structural rule id per constraint. Input order never changes a name or a query.' },
      { label: 'Tested against the standard', body: 'Conformance fixtures on all three engines, cross-checked with pySHACL, plus the W3C SHACL Core suite on Neo4j.' },
    ],
    sample: {
      caption: 'shacl2cypher validate shapes.ttl --ladybug graph.lbug --node-key id',
      code: `STATUS   SEVERITY   VIOLATIONS  RULE
failed   Violation           1  PersonShape.name.minCount
         - Person id=p3: Person needs a name
failed   Warning             1  PersonShape.name.pattern
failed   Violation           1  PersonShape.worksFor.maxCount

3 rules: 0 passed, 3 failed; 3 violations in 42 ms`,
    },
    home: { label: 'Read the documentation', href: 'https://volland.github.io/shacl2cypher/' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/shacl2cypher' },
      { label: 'SHACL on FalkorDB', href: 'https://volland.github.io/shacl2cypher/articles/falkordb.html' },
      { label: 'crates.io', href: 'https://crates.io/crates/shacl2cypher' },
      { label: 'PyPI', href: 'https://pypi.org/project/shacl2cypher/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/shacl2cypher' },
    ],
    plate: 'shacl',
    group: 'tooling',
  },
];

// Lean 4 libraries: the same memory work, with the parts that matter proved or
// checked by the compiler. Each has its own site; there is no page here.
export interface LeanProject {
  name: string;
  tagline: string;
  body: string;
  release?: string;
  home?: { label: string; href: string };
  links: { label: string; href: string }[];
}

export const lean: LeanProject[] = [
  {
    name: 'lean-elpi',
    tagline: 'λProlog inside Lean 4, with proofs the kernel checks.',
    body: `A clean-room Lean 4 implementation of ELPI, the λProlog dialect behind
    Coq-Elpi. Write tactics, commands and proof search as logic programs, share types
    and functions with Lean in both directions (deriving Elpi, elpi_extern), and turn
    what a search finds into a certificate Lean's kernel accepts. Runs all 24 of
    ELPI's own performance programs; also ships as a standalone binary and as Python,
    Node.js and Rust packages over one native library.`,
    release: 'v0.3.3',
    home: { label: 'volland.github.io/lean-elpi', href: 'https://volland.github.io/lean-elpi/' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/lean-elpi' },
      { label: 'PyPI', href: 'https://pypi.org/project/leanelpi/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@lean-elpi/leanelpi' },
      { label: 'crates.io', href: 'https://crates.io/crates/leanelpi' },
    ],
  },
  {
    name: 'lean-tiramemsu',
    tagline: 'Tiramemsu, ported to Lean 4 with its core semantics proven.',
    body: `The never-forget memory, with its claims machine-checked. The value codec,
    the store state machine — never forget, idempotent assert, supersede replay,
    bitemporal views as log replay — and the query semantics, including joins and
    paths, are proven; no sorry, no user axioms, no native_decide, enforced by a
    policy checker in CI. The SPARQL and Cypher front ends are differential-tested
    against the Rust build, which reads and writes the same files.`,
    links: [
      { label: 'Source', href: 'https://github.com/Volland/lean-tiramemsu' },
      { label: 'Tiramemsu', href: '/projects/tiramemsu' },
    ],
  },
  {
    name: 'typedb-lean',
    tagline: 'A TypeDB 3 client where a write in a read transaction does not compile.',
    body: `Read, write and schema transactions are different types; typeql! escapes
    every interpolated value, so user data cannot change a query's structure. A
    lightweight ORM (deriving Entity, deriving Relation), versioned migrations, and
    async runs through Std.Async — over the official C driver, and as fast as the
    Rust driver on scans and lookups.`,
    release: 'v0.1.0',
    home: { label: 'volland.github.io/typedb-lean', href: 'https://volland.github.io/typedb-lean/' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/typedb-lean' },
      { label: 'API reference', href: 'https://volland.github.io/typedb-lean/api/TypeDB.html' },
    ],
  },
  {
    name: 'ladybug-lean',
    tagline: 'Typed Cypher for LadybugDB, checked against your schema at compile time.',
    body: `Declare Lean structures as node and relationship tables; queries — written
    with a builder or as cypher% text — fail to compile on an unknown label, a wrong
    property type or a relationship whose endpoints do not match. NULL is in the
    types. The same program runs on the native database or on a pure in-memory graph
    in #eval, and a differential suite keeps the two in agreement.`,
    release: 'v0.1.0',
    home: { label: 'volland.github.io/ladybug-lean', href: 'https://volland.github.io/ladybug-lean/' },
    links: [
      { label: 'Source', href: 'https://github.com/Volland/ladybug-lean' },
      { label: 'Mini book', href: 'https://volland.github.io/ladybug-lean/book.html' },
    ],
  },
  {
    name: 'bulletproof-knowledge',
    tagline: 'Companion code for the book: a hallucination-resistant agent in Lean.',
    body: `Every snippet printed in Bulletproof Knowledge is cut from this repository,
    and every printed output is checked by #guard_msgs when it builds — if it is in
    the book, it compiles. A certified store for an agent's memory, rules in λProlog
    through lean-elpi, and a Chapter 12 agent that catches six kinds of hallucination
    and says which rule each one broke. No Mathlib; one lake build.`,
    links: [
      { label: 'Source', href: 'https://github.com/Volland/bulletproof-knowledge' },
      { label: 'The book', href: 'https://leanpub.com/bulletproofknowledge' },
    ],
  },
];

export interface Research {
  name: string;
  stars?: number;
  href: string;
  body: string;
  links?: { label: string; href: string }[];
}

export const research: Research[] = [
  {
    name: 'agentic-memory',
    stars: 11,
    href: 'https://github.com/Volland/agentic-memory',
    body: 'Multi-layered memory architectures for agents — episodic, semantic, procedural.',
  },
  {
    name: 'ladybug-rag',
    stars: 9,
    href: 'https://github.com/Volland/ladybug-rag',
    body: 'Reference implementation of Hybrid Graph RAG with LadybugDB, in Python.',
  },
  {
    name: 'ladybug-rag-rs',
    stars: 5,
    href: 'https://github.com/Volland/ladybug-rag-rs',
    body: 'Four retrieval modes in one query — vector search, graph traversal, PageRank and community detection. +109% on multi-hop questions against vector-only RAG.',
  },
];
