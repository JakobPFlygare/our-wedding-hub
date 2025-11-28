import { useLanguage } from "@/contexts/LanguageContext";

const flags = {
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shadow-sm">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  ),
  es: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 48" className="w-6 h-4 rounded-sm shadow-sm">
      <rect width="28" height="48" fill="#006341"/>
      <rect x="28" width="28" height="48" fill="#fff"/>
      <rect x="56" width="28" height="48" fill="#ce1126"/>
    </svg>
  ),
  sv: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" className="w-6 h-4 rounded-sm shadow-sm">
      <rect width="16" height="10" fill="#006AA7"/>
      <rect width="2" height="10" x="5" fill="#FECC00"/>
      <rect width="16" height="2" y="4" fill="#FECC00"/>
    </svg>
  ),
};

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages: Array<'en' | 'es' | 'sv'> = ['en', 'es', 'sv'];

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-ivory/90 backdrop-blur-sm rounded-full p-1.5 shadow-soft">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            language === lang
              ? 'bg-sage/20 ring-2 ring-sage/30 scale-110'
              : 'hover:bg-sage/10 opacity-70 hover:opacity-100'
          }`}
          aria-label={`Switch to ${lang === 'en' ? 'English' : lang === 'es' ? 'Spanish' : 'Swedish'}`}
        >
          {flags[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
