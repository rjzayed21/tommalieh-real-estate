import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { buildMetadata } from "@/lib/seo";
import { data } from "@/content/locations/naperville";

const SLUG = "naperville";
const PATH = `/${SLUG}/real-estate-lawyer`;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: PATH,
});

export default function Page() {
  return (
    <ArticleLayout
      data={data}
      eyebrow="Areas We Serve"
      breadcrumbs={[
        { name: "Areas We Serve", path: "/areas-we-serve" },
        { name: data.h1, path: PATH },
      ]}
    />
  );
}
