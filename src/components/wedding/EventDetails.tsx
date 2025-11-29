import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventDetails = () => {
  const { t } = useLanguage();

  const milestones = [
    { time: "15:00", titleKey: 'ceremony' as const },
    { time: "18:00", titleKey: 'dinner' as const },
    { time: "23:00", titleKey: 'tornafiesta' as const },
    { time: "01:00", titleKey: 'venueCloses' as const },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
            {t.details.saveTheDate}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            {t.details.weddingDetails}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 md:w-24 bg-sage-light" />
            <Calendar className="w-5 h-5 text-sage" />
            <div className="h-px w-16 md:w-24 bg-sage-light" />
          </div>
        </div>

        {/* Mini Timeline */}
        <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-soft">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] md:left-[47px] top-2 bottom-2 w-0.5 bg-sage-light" />
            
            <div className="space-y-6 md:space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.titleKey} className="flex items-center gap-4 md:gap-6">
                  {/* Time */}
                  <div className="w-16 md:w-20 text-right">
                    <span className="font-display text-lg md:text-xl text-charcoal">
                      {milestone.time}
                    </span>
                  </div>
                  
                  {/* Dot */}
                  <div className={`relative z-10 w-3 h-3 rounded-full ${
                    index === milestones.length - 1 
                      ? 'bg-muted-foreground/50' 
                      : 'bg-sage'
                  }`} />
                  
                  {/* Event name */}
                  <div className="flex-1">
                    <span className={`font-body text-base md:text-lg ${
                      index === milestones.length - 1 
                        ? 'text-muted-foreground' 
                        : 'text-charcoal'
                    }`}>
                      {t.details[milestone.titleKey]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
