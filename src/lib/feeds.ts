// Build-time RSS/Atom reading with an on-disk fallback.
// A feed being down must never fail the build (see docs/adr/0001).

import fs from 'node:fs';
import path from 'node:path';

export interface Item {
  title: string;
  href: string;
  date: string;
  iso: string;
}

const CACHE = path.join(process.cwd(), '.cache', 'feeds.json');

function readCache(): Record<string, Item[]> {
  try {
    return JSON.parse(fs.readFileSync(CACHE, 'utf8'));
  } catch {
    return {};
  }
}

// Feeds are fetched concurrently, so a read-modify-write of the whole file
// would let the last writer clobber its siblings. Merge against what is on
// disk at the moment of writing instead.
function cacheItems(url: string, items: Item[]) {
  try {
    fs.mkdirSync(path.dirname(CACHE), { recursive: true });
    fs.writeFileSync(CACHE, JSON.stringify({ ...readCache(), [url]: items }, null, 2));
  } catch {
    /* a read-only filesystem is not a reason to fail a build */
  }
}

const strip = (s: string) =>
  s
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8216;|&lsquo;/g, '‘')
    .replace(/&#8220;|&ldquo;/g, '“')
    .replace(/&#8221;|&rdquo;/g, '”')
    .replace(/&#8230;|&hellip;/g, '…')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

const tag = (xml: string, name: string) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? strip(m[1]) : '';
};

function parse(xml: string, limit: number): Item[] {
  const chunks = xml.match(/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/gi) ?? [];
  const items: Item[] = [];

  for (const chunk of chunks.slice(0, limit)) {
    const title = tag(chunk, 'title');
    let href = tag(chunk, 'link');
    if (!href) {
      const alt = chunk.match(/<link[^>]*href="([^"]+)"/i);
      href = alt ? alt[1] : '';
    }
    const raw = tag(chunk, 'pubDate') || tag(chunk, 'published') || tag(chunk, 'updated');
    const d = raw ? new Date(raw) : null;
    if (!title || !href) continue;

    items.push({
      title,
      href,
      iso: d && !isNaN(+d) ? d.toISOString() : '',
      date:
        d && !isNaN(+d)
          ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
          : '',
    });
  }
  return items;
}

export async function feed(url: string, limit = 6): Promise<Item[]> {
  if (!url) return [];
  const cache = readCache();

  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'pavlyshyn.me build (pavlyshyn@gmail.com)' },
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const items = parse(await res.text(), limit);
    if (items.length) {
      cacheItems(url, items);
      return items;
    }
    throw new Error('no items parsed');
  } catch (err) {
    const stale = cache[url];
    console.warn(
      `[feeds] ${url} unavailable (${(err as Error).message}) — ` +
        (stale ? `serving ${stale.length} cached items` : 'no cache, rendering links only')
    );
    return stale ?? [];
  }
}
