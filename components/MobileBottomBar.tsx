"use client";

import Link from "next/link";
import { Home, MessageSquareText, ClipboardCheck } from "lucide-react";
import { FIRM } from "@/lib/constants";
import { useLeadForm } from "./LeadFormProvider";

export default function MobileBottomBar() {
  const { openLeadForm } = useLeadForm();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-charcoal-800 bg-charcoal-900 text-white lg:hidden">
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium"
      >
        <Home className="h-5 w-5" />
        Home
      </Link>
      <button
        type="button"
        onClick={openLeadForm}
        className="flex flex-col items-center justify-center gap-1 bg-gold-500 py-3 text-xs font-semibold text-charcoal-900"
      >
        <ClipboardCheck className="h-5 w-5" />
        Free Case Review
      </button>
      <a
        href={`sms:${FIRM.phoneRaw}`}
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium"
      >
        <MessageSquareText className="h-5 w-5" />
        Text Us
      </a>
    </nav>
  );
}
