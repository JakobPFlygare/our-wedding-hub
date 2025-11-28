import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/wedding/LanguageToggle";
import HeroSection from "@/components/wedding/HeroSection";
import EventDetails from "@/components/wedding/EventDetails";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <EventDetails />
        <DressCodeSection />
        <LocationSection />
        <RSVPSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
