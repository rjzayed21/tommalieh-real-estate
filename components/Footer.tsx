import Link from "next/link";
import { Facebook, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FIRM,
  PRACTICE_AREAS,
  PRACTICE_AREA_CITY,
  LOCATIONS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white/80">
      <div className="container-content grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-3 text-lg font-bold text-white">
            Tommalieh <span className="text-gold-500">Law</span>
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Real estate attorneys serving Orland Park and the southern
            Chicago suburbs with dedicated counsel for buyers, sellers,
            landlords, and investors.
          </p>
          <div className="flex gap-3">
            <a
              href={FIRM.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-gold-500 hover:text-gold-500"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={FIRM.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-gold-500 hover:text-gold-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-500">
            Practice Areas
          </p>
          <ul className="space-y-2 text-sm">
            {PRACTICE_AREAS.map((pa) => (
              <li key={pa.slug}>
                <Link
                  href={`/${PRACTICE_AREA_CITY}/${pa.slug}`}
                  className="hover:text-gold-400"
                >
                  {pa.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-500">
            Areas We Serve
          </p>
          <ul className="space-y-2 text-sm">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/${loc.slug}/real-estate-lawyer`}
                  className="hover:text-gold-400"
                >
                  {loc.city}, IL
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas-we-serve" className="text-gold-400 hover:text-gold-300">
                View All Areas &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-500">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>{FIRM.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              <a href={`tel:${FIRM.phoneRaw}`} className="hover:text-gold-400">
                {FIRM.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-500" />
              <a href={`mailto:${FIRM.email}`} className="hover:text-gold-400">
                {FIRM.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>{FIRM.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <iframe
          title="Tommalieh Law office map"
          src="https://www.google.com/maps?q=16061+South+94th+Avenue,+Orland+Hills,+IL+60487&output=embed"
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-content flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {FIRM.name}. All rights
            reserved. Attorney Advertising.
          </p>
          <p>{FIRM.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
