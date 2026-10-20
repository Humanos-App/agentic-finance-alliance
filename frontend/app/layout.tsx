import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  BRAND,
  absoluteUrl,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/chrome/Navbar";
import { Footer } from "@/components/chrome/Footer";

// Self-hosted, non-render-blocking. Variable font → 400/500/600 all available.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

import "./globals.css";
import "./styles/buttons.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/sections/hero.css";
import "./styles/sections/logos.css";
import "./styles/sections/about.css";
import "./styles/sections/statement.css";
import "./styles/sections/why-join.css";
import "./styles/sections/who.css";
import "./styles/sections/gallery.css";
import "./styles/sections/partners.css";
import "./styles/sections/apply.css";
import "./styles/sections/dinners.css";
import "./styles/not-found.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: BRAND.green,
};

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "AFA",
  url: SITE_URL,
  logo: absoluteUrl("/icon.png"),
  description:
    "Private, curated dinners at the frontier of AI and financial services.",
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning silences the benign mismatch caused by
       browser extensions that inject attributes onto <html>. */
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <JsonLd data={ORGANIZATION_LD} />
        <JsonLd data={WEBSITE_LD} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
