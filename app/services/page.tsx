import type { Metadata } from "next";

import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServicesProcess from "@/components/services/ServicesProcess";
import BottomCTA from "@/components/layout/BottomCTA";

export const metadata: Metadata = {
    title: "Digital Services | Web, App & AI Development",
    description:
        "Explore DeepWell Digital's services, including website development, mobile app development, social media management, AI automation, digital branding and marketing strategies.",

    alternates: {
        canonical: "/services",
    },

    openGraph: {
        title: "Our Digital Services | DeepWell Digital",
        description:
            "From web development and mobile apps to AI automation and digital marketing, discover solutions designed to help your business grow.",
        url: "/services",
        type: "website",
    },
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesGrid />
            <WhyChooseUs />
            <ServicesProcess />
            <BottomCTA />
        </main>
    );
}