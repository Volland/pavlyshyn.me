# pavlyshyn.me

The personal site of Volodymyr Pavlyshyn — a shopfront with two equally-weighted products: the technical
book catalogue and professional engineering services. Hosted as a static site on GitHub Pages.

## Language

### Products

**Catalogue**:
All of Volodymyr's Leanpub titles — 25 as of launch, across three **Shelves**. Lives on `/books`.
_Avoid_: Age AI Series (see Flagged ambiguities), the books, my library

**Shelf**:
One of the three groupings the **Catalogue** is divided into: *Agents & Graphs* (the core technical
work), *The Craft* (engineering practice and thinking), *Other Worlds* (tea, yerba mate, fiction).
_Avoid_: category, section, collection

**Edition**:
A translation of an existing title (e.g. *Ці* is the Ukrainian **Edition** of *Qi*). Shown as a language
toggle on its twin, never as a separate entry in the **Catalogue**.
_Avoid_: version, translation, the UA book

**Modeling Tools**:
The three VS Code extensions published under `pavlyshyn.*` — Factum ORM, LPG Modeler, Causal Canvas —
presented as one product line with one thesis: draw the model, ship the text, the diagram is disposable.
Lives on `/projects`.
_Avoid_: my repos, open source projects, the extensions

**Causal Canvas**:
The VS Code editor for causal models that validates them — colliders, exclusion restrictions, missing
paths. Always *Causal*. "Casual Canvas" is a different and much sillier product.
_Avoid_: Casual Canvas

**Research Repos**:
The secondary block on `/projects` — agentic-memory, ladybug-rag, ladybug-rag-rs. Reference
implementations and research, not products anyone installs. Subordinate to the **Modeling Tools**.
_Avoid_: side projects, experiments

**Kids Series**:
The children's book series about a boy with cerebral palsy, written for the Ukrainian market and themed
on inclusion. Book one is in progress. Lives on `/kids`, deliberately separate from the **Age AI Series**.
_Avoid_: children's books, kids' books project, UA books

**Cerebral palsy**:
The condition the **Kids Series** is about. Always this term in English copy; always person-first
construction ("a child with cerebral palsy"), never a child defined by the condition.
_Avoid_: central paralysis, ДЦП in English copy, CP-child, disabled kid

**Max Cycle**:
The strand of the **Kids Series** written from eight-year-old Max's first person — the radio, the tea,
reading, shame, anger, friends, the club. Drawn from Volodymyr's own childhood; manuscript.
_Avoid_: the first book, the ДЦП books

**Chess Without Hurry**:
The strand of the **Kids Series** for ages 6–8 (*Шахи без поспіху*), presented in-world as written by
Max at ten. Teaches chess at the reader's own pace, with a note to the accompanying adult per chapter.
Manuscript.
_Avoid_: the chess book (in copy — use the title), chess manual

**Cast**:
The characters shared across both strands — Tsugi the cat, Pan Bohdan the neighbour, Cerberus the
three-headed dog. What makes the two strands one world rather than two projects.
_Avoid_: characters, heroes

**Origin Essay**:
Volodymyr's first-person account of why he began writing Max and Tsugi, translated into English and
opening `/kids`. The source of the series' standing.
_Avoid_: the about text, intro, the article

**Service Offer**:
A single named, purchasable engagement with Volodymyr (advisory, workshop, review). Distinct from the
CV, which is history rather than something for sale.
_Avoid_: consulting, offering, package, product

### Site structure

**Concept Graph**:
The interactive view on `/books` where each book is a node and each **Theme** is a hub connecting the
books that share it. The site's one graph device — not repeated elsewhere.
_Avoid_: book explorer, visualisation, knowledge graph (too generic here)

**Theme**:
A subject hub in the **Concept Graph** — agentic memory, graph substrate, identity & trust,
edge / local-first, time. A book carries one or more.
_Avoid_: tag, category, topic

**Timeline**:
The interactive device on `/cv`: a 2002–2026 rail of roles, filterable by domain. Deliberately a
different interaction model from the **Concept Graph** so neither reads as a repeated gimmick.
_Avoid_: history, career graph

**Two Doors**:
The homepage device that gives the **Age AI Series** and **Service Offers** equal weight — a reader path
and a hire path presented as peers rather than blended into one funnel.
_Avoid_: hero, CTA, split hero

### Visual system

**Plate**:
A public-domain engraving scan (Llull, Fludd, Kircher, Porphyry) used as illustration, colour-treated to
the site's orange-and-cream palette so all sources read as one system.
_Avoid_: image, illustration, hero image, artwork

**Graph Motif**:
Original hand-authored SVG in the engraving idiom — nodes, edges, rules, and ornaments derived from
historical diagram conventions. The site's own vector language, as opposed to a scanned **Plate**.
_Avoid_: icon, decoration, graphic

**Diagram Plate**:
A **Graph Motif** that carries real content rather than ornament — one per tool on `/projects`, showing
what that tool actually produces (a fact diagram, a graph schema, a causal DAG with its collider marked).
Stands in place of a product screenshot.
_Avoid_: illustration, screenshot, mockup

**Frontispiece**:
Volodymyr's photograph rendered as an engraved author portrait — duotone and hatch, in an oval cartouche
with his name in letterspaced capitals. The only photograph of a person on the site.
_Avoid_: headshot, avatar, profile picture

## Flagged ambiguities

**"Age AI Series"** — used early on to mean the whole Leanpub **Catalogue**. Retired: the catalogue is
not one series. It spans agent/graph technical work, engineering-practice books, a tea-meditation book,
and a techno-horror novella. Use **Catalogue** for the whole, **Shelf** for a grouping. If "Age AI" names
a real series in Volodymyr's own mind, it is a **Shelf** label at most — never the catalogue.

**"Sells"** — the site never takes payment. Every book hands off to Leanpub checkout; every **Service
Offer** hands off to a booking link or email. "Sells" in this project always means *persuades and hands
off*.

**"Interactive"** — means two different devices on two pages, deliberately: the **Concept Graph** on
`/books`, the **Timeline** on `/cv`. Never a third.
