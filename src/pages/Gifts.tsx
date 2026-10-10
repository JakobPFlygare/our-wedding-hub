import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/wedding/LanguageToggle";
import Footer from "@/components/wedding/Footer";
import GiftCard from "@/components/gifts/GiftCard";
import ContributeDialog from "@/components/gifts/ContributeDialog";
import { giftItems, type Currency, type GiftItem } from "@/config/gifts";

const Gifts = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<{ item: GiftItem; amount?: number; currency?: Currency } | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-muted to-ivory">
      <LanguageToggle />

      <Link
        to="/"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-ivory/90 backdrop-blur-sm shadow-soft border border-sage-light/30 font-sans text-xs uppercase tracking-wider text-charcoal hover:shadow-elevated transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">{t.gifts.backHome}</span>
      </Link>

      <section className="pt-24 pb-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.gifts.subtitle}</p>
          <h1 className="font-display text-3xl md:text-5xl text-charcoal mb-5">{t.gifts.title}</h1>
          <p className="font-body text-base md:text-lg text-charcoal/75 leading-relaxed">{t.gifts.intro}</p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-ivory/60 backdrop-blur-sm rounded-xl p-5 shadow-soft">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-3 text-center">{t.gifts.howItWorks}</p>
          <ol className="grid sm:grid-cols-3 gap-4 text-center">
            {[t.gifts.step1, t.gifts.step2, t.gifts.step3].map((step, i) => (
              <li key={i} className="flex flex-col items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gold/80 text-ivory font-sans text-xs flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="font-body text-sm text-charcoal/75 leading-snug">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {giftItems.map((item) => (
            <GiftCard
              key={item.id}
              item={item}
              onContribute={(it, amount, currency) => setSelected({ item: it, amount, currency })}
            />
          ))}
        </div>
      </section>

      <Footer />

      <ContributeDialog
        key={selected ? `${selected.item.id}-${selected.amount ?? "any"}-${selected.currency ?? ""}` : "none"}
        item={selected?.item ?? null}
        initialAmount={selected?.amount}
        initialCurrency={selected?.currency}
        onClose={() => setSelected(null)}
      />
    </main>
  );
};

export default Gifts;
