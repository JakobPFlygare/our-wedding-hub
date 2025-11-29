import { Calendar } from "lucide-react";
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
        <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-soft">
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
      </div>
    </section>
  );
};

export default EventDetails;
