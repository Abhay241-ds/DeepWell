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

const SITE_NAME = "DeepWell Digital";

const SITE_DESCRIPTION =
    "DeepWell Digital helps businesses grow with professional web development, app development, AI automation, digital branding, social media management, and marketing solutions.";

const OG_IMAGE = "/og-image.png";

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

    applicationName: SITE_NAME,

    title: {
        default: "DeepWell Digital | Digital Agency",
        template: "%s | DeepWell Digital",
    },

    description: SITE_DESCRIPTION,

    keywords: [
        "DeepWell Digital",
        "DeepWell Digital Agency",
        "Digital Agency",
        "Web Development Agency",
        "Website Development",
        "Next.js Development",
        "App Development",
        "AI Automation",
        "Social Media Management",
        "Digital Branding",
        "Digital Marketing Agency",
        "Marketing Strategies",
    ],

    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    category: "Technology",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        siteName: SITE_NAME,
        title: "DeepWell Digital | Digital Agency",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "DeepWell Digital - Digital Agency",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "DeepWell Digital | Digital Agency",
        description: SITE_DESCRIPTION,
        images: [OG_IMAGE],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

// Structured Data: Organization
const organizationSchema = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: SITE_NAME,
    url: SITE_URL,

    description: SITE_DESCRIPTION,

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

// Structured Data: Website
const websiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,
    name: SITE_NAME,

    description: SITE_DESCRIPTION,

    publisher: {
        "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en-IN",
};

// Combined Structured Data
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        organizationSchema,
        websiteSchema,
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
            lang="en-IN"
            suppressHydrationWarning
            className={`${manrope.variable} ${inter.variable}`}
        >
            <body className="flex min-h-screen flex-col antialiased">

                {/* Structured Data for Google */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData).replace(
                            /</g,
                            "\\u003c"
                        ),
                    }}
                />

                <ThemeProvider>
                    <Navbar />

                    <main className="flex-1">
                        {children}
                    </main>

                    <Footer />
                </ThemeProvider>

            </body>
        </html>
    );
}