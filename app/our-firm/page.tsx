import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Firm",
  description:
    "Learn about Tommalieh Law's mission, values, and approach to real estate legal representation in Orland Park and the southern Chicago suburbs.",
  path: "/our-firm",
});

const VALUES = [
  {
    title: "Direct Attorney Access",
    body: "You work directly with Tamir Tommalieh, not a rotating cast of paralegals. Every client gets attorney-level attention from intake to closing.",
  },
  {
    title: "Transparent, Flat-Fee Pricing",
    body: "Most residential closings are handled for a flat fee, so you know your legal costs upfront with no hidden charges or surprise invoices.",
  },
  {
    title: "Responsive Communication",
    body: "Real estate deadlines move fast. We answer calls, respond to emails, and keep you informed at every stage of your transaction or case.",
  },
  {
    title: "Local Knowledge",
    body: "We know the recorders, title companies, courts, and municipalities across Cook, Will, and DuPage Counties, which means fewer surprises and faster resolutions.",
  },
];

export default function OurFirmPage() {
  return (
    <>
      <Hero
        eyebrow="Our Firm"
        title="Dedicated Real Estate Counsel for the Southern Chicago Suburbs"
        subtitle="Tommalieh Law was built on a simple idea: clients deserve an attorney who is personally invested in their transaction, not a file number in a high-volume closing pipeline."
        compact
      />
      <Breadcrumbs items={[{ name: "Our Firm", path: "/our-firm" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-charcoal-800 sm:text-3xl">
              Our Story
            </h2>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Tommalieh Law was founded to give buyers, sellers, landlords,
              and investors across Orland Park and the surrounding
              communities a dependable legal partner for one of the most
              significant financial transactions of their lives. After years
              of watching clients get lost in high-volume closing operations,
              Attorney Tamir Tommalieh set out to build a firm that puts
              relationships and results first.
            </p>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Today, Tommalieh Law represents clients throughout Cook, Will,
              and DuPage Counties in residential and commercial real estate
              transactions, landlord-tenant matters, foreclosure defense,
              title disputes, and real estate litigation.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-charcoal-800 sm:text-3xl">
              Our Mission
            </h2>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Our mission is to make sure no client signs a real estate
              contract, closes on a property, or navigates a dispute without
              fully understanding their rights and options. We believe legal
              guidance should be clear, accessible, and genuinely focused on
              protecting your interests.
            </p>
            <p className="leading-relaxed text-charcoal-600">
              Whether you're a first-time homebuyer, a seasoned investor, or
              a landlord managing multiple properties, our approach stays the
              same: listen carefully, explain clearly, and advocate
              aggressively on your behalf.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-50">
        <div className="container-content">
          <h2 className="mb-10 text-center text-3xl font-bold text-charcoal-800 sm:text-4xl">
            Why Clients Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-lg border border-charcoal-100 bg-white p-6 shadow-card"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="mb-1 font-bold text-charcoal-800">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-500">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
