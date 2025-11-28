import { MapPin, Clock, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventDetails = () => {
  const { t, language } = useLanguage();

  const events = [
    {
      titleKey: 'ceremony' as const,
      time: "15:00",
      location: "Las Mañanitas",
      address: "Cuernavaca, Mexico",
      descriptionEn: "Join us as we exchange vows in the beautiful gardens of Las Mañanitas.",
      descriptionEs: "Acompáñanos mientras intercambiamos votos en los hermosos jardines de Las Mañanitas.",
      descriptionSv: "Följ med oss när vi utbyter löften i Las Mañanitas vackra trädgårdar.",
    },
    {
      titleKey: 'dinner' as const,
      time: "18:00",
      location: "Las Mañanitas",
      address: "Cuernavaca, Mexico",
      descriptionEn: "Dinner and celebration under the stars in the enchanting gardens.",
      descriptionEs: "Cena y celebración bajo las estrellas en los encantadores jardines.",
      descriptionSv: "Middag och firande under stjärnorna i de förtrollande trädgårdarna.",
    },
    {
      titleKey: 'tornafiesta' as const,
      time: "23:00",
      location: "Las Mañanitas",
      address: "Cuernavaca, Mexico",
      descriptionEn: "Late night snacks and dancing to keep the celebration going!",
      descriptionEs: "Antojitos nocturnos y baile para continuar la celebración!",
      descriptionSv: "Sena nattsnacks och dans för att hålla festen igång!",
    },
  ];

  const getDescription = (event: typeof events[0]) => {
    if (language === 'es') return event.descriptionEs;
    if (language === 'sv') return event.descriptionSv;
    return event.descriptionEn;
  };

  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4">
            {t.details.saveTheDate}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.details.weddingDetails}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-sage-light" />
            <Calendar className="w-5 h-5 text-sage" />
            <div className="h-px w-24 bg-sage-light" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.titleKey}
              className="bg-ivory/80 backdrop-blur-sm rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <h3 className="font-display text-2xl text-charcoal mb-4">
                {t.details[event.titleKey]}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-sage" />
                  <span className="font-body text-lg">{event.time}</span>
                </div>
                
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-sage mt-1" />
                  <div>
                    <p className="font-body text-lg">{event.location}</p>
                    <p className="font-body text-sm">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {getDescription(event)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
