"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { FIRM, MAIN_NAV, PRACTICE_AREAS, PRACTICE_AREA_CITY } from "@/lib/constants";
import { useLeadForm } from "./LeadFormProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openLeadForm } = useLeadForm();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-800 bg-charcoal-900/95 backdrop-blur">
      <div className="container-content grid h-24 grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link href="/" className="flex items-center rounded-md bg-white px-3 py-1.5 sm:px-4 sm:py-2">
          <Image
            src="/images/tommalieh-logo-1.png"
            alt={FIRM.name}
            width={600}
            height={144}
            priority
            className="h-9 w-auto object-contain sm:h-11"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {MAIN_NAV.map((item) =>
            item.label === "Practice Areas" ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown("Practice Areas")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href!}
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-white/85 hover:text-gold-400"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openDropdown === "Practice Areas" && (
                  <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 divide-y divide-charcoal-800 rounded-md border border-charcoal-800 bg-charcoal-900 py-1 shadow-xl">
                    {PRACTICE_AREAS.map((pa) => (
                      <Link
                        key={pa.slug}
                        href={`/${PRACTICE_AREA_CITY}/${pa.slug}`}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:bg-charcoal-800 hover:text-gold-400"
                      >
                        {pa.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.dropdown ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-white/85 hover:text-gold-400"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 divide-y divide-charcoal-800 rounded-md border border-charcoal-800 bg-charcoal-900 py-1 shadow-xl">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:bg-charcoal-800 hover:text-gold-400"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-sm font-medium uppercase tracking-wide text-white/85 hover:text-gold-400"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center justify-end gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${FIRM.phoneRaw}`}
              className="group flex flex-col items-start leading-tight"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                Call or Text
              </span>
              <span className="text-base font-bold text-white group-hover:text-gold-400">
                {FIRM.phone}
              </span>
            </a>
            <button type="button" onClick={openLeadForm} className="btn-primary">
              Free Case Review
            </button>
          </div>

          <button
            type="button"
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-charcoal-800 bg-charcoal-900 lg:hidden">
          <nav className="container-content flex flex-col py-4">
            {MAIN_NAV.map((item) =>
              item.label === "Practice Areas" ? (
                <div key={item.label} className="border-b border-charcoal-800">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-white/85"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === "Practice Areas" ? null : "Practice Areas")
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileExpanded === "Practice Areas" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === "Practice Areas" && (
                    <div className="flex flex-col pb-2">
                      {PRACTICE_AREAS.map((pa) => (
                        <Link
                          key={pa.slug}
                          href={`/${PRACTICE_AREA_CITY}/${pa.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 pl-4 text-sm text-white/70"
                        >
                          {pa.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.dropdown ? (
                <div key={item.label} className="border-b border-charcoal-800">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-white/85"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="flex flex-col pb-2">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 pl-4 text-sm text-white/70"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-charcoal-800 py-3 text-sm font-medium uppercase tracking-wide text-white/85"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={`tel:${FIRM.phoneRaw}`}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-gold-400"
            >
              <Phone className="h-4 w-4" />
              {FIRM.phone}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openLeadForm();
              }}
              className="btn-primary mt-2"
            >
              Free Case Review
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
