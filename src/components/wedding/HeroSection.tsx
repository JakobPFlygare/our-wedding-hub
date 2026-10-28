import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-lasmananitas.jpg";
import Countdown from "./Countdown";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Las+Ma%C3%B1anitas+Cuernavaca";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section>
      {/* Full-width picture, fading into the page at the bottom */}
      <div className="relative h-[52vh] min-h-[280px] max-h-[560px]">
        <img
          src={heroImage}
          alt="Las Mañanitas, Cuernavaca"
          className="absolute inset-0 w-full h-full object-cover [object-position:center_60%]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 md:h-36 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, hsl(var(--background) / 0), hsl(var(--background)))" }}
        />
      </div>

      {/* Names and the facts, overlapping the faded edge */}
      <div className="px-4 md:px-6 -mt-10 md:-mt-14 relative pb-4 md:pb-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-charcoal">
              Pau <span className="italic text-terracotta">&amp;</span> Jakob
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal/75 mt-3 leading-relaxed">
              {t.details.weddingDetails} · 15:00
              <span className="hidden sm:inline"> · </span>
              <br className="sm:hidden" />
              Las Mañanitas, Cuernavaca ·{" "}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-4 decoration-sage-light hover:decoration-sage"
              >
                {t.hero.openMaps}
              </a>
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <Countdown />
            <button
              onClick={() => scrollTo("news")}
              className="font-sans text-[11px] uppercase tracking-[0.14em] px-4 py-2 bg-terracotta text-card hover:bg-terracotta-dark transition-colors"
            >
              {t.nav.news}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
