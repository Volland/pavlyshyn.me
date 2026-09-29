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
  plate: 'oxigraph' | 'shacl';
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
