import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RSVPSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-sage-muted">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4">
          {t.rsvp.subtitle}
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
          {t.rsvp.title}
        </h2>
        
        <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
          {t.rsvp.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="wedding" 
            size="xl"
            onClick={() => window.open('https://forms.gle/7dmhmZQkeFh7HhwPA', '_blank')}
            className="group"
          >
            {t.rsvp.rsvpOnline}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="wedding-outline" 
            size="xl"
            onClick={() => window.location.href = 'mailto:pau.jakob.2027@email.com'}
          >
            <Mail className="w-4 h-4" />
            {t.rsvp.emailUs}
          </Button>
        </div>

        <div className="p-6 bg-ivory/60 backdrop-blur-sm rounded-lg shadow-soft">
          <p className="font-sans text-sm uppercase tracking-wider text-sage mb-2">
            {t.rsvp.questions}
          </p>
          <p className="font-body text-muted-foreground">
            Feel free to reach out to us at{" "}
            <a 
              href="mailto:pau.jakob.2027@email.com" 
              className="text-sage hover:text-sage/80 underline underline-offset-4"
            >
              pau.jakob.2027@email.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
