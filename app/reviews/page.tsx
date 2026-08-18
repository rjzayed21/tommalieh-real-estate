import type { Metadata } from "next";
import { Star } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews",
  description:
    "Read what clients across Orland Park and the southern Chicago suburbs say about their experience working with Tommalieh Law.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="What Our Clients Say"
        subtitle="Real feedback from buyers, sellers, landlords, and investors we've represented across the southern Chicago suburbs."
        compact
      />
      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-lg border border-charcoal-100 bg-white p-6 shadow-card"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm italic leading-relaxed text-charcoal-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-charcoal-800">
                {t.name}
              </p>
              <p className="text-xs text-charcoal-400">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Become Our Next Success Story?"
        subtitle="Schedule a free case review and see why clients across the southern Chicago suburbs trust Tommalieh Law with their real estate matters."
      />
    </>
  );
}
