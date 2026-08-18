import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav aria-label="Breadcrumb" className="border-b border-charcoal-100 bg-charcoal-50">
        <ol className="container-content flex flex-wrap items-center gap-1 py-3 text-xs text-charcoal-500">
          {full.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3 text-charcoal-300" />}
              {i === full.length - 1 ? (
                <span className="font-medium text-charcoal-700">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-gold-600">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
