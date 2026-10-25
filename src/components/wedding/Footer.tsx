import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-4 md:px-6 py-8 border-t border-charcoal/70">
      <div className="max-w-5xl mx-auto flex flex-wrap items-baseline justify-between gap-3">
        <p className="font-display text-xl text-charcoal">
          Pau <span className="italic text-sage">&amp;</span> Jakob
        </p>
        <p className="font-body text-sm text-charcoal/70">{t.footer.celebrate}</p>
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold">9 · 1 · 2027 · Cuernavaca</p>
      </div>
    </footer>
  );
};

export default Footer;
