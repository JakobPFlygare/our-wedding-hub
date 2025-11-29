import { Thermometer, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DressCodeSection = () => {
  const { t } = useLanguage();

  return (
<section className="py-10 md:py-14 px-4 md:px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-coral mb-2">
            {t.dressCode.subtitle}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal">
            {t.dressCode.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Dress Code Card */}
          <div className="bg-rosa-muted/60 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-rosa/20">
            <h3 className="font-display text-lg md:text-xl text-charcoal mb-3">
              {t.dressCode.formal}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm">
              {t.dressCode.formalDescription}
            </p>
          </div>

          {/* Weather Card */}
          <div className="bg-turquoise/10 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-turquoise/20">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-5 h-5 text-marigold" />
              <h3 className="font-display text-lg md:text-xl text-charcoal">
                {t.dressCode.weather}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Thermometer className="w-4 h-4 text-coral" />
              <span className="font-body text-base text-charcoal">18°C - 26°C</span>
              <span className="font-body text-xs text-muted-foreground">(64°F - 79°F)</span>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed text-sm">
              {t.dressCode.weatherDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
