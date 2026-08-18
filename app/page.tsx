import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, PlayCircle, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import { PRACTICE_AREAS, FIRM } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";
import { getAllBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${FIRM.name} | Real Estate Attorneys in Orland Park, IL`,
  description:
    "Trusted real estate legal representation for buyers, sellers, landlords, and investors across Orland Park, Cook County, Will County, and DuPage County.",
  path: "/",
});

const HOME_FAQS = [
  {
    question: "Do I need a real estate attorney in Illinois?",
    answer:
      "Illinois is one of the few states where attorney review is standard practice for real estate transactions. While not always legally required, having an attorney review your contract, handle attorney review negotiations, and represent you at closing protects you from costly mistakes and unfavorable contract terms.",
  },
  {
    question: "How much does Tommalieh Law charge for a real estate closing?",
    answer:
      "Most residential closings are handled for a flat fee, so you know your legal costs upfront with no surprises. Commercial matters, litigation, and complex disputes are typically billed based on the scope of work. Contact us for a free case review and a clear quote.",
  },
  {
    question: "What areas does Tommalieh Law serve?",
    answer:
      "We represent clients throughout the southern Chicago suburbs, including Orland Park, Tinley Park, Orland Hills, Joliet, Naperville, Aurora, Chicago, and surrounding communities in Cook County, Will County, and DuPage County.",
  },
  {
    question: "How quickly can I speak with an attorney?",
    answer:
      "We pride ourselves on being responsive. Submit a free case review request or call us directly at (708) 232-0017, and our team will respond promptly — often the same day.",
  },
  {
    question: "Do you represent both buyers and sellers?",
    answer:
      "Yes. Tommalieh Law represents buyers, sellers, landlords, tenants, and investors. We tailor our approach to your side of the transaction to make sure your interests are protected.",
  },
  {
    question: "Can you help if I'm already in a real estate dispute or lawsuit?",
    answer:
      "Absolutely. In addition to transactional work, we handle real estate litigation, foreclosure defense, boundary disputes, and landlord-tenant conflicts, whether the matter is just starting or already in court.",
  },
];

const WHY_CHOOSE_US = [
  "Flat-fee pricing for most residential closings",
  "Direct access to your attorney, not a paralegal pipeline",
  "Deep familiarity with Cook, Will, and DuPage County courts and recorders",
  "Fast turnaround on contract and attorney review deadlines",
  "Transparent communication from contract to closing",
];

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="Tommalieh Law"
        title="Real Estate Attorneys Protecting Your Transaction, Every Step of the Way"
        subtitle="From contract to closing, Tamir Tommalieh provides dedicated legal representation for buyers, sellers, landlords, and investors across the Chicagoland Area"
        backgroundImage="/images/real_estate_cover_photo.png"
      />

      <section className="section">
        <div className="container-content">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
              Practice Areas
            </p>
            <h2 className="text-3xl font-bold text-charcoal-800 sm:text-4xl">
              Comprehensive Real Estate Legal Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-50">
        <div className="container-content grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
              About Tommalieh Law
            </p>
            <h2 className="mb-5 text-3xl font-bold text-charcoal-800 sm:text-4xl">
              Straightforward Legal Guidance for Your Biggest Investment
            </h2>
            <p className="mb-5 leading-relaxed text-charcoal-600">
              Buying, selling, or managing real estate is one of the largest
              financial decisions most people make. Tommalieh Law was built
              to give clients across the southern Chicago suburbs
              dependable, attorney-led representation, without the runaround
              of a high-volume closing mill.
            </p>
            <p className="mb-6 leading-relaxed text-charcoal-600">
              Attorney Tamir Tommalieh personally reviews contracts,
              negotiates on your behalf, and stays available throughout your
              transaction or dispute so you always know where things stand.
            </p>
            <ul className="mb-8 space-y-3">
              {WHY_CHOOSE_US.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/our-firm" className="btn-outline">
              Learn More About Our Firm
            </Link>
          </div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-charcoal-900">
            <button
              type="button"
              aria-label="Play firm introduction video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-charcoal-900 transition-transform hover:scale-105"
            >
              <PlayCircle className="h-9 w-9" />
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-gold-600">
            Client Reviews
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-charcoal-800 sm:text-4xl">
            What Our Clients Say
          </h2>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section bg-charcoal-50">
          <div className="container-content">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
                  Latest Insights
                </p>
                <h2 className="text-3xl font-bold text-charcoal-800 sm:text-4xl">
                  Real Estate Law News &amp; Guides
                </h2>
              </div>
              <Link
                href="/news"
                className="flex items-center gap-1 text-sm font-semibold text-gold-600 hover:gap-2 transition-all"
              >
                View All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-content max-w-3xl">
          <FAQAccordion items={HOME_FAQS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
