// The World of Max and Tsugi.
// Essays translated from the Ukrainian originals on pavlyshyn.leaflet.pub.
// TRANSLATION DRAFTS — every line needs Volodymyr's review before launch.

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'q'; text: string }
  | { t: 'ul'; items: string[] };

export interface Essay {
  slug: string;
  title: string;
  originalTitle: string;
  date: string;
  source: string;
  note?: string;
  blocks: Block[];
}

export const intro = {
  headline: 'The world of Max and Tsugi',
  standfirst: `A cycle of stories for children, written for the Ukrainian market, about a
  boy with cerebral palsy and a cat who has been through something of his own.
  Both strands are in manuscript.`,
};

export const strands = [
  {
    name: 'The Max Cycle',
    status: 'Manuscript',
    age: 'Written for a reader of eight',
    body: `Stories told in the first person by Max, a boy with cerebral palsy, and
    Tsugi — a clever, slightly magical cat who carries a deep physical injury of his
    own and has learned to live with it. Each story is about something: not a lesson
    bolted on, but a difficulty taken seriously at a child's height.`,
    stories: [
      { title: 'The radio', body: 'Max and Tsugi repair an old radio in the basement. Nerves are wires that carry signals too — and if a radio can be fixed, why is a person so hard to fix?' },
      { title: 'The tea', body: 'How to hear pain, and how to hear yourself. Formally a story about tea; actually about listening to yourself signal by signal.' },
      { title: 'Reading, and writing', body: "Being eight, and ashamed, because reading is hard — and so is writing. Told from inside the shame rather than about it." },
      { title: 'Anger, sadness, and other people’s pity', body: 'The feelings nobody teaches a child to hold, including the ones that arrive disguised as kindness.' },
      { title: 'Accepting yourself', body: 'Unconditional love and shame, which turn out to be the same conversation from two directions.' },
      { title: 'Finding friends', body: 'How anyone joins a group of friends, how you go looking for them, and why it is harder for a disabled child.' },
      { title: 'The club', body: 'The cycle ends with Max running a club, teaching other children the things he worked out for himself. Drawn from years of volunteering.' },
    ],
  },
  {
    name: 'Chess Without Hurry',
    original: 'Шахи без поспіху',
    status: 'Manuscript',
    age: 'Ages 6–8',
    body: `Max is ten now, and in this book he is both the hero and the author. It is
    a chess primer in which nobody counts to three. The board is not a battlefield
    but a quiet room; the ranks and files are floors, stairs and beams of light. And
    underneath the chess it is quietly a book about fear, mistakes, and the right to
    move at your own pace.`,
    lessons: [
      {
        title: 'What to do when you are attacked',
        body: 'Check is a moment of alarm. Max gives not a rule but a calming list of three: run, block, or take the attacker. Walk the three and the panic goes, leaving a plan.',
      },
      {
        title: 'How to tell thinking from fear',
        body: 'When you think, you are checking something against a list, and the thinking ends. When you are afraid, you look at the same board round and round, and the fear never ends.',
      },
      {
        title: 'Three questions before any move',
        body: 'What changed? What does he want? What happens if I move here? Walk the three questions and move — because after three, it stops being thinking and becomes fear, and fear finds nothing new.',
      },
      {
        title: '“I am not bad. I did not see.”',
        body: 'You will lose. Not maybe — certainly. Everyone loses. Losing stops being a verdict on you and becomes a moment you can find again on paper, in the moves you wrote down.',
      },
    ],
    parents: {
      title: 'A note to the grown-up sitting beside you',
      body: `Every chapter closes with a short note to the adult, and it is not about
      chess. It is about staying quiet when a child makes a bad move, because a
      mistake found alone after five seconds is remembered for life and a correction
      offered in half a second only teaches that adults always know better. It is
      about tone — children rarely remember dry rules, but they remember for good
      whether your voice sounded like "let me show you" or like "here we go again."
      And it is about what to do when a child cries that it is not fair: not to prove
      the rules, but to say, yes, that really is a shame.`,
    },
  },
];

export const cast = [
  {
    name: 'Tsugi',
    original: 'Цугі',
    body: `The cat. Clever, kind, slightly magical, and living on a lighthouse among
    sunflowers. He carries a deep physical injury, came through a deep depression,
    and clawed his way out — which is why his advice is worth having.`,
  },
  {
    name: 'Max',
    original: 'Макс',
    body: `Eight in the first cycle, ten at the chessboard. A boy with cerebral palsy
    who narrates his own experience rather than being explained by anyone else.`,
  },
  {
    name: 'Pan Bohdan',
    original: 'Пан Богдан',
    body: `The old neighbour who once worked at a radio factory, and who teaches chess
    by showing one thing, going quiet, and drinking tea while looking out of the
    window.`,
  },
  {
    name: 'Cerberus',
    original: 'Цербер',
    body: `A three-headed dog who muddles up exactly the things real children muddle
    up, and is not embarrassed about it.`,
  },
];

