import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurTeam from "@/components/about/OurTeam";
import BottomCTA from "@/components/layout/BottomCTA";

export const metadata: Metadata = {
    title: "About Us | Our Team, Vision & Expertise",
    description:
        "Get to know DeepWell Digital, a digital agency bringing together dedicated teams for web development, app development, AI automation, branding and digital marketing.",

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About DeepWell Digital | Our Team & Vision",
        description:
            "Meet the people and explore the vision behind DeepWell Digital. Different teams, shared vision, meaningful digital solutions.",
        url: "/about",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurTeam />
            <WhoWeAre />
            <BottomCTA />
        </main>
    );
}