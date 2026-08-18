"use client";

import { Phone } from "lucide-react";
import { FIRM } from "@/lib/constants";
import { useLeadForm } from "./LeadFormProvider";

export default function CTASection({
  title = "Talk to a Real Estate Attorney Today",
  subtitle = "Schedule a free case review with Tommalieh Law. We respond quickly and offer honest, straightforward guidance for your transaction or dispute.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const { openLeadForm } = useLeadForm();

  return (
    <section className="bg-charcoal-900">
      <div className="container-content flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-white/70">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button type="button" onClick={openLeadForm} className="btn-primary">
            Free Case Review
          </button>
          <a href={`tel:${FIRM.phoneRaw}`} className="btn-secondary">
            <Phone className="mr-2 h-4 w-4" />
            {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
