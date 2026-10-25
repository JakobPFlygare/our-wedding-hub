import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-lasmananitas.jpg";
import Countdown from "./Countdown";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Las+Ma%C3%B1anitas+Cuernavaca";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="px-4 md:px-6 pt-8 md:pt-14 pb-10 md:pb-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-6 md:gap-10 items-stretch">
        {/* The card */}
        <div className="bg-card border border-sage-light p-7 md:p-10 flex flex-col justify-between">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-charcoal mb-3">
              Pau <span className="italic text-terracotta">&amp;</span> Jakob
            </h1>
            <p className="font-display italic text-xl md:text-2xl text-charcoal/70 mb-8">{t.hero.gettingMarried}</p>

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-body text-sm md:text-base text-charcoal">
              <dt className="font-sans text-[10px] uppercase tracking-[0.16em] text-gold pt-1">{t.hero.when}</dt>
              <dd>
                <span className="font-display text-lg md:text-xl">{t.details.weddingDetails}</span>
                <span className="text-charcoal/70"> · 15:00</span>
              </dd>
              <dt className="font-sans text-[10px] uppercase tracking-[0.16em] text-gold pt-1">{t.hero.where}</dt>
              <dd>
                Las Mañanitas, Cuernavaca
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 underline underline-offset-4 decoration-sage-light hover:decoration-sage text-charcoal/80"
                >
                  {t.hero.openMaps}
                </a>
              </dd>
              <dt className="font-sans text-[10px] uppercase tracking-[0.16em] text-gold pt-1">{t.hero.dress}</dt>
              <dd>
                {t.dressCode.formal}
                <span className="text-charcoal/70"> · 18–26 °C</span>
              </dd>
            </dl>
          </div>

          <div className="mt-8 pt-6 border-t border-sage-light flex flex-wrap items-end justify-between gap-5">
            <Countdown />
            <button
              onClick={() => scrollTo("news")}
              className="font-sans text-[11px] uppercase tracking-[0.14em] px-4 py-2 bg-terracotta text-card hover:bg-terracotta-dark transition-colors"
            >
              {t.nav.news}
            </button>
          </div>
        </div>

        {/* The photo */}
        <div className="relative min-h-[260px] md:min-h-0">
          <img
            src={heroImage}
            alt="Las Mañanitas, Cuernavaca"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
