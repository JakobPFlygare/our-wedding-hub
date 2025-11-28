import { MapPin, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();
  
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5!2d-99.2448223!3d18.9287816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde4be03ddc85%3A0x320d8cf523d46538!2sLas%20Ma%C3%B1anitas!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx";

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
            {t.location.subtitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            {t.location.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 md:w-24 bg-sage-light" />
            <MapPin className="w-5 h-5 text-sage" />
            <div className="h-px w-16 md:w-24 bg-sage-light" />
          </div>
        </div>

        {/* Map Embed */}
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-elevated">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Las Mañanitas Location"
            className="w-full md:h-[400px]"
          />
        </div>

        {/* Venue Info */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-soft">
            <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
              {t.location.venueName}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t.location.address}
            </p>
          </div>

          <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Car className="w-5 md:w-6 h-5 md:h-6 text-sage" />
              <h3 className="font-display text-xl md:text-2xl text-charcoal">
                {t.location.distance}
              </h3>
            </div>
            <p className="font-body text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {t.location.distanceInfo}
            </p>
            <div className="border-t border-sage-light pt-4">
              <h4 className="font-sans text-xs md:text-sm uppercase tracking-wider text-sage mb-2">
                {t.location.gettingThere}
              </h4>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                {t.location.gettingThereInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
