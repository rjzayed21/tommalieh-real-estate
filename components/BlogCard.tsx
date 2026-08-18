import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col rounded-lg border border-charcoal-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
    >
      <div className="mb-3 flex items-center gap-3 text-xs text-charcoal-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Tag className="h-3.5 w-3.5" />
          {post.frontmatter.category}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold leading-snug text-charcoal-800 group-hover:text-gold-600">
        {post.frontmatter.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal-500">
        {post.frontmatter.description}
      </p>
      <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
        Read Article <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
