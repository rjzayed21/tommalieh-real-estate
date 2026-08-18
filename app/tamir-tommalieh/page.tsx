import type { Metadata } from "next";
import { GraduationCap, Scale, Award, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { attorneySchema } from "@/lib/schema";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Attorney Tamir Tommalieh",
  description:
    "Meet Tamir Tommalieh, founding attorney of Tommalieh Law, representing real estate clients throughout Orland Park and the southern Chicago suburbs.",
  path: "/tamir-tommalieh",
});

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Juris Doctor, with a focused practice built around Illinois real estate, property, and contract law.",
  },
  {
    icon: Scale,
    title: "Bar Admissions",
    body: "Licensed to practice law in the State of Illinois, including all Cook, Will, and DuPage County courts.",
  },
  {
    icon: Award,
    title: "Focus Areas",
    body: "Residential and commercial closings, purchase agreement review, landlord-tenant law, foreclosure defense, and real estate litigation.",
  },
  {
    icon: MapPin,
    title: "Community",
    body: "Based in Orland Hills, Tamir has represented clients across the southern Chicago suburbs for years of transactions and disputes.",
  },
];

export default function AttorneyBioPage() {
  return (
    <>
      <JsonLd data={attorneySchema()} />
      <Hero
        eyebrow="Attorney Profile"
        title="Tamir Tommalieh"
        subtitle="Founding attorney of Tommalieh Law, dedicated to real estate legal representation across the southern Chicago suburbs."
        compact
      />
      <Breadcrumbs items={[{ name: "Tamir Tommalieh", path: "/tamir-tommalieh" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="aspect-square w-full rounded-lg bg-charcoal-100" />
            <div className="mt-6 rounded-lg bg-charcoal-900 p-5 text-center text-white">
              <p className="mb-1 text-sm font-semibold text-gold-500">
                Free Case Review
              </p>
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="text-lg font-bold hover:text-gold-400"
              >
                {FIRM.phone}
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-charcoal-800 sm:text-3xl">
              Real Estate Counsel You Can Rely On
            </h2>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Tamir Tommalieh founded Tommalieh Law to give clients across
              Orland Park and the southern Chicago suburbs an attorney who
              is personally invested in every transaction and dispute. He
              represents buyers, sellers, landlords, tenants, and investors
              in matters ranging from routine residential closings to
              complex commercial deals and real estate litigation.
            </p>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Tamir's approach centers on clear communication and careful
              contract review. He believes clients make the best decisions
              when they fully understand their rights, risks, and options —
              which is why he takes the time to walk every client through
              their transaction step by step, in plain language.
            </p>
            <p className="mb-8 leading-relaxed text-charcoal-600">
              Outside of transactional work, Tamir regularly represents
              homeowners facing foreclosure, landlords and tenants in lease
              disputes, and parties in boundary and title disputes across
              Cook, Will, and DuPage Counties.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.title}
                  className="rounded-lg border border-charcoal-100 p-5"
                >
                  <cred.icon className="mb-3 h-6 w-6 text-gold-500" />
                  <h3 className="mb-1 font-bold text-charcoal-800">
                    {cred.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-500">
                    {cred.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
