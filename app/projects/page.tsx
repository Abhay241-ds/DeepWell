import type { Metadata } from "next";

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import BottomCTA from "@/components/layout/BottomCTA";

export const metadata: Metadata = {
  title: "Our Projects | Websites, Apps & Digital Solutions",

  description:
    "Explore projects built by DeepWell Digital, including website development, AI-powered solutions and digital experiences designed to help businesses and organizations grow.",

  keywords: [
    "DeepWell Digital Projects",
    "Web Development Projects",
    "Website Portfolio",
    "Next.js Projects",
    "AI Projects",
    "Digital Agency Portfolio",
    "App Development Projects",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Our Projects | DeepWell Digital",
    description:
      "Explore our portfolio of websites, applications and digital solutions built by DeepWell Digital.",
    url: "/projects",
    siteName: "DeepWell Digital",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeepWell Digital Projects Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Projects | DeepWell Digital",
    description:
      "Explore websites, applications and digital solutions created by DeepWell Digital.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsGrid />
      <BottomCTA />
    </main>
  );
}