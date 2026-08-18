import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { PRACTICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Practice Areas",
  description:
    "Explore Tommalieh Law's real estate legal services, including residential and commercial transactions, closings, landlord-tenant law, foreclosure defense, and litigation.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Practice Areas"
        title="Comprehensive Real Estate Legal Services"
        subtitle="From routine closings to complex litigation, Tommalieh Law provides dedicated representation across every stage of a real estate transaction or dispute."
        compact
      />
      <Breadcrumbs items={[{ name: "Practice Areas", path: "/practice-areas" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
