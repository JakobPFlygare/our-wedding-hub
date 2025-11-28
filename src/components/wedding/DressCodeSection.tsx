import { Shirt, Thermometer, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DressCodeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
            {t.dressCode.subtitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            {t.dressCode.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 md:w-24 bg-sage-light" />
            <Shirt className="w-5 h-5 text-sage" />
            <div className="h-px w-16 md:w-24 bg-sage-light" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Dress Code Card */}
          <div className="bg-sage-muted/50 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4">
              {t.dressCode.formal}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t.dressCode.formalDescription}
            </p>
          </div>

          {/* Weather Card */}
          <div className="bg-sage-muted/50 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-5 md:w-6 h-5 md:h-6 text-gold" />
              <h3 className="font-display text-xl md:text-2xl text-charcoal">
                {t.dressCode.weather}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Thermometer className="w-4 h-4 text-sage" />
              <span className="font-body text-lg md:text-xl text-charcoal">18°C - 26°C</span>
              <span className="font-body text-sm text-muted-foreground">(64°F - 79°F)</span>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t.dressCode.weatherDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
