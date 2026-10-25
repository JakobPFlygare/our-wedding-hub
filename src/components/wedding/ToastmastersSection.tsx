import { useState } from "react";
import { MessageCircle, MessageSquare } from "lucide-react";
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
    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-ivory shadow-elevated bg-sage-muted flex items-center justify-center shrink-0">
      {failed ? (
        <span className="font-display text-3xl text-sage">{initials(person.name)}</span>
      ) : (
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

const ToastmastersSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={t.toastmasters.subtitle} title={t.toastmasters.title} intro={t.toastmasters.intro} />

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 md:max-w-3xl">
          {toastmasters.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center bg-card border border-sage-light p-6"
            >
              <Portrait person={person} />
              <h3 className="font-display text-xl text-charcoal mt-4">{person.name}</h3>
              {person.role[language] && (
                <p className="font-body text-sm text-muted-foreground mt-1">{person.role[language]}</p>
              )}

              <p className="font-sans text-[10px] uppercase tracking-wider text-sage mt-4 mb-1">{t.toastmasters.contact}</p>
              <a href={`tel:+${person.phoneE164}`} className="font-body text-base text-charcoal hover:text-sage transition-colors">
                {person.phoneDisplay}
              </a>

              <div className="flex gap-2 mt-3">
                {person.text && (
                  <a
                    href={`sms:+${person.phoneE164}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sage/40 font-sans text-xs text-charcoal hover:bg-sage hover:text-ivory hover:border-sage transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    {t.toastmasters.text}
                  </a>
                )}
                {person.whatsapp && (
                  <a
                    href={`https://wa.me/${person.phoneE164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] font-sans text-xs text-white hover:bg-[#1ebe5b] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t.toastmasters.whatsapp}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToastmastersSection;
