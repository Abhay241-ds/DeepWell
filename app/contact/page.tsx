import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project with DeepWell Digital",

  description:
    "Get in touch with DeepWell Digital to discuss your website, app development, AI automation, branding or digital marketing project. Let's build something meaningful together.",

  keywords: [
    "Contact DeepWell Digital",
    "Hire Web Developers",
    "Website Development Agency",
    "App Development Services",
    "AI Automation Services",
    "Digital Marketing Agency",
    "Start a Project",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact DeepWell Digital | Let's Start a Project",
    description:
      "Have a project in mind? Contact DeepWell Digital to discuss your ideas and explore the right digital solutions for your business.",
    url: "/contact",
    siteName: "DeepWell Digital",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact DeepWell Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact DeepWell Digital",
    description:
      "Let's discuss your next website, app, AI or digital marketing project.",
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

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}