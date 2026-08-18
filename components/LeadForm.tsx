"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, CheckCircle2 } from "lucide-react";
import { CASE_TYPES, FIRM, type CaseType } from "@/lib/constants";

type FormState = {
  firstName: string;
  lastName: string;
  caseType: CaseType | "";
  message: string;
  phone: string;
  email: string;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  caseType: "",
  message: "",
  phone: "",
  email: "",
};

export default function LeadForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalSteps = 4;

  function reset() {
    setStep(1);
    setForm(INITIAL_STATE);
    setSubmitted(false);
  }

  function handleClose() {
    onClose();
    setTimeout(reset, 300);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const canAdvanceStep1 = form.firstName.trim() && form.lastName.trim();
  const canAdvanceStep2 = form.caseType !== "";
  const canAdvanceStep3 = form.message.trim().length > 0;
  const canSubmit = form.phone.trim() && form.email.trim();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free case review form"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close form"
          className="absolute right-4 top-4 text-charcoal-400 hover:text-charcoal-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="mb-4 h-12 w-12 text-gold-500" />
              <h3 className="mb-2 text-xl font-bold text-charcoal-800">
                Thank You, {form.firstName}
              </h3>
              <p className="mb-6 text-charcoal-500">
                We&apos;ve received your request for a free case review. Our
                team will contact you shortly, or call us now at{" "}
                <a
                  href={`tel:${FIRM.phoneRaw}`}
                  className="font-semibold text-gold-600"
                >
                  {FIRM.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="btn-primary"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  Step {step} of {totalSteps}
                </p>
                <h3 className="text-xl font-bold text-charcoal-800">
                  Free Case Review
                </h3>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-charcoal-100">
                  <div
                    className="h-full bg-gold-500 transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-charcoal-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) =>
                          setForm({ ...form, firstName: e.target.value })
                        }
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
                        value={form.lastName}
                        onChange={(e) =>
                          setForm({ ...form, lastName: e.target.value })
                        }
                        className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label className="mb-1 block text-sm font-medium text-charcoal-700">
                      What type of case do you have?
                    </label>
                    <div className="space-y-2">
                      {CASE_TYPES.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setForm({ ...form, caseType: type })}
                          className={`w-full rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                            form.caseType === type
                              ? "border-gold-500 bg-gold-50 font-semibold text-charcoal-800"
                              : "border-charcoal-200 text-charcoal-600 hover:border-gold-300"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label className="mb-1 block text-sm font-medium text-charcoal-700">
                      Tell us briefly about your situation
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-charcoal-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-charcoal-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-md border border-charcoal-200 px-3 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-1 text-sm font-medium text-charcoal-500 hover:text-charcoal-700"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      disabled={
                        (step === 1 && !canAdvanceStep1) ||
                        (step === 2 && !canAdvanceStep2) ||
                        (step === 3 && !canAdvanceStep3)
                      }
                      onClick={() => setStep(step + 1)}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>

              <p className="mt-4 text-center text-xs text-charcoal-400">
                Or call us now at{" "}
                <a
                  href={`tel:${FIRM.phoneRaw}`}
                  className="font-semibold text-gold-600"
                >
                  {FIRM.phone}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
