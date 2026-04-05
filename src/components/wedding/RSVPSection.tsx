import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSds3sqOKAm1ecI3L41EJFauEY044I1D8WPv-oxly2_0O11LyA/formResponse";

// TODO: After adding an "Email" question to your Google Form,
// replace this with the real entry ID (e.g. "entry.XXXXXXX")
const EMAIL_ENTRY_ID = "entry.123718265";

const ENTRY_IDS = {
  attendance: "entry.877086558",
  names: "entry.1498135098",
  dietary: "entry.1424661284",
  comments: "entry.2606285",
  email: EMAIL_ENTRY_ID,
};

const RSVPSection = () => {
  const { t } = useLanguage();
  const [attendance, setAttendance] = useState("");
  const [email, setEmail] = useState("");
  const [names, setNames] = useState("");
  const [dietary, setDietary] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!attendance) {
      toast.error(t.rsvpForm.selectAttendance);
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t.rsvpForm.emailRequired);
      return;
    }

    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.set(ENTRY_IDS.attendance, attendance);
      formData.set(ENTRY_IDS.email, email);
      if (names) formData.set(ENTRY_IDS.names, names);
      if (dietary) formData.set(ENTRY_IDS.dietary, dietary);
      if (comments) formData.set(ENTRY_IDS.comments, comments);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      // no-cors means opaque response — we assume success
      setSubmitted(true);
    } catch {
      toast.error(t.rsvpForm.submitError);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-14 md:py-20 px-4 md:px-6 bg-sage-muted">
        <div className="max-w-lg mx-auto text-center">
          <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
            {t.rsvpForm.thankYou}
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
            {t.rsvpForm.received}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setAttendance("");
              setEmail("");
              setNames("");
              setDietary("");
              setComments("");
            }}
            className="text-sm"
          >
            {t.rsvpForm.fillAgain}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-14 md:py-20 px-4 md:px-6 bg-sage-muted">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
            {t.rsvp.subtitle}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
            {t.rsvp.title}
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.rsvp.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="bg-ivory/60 backdrop-blur-sm rounded-lg p-5 shadow-soft space-y-2">
            <Label htmlFor="email" className="font-sans text-sm font-medium text-charcoal">
              {t.rsvpForm.emailLabel} <span className="text-gold">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.rsvpForm.emailPlaceholder}
              required
              className="bg-white/70 border-sage/20 font-body text-sm placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Attendance */}
          <div className="bg-ivory/60 backdrop-blur-sm rounded-lg p-5 shadow-soft space-y-3">
            <Label className="font-sans text-sm font-medium text-charcoal">
              {t.rsvpForm.canYouAttend} <span className="text-gold">*</span>
            </Label>
            <RadioGroup value={attendance} onValueChange={setAttendance} className="space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-md border border-sage/20 bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
                <RadioGroupItem value="Yes!" id="yes" />
                <Label htmlFor="yes" className="font-body text-sm text-charcoal cursor-pointer flex-1">
                  {t.rsvpForm.yes}
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md border border-sage/20 bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
                <RadioGroupItem value="Sorry, can't make it. But I still love you." id="no" />
                <Label htmlFor="no" className="font-body text-sm text-charcoal cursor-pointer flex-1">
                  {t.rsvpForm.no}
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Names */}
          <div className="bg-ivory/60 backdrop-blur-sm rounded-lg p-5 shadow-soft space-y-2">
            <Label htmlFor="names" className="font-sans text-sm font-medium text-charcoal">
              {t.rsvpForm.namesLabel}
            </Label>
            <Input
              id="names"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              placeholder={t.rsvpForm.namesPlaceholder}
              className="bg-white/70 border-sage/20 font-body text-sm placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Dietary restrictions */}
          <div className="bg-ivory/60 backdrop-blur-sm rounded-lg p-5 shadow-soft space-y-2">
            <Label htmlFor="dietary" className="font-sans text-sm font-medium text-charcoal">
              {t.rsvpForm.dietaryLabel}
            </Label>
            <Input
              id="dietary"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              placeholder={t.rsvpForm.dietaryPlaceholder}
              className="bg-white/70 border-sage/20 font-body text-sm placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Comments */}
          <div className="bg-ivory/60 backdrop-blur-sm rounded-lg p-5 shadow-soft space-y-2">
            <Label htmlFor="comments" className="font-sans text-sm font-medium text-charcoal">
              {t.rsvpForm.commentsLabel}
            </Label>
            <Textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder={t.rsvpForm.commentsPlaceholder}
              rows={3}
              className="bg-white/70 border-sage/20 font-body text-sm placeholder:text-muted-foreground/50 resize-none"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="wedding"
              size="lg"
              className="group w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t.rsvpForm.sending}
                </>
              ) : (
                <>
                  {t.rsvpForm.submit}
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-ivory/60 backdrop-blur-sm rounded-lg shadow-soft text-center">
          <p className="font-sans text-xs uppercase tracking-wider text-sage mb-1">
            {t.rsvp.questions}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            {t.rsvp.contactUs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
