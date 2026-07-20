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

// Flip to `false` (or delete this block) to ship without the envelope intro.
const ENABLE_ENVELOPE_INTRO = true;
// Only play the intro once per browser session (survives in-site navigation, replays in a new tab/visit).
const INTRO_SEEN_KEY = "envelopeIntroSeen";

const Index = () => {
  const [introDone, setIntroDone] = useState(() => {
    if (!ENABLE_ENVELOPE_INTRO) return true;
    try {
      return sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    } catch {
      return false;
    }
  });

  const handleIntroFinish = () => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      /* ignore (e.g. storage disabled) */
    }
    setIntroDone(true);
  };

  return (
    <LanguageProvider>
      {!introDone && <EnvelopeIntro onFinish={handleIntroFinish} />}
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
