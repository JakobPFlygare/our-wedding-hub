import { useLanguage } from "@/contexts/LanguageContext";

const RSVPSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 bg-sage-muted">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
          {t.rsvp.subtitle}
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
          {t.rsvp.title}
        </h2>
        
        <p className="font-body text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
          {t.rsvp.description}
        </p>

        {/* Embedded Google Form */}
        <div className="bg-ivory rounded-lg shadow-elevated overflow-hidden mb-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7dmhmZQkeFh7HhwPA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
            title="RSVP Form"
          >
            Loading…
          </iframe>
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
