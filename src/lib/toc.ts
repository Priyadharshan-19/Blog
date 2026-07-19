// src/lib/toc.ts

export interface TocItem {
  level: number;
  text: string;
  id: string;
}

export function getTableOfContents(mdxContent: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;

  const headings: TocItem[] = [];

  let match;

  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const level = match[1].length;

    const text = match[2].trim();

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    headings.push({
      level,
      text,
      id,
    });
  }

  return headings;
}