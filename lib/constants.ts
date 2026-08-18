export const SITE_URL = "https://www.tommaliehlaw.com";

export const FIRM = {
  name: "Tommalieh Law",
  legalName: "Tommalieh Law",
  attorney: "Tamir Tommalieh",
  tagline: "Real Estate Attorneys",
  shortTagline: "Real Estate Lawyers Serving the Southern Chicago Suburbs",
  phone: "(708) 232-0017",
  phoneRaw: "+17082320017",
  email: "office@tommaliehlaw.com",
  address: {
    street: "16061 South 94th Avenue",
    city: "Orland Hills",
    state: "IL",
    zip: "60487",
    full: "16061 South 94th Avenue, Orland Hills, IL 60487",
  },
  hours: "Monday–Sunday, 12:01 AM – 11:59 PM",
  social: {
    facebook: "https://facebook.com/tommaliehlaw",
    linkedin: "https://linkedin.com/in/tamir-tommalieh-009665a1",
  },
  geo: {
    latitude: 41.5967,
    longitude: -87.8598,
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  dropdown?: NavLink[];
};

export const MAIN_NAV: NavItem[] = [
  {
    label: "About",
    dropdown: [
      { label: "Our Firm", href: "/our-firm" },
      { label: "Attorney Tamir Tommalieh", href: "/tamir-tommalieh" },
      { label: "Reviews", href: "/reviews" },
      { label: "Areas We Serve", href: "/areas-we-serve" },
    ],
  },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: string;
};

export const PRACTICE_AREA_CITY = "orland-park";

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "residential-real-estate-lawyer",
    title: "Residential Real Estate",
    shortTitle: "Residential Real Estate",
    summary:
      "Guidance for buyers and sellers through contracts, attorney review, and closing on single-family homes, condos, and townhomes.",
    icon: "Home",
  },
  {
    slug: "commercial-real-estate-attorney",
    title: "Commercial Real Estate",
    shortTitle: "Commercial Real Estate",
    summary:
      "Counsel for acquisitions, leases, and dispositions of office, retail, industrial, and multi-family properties.",
    icon: "Building2",
  },
  {
    slug: "real-estate-closing-attorney",
    title: "Real Estate Closings",
    shortTitle: "Real Estate Closings",
    summary:
      "Full-service closing representation to protect your interests from contract to the closing table.",
    icon: "KeyRound",
  },
  {
    slug: "title-issues-attorney",
    title: "Title Issues & Title Insurance",
    shortTitle: "Title Issues",
    summary:
      "Resolving liens, judgments, boundary defects, and other title problems that threaten a clean transfer.",
    icon: "ShieldCheck",
  },
  {
    slug: "purchase-agreement-lawyer",
    title: "Purchase Agreements & Contract Review",
    shortTitle: "Purchase Agreements",
    summary:
      "Careful review and negotiation of purchase contracts so your rights and contingencies are protected.",
    icon: "FileText",
  },
  {
    slug: "landlord-tenant-lawyer",
    title: "Landlord-Tenant Disputes",
    shortTitle: "Landlord-Tenant",
    summary:
      "Representation for landlords and tenants in lease disputes, evictions, and security deposit claims.",
    icon: "Scale",
  },
  {
    slug: "real-estate-litigation-attorney",
    title: "Real Estate Litigation",
    shortTitle: "Real Estate Litigation",
    summary:
      "Aggressive courtroom representation for contract disputes, boundary conflicts, and breach of contract claims.",
    icon: "Gavel",
  },
  {
    slug: "foreclosure-defense-lawyer",
    title: "Foreclosure Defense",
    shortTitle: "Foreclosure Defense",
    summary:
      "Defending homeowners against foreclosure and exploring every option to save or exit a property on your terms.",
    icon: "ShieldAlert",
  },
  {
    slug: "zoning-land-use-attorney",
    title: "Zoning & Land Use",
    shortTitle: "Zoning & Land Use",
    summary:
      "Navigating zoning variances, special use permits, and municipal approvals for residential and commercial projects.",
    icon: "Map",
  },
  {
    slug: "short-sale-attorney",
    title: "Short Sales & REO",
    shortTitle: "Short Sales & REO",
    summary:
      "Negotiating short sales and REO transactions with lenders to help clients exit distressed properties.",
    icon: "Tag",
  },
];

export type LocationPage = {
  slug: string;
  city: string;
  county: string;
};

export const LOCATIONS: LocationPage[] = [
  { slug: "orland-park", city: "Orland Park", county: "Cook County" },
  { slug: "tinley-park", city: "Tinley Park", county: "Cook County" },
  { slug: "joliet", city: "Joliet", county: "Will County" },
  { slug: "naperville", city: "Naperville", county: "DuPage County" },
  { slug: "chicago", city: "Chicago", county: "Cook County" },
  { slug: "aurora", city: "Aurora", county: "Kane / DuPage County" },
];

export const ALL_LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export type CaseType =
  | "Residential Closing"
  | "Commercial Real Estate"
  | "Landlord-Tenant"
  | "Foreclosure"
  | "Title Issues"
  | "Zoning"
  | "Other";

export const CASE_TYPES: CaseType[] = [
  "Residential Closing",
  "Commercial Real Estate",
  "Landlord-Tenant",
  "Foreclosure",
  "Title Issues",
  "Zoning",
  "Other",
];

export const BLOG_PAGE_SIZE = 10;
