import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "./SectionHeading";

const EventDetails = () => {
  const { t } = useLanguage();

  const milestones = [
    { time: "15:00", titleKey: "ceremony" as const },
    { time: "16:00", titleKey: "cocktail" as const },
    { time: "18:00", titleKey: "dinner" as const },
    { time: "23:00", titleKey: "tornafiesta" as const },
    { time: "01:00", titleKey: "venueCloses" as const },
  ];

  return (
    <section className="bg-wash-sage px-4 md:px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.details.schedule} />

        {/* Timeline */}
        <ol className="grid grid-cols-2 sm:grid-cols-5 gap-y-6">
          {milestones.map((m) => (
            <li key={m.titleKey} className="border-l-2 border-sage pl-3 pr-4">
              <span className="block font-display text-2xl md:text-3xl text-charcoal leading-none mb-1">{m.time}</span>
              <span className="font-body text-sm text-charcoal/75">{t.details[m.titleKey]}</span>
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
