import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import BottomCTA from "@/components/layout/BottomCTA";
import OurTeam from "@/components/about/OurTeam";


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

    