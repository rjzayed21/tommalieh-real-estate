import type { ContentSection } from "@/lib/content-types";

export default function TableOfContents({
  sections,
}: {
  sections: ContentSection[];
}) {
  if (!sections.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-lg border border-charcoal-100 bg-charcoal-50 p-5"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-700">
        Table of Contents
      </p>
      <ol className="space-y-2 text-sm">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-charcoal-500 hover:text-gold-600"
            >
              {i + 1}. {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
