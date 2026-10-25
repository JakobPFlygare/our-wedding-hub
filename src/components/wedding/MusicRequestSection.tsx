import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf-AbSl-M02LPWY0hN3HEEN1SI_ZL2nAPUCQKLgN0yxxzRyPA/formResponse";
const ARTIST_ENTRY = "entry.1514894402";
const SONG_ENTRY = "entry.62956001";

/** Compact song-request block (rendered inside ExtrasSection). */
const MusicRequestSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!artist.trim() || !song.trim()) {
      toast({ title: t.music.error, description: t.music.fillBoth, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append(ARTIST_ENTRY, artist.trim());
      formData.append(SONG_ENTRY, song.trim());
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: formData });
      setSubmitted(true);
      setArtist("");
      setSong("");
      toast({ title: t.music.success, description: t.music.thankYou });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting song request:", error);
      toast({ title: t.music.error, description: t.music.tryAgain, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="font-display text-xl text-charcoal mb-2">{t.music.title}</h3>
      <p className="font-body text-sm text-charcoal/75 leading-relaxed mb-4">{t.music.description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          placeholder={t.music.artistPlaceholder}
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="bg-card"
          disabled={isSubmitting}
        />
        <Input
          type="text"
          placeholder={t.music.songPlaceholder}
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="bg-card"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting || submitted}
          className="bg-charcoal text-ivory hover:bg-charcoal/90 font-sans text-[11px] uppercase tracking-[0.14em] shrink-0"
        >
          {submitted ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.music.added}
            </>
          ) : (
            <>
              {t.music.addSong}
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
      <p className="font-body text-xs text-charcoal/55 mt-2">{t.music.hint}</p>
    </div>
  );
};

export default MusicRequestSection;
