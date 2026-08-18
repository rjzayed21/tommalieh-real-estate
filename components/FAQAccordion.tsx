"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  includeSchema = true,
}: {
  items: FAQItem[];
  title?: string;
  includeSchema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <div>
      {includeSchema && <JsonLd data={faqSchema(items)} />}
      {title && (
        <h2 className="mb-6 text-2xl font-bold text-charcoal-800 sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="divide-y divide-charcoal-100 rounded-lg border border-charcoal-100">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-charcoal-800">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm leading-relaxed text-charcoal-500">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
