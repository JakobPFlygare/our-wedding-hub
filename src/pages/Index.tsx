import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import EventDetails from "@/components/wedding/EventDetails";
import LocationSection from "@/components/wedding/LocationSection";
import ToastmastersSection from "@/components/wedding/ToastmastersSection";
import ActivitiesSection from "@/components/wedding/ActivitiesSection";
import Footer from "@/components/wedding/Footer";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";

// Flip to `false` (or delete this block) to ship without the envelope intro.
const ENABLE_ENVELOPE_INTRO = true;
// Only play the intro once per browser session (survives in-site navigation, replays in a new tab/visit).
const INTRO_SEEN_KEY = "envelopeIntroSeen";

const Index = () => {
  const { hash } = useLocation();
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

  // Arriving from another page (e.g. /gifts) with a #section: scroll there once rendered.
  useEffect(() => {
    if (!hash || !introDone) return;
    const el = document.querySelector(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
  }, [hash, introDone]);

  return (
    <>
      {!introDone && <EnvelopeIntro onFinish={handleIntroFinish} />}
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <div id="details">
          <EventDetails />
        </div>
        <div id="location">
          <LocationSection />
        </div>
        <div id="news">
          <ToastmastersSection />
          <ActivitiesSection />
        </div>
        <PhotoGallery />
        <Footer />
      </main>
    </>
  );
};

export default Index;
