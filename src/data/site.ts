export const site = {
  name: 'Volodymyr Pavlyshyn',
  role: 'Principal Engineer · Graph Systems & Agent Infrastructure',
  location: 'Berlin',
  email: 'pavlyshyn@gmail.com',
  // TODO(volodymyr): replace with your real Cal.com / Calendly link before launch.
  booking: '',
};

export const channels = [
  {
    label: 'Substack',
    name: 'Sovereign Agentic AI',
    href: 'https://volodymyrpavlyshyn.substack.com/',
    note: 'Deep dives on agentic memory, world models, and hybrid graph RAG.',
    feed: 'https://volodymyrpavlyshyn.substack.com/feed',
  },
  {
    label: 'YouTube',
    name: 'Volodymyr Pavlyshyn',
    href: 'https://www.youtube.com/c/VolodymyrPavlyshyn',
    note: 'Talks and walkthroughs.',
    // YouTube returns 404 for this channel's RSS feed (channel_id and user forms
    // both checked — the id UCBeRywoMp1y4Trynmgp6kow is correct). Rendered as a
    // link card until YouTube serves it again; restore the URL here to re-enable.
    feed: '',
  },
  {
    label: 'Medium',
    name: '@volodymyrpavlyshyn',
    href: 'https://medium.com/@volodymyrpavlyshyn',
    note: 'Technical articles.',
    feed: 'https://medium.com/feed/@volodymyrpavlyshyn',
  },
];

export const elsewhere = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavlyshyn/' },
  { label: 'GitHub', href: 'https://github.com/Volland' },
  { label: 'Leanpub', href: 'https://leanpub.com/u/vpavlyshyn' },
  { label: 'Mastodon', href: 'https://fosstodon.org/@vpavlyshyn' },
];

export const nav = [
  { href: '/books', label: 'Books' },
  { href: '/projects', label: 'Projects' },
  { href: '/kids', label: "Children's books" },
  { href: '/services', label: 'Services' },
  { href: '/cv', label: 'CV' },
  { href: '/writing', label: 'Writing' },
];
