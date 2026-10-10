import { useLanguage } from "@/contexts/LanguageContext";
import type { GiftItem } from "@/config/gifts";

interface Props {
  item: GiftItem;
  onContribute: (item: GiftItem) => void;
}

const GiftCard = ({ item, onContribute }: Props) => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col bg-ivory/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-sage-light/20 hover:shadow-elevated transition-shadow">
      <div className="text-3xl mb-2" aria-hidden>{item.emoji}</div>
      <h3 className="font-display text-base md:text-lg text-charcoal leading-tight mb-1">{item.title[language]}</h3>
      <p className="font-body text-sm text-charcoal/70 leading-snug flex-1">{item.description[language]}</p>

      <button
        type="button"
        onClick={() => onContribute(item)}
        className="mt-4 w-full font-sans text-xs uppercase tracking-wider py-2 rounded-lg bg-charcoal text-ivory hover:bg-charcoal/90 transition-colors"
      >
        {t.gifts.contribute}
      </button>
    </div>
  );
};

export default GiftCard;
