import { useState, useCallback } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/wedding/LanguageToggle";
import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import EventDetails from "@/components/wedding/EventDetails";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import LocationSection from "@/components/wedding/LocationSection";
import MusicRequestSection from "@/components/wedding/MusicRequestSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";
import EnvelopeAnimation from "@/components/wedding/EnvelopeAnimation";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const handleEnvelopeComplete = useCallback(() => setShowContent(true), []);

  return (
    <LanguageProvider>
      <EnvelopeAnimation onComplete={handleEnvelopeComplete} />
      <main className={`min-h-screen transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
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
        <div id="music">
          <MusicRequestSection />
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