export const essays: Essay[] = [
  {
    slug: 'why-i-began',
    title: 'Why I began writing about Max and Tsugi',
    originalTitle: 'Чому я почав писати про Макса і Цугі',
    date: '17 August 2026',
    source: 'https://pavlyshyn.leaflet.pub/3mtc6jaubpk2w',
    blocks: [
      { t: 'p', text: 'I have always liked to write, though with my coordination it is hard work, and it tires me. My writing career began with a shortage of books. I took books from the library, they had to be given back, and I wanted to keep something for myself — so I needed some way of fixing what I had read. Fairly quickly, still a child, I understood: the only way was not to copy books out, but to write a story about books. I had a large Soviet calendar, three hundred and something pages, a page for every day — and in it I made my extracts and wrote that book of mine. Much later I learned that in the Renaissance this was called a commonplace book. That, I suppose, was my creative debut.' },
      { t: 'p', text: 'I always liked telling things. For my nephew I invented completely made-up fairy tales about whatever it was I wanted to get across to him. And out in the yard among the other children I was popular because I was forever inventing some game or telling some story.' },
      { t: 'p', text: 'And then I grew up and forgot all of it. Fairly quickly I turned into a big serious fellow who builds computer programs, architectures, and other tedious grown-up things.' },
      { t: 'p', text: 'I have been in therapy for a few years now. At some point in therapy I got as far as working through my traumatic childhood experience and became interested in the idea of the internal family. I began getting to know the children who live inside me — and there was one interesting eight-year-old there. Quite lonely: often at home, liked to sit on the windowsill and read books that had a lot of pictures and something interesting in them. And to watch people, invent stories about them, and weave those people into the books being read.' },
      { t: 'p', text: 'One day my therapist asked: what would you write to that child?' },
      { t: 'p', text: 'I decided that simply writing “everything in your life will be fine, you will have a wonderful wife, and somehow it will all work out” would not help much. So I decided to write that child an actual book: about a boy of the same age, living with the same diagnosis, and about how to live with it. And about a clever, kind helper cat — a little bit magical, who has a life behind him of his own and shares it. The characters of this book help an eight-year-old boy make sense of difficult things: how to live with anger, with sadness, with other people’s pity, how to fit in, how to meet other children. And much else, because every story in this cycle is there for a reason — each one is about something.' },
      { t: 'p', text: 'The first story grew out of writing for adults. I began by writing articles for adults about cerebral palsy: about how I live with it, what it is like. There were many stories and analogies in them. One of them was a child’s. I loved the radio, and my brother used to explain to me how all those circuits worked, those electrical signals, how the whole thing gets repaired. And somewhere in there he said that nerves are, essentially, wires with signals too, and that my problem is exactly there. That sank deep into me. In truth, all my life I wanted to become a doctor and somehow learn to repair that radio — to cure myself and others. Because I did not understand: if a radio is fairly simple to fix, why is it so hard to fix me?' },
      { t: 'p', text: 'That radio analogy, and my adult articles about living with cerebral palsy, were the beginning. Out of them came the first story of the first book, where Max and Tsugi repair that radio in the basement — and through the analogy Max understands a great deal about himself, learns a great deal about Tsugi, and says what it is like to be different. I thought I would stop there.' },
      { t: 'p', text: 'But then I wrote a second one — about coping with pain: how to hear pain, how to hear yourself, how it is possible to live with it. Formally it is a book about tea, because I am a great enthusiast for tea and found in it a method of meditation. In truth it is not really about tea — it is about having to know how to listen to yourself, signal by signal.' },
      { t: 'p', text: 'And then it went on, little by little. There was a story about how hard it is for Max to live with reading being hard for him. I remember it: I am eight, and I am deeply ashamed and uncomfortable. I tried to tell those feelings back in the first person — and how hard it is to write, as well.' },
      { t: 'p', text: 'Then came harder subjects: accepting yourself, unconditional love, shame, anger. How we fit into a group of friends, how we look for those friends, and how hard it is for children with disabilities to find them. And after that — how we learn to help other people, and first of all ourselves, so that there is something left to share.' },
      { t: 'p', text: 'The cycle ends with Max organising a club for children, teaching them the various things he worked out himself. That is part of my experience too: I volunteered a great deal, taught children the basics of computer literacy and programming, taught them a little about playing games. It was my mechanism for socialising and my way of coping with all those challenges — though by then I was clearly no longer ten, but somewhere near fifteen.' },
      { t: 'p', text: 'I shared these stories with my therapist, and at times they even became a bridge for communication in the therapy — there was a response to them. Later I began adding short notes and addresses to the adults. My therapist Olha, incidentally, helped me enormously, both with the work on the text and with the therapy itself. And so, working with her, over the course of my therapy, this cycle was born.' },
      { t: 'p', text: 'Obviously these are fairy tales. Obviously they are personal experience. Obviously they are a wish — how it ought to have been, even if in my own life it did not always turn out that way. But the strength of these stories is that they are in the first person, from a child with that experience. And the cat here is a character with a deep physical trauma as well: he learned to cope with it, went through a deep depression, and clawed his way out. So it is a very layered story.' },
      { t: 'p', text: 'And it began with a simple question: what would you write to yourself at eight, to help him?' },
      { t: 'p', text: 'This cycle of stories is the answer.' },
    ],
  },
  {
    slug: 'internal-emigration',
    title: 'Disability as internal emigration',
    originalTitle: 'Інвалідність як внутрішня еміграція',
    date: '5 June 2026',
    source: 'https://pavlyshyn.leaflet.pub/3mnjx5homos2v',
    note: 'The original is spoken rather than written — recorded and transcribed. The English keeps that register.',
    blocks: [
      { t: 'p', text: 'On the state of internal emigration, and people with particular needs. Internal emigration is an interesting thing. To make it clear — I am from western Ukraine. I was that kind of banderivets, spoke Ukrainian all the way through. And I remember, when I was a teenager, I came to Kyiv, and it was explained to me that I was a bumpkin, and that I ought to explain properly to people what I wanted from them, in a language they could understand. And then you realise that your world ends at the Zbruch, and you are an immigrant in your own country. Because the society around you, for some reason, does not understand you. Then, thirty years later, those same people tell you that in city X everyone spoke Russian, so it is awkward for them, and really they are the victims, and we all have to sympathise, because that is how life turned out for them, so we should all rise to meet them. Well — that is a story a lot of people from western Ukraine will recognise. I am very glad that it is changing now.' },
      { t: 'p', text: 'But there is a bigger story. You are born with particular needs into a world made by people who do not have those problems. And that world is, in principle, not for you at all. And you cannot really explain what you feel, because you do not have the vocabulary for it, and there is no understanding of your condition, because most people do not have those problems. And so you can appeal to, and talk about, these things only with people who have been through the same experience, or who have children, say, or relatives. That is — people who have been touched by that experience.' },
      { t: 'p', text: 'And so it turns out that you are a migrant too. Because you live in a world that ends not at the Zbruch but, in principle, at the door of your flat. And that leads to isolating yourself. If you cannot explain in this world who you are, you start closing up. That is one road.' },
      { t: 'p', text: 'The second road is expanding your living space. You begin slowly winning ground back — you start moving that Zbruch line somewhere, explaining somehow, going out into that world and trying to explain something. If you have enough life energy for it, if you have the strength and the opportunity, if you have the need. If you do not light that need up, you begin to isolate and to look for a world that is comfortable for you. And that may be a virtual world, where you can form an identity with no tie to your physical problems. Many people do that. Many go into gambling, into betting, all the rest of it. Somebody simply builds a virtual avatar and lives inside it. There are many formats of isolation. Somebody switches from people to animals, because there is more empathy and compassion in them than in people. Somebody does something else.' },
      { t: 'p', text: 'But in fact there is a side effect to all this internal migration. When you grow up in a world that is foreign to you, you develop an autonomous identity. That means you have a great deal of support and a great many anchors that are not external but internal. You learn to lean on yourself, and from the outside it may look like Münchhausen, but in practice it is a fairly decent survival skill. It is quite painful, though, in practice. And lonely, for what it is worth.' },
      { t: 'p', text: 'So, yes. We do need to develop internal supports, but at the same time to build bridges and set down supports that lead to the outside world — to communication, to openness — and to build a society with no internal migrants in it: not linguistic ones, not people with particular needs, not people with any neurological difference. And that demands flexibility. From the people who have the challenges, and their understanding that the world does not understand them; and from the outside world, which has to understand that there are simply other people, and they have a right to exist. It is a two-way process.' },
      { t: 'p', text: 'I would very much like that process to happen in Ukraine. Because we will run into it. We are already running into people who after the war carry great injuries, both physical and psychological. And there is a hope that through those heroes who gave their health for the whole of Ukraine, we will see both them and the people who have been in internal emigration all their lives, in the shadows, who have similar challenges — and maybe they did not give their health for the country, but they have the right to exist in that society. And to be in that society in comfort, and to bring it whatever value they can, and sincerely want to bring.' },
    ],
  },
  {
    slug: 'nature-of-inclusion',
    title: 'On the nature of inclusion and our moral compass',
    originalTitle: 'Про природу інклюзії та наш моральний компас',
    date: '3 June 2026',
    source: 'https://pavlyshyn.leaflet.pub/3mnf726xcqk2g',
    blocks: [
      { t: 'p', text: 'We have had a long discussion about inclusion: what it ought to look like and what it even is. But let us be candid and admit one fact — the need for inclusion arose through the entirely opposite process: through our having built a world for neurotypical people who do not have life-challenges. And, in principle, we cannot blame humanity for it, because everyone builds the world with the hands and eyes they have, perceiving everything else through the prism of their own self. Accordingly, it is a convenient world for those in whom everything is typical: neurotypical, physiologically typical. And there is nothing bad in that.' },
      { t: 'p', text: 'The problems and the challenges begin when we actively separate off and push away a part of society because of their particularities, or simply because they are inconvenient to us. Because people with disabilities are inconvenient; people with autism are difficult, unclear, other. Biologically we carry certain prejudices that signal to us that this person is dangerous, or unsuitable as a partner. In the end we have an animal tendency towards separation and division into our own and not our own. It is part of human nature — more precisely, of its biological base, on top of which an extraordinarily complex and ambiguous social mechanism has been built.' },
      { t: 'q', text: 'If we did not have the artificial exclusion of certain people from society, the need for inclusion would never have arisen — because there would be nobody to reintegrate into a world that was not originally built for them.' },
      { t: 'h', text: 'What are we all to do?' },
      { t: 'p', text: 'The world is as it is. It is unlikely we will manage to build a different one straight away — a better, more empathetic and more sensitive reality. But we can try, beginning with the obvious and simple steps:' },
      { t: 'ul', items: [
        'Acknowledge that other people exist. They simply do.',
        'Acknowledge their right to exist and to be different. For many of them, being different is not a conscious choice but the situation they found themselves in.',
      ] },
      { t: 'p', text: 'The greatest difference between Ukrainians and Russians, in fact, is that Ukrainians acknowledge the right to exist of those who differ from them — unlike Russians, who want everyone to be the same, to live in a notional Soviet Union, eat the same food, dress the same way and believe the same things.' },
      { t: 'p', text: 'As a society we have, on the one hand, a powerful potential for inclusion. On the other, we carry a post-Soviet, post-Russian and post-imperial trauma that has laid a certain cruel film over our humanity. But the humanity is there.' },
      { t: 'h', text: 'The road to systemic change' },
      { t: 'p', text: 'Acknowledging that others exist and have a right to, along with empathy, fellow-feeling and compassion, are things that only look simple at first glance. We may not fully understand someone else’s experience, but we are capable of connecting to it through empathy and awareness.' },
      { t: 'p', text: 'This requires deep systemic transformation: in how our society functions; in our system of education; and in whether we have a moral compass at all, and what forms it.' },
      { t: 'p', text: 'Formerly that compass was formed largely by the church and by religion. Now we live in a postmodern society which often has no such single institution, or does not accept religious dogma. This creates new challenges: there is no clear moral compass, and no generally recognised moral authority to explain that there exist people with another type of functioning. People whose brains differ radically from the typical. People with substantial physiological differences, who simply need help in order to exist, to live with dignity, and to have respect for themselves.' },
      { t: 'p', text: 'And that is a fact. We as a society have to change, and to begin precisely from the axiom: the right of different people to exist and to dignity is beyond question. And only then move on to the harder philosophical questions.' },
    ],
  },
  {
    slug: 'sofiyka-and-the-waltz',
    title: 'On Sofiyka and the waltz',
    originalTitle: 'Про Софійку та вальс',
    date: '3 June 2026',
    source: 'https://pavlyshyn.leaflet.pub/3mneqny3cgk25',
    note: 'TRANSLATION PENDING — the full Ukrainian text could not be retrieved automatically. What follows is a summary of the argument, not Volodymyr’s words. Do not publish until replaced with a real translation.',
    blocks: [
      { t: 'p', text: 'Ukrainian media covered the story of a girl with particular needs who wanted to dance the waltz at her school leaving ball, and of the boy who danced it with her. The story was told as a happy one.' },
      { t: 'p', text: 'The author — himself a person with cerebral palsy — observes that in twenty-five years and more, sadly, not much has changed. What troubles him is not the disagreement with the parents but the comments about the boy who danced.' },
      { t: 'p', text: 'The problem lies in his act being received as heroism. What he wants is a society in which such an interaction is ordinary: we should not turn interacting with people who have particular needs into some special act of heroism.' },
    ],
  },
];
