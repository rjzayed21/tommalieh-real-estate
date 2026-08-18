import GithubSlugger from "github-slugger";

export type TocEntry = {
  id: string;
  text: string;
  depth: number;
};

export function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const entries: TocEntry[] = [];

  for (const line of lines) {
    const match = /^(##)\s+(.*)$/.exec(line.trim());
    if (match) {
      const text = match[2].trim();
      entries.push({
        id: slugger.slug(text),
        text,
        depth: match[1].length,
      });
    }
  }

  return entries;
}
