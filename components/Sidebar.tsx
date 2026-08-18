import Link from "next/link";
import { Phone } from "lucide-react";
import { FIRM, PRACTICE_AREAS, PRACTICE_AREA_CITY } from "@/lib/constants";
import type { RelatedLink } from "@/lib/content-types";

export default function Sidebar({
  relatedArticles,
  currentSlug,
}: {
  relatedArticles?: RelatedLink[];
  currentSlug?: string;
}) {
  return (
    <aside className="space-y-6">
      <div className="rounded-lg border border-charcoal-100 bg-white p-5 shadow-card">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-700">
          Practice Areas
        </p>
        <ul className="space-y-2 text-sm">
          {PRACTICE_AREAS.map((pa) => (
            <li key={pa.slug}>
              <Link
                href={`/${PRACTICE_AREA_CITY}/${pa.slug}`}
                className={`hover:text-gold-600 ${
                  pa.slug === currentSlug
                    ? "font-semibold text-gold-600"
                    : "text-charcoal-500"
                }`}
              >
                {pa.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {relatedArticles && relatedArticles.length > 0 && (
        <div className="rounded-lg border border-charcoal-100 bg-white p-5 shadow-card">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-700">
            Related Articles
          </p>
          <ul className="space-y-2 text-sm">
            {relatedArticles.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-charcoal-500 hover:text-gold-600">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-lg bg-charcoal-900 p-5 text-white">
        <p className="mb-2 text-sm font-semibold text-gold-500">
          Free Case Review
        </p>
        <p className="mb-4 text-sm text-white/70">
          Speak with a real estate attorney about your situation today.
        </p>
        <a
          href={`tel:${FIRM.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-md bg-gold-500 px-4 py-2.5 text-sm font-semibold text-charcoal-900 hover:bg-gold-400"
        >
          <Phone className="h-4 w-4" />
          {FIRM.phone}
        </a>
      </div>
    </aside>
  );
}
