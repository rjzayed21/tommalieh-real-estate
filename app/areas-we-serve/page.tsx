import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Serve",
  description:
    "Tommalieh Law represents real estate clients throughout Cook County, Will County, and DuPage County, including Orland Park, Tinley Park, Joliet, Naperville, Chicago, and Aurora.",
  path: "/areas-we-serve",
});

export default function AreasWeServePage() {
  return (
    <>
      <Hero
        eyebrow="Areas We Serve"
        title="Real Estate Attorneys Serving the Southern Chicago Suburbs"
        subtitle="Based in Orland Hills, Tommalieh Law represents clients throughout Cook County, Will County, and DuPage County."
        compact
      />
      <Breadcrumbs items={[{ name: "Areas We Serve", path: "/areas-we-serve" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}/real-estate-lawyer`}
                  className="group flex items-center justify-between rounded-lg border border-charcoal-100 bg-white p-5 shadow-card hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold-500" />
                    <div>
                      <p className="font-bold text-charcoal-800">
                        {loc.city}, IL
                      </p>
                      <p className="text-xs text-charcoal-400">{loc.county}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-charcoal-300 group-hover:text-gold-500" />
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-charcoal-100">
            <iframe
              title="Tommalieh Law service area map"
              src="https://www.google.com/maps?q=Orland+Park,+IL&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
