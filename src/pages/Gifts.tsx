import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import Watercolor from "@/components/wedding/Watercolor";
import GiftCard from "@/components/gifts/GiftCard";
import ContributeDialog from "@/components/gifts/ContributeDialog";
import { giftItems, type GiftItem } from "@/config/gifts";

const Gifts = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<GiftItem | null>(null);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="relative px-4 md:px-6 pt-10 md:pt-16 pb-8 overflow-hidden">
          <Watercolor palette="sunset" className="absolute -top-20 -right-24 w-[400px] md:w-[560px]" opacity={0.45} />
          <div className="relative max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[0.95]">{t.gifts.title}</h1>
            <p className="font-body text-base text-charcoal/75 leading-relaxed max-w-[60ch] mt-4">{t.gifts.intro}</p>
            <p className="font-body text-base text-sage leading-relaxed max-w-[60ch] mt-2">{t.gifts.chipIn}</p>
          </div>

          <div className="max-w-5xl mx-auto mt-10 border-t border-charcoal/70 pt-5">
            <h2 className="font-display text-2xl text-charcoal mb-4">{t.gifts.howItWorks}</h2>
            <ol className="grid sm:grid-cols-3 gap-4 md:gap-10">
              {[t.gifts.step1, t.gifts.step2, t.gifts.step3].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-display text-2xl text-sage leading-none">{i + 1}</span>
                  <span className="font-body text-sm text-charcoal/75 leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 md:px-6 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {giftItems.map((item) => (
              <GiftCard key={item.id} item={item} onContribute={setSelected} />
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <ContributeDialog key={selected?.id ?? "none"} item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Gifts;
