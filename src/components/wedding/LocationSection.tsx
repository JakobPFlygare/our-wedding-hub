import { Bus, Hotel } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();
  
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5!2d-99.2448223!3d18.9287816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde4be03ddc85%3A0x320d8cf523d46538!2sLas%20Ma%C3%B1anitas!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx";

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
            {t.location.subtitle}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal">
            {t.location.title}
          </h2>
        </div>

        {/* Map Embed */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-elevated">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Las Mañanitas Location"
            className="w-full md:h-[300px]"
          />
        </div>

        {/* Transportation Section */}
        <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-soft mb-4 md:mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Bus className="w-5 h-5 text-sage" />
            <h3 className="font-display text-lg md:text-xl text-charcoal">
              {t.location.transportTitle}
            </h3>
          </div>
          
          <div className="space-y-3">
            <div className="border-l-2 border-sage pl-3">
              <h4 className="font-sans text-xs uppercase tracking-wider text-sage mb-1">
                {t.location.shuttleTitle}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {t.location.shuttleInfo}
              </p>
            </div>
            
            <div className="border-l-2 border-sage pl-3">
              <h4 className="font-sans text-xs uppercase tracking-wider text-sage mb-1">
                {t.location.parkingTitle}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {t.location.parkingInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="bg-ivory/80 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Hotel className="w-5 h-5 text-sage" />
            <h3 className="font-display text-lg md:text-xl text-charcoal">
              {t.location.accommodationTitle}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div className="border border-sage-light rounded-lg p-4">
              <h4 className="font-display text-base text-charcoal mb-1">
                Las Mañanitas Hotel
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-2">
                {t.location.venueHotelInfo}
              </p>
              <span className="inline-block font-sans text-xs uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded">
                {t.location.guestDiscount}
              </span>
            </div>
            
            <div className="border border-sage-light rounded-lg p-4">
              <h4 className="font-display text-base text-charcoal mb-1">
                {t.location.otherHotels}
              </h4>
              <p className="font-body text-sm text-muted-foreground italic">
                {t.location.moreOptionsSoon}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
