import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "./SectionHeading";

const EventDetails = () => {
  const { t } = useLanguage();

  const milestones = [
    { time: "15:00", titleKey: "ceremony" as const, icon: "/schedule/ceremony.webp" },
    { time: "16:00", titleKey: "cocktail" as const, icon: "/schedule/cocktail.webp" },
    { time: "18:00", titleKey: "dinner" as const, icon: "/schedule/dinner.webp" },
    { time: "23:00", titleKey: "tornafiesta" as const, icon: "/schedule/tornafiesta.webp" },
    { time: "01:00", titleKey: "venueCloses" as const, icon: "/schedule/venue-closes.webp" },
  ];

  return (
    <section className="px-4 md:px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.details.schedule} />

        {/* Timeline: one vertical line on phones, five columns from sm up */}
        <ol className="ml-1 border-l border-sage space-y-5 sm:ml-0 sm:border-l-0 sm:space-y-0 sm:grid sm:grid-cols-5">
          {milestones.map((m) => (
            <li
              key={m.titleKey}
              className="relative flex items-center justify-between gap-4 pl-5 sm:block sm:border-l sm:border-sage sm:pl-3 sm:pr-4"
            >
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-sage sm:hidden" />
              <img
                src={m.icon}
                alt=""
                loading="lazy"
                className="order-2 h-20 w-32 object-contain object-right-bottom sm:h-24 md:h-28 sm:w-auto sm:max-w-full sm:object-left-bottom sm:mb-3"
              />
              <div className="order-1">
                <span className="block font-display text-2xl md:text-3xl text-charcoal leading-none mb-1">{m.time}</span>
                <span className="font-body text-sm text-charcoal/75">{t.details[m.titleKey]}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* Dress code illustration */}
        <img
          src="/dress-code.webp"
          alt="Guests in formal attire: long dresses and suits"
          loading="lazy"
          className="w-full max-h-[320px] object-contain object-bottom mt-12"
        />

        {/* Dress code, children, gifts */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8">
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">
              {t.dressCode.formal} <span className="text-charcoal/60">· 18–26 °C</span>
            </h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">{t.dressCode.formalDescription}</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">{t.details.childrenTitle}</h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">{t.details.childrenDescription}</p>
            {t.details.childrenMexicanNote && (
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mt-2">{t.details.childrenMexicanNote}</p>
            )}
          </div>
          <div>
            <h3 className="font-display text-xl text-charcoal mb-2">{t.details.giftsTitle}</h3>
            <p className="font-body text-sm text-charcoal/75 leading-relaxed">{t.details.giftsDescription}</p>
            <Link
              to="/gifts"
              className="inline-block mt-2 font-body text-sm text-charcoal/55 underline underline-offset-4 decoration-sage-light hover:text-charcoal hover:decoration-sage"
            >
              {t.gifts.linkFromDetails}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
