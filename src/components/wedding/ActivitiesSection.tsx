import { useState } from "react";
import { CalendarClock, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { activities, activitiesForm } from "@/config/news";

const ActivitiesSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [chosen, setChosen] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      activities
        .filter((a) => chosen.has(a.id))
        .forEach((a) => formData.append(activitiesForm.activitiesEntry, a.formValue));

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
    <section className="py-10 md:py-14 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.activities.subtitle}</p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">{t.activities.title}</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.activities.intro}
          </p>
          <p className="inline-flex items-center gap-1.5 mt-3 font-sans text-[11px] uppercase tracking-wider text-sage">
            <CalendarClock className="w-3.5 h-3.5" />
            {t.activities.datesTbd}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-ivory/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-soft">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-3">{t.activities.signupTitle}</p>

          <div className="space-y-2">
            {activities.map((a) => {
              const on = chosen.has(a.id);
              return (
                <label
                  key={a.id}
                  htmlFor={`act-${a.id}`}
                  className={`flex items-start gap-3 rounded-lg p-3 md:p-4 cursor-pointer border transition-colors ${
                    on ? "bg-sage/15 border-sage/50" : "bg-white/50 border-sage-light/30 hover:bg-white/80"
                  }`}
                >
                  <Checkbox
                    id={`act-${a.id}`}
                    checked={on}
                    onCheckedChange={(v) => toggle(a.id, v === true)}
                    className="mt-1 border-sage data-[state=checked]:bg-sage data-[state=checked]:border-sage"
                  />
                  <span className="text-2xl leading-none mt-0.5" aria-hidden>{a.emoji}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg text-charcoal leading-tight">{a.title[language]}</span>
                    <span className="block font-body text-sm text-muted-foreground leading-snug mt-0.5">
                      {a.description[language]}
                    </span>
                  </span>
                </label>
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
              className="bg-charcoal text-ivory hover:bg-charcoal/90 font-sans uppercase tracking-wider text-xs sm:w-auto"
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
