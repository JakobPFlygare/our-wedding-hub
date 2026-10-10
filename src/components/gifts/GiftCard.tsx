import { useLanguage } from "@/contexts/LanguageContext";
import { MXN_PER_SEK, type GiftItem } from "@/config/gifts";

interface Props {
  item: GiftItem;
  onContribute: (item: GiftItem, amountSek?: number) => void;
}

const GiftCard = ({ item, onContribute }: Props) => {
  const { t, language } = useLanguage();
  const showMxn = language === "es";

  const fmt = (sek: number) =>
    showMxn
      ? `$${(Math.round((sek * MXN_PER_SEK) / 50) * 50).toLocaleString("es-MX")} MXN`
      : `${sek.toLocaleString("sv-SE")} kr`;

  return (
    <div className="group flex flex-col bg-ivory/80 backdrop-blur-sm rounded-xl p-5 shadow-soft border border-sage-light/20 hover:shadow-elevated transition-shadow">
      <div className="text-4xl mb-3" aria-hidden>{item.emoji}</div>
      <h3 className="font-display text-xl text-charcoal mb-1">{item.title[language]}</h3>
      <p className="font-body text-sm text-charcoal/70 leading-relaxed flex-1">{item.description[language]}</p>

      <div className="mt-4">
        <p className="font-sans text-[10px] uppercase tracking-wider text-sage mb-2">
          {item.openAmount ? t.gifts.anyAmount : t.gifts.suggested}
        </p>
        {!item.openAmount && (
          <div className="flex flex-wrap gap-2 mb-3">
            {item.amountsSek.map((sek) => (
              <button
                key={sek}
                type="button"
                onClick={() => onContribute(item, sek)}
                className="font-sans text-xs px-3 py-1.5 rounded-full border border-sage/40 text-charcoal hover:bg-sage hover:text-ivory hover:border-sage transition-colors"
              >
                {fmt(sek)}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => onContribute(item)}
          className="w-full font-sans text-sm uppercase tracking-wider py-2.5 rounded-lg bg-charcoal text-ivory hover:bg-charcoal/90 transition-colors"
        >
          {t.gifts.contribute}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
