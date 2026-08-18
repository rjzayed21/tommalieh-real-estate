import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { LeadFormProvider } from "@/components/LeadFormProvider";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { FIRM, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FIRM.name} | ${FIRM.tagline} in Orland Park, IL`,
    template: `%s | ${FIRM.name}`,
  },
  description:
    "Tommalieh Law provides trusted real estate legal representation for buyers, sellers, landlords, and investors across Orland Park and the southern Chicago suburbs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={localBusinessSchema()} />
        <LeadFormProvider>
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
        </LeadFormProvider>
      </body>
    </html>
  );
}
