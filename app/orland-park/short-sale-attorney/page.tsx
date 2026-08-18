import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { buildMetadata } from "@/lib/seo";
import { data } from "@/content/practice-areas/short-sale-attorney";

const SLUG = "short-sale-attorney";
const PATH = `/orland-park/${SLUG}`;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: PATH,
});

export default function Page() {
  return (
    <ArticleLayout
      data={data}
      eyebrow="Practice Area"
      currentPracticeAreaSlug={SLUG}
      breadcrumbs={[
        { name: "Practice Areas", path: "/practice-areas" },
        { name: data.h1, path: PATH },
      ]}
    />
  );
}
