import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./icons";
import type { PracticeArea } from "@/lib/constants";
import { PRACTICE_AREA_CITY } from "@/lib/constants";

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  const Icon = getIcon(area.icon);

  return (
    <Link
      href={`/${PRACTICE_AREA_CITY}/${area.slug}`}
      className="group flex flex-col rounded-lg border border-charcoal-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-charcoal-900">
        <Icon className="h-6 w-6 text-gold-500" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-charcoal-800">
        {area.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal-500">
        {area.summary}
      </p>
      <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
