import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-sage text-ivory px-4 md:px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-wrap items-baseline justify-between gap-3">
        <p className="font-display text-2xl">
          Pau <span className="italic text-wash-marigold">&amp;</span> Jakob
        </p>
        <p className="font-body text-sm text-ivory/80">{t.footer.celebrate}</p>
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-ivory/70">9 · 1 · 2027 · Cuernavaca</p>
      </div>
    </footer>
  );
};

export default Footer;
