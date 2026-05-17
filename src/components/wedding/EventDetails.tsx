import { Baby, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventDetails = () => {
  const { t } = useLanguage();

  const milestones = [
    { time: "15:00", titleKey: 'ceremony' as const },
    { time: "16:00", titleKey: 'cocktail' as const },
    { time: "18:00", titleKey: 'dinner' as const },
    { time: "23:00", titleKey: 'tornafiesta' as const },
    { time: "01:00", titleKey: 'venueCloses' as const },
  ];

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
            {t.details.schedule}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal">
            {t.details.weddingDetails}
          </h2>
        </div>

        {/* Mini Timeline */}
        <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-soft mb-6">
          <div className="relative flex flex-col gap-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.titleKey} className="flex items-center gap-4">
                {/* Time */}
                <span className="font-display text-base md:text-lg text-charcoal w-12 md:w-14 text-right shrink-0">
                  {milestone.time}
                </span>
                
                {/* Dot and line */}
                <div className="relative flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                    index === milestones.length - 1 
                      ? 'bg-muted-foreground/50' 
                      : 'bg-sage'
                  }`} />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-4 bg-sage-light absolute top-full" />
                  )}
                </div>
                
                {/* Event name */}
                <span className={`font-body text-sm md:text-base ${
                  index === milestones.length - 1 
                    ? 'text-muted-foreground' 
                    : 'text-charcoal'
                }`}>
                  {t.details[milestone.titleKey]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Children & Gifts Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 shadow-soft">
            <div className="flex items-center gap-3 mb-3">
              <Baby className="w-5 h-5 text-rosa" />
              <h3 className="font-display text-lg text-charcoal">{t.details.childrenTitle}</h3>
            </div>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed">
              {t.details.childrenDescription}
            </p>
            {t.details.childrenMexicanNote && (
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mt-2">
                {t.details.childrenMexicanNote}
              </p>
            )}
          </div>
          
          <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 shadow-soft">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="w-5 h-5 text-turquoise" />
              <h3 className="font-display text-lg text-charcoal">{t.details.giftsTitle}</h3>
            </div>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed">
              {t.details.giftsDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
