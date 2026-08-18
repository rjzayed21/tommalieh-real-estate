import type { ArticlePageData } from "@/lib/content-types";
import type { Crumb } from "./Breadcrumbs";
import Breadcrumbs from "./Breadcrumbs";
import Hero from "./Hero";
import TableOfContents from "./TableOfContents";
import Sidebar from "./Sidebar";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleLayout({
  data,
  breadcrumbs,
  eyebrow,
  currentPracticeAreaSlug,
}: {
  data: ArticlePageData;
  breadcrumbs: Crumb[];
  eyebrow?: string;
  currentPracticeAreaSlug?: string;
}) {
  return (
    <>
      <Hero eyebrow={eyebrow} title={data.h1} subtitle={data.metaDescription} compact />
      <Breadcrumbs items={breadcrumbs} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div
              className="prose-article mb-8"
              dangerouslySetInnerHTML={{ __html: data.introHtml }}
            />

            <div className="mb-10">
              <TableOfContents sections={data.sections} />
            </div>

            <div className="prose-article">
              {data.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2>{section.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: section.html }} />
                </div>
              ))}
            </div>

            {data.faqs.length > 0 && (
              <div className="mt-12">
                <FAQAccordion items={data.faqs} />
              </div>
            )}

            {(data.relatedArticles.length > 0 ||
              data.relatedLocations.length > 0 ||
              data.relatedPracticeAreas.length > 0) && (
              <div className="mt-12 border-t border-charcoal-100 pt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-charcoal-700">
                  Related Topics
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    ...data.relatedArticles,
                    ...data.relatedPracticeAreas,
                    ...data.relatedLocations,
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 rounded-md border border-charcoal-100 px-4 py-3 text-sm font-medium text-charcoal-600 hover:border-gold-300 hover:text-gold-600"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold-500" />
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Sidebar
            relatedArticles={data.relatedArticles}
            currentSlug={currentPracticeAreaSlug}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
