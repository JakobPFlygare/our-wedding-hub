import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RSVPSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 bg-sage-muted">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
          {t.rsvp.subtitle}
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
          {t.rsvp.title}
        </h2>
        
        <p className="font-body text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">
          {t.rsvp.description}
        </p>

        <div className="flex justify-center mb-6">
          <Button 
            variant="wedding" 
            size="lg"
            onClick={() => window.open('https://forms.gle/7dmhmZQkeFh7HhwPA', '_blank')}
            className="group w-full sm:w-auto"
          >
            {t.hero.rsvp}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="p-4 bg-ivory/60 backdrop-blur-sm rounded-lg shadow-soft">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-1">
            {t.rsvp.questions}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            {t.rsvp.contactUs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
