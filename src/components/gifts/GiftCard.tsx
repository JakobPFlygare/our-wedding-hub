import { useLanguage } from "@/contexts/LanguageContext";
import type { GiftItem } from "@/config/gifts";

interface Props {
  item: GiftItem;
  onContribute: (item: GiftItem) => void;
}

const GiftCard = ({ item, onContribute }: Props) => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col bg-card border border-sage-light p-4 md:p-5 hover:border-charcoal transition-colors">
      <div className="text-3xl mb-3" aria-hidden>{item.emoji}</div>
      <h3 className="font-display text-lg md:text-xl text-charcoal leading-tight mb-1">{item.title[language]}</h3>
      <p className="font-body text-sm text-charcoal/70 leading-snug flex-1">{item.description[language]}</p>

      <button
        type="button"
        onClick={() => onContribute(item)}
        className="mt-5 w-full font-sans text-[11px] uppercase tracking-[0.14em] py-2 bg-charcoal text-ivory hover:bg-charcoal/90 transition-colors"
      >
        {t.gifts.contribute}
      </button>
    </div>
  );
};

export default GiftCard;
