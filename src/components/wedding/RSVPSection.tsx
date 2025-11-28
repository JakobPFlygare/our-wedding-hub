import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RSVPSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-sage-muted">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
          {t.rsvp.subtitle}
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 md:mb-6">
          {t.rsvp.title}
        </h2>
        
        <p className="font-body text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
          {t.rsvp.description}
        </p>

        <div className="flex justify-center mb-8 md:mb-12">
          <Button 
            variant="wedding" 
            size="lg"
            onClick={() => window.open('https://forms.gle/7dmhmZQkeFh7HhwPA', '_blank')}
            className="group w-full sm:w-auto"
          >
            {t.rsvp.rsvpOnline}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="p-4 md:p-6 bg-ivory/60 backdrop-blur-sm rounded-lg shadow-soft">
          <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-sage mb-2">
            {t.rsvp.questions}
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground">
            {t.rsvp.contactUs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
