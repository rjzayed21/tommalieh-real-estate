import type { Metadata } from "next";
import { FIRM, SITE_URL } from "./constants";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og-default.jpg",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(FIRM.name)
    ? title
    : `${title} | ${FIRM.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: FIRM.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
