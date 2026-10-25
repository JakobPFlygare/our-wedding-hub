import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import MusicRequestSection from "./MusicRequestSection";

/** Gifts link + song requests, side by side. */
const ExtrasSection = () => {
  const { t } = useLanguage();

  return (
    <section id="music" className="px-4 md:px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto border-t border-charcoal/70 pt-8 grid md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <h3 className="font-display text-xl text-charcoal mb-2">{t.details.giftsTitle}</h3>
          <p className="font-body text-sm text-charcoal/75 leading-relaxed">{t.details.giftsDescription}</p>
          <Link
            to="/gifts"
            className="inline-block mt-3 font-sans text-[11px] uppercase tracking-[0.14em] text-charcoal underline underline-offset-4 decoration-sage-light hover:decoration-sage"
          >
            {t.gifts.linkFromDetails}
          </Link>
        </div>
        <MusicRequestSection />
      </div>
    </section>
  );
};

export default ExtrasSection;
