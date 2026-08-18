import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogListing from "@/components/BlogListing";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { BLOG_PAGE_SIZE } from "@/lib/constants";

export function generateStaticParams() {
  const total = getAllBlogPosts().length;
  const totalPages = Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
  return Array.from({ length: Math.max(0, totalPages - 1) }).map((_, i) => ({
    page: String(i + 2),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { page: string };
}): Metadata {
  return buildMetadata({
    title: `Real Estate Law News & Guides — Page ${params.page}`,
    description:
      "Read the latest real estate law guides and news from Tommalieh Law.",
    path: `/news/page/${params.page}`,
  });
}

export default function NewsPagePagination({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { category?: string };
}) {
  const allPosts = getAllBlogPosts();
  const categories = getBlogCategories(allPosts);
  const page = parseInt(params.page, 10) || 1;

  return (
    <>
      <Hero
        eyebrow="News & Insights"
        title="Real Estate Law News & Guides"
        subtitle="Practical, plain-English guides to buying, selling, leasing, and resolving real estate disputes in Illinois."
        compact
      />
      <Breadcrumbs
        items={[
          { name: "News", path: "/news" },
          { name: `Page ${page}`, path: `/news/page/${page}` },
        ]}
      />

      <section className="section">
        <div className="container-content">
          <BlogListing
            allPosts={allPosts}
            categories={categories}
            activeCategory={searchParams.category}
            page={page}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
