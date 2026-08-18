import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";
import { BLOG_PAGE_SIZE } from "@/lib/constants";

export default function BlogListing({
  allPosts,
  categories,
  activeCategory,
  page,
}: {
  allPosts: BlogPost[];
  categories: string[];
  activeCategory?: string;
  page: number;
}) {
  const filtered = activeCategory
    ? allPosts.filter((p) => p.frontmatter.category === activeCategory)
    : allPosts;

  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * BLOG_PAGE_SIZE;
  const pagePosts = filtered.slice(start, start + BLOG_PAGE_SIZE);

  function pageHref(p: number) {
    const base = p === 1 ? "/news" : `/news/page/${p}`;
    return activeCategory ? `${base}?category=${encodeURIComponent(activeCategory)}` : base;
  }

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <Link
          href="/news"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
            !activeCategory
              ? "border-gold-500 bg-gold-50 text-charcoal-800"
              : "border-charcoal-200 text-charcoal-500 hover:border-gold-300"
          }`}
        >
          All Articles
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/news?category=${encodeURIComponent(cat)}`}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
              activeCategory === cat
                ? "border-gold-500 bg-gold-50 text-charcoal-800"
                : "border-charcoal-200 text-charcoal-500 hover:border-gold-300"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {pagePosts.length === 0 ? (
        <p className="text-charcoal-500">
          No articles found. Check back soon for more real estate law
          insights.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <Link
            href={pageHref(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 ${
              currentPage === 1
                ? "pointer-events-none opacity-30"
                : "hover:border-gold-500 hover:text-gold-600"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link
              key={i}
              href={pageHref(i + 1)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium ${
                currentPage === i + 1
                  ? "border-gold-500 bg-gold-50 text-charcoal-800"
                  : "border-charcoal-200 text-charcoal-500 hover:border-gold-300"
              }`}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            href={pageHref(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-200 ${
              currentPage === totalPages
                ? "pointer-events-none opacity-30"
                : "hover:border-gold-500 hover:text-gold-600"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
