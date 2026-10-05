import { useLanguage } from "@/contexts/LanguageContext";

const RSVPSection = () => {
  const { t } = useLanguage();

  return (
    <section id="rsvp" className="py-14 md:py-20 px-4 md:px-6 bg-sage-muted">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
            {t.rsvp.subtitle}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
            {t.rsvp.title}
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.rsvp.description}
          </p>
        </div>

        <div className="p-5 bg-ivory/60 backdrop-blur-sm rounded-lg shadow-soft text-center">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-2">
            {t.rsvp.contactTitle}
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
