// Essays published on this site, at /writing/<slug>. The feeds on /writing cover
// everything published elsewhere.

export interface Article {
  slug: string;
  title: string;
  standfirst: string;
  summary: string;
  date: string;
  iso: string;
  book: { title: string; href: string };
}

export const articles: Article[] = [
  {
    slug: 'lean-verifiable-agents',
    title: 'The LLM proposes. Lean decides.',
    standfirst:
      'Agents that remember make hallucinations permanent. Lean 4 gives them a small, fixed checker between the model and the memory — and a precise account of what it does and does not guarantee.',
    summary:
      'On Lean 4 and verifiable agents: certified memory, kernel-checked reasoning with λProlog, typed database access, and what a proof can and cannot promise.',
    date: '29 October 2026',
    iso: '2026-10-29',
    book: { title: 'Bulletproof Knowledge', href: 'https://leanpub.com/bulletproofknowledge' },
  },
];

export const article = (slug: string) => articles.find((a) => a.slug === slug)!;
