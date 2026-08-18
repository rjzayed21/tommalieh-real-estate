export type ContentSection = {
  id: string;
  heading: string;
  html: string;
};

export type FAQItemData = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  title: string;
  href: string;
};

export type ArticlePageData = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introHtml: string;
  sections: ContentSection[];
  faqs: FAQItemData[];
  relatedArticles: RelatedLink[];
  relatedLocations: RelatedLink[];
  relatedPracticeAreas: RelatedLink[];
};
