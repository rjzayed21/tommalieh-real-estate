"use client";

import { Phone } from "lucide-react";
import { FIRM } from "@/lib/constants";
import { useLeadForm } from "./LeadFormProvider";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  compact = false,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  compact?: boolean;
  backgroundImage?: string;
}) {
  const { openLeadForm } = useLeadForm();

  return (
    <section className="relative overflow-hidden bg-charcoal-900">
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c9a24b 0%, transparent 45%), radial-gradient(circle at 80% 80%, #c9a24b 0%, transparent 40%)",
          }}
        />
      )}
      <div
        className={`container-content relative flex flex-col items-start ${
          compact ? "py-16 sm:py-20" : "py-24 sm:py-32"
        }`}
      >
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
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
