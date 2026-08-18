import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  image?: string;
  practiceAreaLinks?: string[];
  locationLinks?: string[];
  relatedSlugs?: string[];
  faqs?: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getBlogCategories(posts: BlogPost[]): string[] {
  const set = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(set).sort();
}
