import { useState } from "react";
import { CheckCircle, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { activities, activitiesForm } from "@/config/news";
import SectionHeading from "./SectionHeading";

const ActivitiesSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [chosen, setChosen] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Activity id → chosen vote option's formValue (e.g. the Teotihuacán balloon vote).
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const toggleOpen = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggle = (id: string, on: boolean) => {
    setChosen((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || chosen.size === 0) {
      toast({ title: t.activities.error, description: t.activities.fillIn, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append(activitiesForm.nameEntry, name.trim());
      // A Google Forms checkbox question takes one field per ticked option.
      // A vote is sent as one more tick in the same question.
      activities
        .filter((a) => chosen.has(a.id))
        .forEach((a) => {
          formData.append(activitiesForm.activitiesEntry, a.formValue);
          if (votes[a.id]) formData.append(activitiesForm.activitiesEntry, votes[a.id]);
        });

      await fetch(activitiesForm.url, { method: "POST", mode: "no-cors", body: formData });

      setSubmitted(true);
      toast({ title: t.activities.success, description: t.activities.thankYou });
    } catch (error) {
      console.error("Error submitting activity sign-up:", error);
      toast({ title: t.activities.error, description: t.activities.tryAgain, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="activities" className="py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t.activities.title} intro={t.activities.intro} />

        <form onSubmit={handleSubmit} className="bg-card border border-sage-light p-4 sm:p-5 md:p-6 md:w-[calc((100%-5rem)/3*2+2.5rem)]">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-3">{t.activities.signupTitle}</p>

          <div className="space-y-2">
            {activities.map((a) => {
              const on = chosen.has(a.id);
              const open = expanded.has(a.id);
              return (
                <div
                  key={a.id}
                  className={`border transition-colors ${
                    on ? "bg-sage/10 border-sage" : "bg-ivory/60 border-sage-light hover:bg-ivory"
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Tapping the card ticks it; the chevron opens the details. */}
                    <label
                      htmlFor={`act-${a.id}`}
                      className="flex flex-1 min-w-0 items-center gap-3 md:gap-4 p-3 md:p-4 pr-0 md:pr-0 cursor-pointer"
                    >
                      <Checkbox
                        id={`act-${a.id}`}
                        checked={on}
                        onCheckedChange={(v) => toggle(a.id, v === true)}
                        className="border-sage data-[state=checked]:bg-sage data-[state=checked]:border-sage"
                      />
                      <img
                        src={a.image}
                        alt=""
                        loading="lazy"
                        className="w-16 h-12 sm:w-20 sm:h-14 md:w-28 md:h-20 object-contain shrink-0"
                      />
                      <span className="min-w-0">
                        <span className="block font-display text-lg text-charcoal leading-tight">{a.title[language]}</span>
                        <span className="block font-body text-sm text-sage leading-snug mt-1">{a.when[language]}</span>
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => toggleOpen(a.id)}
                      aria-expanded={open}
                      aria-controls={`act-${a.id}-info`}
                      className="shrink-0 flex items-center gap-1 px-2.5 md:px-4 font-sans text-[11px] uppercase tracking-[0.14em] text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      {t.activities.moreInfo}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div
                    id={`act-${a.id}-info`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-3 md:mx-4 mb-3 md:mb-4 pt-3 border-t border-sage-light font-body text-sm text-muted-foreground leading-relaxed space-y-1">
                        {a.description[language].split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  {a.vote && (
                    <div className="flex flex-wrap items-center gap-2 mx-3 md:mx-4 mb-3 md:mb-4 pt-3 border-t border-sage-light">
                      <span className="font-body text-sm text-charcoal mr-1">{a.vote.question[language]}</span>
                      {a.vote.options.map((o) => {
                        const picked = votes[a.id] === o.formValue;
                        return (
                          <button
                            key={o.formValue}
                            type="button"
                            aria-pressed={picked}
                            onClick={() => {
                              setVotes((prev) => {
                                const next = { ...prev };
                                if (picked) delete next[a.id];
                                else next[a.id] = o.formValue;
                                return next;
                              });
                              // Voting means interest, so tick the card too.
                              if (!picked) toggle(a.id, true);
                            }}
                            className={`px-3 py-1 rounded-full border font-body text-sm transition-colors ${
                              picked
                                ? "bg-sage border-sage text-card"
                                : "bg-white/60 border-sage-light text-charcoal/75 hover:border-sage"
                            }`}
                          >
                            {o.label[language]}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.activities.yourNamePlaceholder}
              aria-label={t.activities.yourName}
              className="bg-white/70 flex-1"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-terracotta text-card hover:bg-terracotta-dark font-sans uppercase tracking-[0.14em] text-[11px] sm:w-auto"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t.activities.success}
                </>
              ) : (
                <>
                  {isSubmitting ? t.activities.submitting : t.activities.submit}
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-2">{t.activities.signupHint}</p>
        </form>
      </div>
    </section>
  );
};

export default ActivitiesSection;
