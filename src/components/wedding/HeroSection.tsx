import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-cuernavaca.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-ivory/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-sage mb-6 opacity-0 animate-fade-in-up">
          {t.hero.together}
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal mb-4 opacity-0 animate-fade-in-up animation-delay-200">
          Pau & Jakob
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="h-px w-16 bg-gold" />
          <p className="font-body text-xl md:text-2xl text-sage italic">
            {t.hero.gettingMarried}
          </p>
          <div className="h-px w-16 bg-gold" />
        </div>
        
        <p className="font-display text-2xl md:text-3xl text-charcoal mb-2 opacity-0 animate-fade-in-up animation-delay-600">
          January 9, 2027
        </p>
        
        <p className="font-body text-lg text-muted-foreground mb-12 opacity-0 animate-fade-in-up animation-delay-600">
          Las Mañanitas • Cuernavaca, Mexico
        </p>
        
        <div className="opacity-0 animate-fade-in-up animation-delay-800">
          <Button 
            variant="wedding" 
            size="xl"
            onClick={() => window.open('https://forms.gle/7dmhmZQkeFh7HhwPA', '_blank')}
          >
            {t.hero.rsvp}
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-sage/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
