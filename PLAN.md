# Tommalieh Law — Real Estate Website Project Plan

## Overview

Build a full SEO-optimized real estate law website for **Tamir Tommalieh** of **Tommalieh Law**, modeled after his existing family law site at orlandfamilylawyers.com. The new site is dedicated entirely to real estate legal services, targeting the southern Chicago suburbs (Cook County, Will County, DuPage County).

This site should be built with **Next.js** (App Router) for SEO performance, static generation, and scalability. The design should mirror the professional, clean aesthetic of the family law site — dark neutrals, gold/amber accents, strong CTAs.

---

## Branding & Contact Info

- **Firm Name:** Tommalieh Law
- **Attorney:** Tamir Tommalieh
- **Tagline:** Real Estate Lawyers (or Real Estate Attorneys)
- **Logo:** Use the existing Tommalieh Law logo (attached separately)
- **Email:** office@orlandfamilylawyers.com (may change for new site)
- **Phone:** (708) 232-0017
- **Address:** 16061 South 94th Avenue, Orland Hills, IL 60487
- **Hours:** Monday–Sunday, 00:01–23:59
- **Social:** Facebook (facebook.com/tommaliehlaw), LinkedIn (linkedin.com/in/tamir-tommalieh-009665a1)

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router, static site generation)
- **Styling:** Tailwind CSS
- **CMS for Blog:** Markdown files (MDX) in a `/content/blog/` directory — easy to add articles over time
- **Deployment:** Vercel (or any static host)
- **SEO:** Next.js metadata API, JSON-LD structured data, sitemap.xml, robots.txt
- **Forms:** Multi-step lead capture form (name → case type → message → contact info)
- **Analytics:** Google Tag Manager placeholder

---

## Design Direction

Match the family law site's design language:

