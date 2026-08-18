import type { MetadataRoute } from "next";
import { SITE_URL, PRACTICE_AREAS, PRACTICE_AREA_CITY, LOCATIONS } from "@/lib/constants";
import { getBlogSlugs } from "@/lib/blog";

const CORE_ROUTES = [
  "",
  "/our-firm",
  "/tamir-tommalieh",
  "/reviews",
  "/practice-areas",
  "/areas-we-serve",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = CORE_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const practiceAreas = PRACTICE_AREAS.map((pa) => ({
    url: `${SITE_URL}/${PRACTICE_AREA_CITY}/${pa.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locations = LOCATIONS.map((loc) => ({
    url: `${SITE_URL}/${loc.slug}/real-estate-lawyer`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blog = getBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/news/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...core, ...practiceAreas, ...locations, ...blog];
}
