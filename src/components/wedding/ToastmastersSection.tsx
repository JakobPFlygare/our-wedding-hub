import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toastmasters, type Toastmaster } from "@/config/news";
import SectionHeading from "./SectionHeading";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Portrait = ({ person }: { person: Toastmaster }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-ivory flex items-center justify-center shrink-0">
      {failed ? (
        <span className="font-display text-2xl text-sage">{initials(person.name)}</span>
      ) : (
        <img src={person.photo} alt={person.name} className="w-full h-full object-cover" onError={() => setFailed(true)} />
      )}
    </div>
  );
};

const ToastmastersSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.toastmasters.title} intro={t.toastmasters.intro} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {toastmasters.map((person) => (
            <div key={person.name} className="flex items-center gap-5 bg-card border border-sage-light p-5">
              <Portrait person={person} />
              <div className="min-w-0">
                <h3 className="font-display text-xl text-charcoal leading-tight">{person.name}</h3>
                {person.role[language] && (
                  <p className="font-body text-sm text-charcoal/70 mt-0.5">{person.role[language]}</p>
                )}
                <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold mt-3">{t.toastmasters.contact}</p>
                <p className="font-body text-base text-charcoal select-all [font-variant-numeric:tabular-nums]">{person.phoneDisplay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToastmastersSection;
