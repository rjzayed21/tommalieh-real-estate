import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Calendar, Tag } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import Sidebar from "@/components/Sidebar";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";
import { extractToc } from "@/lib/toc";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/news/${params.slug}`,
  });
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const slugs = getBlogSlugs();
  if (!slugs.includes(params.slug)) notFound();

  const post = getBlogPost(params.slug);
  const toc = extractToc(post.content);
  const allPosts = getAllBlogPosts();

  const relatedArticles = (post.frontmatter.relatedSlugs ?? [])
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ title: p.frontmatter.title, href: `/news/${p.slug}` }));

  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          path: `/news/${params.slug}`,
          datePublished: post.frontmatter.date,
          dateModified: post.frontmatter.updated,
        })}
      />
      <Hero
        eyebrow={post.frontmatter.category}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.description}
        compact
      />
      <Breadcrumbs
        items={[
          { name: "News", path: "/news" },
          { name: post.frontmatter.title, path: `/news/${params.slug}` },
        ]}
      />

      <section className="section">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-8 flex items-center gap-4 text-sm text-charcoal-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Updated {date}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {post.frontmatter.category}
              </span>
            </div>

            {toc.length > 0 && (
              <div className="mb-10">
                <TableOfContents
                  sections={toc.map((t) => ({ id: t.id, heading: t.text, html: "" }))}
                />
              </div>
            )}

            <div className="prose-article">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>

            {post.frontmatter.faqs && post.frontmatter.faqs.length > 0 && (
              <div className="mt-12">
                <FAQAccordion items={post.frontmatter.faqs} />
              </div>
            )}
          </div>

          <Sidebar relatedArticles={relatedArticles} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
