export interface Paper {
  title: string;
  date: string; // ISO
  kind: string;
  abstract: string;
  doi: string;
  href: string;
  related?: { label: string; href: string };
}

// Independent research, published on Zenodo. Not affiliated with an employer.
export const papers: Paper[] = [
  {
    title: 'Metagraph Encodings over Identified Triples: Exact Images, Temporal Integrity, and Structural Depth',
    date: '2026-10-05',
    kind: 'Preprint',
    abstract:
      'Methods for encoding and decoding finite directed hypergraphs as identified triples, with conditions for invertibility, and a treatment of temporal consistency and structural analysis: snapshot theorems, version tracking, metapath recognition and reference-depth metrics.',
    doi: '10.5281/zenodo.23167939',
    href: 'https://zenodo.org/records/23167939',
  },
  {
    title: 'Layered Bitemporal Graphs: Statement Identity, Two Clocks, and Metagraphs as Tags',
    date: '2026-10-04',
    kind: 'Publication',
    abstract:
      'How agent systems can keep statement identity and provenance, studied through bitemporal graphs in which statements refer to one another and track both when a claim was valid and when it was recorded. Implemented in Tiramemsu, an SQLite-based graph database.',
    doi: '10.5281/zenodo.23139229',
    href: 'https://zenodo.org/records/23139229',
    related: { label: 'Tiramemsu', href: '/projects/tiramemsu' },
  },
];
