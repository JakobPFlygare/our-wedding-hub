import { MapPin, Car, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();
  
  const googleMapsUrl = "https://maps.google.com/?q=Las+Mañanitas+Cuernavaca+Mexico";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15096.273058625817!2d-99.24579372394196!3d18.919755256368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfb4a86c0a07%3A0x4d9f6f5b1e8a3e47!2sLas%20Ma%C3%B1anitas!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx&markers=color:red%7C18.9197,-99.2358";

  return (
    <section className="py-24 px-6 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4">
            {t.location.subtitle}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t.location.title}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-sage-light" />
            <MapPin className="w-5 h-5 text-sage" />
            <div className="h-px w-24 bg-sage-light" />
          </div>
        </div>

        {/* Map Embed */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-elevated">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Las Mañanitas Location"
            className="w-full"
          />
        </div>

        {/* Venue Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-sage-muted/50 backdrop-blur-sm rounded-lg p-8">
            <h3 className="font-display text-2xl text-charcoal mb-4">
              {t.location.venueName}
            </h3>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              {t.location.address}
            </p>
            <Button
              variant="wedding"
              onClick={() => window.open(googleMapsUrl, '_blank')}
              className="group"
            >
              {t.location.viewOnMaps}
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-sage-muted/50 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-6 h-6 text-sage" />
              <h3 className="font-display text-2xl text-charcoal">
                {t.location.distance}
              </h3>
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              {t.location.distanceInfo}
            </p>
            <div className="border-t border-sage-light pt-4">
              <h4 className="font-sans text-sm uppercase tracking-wider text-sage mb-2">
                {t.location.gettingThere}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
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
