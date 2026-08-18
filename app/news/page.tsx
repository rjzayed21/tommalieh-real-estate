import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogListing from "@/components/BlogListing";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Law News & Guides",
  description:
    "Read the latest real estate law guides and news from Tommalieh Law, covering closings, contracts, landlord-tenant law, foreclosure, and more.",
  path: "/news",
});

export default function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allPosts = getAllBlogPosts();
  const categories = getBlogCategories(allPosts);

  return (
    <>
      <Hero
        eyebrow="News & Insights"
        title="Real Estate Law News & Guides"
        subtitle="Practical, plain-English guides to buying, selling, leasing, and resolving real estate disputes in Illinois."
        compact
      />
      <Breadcrumbs items={[{ name: "News", path: "/news" }]} />

      <section className="section">
        <div className="container-content">
          <BlogListing
            allPosts={allPosts}
            categories={categories}
            activeCategory={searchParams.category}
            page={1}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
