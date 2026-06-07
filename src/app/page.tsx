import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ZonesSection from "@/components/ZonesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import TrainersSection from "@/components/TrainersSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ZonesSection />
      <ScheduleSection />
      <PricingSection />
      <TrainersSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
