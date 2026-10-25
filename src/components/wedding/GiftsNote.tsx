import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

/** A quiet note about gifts with a small link to the contributions page. */
const GiftsNote = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 md:px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto border-t border-charcoal/70 pt-8 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 md:gap-10">
        <h3 className="font-display text-xl text-charcoal">{t.details.giftsTitle}</h3>
        <div>
          <p className="font-body text-sm text-charcoal/75 leading-relaxed max-w-prose">{t.details.giftsDescription}</p>
          <Link
            to="/gifts"
            className="inline-block mt-2 font-body text-sm text-charcoal/55 underline underline-offset-4 decoration-sage-light hover:text-charcoal hover:decoration-sage"
          >
            {t.gifts.linkFromDetails}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GiftsNote;
