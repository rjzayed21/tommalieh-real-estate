import { FIRM, SITE_URL } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#organization`,
    name: FIRM.name,
    image: `${SITE_URL}/images/og-default.jpg`,
    url: SITE_URL,
    telephone: FIRM.phone,
    email: FIRM.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: FIRM.address.street,
      addressLocality: FIRM.address.city,
      addressRegion: FIRM.address.state,
      postalCode: FIRM.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: FIRM.geo.latitude,
      longitude: FIRM.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:01",
      closes: "23:59",
    },
    sameAs: [FIRM.social.facebook, FIRM.social.linkedin],
    areaServed: {
      "@type": "State",
      name: "Illinois",
    },
  };
}

export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/tamir-tommalieh#person`,
    name: FIRM.attorney,
    jobTitle: "Real Estate Attorney",
    worksFor: {
      "@type": "Attorney",
      name: FIRM.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/tamir-tommalieh`,
    telephone: FIRM.phone,
    sameAs: [FIRM.social.linkedin],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    image: args.image ?? `${SITE_URL}/images/og-default.jpg`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: {
      "@type": "Person",
      name: FIRM.attorney,
    },
    publisher: {
      "@type": "Organization",
      name: FIRM.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${args.path}`,
    },
  };
}
