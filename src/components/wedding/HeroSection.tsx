import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-cuernavaca.jpg";
import Countdown from "./Countdown";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay - vibrant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rosa/20 via-transparent to-turquoise/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream drop-shadow-lg mb-4 opacity-0 animate-fade-in-up">
          Pau & Jakob
        </h1>
        
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="h-px w-8 md:w-16 bg-marigold/80" />
          <p className="font-body text-lg md:text-xl lg:text-2xl text-cream/90 italic drop-shadow-md">
            {t.hero.gettingMarried}
          </p>
          <div className="h-px w-8 md:w-16 bg-marigold/80" />
        </div>
        
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-cream drop-shadow-md mb-2 opacity-0 animate-fade-in-up animation-delay-600">
          January 9, 2027
        </p>
        
        <p className="font-body text-base md:text-lg text-cream/90 drop-shadow-md mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-600">
          Las Mañanitas • Cuernavaca, Mexico
        </p>
        
        {/* Countdown */}
        <div className="opacity-0 animate-fade-in-up animation-delay-700">
          <Countdown />
        </div>
        
        <div className="opacity-0 animate-fade-in-up animation-delay-800">
          <Button 
            variant="wedding" 
            size="lg"
            onClick={() => window.open('https://forms.gle/7dmhmZQkeFh7HhwPA', '_blank')}
            className="w-full sm:w-auto bg-marigold text-charcoal hover:bg-marigold-light border-none font-semibold"
          >
            {t.hero.rsvp}
          </Button>
          <p className="font-body text-sm text-cream/80 mt-3 drop-shadow-md">
            {t.hero.rsvpDeadline}
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-marigold/60 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-marigold/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