- **Colors:** Dark charcoal (#333), white, gold/amber accent for CTAs and highlights
- **Typography:** Clean sans-serif (Inter or similar), strong headings
- **Layout patterns:**
  - Sticky header with logo, nav, phone number, and "Free Case Review" CTA button
  - Hero section with headline, subheadline, CTA button
  - Practice area cards/grid
  - Testimonial carousel
  - FAQ accordion
  - Footer with map embed, address, social links, practice area links
  - Mobile bottom bar with Home / Free Case Review / Text Us

---

## Sitemap & Page Architecture

### TIER 1 — Core Pages (8 pages)

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero + practice areas grid + about blurb + video embed + testimonials + FAQ accordion + blog feed (latest 6 articles) + CTA sections |
| About the Firm | `/our-firm` | Firm story, mission, values, why choose us |
| Attorney Bio | `/tamir-tommalieh` | Tamir's bio, education, bar admissions, real estate experience, headshot |
| Reviews | `/reviews` | Client testimonials with names and stars |
| Practice Areas Hub | `/practice-areas` | Grid/list linking to all practice area pillar pages |
| Areas We Serve Hub | `/areas-we-serve` | Grid/list linking to all location pages with a map |
| Blog / News | `/news` | Paginated blog feed, 10 articles per page, category filter |
| Contact | `/contact` | Multi-step form, Google Maps embed, phone, email, hours |

### TIER 2 — Practice Area Pillar Pages (10 pages)

Each page is 1,500–2,500 words, has a table of contents, FAQ section, internal links to related articles and location pages, images, and a CTA.

| Practice Area | Route |
|--------------|-------|
| Residential Real Estate | `/orland-park/residential-real-estate-lawyer` |
| Commercial Real Estate | `/orland-park/commercial-real-estate-attorney` |
| Real Estate Closings | `/orland-park/real-estate-closing-attorney` |
| Title Issues & Title Insurance | `/orland-park/title-issues-attorney` |
| Purchase Agreements / Contract Review | `/orland-park/purchase-agreement-lawyer` |
| Landlord-Tenant Disputes | `/orland-park/landlord-tenant-lawyer` |
| Real Estate Litigation | `/orland-park/real-estate-litigation-attorney` |
| Foreclosure Defense | `/orland-park/foreclosure-defense-lawyer` |
| Zoning & Land Use | `/orland-park/zoning-land-use-attorney` |
| Short Sales & REO | `/orland-park/short-sale-attorney` |

### TIER 3 — Location Pages (15 pages)

Each is a dedicated page targeting "[real estate lawyer] + [city]" with localized content, 1,000–1,500 words, internal links to practice areas, and a CTA.

| City/County | Route |
|------------|-------|
| Orland Park | `/orland-park/real-estate-lawyer` |
| Tinley Park | `/tinley-park/real-estate-lawyer` |
| Orland Hills | `/orland-hills/real-estate-lawyer` |
| Joliet | `/joliet/real-estate-lawyer` |
| Naperville | `/naperville/real-estate-lawyer` |
| Aurora | `/aurora/real-estate-lawyer` |
| Chicago | `/chicago/real-estate-lawyer` |
| Cicero | `/cicero/real-estate-lawyer` |
| Homer Glen | `/homer-glen/real-estate-lawyer` |
| Mokena | `/mokena/real-estate-lawyer` |
| Frankfort | `/frankfort/real-estate-lawyer` |
| New Lenox | `/new-lenox/real-estate-lawyer` |
| Bolingbrook | `/bolingbrook/real-estate-lawyer` |
| DuPage County | `/dupage/real-estate-lawyer` |
| Will County | `/will-county/real-estate-lawyer` |

### TIER 4 — Blog Articles (Start with 10–15, scale to 100+)

Each article: 1,500–2,500 words, keyword-targeted H1, table of contents, H2/H3 sections, 2–3 images, FAQ section at bottom, 3–5 internal links (to practice area pages, location pages, and other articles), CTA with phone number, "Related Topics" section at bottom.

#### Initial Article Topics (Priority Order)

**Buying & Selling (highest intent):**
1. Do I Need a Lawyer to Buy a House in Illinois?
2. Do I Need a Lawyer to Sell a House in Illinois?
3. What Does a Real Estate Attorney Do at Closing?
4. How Much Does a Real Estate Lawyer Cost in Illinois?
5. What to Expect at a Real Estate Closing in Illinois
6. How Long Does a Real Estate Closing Take in Illinois?
7. What Is Attorney Review in Illinois Real Estate?
8. Can You Back Out of a Real Estate Contract in Illinois?
9. What Is Earnest Money in Illinois?
10. Buyer vs Seller Closing Costs in Illinois

**Contracts & Agreements:**
11. How to Review a Real Estate Purchase Agreement
12. What Is a Real Estate Contingency?
13. What Happens if a Seller Backs Out of a Contract?
14. What Is a Title Search and Why Do I Need One?
15. What Is Title Insurance in Illinois?

**Landlord-Tenant:**
16. Illinois Landlord-Tenant Rights Explained
17. How to Evict a Tenant in Illinois
18. How Much Notice Does a Landlord Have to Give in Illinois?
19. Security Deposit Laws in Illinois
20. Tenant Rights When a Property Is Sold in Illinois

**Foreclosure:**
21. What Is the Foreclosure Process in Illinois?
22. How to Stop a Foreclosure in Illinois
23. Illinois Foreclosure Timeline Explained
24. Short Sale vs Foreclosure: Which Is Better?

**Property Disputes:**
25. Boundary Disputes in Illinois
26. Easement Disputes Explained
27. Quiet Title Actions in Illinois
28. Adverse Possession in Illinois

**Zoning & Land Use:**
29. Zoning Laws in Cook County Explained
30. How to Get a Zoning Variance in Illinois
31. Residential vs Commercial Zoning in Illinois

**Investment / Commercial:**
32. How to Form an LLC for Real Estate in Illinois
33. 1031 Exchange Rules in Illinois
34. Due Diligence Checklist for Commercial Real Estate
35. What Is a Commercial Lease Review?

**General / First-Time Buyers:**
36. First-Time Homebuyer Programs in Illinois
37. FHA vs Conventional Loans Explained
38. Property Tax Assessment Appeals in Illinois
39. How to Transfer Property to a Family Member in Illinois
40. What Is a Quit Claim Deed in Illinois?
41. Joint Tenancy vs Tenancy in Common in Illinois

---

## Internal Linking Strategy

Every article must contain **3–5 internal links:**
- At least 1 link to the relevant **practice area pillar page**
- At least 1 link to a **location page**
- 1–3 links to **related blog articles**

Every **practice area pillar page** should link to:
- 3–5 relevant blog articles
- The Areas We Serve hub
- Other related practice area pages

Every **location page** should link to:
- All practice area pillar pages
- 2–3 relevant blog articles
- The main homepage

This creates a dense internal link web that signals topical authority to Google.

---

## Content Template for Blog Articles

```
# [Keyword-Targeted H1 Title]

Breadcrumbs: Home > Category > Article Title
Updated on: [Date]

[Intro paragraph — 2-3 sentences framing the question, mention Tommalieh Law and link to relevant practice area page]

## Table of Contents
[Auto-generated from H2/H3 headings]

## [H2 Section 1]
[Content with internal links naturally woven in]

### [H3 Subsection if needed]

## [H2 Section 2]
[Content with image]

## [H2 Section 3]
[Content]

## [Conclusion / Contact CTA]
[Summary + "Contact Tommalieh Law at (708) 232-0017 to schedule a free consultation."]

## Frequently Asked Questions

### [FAQ 1]?
[Answer]

### [FAQ 2]?
[Answer]

### [FAQ 3]?
[Answer]

---

SIDEBAR: Practice Areas links
BOTTOM: Related Topics (links to 4-6 other articles)
```

---

## Conversion Elements (Every Page)

1. **Sticky Header:** Logo | Nav | Phone Number | "Free Case Review" button
2. **Multi-Step Lead Form (modal):**
   - Step 1: First Name, Last Name
   - Step 2: Case Type dropdown (Residential Closing, Commercial Real Estate, Landlord-Tenant, Foreclosure, Title Issues, Zoning, Other)
   - Step 3: Message textarea
   - Step 4: Phone, Email, Submit
3. **CTA Sections:** Scattered throughout pages — "Free Consultation" buttons
4. **Mobile Bottom Bar:** Home | Free Case Review | Text Us
5. **Footer:** Logo, Google Maps embed, address, phone, social links, practice area links, copyright

---

## SEO Requirements

- **Metadata:** Unique title tag and meta description for every page, following the pattern: `[Page Title] | Tommalieh Law`
- **Open Graph & Twitter Cards:** Image, title, description for every page
- **JSON-LD Structured Data:**
  - LocalBusiness schema on homepage
  - Attorney schema on bio page
  - FAQPage schema on any page with FAQ sections
  - Article/BlogPosting schema on blog articles
  - BreadcrumbList schema on all pages
- **Sitemap:** Auto-generated sitemap.xml
- **Robots.txt:** Allow all, point to sitemap
- **Canonical URLs:** Self-referencing on every page
- **Image Alt Tags:** Descriptive alt text on all images
- **Page Speed:** Static generation, optimized images (next/image), minimal JS

---

## Phase 1 Deliverables (What to Build Now)

1. Project scaffolding (Next.js + Tailwind + MDX setup)
2. Shared layout: header, footer, mobile nav, lead form modal, mobile bottom bar
3. All 8 core pages with real content
4. All 10 practice area pillar pages with full content
5. 5–6 location pages (Orland Park, Tinley Park, Joliet, Naperville, Chicago, Aurora)
6. 5 blog articles (topics 1–5 from the priority list above)
7. Blog pagination and category filtering
8. JSON-LD structured data
9. Sitemap and robots.txt
10. Responsive design (mobile-first)

---

## File Structure

```
tommalieh-real-estate/
├── app/
│   ├── layout.tsx              (root layout with header/footer)
│   ├── page.tsx                (homepage)
│   ├── our-firm/page.tsx
│   ├── tamir-tommalieh/page.tsx
│   ├── reviews/page.tsx
│   ├── practice-areas/page.tsx
│   ├── areas-we-serve/page.tsx
│   ├── contact/page.tsx
│   ├── news/page.tsx
│   ├── [city]/
│   │   ├── real-estate-lawyer/page.tsx
│   │   ├── residential-real-estate-lawyer/page.tsx
│   │   ├── commercial-real-estate-attorney/page.tsx
│   │   ├── (etc.)
│   ├── [slug]/page.tsx         (blog article pages from MDX)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileBottomBar.tsx
│   ├── LeadForm.tsx
│   ├── Hero.tsx
│   ├── PracticeAreaCard.tsx
│   ├── TestimonialCarousel.tsx
│   ├── FAQAccordion.tsx
│   ├── TableOfContents.tsx
│   ├── BlogCard.tsx
│   ├── Sidebar.tsx
│   ├── CTASection.tsx
├── content/
│   ├── blog/
│   │   ├── do-i-need-a-lawyer-to-buy-a-house-in-illinois.mdx
│   │   ├── (etc.)
│   ├── practice-areas/
│   ├── locations/
├── public/
│   ├── images/
│   ├── logo.png
├── lib/
│   ├── mdx.ts
│   ├── seo.ts
├── tailwind.config.ts
├── next.config.js
├── package.json
```
