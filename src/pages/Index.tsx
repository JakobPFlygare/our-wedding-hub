import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/wedding/LanguageToggle";
import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import EventDetails from "@/components/wedding/EventDetails";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <LanguageToggle />
        <HeroSection />
        <PhotoGallery />
        <div id="details">
          <EventDetails />
        </div>
        <div id="dress-code">
          <DressCodeSection />
        </div>
        <div id="location">
          <LocationSection />
        </div>
        <div id="rsvp">
          <RSVPSection />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
