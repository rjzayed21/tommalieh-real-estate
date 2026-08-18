import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Tommalieh Law for a free case review. Call (708) 232-0017 or send us a message online. Serving Orland Park and the southern Chicago suburbs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in Touch With Tommalieh Law"
        subtitle="Schedule a free case review. We respond quickly and are ready to help with your real estate matter."
        compact
      />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-charcoal-800 sm:text-3xl">
              Contact Information
            </h2>
            <ul className="mb-8 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${FIRM.phoneRaw}`}
                    className="font-semibold text-charcoal-800 hover:text-gold-600"
                  >
                    {FIRM.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${FIRM.email}`}
                    className="font-semibold text-charcoal-800 hover:text-gold-600"
                  >
                    {FIRM.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                    Office
                  </p>
                  <p className="font-semibold text-charcoal-800">
                    {FIRM.address.full}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                    Hours
                  </p>
                  <p className="font-semibold text-charcoal-800">
                    {FIRM.hours}
                  </p>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-lg border border-charcoal-100">
              <iframe
                title="Tommalieh Law office location"
                src="https://www.google.com/maps?q=16061+South+94th+Avenue,+Orland+Hills,+IL+60487&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-lg border border-charcoal-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="mb-6 text-2xl font-bold text-charcoal-800">
              Request a Free Case Review
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
