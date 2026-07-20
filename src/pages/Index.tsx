import { useState } from "react";
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
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";

// Local experiment: flip to `false` (or delete this block) to ship without the envelope intro.
const ENABLE_ENVELOPE_INTRO = true;

const Index = () => {
  const [introDone, setIntroDone] = useState(!ENABLE_ENVELOPE_INTRO);

  return (
    <LanguageProvider>
      {!introDone && <EnvelopeIntro onFinish={() => setIntroDone(true)} />}
      <main className="min-h-screen">
        <Navigation />
        <LanguageToggle />
        <HeroSection />
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
        <PhotoGallery />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
