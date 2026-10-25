import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "./SectionHeading";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Las+Ma%C3%B1anitas+Cuernavaca";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 md:px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={t.location.subtitle} title={t.location.title} />

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">Las Mañanitas</h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">Ricardo Linares 107, Centro, Cuernavaca, Morelos</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 font-sans text-[11px] uppercase tracking-[0.14em] px-4 py-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
            >
              {t.hero.openMaps}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">{t.location.transportTitle}</h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">
              <span className="text-charcoal">{t.location.shuttleTitle}.</span> {t.location.shuttleInfo}{" "}
              <button
                type="button"
                onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })}
                className="text-charcoal underline underline-offset-4 decoration-sage-light hover:decoration-sage"
              >
                {t.location.shuttleSignup}
              </button>
            </p>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed mt-2">
              <span className="text-charcoal">{t.location.parkingTitle}.</span> {t.location.parkingInfo}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">{t.location.accommodationTitle}</h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">{t.location.stayInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
