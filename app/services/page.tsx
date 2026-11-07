import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServicesProcess from "@/components/services/ServicesProcess";
import BottomCTA from "@/components/layout/BottomCTA";    

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