import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const SITE_URL = "https://deepwelldigital.vercel.app";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Global SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "DeepWell Digital | Digital Agency",
    template: "%s | DeepWell Digital",
  },

  description:
    "DeepWell Digital helps businesses grow with professional web development, app development, AI automation, digital branding, and marketing solutions.",

  keywords: [
    "DeepWell Digital",
    "Digital Agency",
    "Web Development Agency",
    "App Development",
    "Next.js Development",
    "AI Automation",
    "Social Media Management",
    "Digital Branding",
    "Digital Marketing Agency",
  ],

  authors: [{ name: "DeepWell Digital" }],
  creator: "DeepWell Digital",
  publisher: "DeepWell Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DeepWell Digital",
    title: "DeepWell Digital | Digital Agency",
    description:
      "We build meaningful digital experiences through technology, creativity, and strategy.",
    url: SITE_URL,
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeepWell Digital | Digital Agency",
    description:
      "Building meaningful digital experiences through technology, creativity, and strategy.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// Organization Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: "DeepWell Digital",

  url: SITE_URL,

  description:
    "DeepWell Digital is a digital agency providing web development, app development, social media management, AI automation, digital branding, and marketing solutions.",

  slogan: "Dig Deeper. Build Better.",

  knowsAbout: [
    "Web Development",
    "App Development",
    "Social Media Management",
    "AI Automation",
    "Digital Branding",
    "Marketing Strategies",
  ],
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}