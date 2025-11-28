import HeroSection from "@/components/wedding/HeroSection";
import EventDetails from "@/components/wedding/EventDetails";
import OurStory from "@/components/wedding/OurStory";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <OurStory />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
