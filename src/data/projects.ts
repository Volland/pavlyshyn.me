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

export const research = [
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
