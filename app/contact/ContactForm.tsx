"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CASE_TYPES } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-gold-500" />
        <h3 className="mb-2 text-xl font-bold text-charcoal-800">
          Message Received
        </h3>
        <p className="text-charcoal-500">
          Thank you for reaching out. A member of our team will contact you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-charcoal-700">
            First Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-charcoal-700">
            Last Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal-700">
          Phone
        </label>
        <input
          type="tel"
          required
          className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal-700">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal-700">
          Case Type
        </label>
        <select
          required
          defaultValue=""
          className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        >
          <option value="" disabled>
            Select a case type
          </option>
          {CASE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal-700">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Submit Request
      </button>
    </form>
  );
}
