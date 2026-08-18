"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  if (!testimonials.length) return null;

  const current = testimonials[index];

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: current.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
        ))}
      </div>
      <p className="mb-6 text-lg italic leading-relaxed text-charcoal-600">
        &ldquo;{current.quote}&rdquo;
      </p>
      <p className="font-semibold text-charcoal-800">{current.name}</p>
      <p className="mb-6 text-sm text-charcoal-400">{current.location}</p>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 hover:border-gold-500 hover:text-gold-600"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-gold-500" : "bg-charcoal-200"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 hover:border-gold-500 hover:text-gold-600"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
