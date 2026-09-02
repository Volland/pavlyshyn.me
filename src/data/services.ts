export interface Offer {
  name: string;
  shape: string;
  body: string;
  fit: string[];
}

export const offers: Offer[] = [
  {
    name: 'Agentic memory architecture',
    shape: 'Design partner, ongoing',
    body: `Designing the memory an agent actually needs: episodic, semantic and
    procedural layers, the knowledge-graph substrate underneath them, and the
    extraction-consolidation pipeline that keeps the whole thing from rotting. Plus
    retrieval that does more than nearest-neighbour — graph traversal, PageRank and
    community detection fused into one query.`,
    fit: [
      'Your agent forgets things it was told last week.',
      'Retrieval returns plausible chunks and the agent still cannot answer multi-hop questions.',
      'You have a vector store and have started to suspect that is not a memory.',
    ],
  },
  {
    name: 'Agent identity & trust',
    shape: 'Project or advisory',
    body: `Identity for agents, and trust between them. DID methods — did:web,
    did:webvh, did:webs — KERI, verifiable credentials, GLEIF vLEI, agent reputation
    and trust registry design. Built from founding-engineer work on a production SSI
    platform, including a COVID verifiable-credentials system taken from zero to a
    live airport integration in four weeks.`,
    fit: [
      'Your agents need to prove who they are to something that is not your own backend.',
      'You are designing a trust registry and want to know what breaks at scale.',
      'Someone said "just use OAuth" and you suspect that answer is incomplete.',
    ],
  },
  {
    name: 'Architecture review',
    shape: 'Time-boxed, written findings',
    body: `A senior read of an existing system, ending in a written document you can
    hand to your board or your team — what is sound, what will hurt, what to do
    first. Frequently the cheapest way to find out whether you need anything else on
    this page.`,
    fit: [
      'A system works but nobody can say why, or what happens next.',
      'You are about to commit to a data architecture you cannot easily undo.',
      'You need an outside opinion your team will actually respect.',
    ],
  },
  {
    name: 'Workshops & training',
    shape: 'Multi-day, on-site or remote',
    body: `Teaching engineering teams the material behind the books: agent
    architecture, knowledge graphs as agent memory, and local-first and edge AI. The
    same programme shape currently being built inside an engineering organisation
    rather than assembled for a conference slot.`,
    fit: [
      'Your team is shipping agents by pattern-matching on blog posts.',
      'You want a shared vocabulary before a big architectural decision, not after.',
      'You would rather your engineers learned this from someone who has shipped it.',
    ],
  },
];

export const howItWorks = [
  'A short call to work out what you actually need — often not what the enquiry said.',
  'A written proposal with scope, shape and price.',
  'The work, with whatever cadence of contact suits you.',
];
