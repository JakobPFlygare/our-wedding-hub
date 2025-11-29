import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const MusicRequestSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Google Form URL - user needs to replace with their own form
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  // Entry IDs from the Google Form - user needs to update these
  const ARTIST_ENTRY = "entry.ARTIST_FIELD_ID";
  const SONG_ENTRY = "entry.SONG_FIELD_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!artist.trim() || !song.trim()) {
      toast({
        title: t.music.error,
        description: t.music.fillBoth,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Form using no-cors mode
      const formData = new FormData();
      formData.append(ARTIST_ENTRY, artist.trim());
      formData.append(SONG_ENTRY, song.trim());

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
      setArtist("");
      setSong("");
      
      toast({
        title: t.music.success,
        description: t.music.thankYou,
      });

      // Reset submitted state after 3 seconds to allow another submission
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting song request:", error);
      toast({
        title: t.music.error,
        description: t.music.tryAgain,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 bg-cream/50">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-coral/20 rounded-full">
            <Music className="w-6 h-6 text-coral" />
          </div>
        </div>
        
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-turquoise mb-2">
          {t.music.subtitle}
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
          {t.music.title}
        </h2>
        
        <p className="font-body text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
          {t.music.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder={t.music.artistPlaceholder}
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="bg-ivory/80 border-sage/30 focus:border-turquoise"
              disabled={isSubmitting}
            />
            <Input
              type="text"
              placeholder={t.music.songPlaceholder}
              value={song}
              onChange={(e) => setSong(e.target.value)}
              className="bg-ivory/80 border-sage/30 focus:border-turquoise"
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit"
            variant="wedding" 
            size="lg"
            disabled={isSubmitting || submitted}
            className="w-full sm:w-auto group"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                {t.music.added}
              </>
            ) : (
              <>
                {t.music.addSong}
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>

        <p className="font-body text-xs text-muted-foreground mt-4 italic">
          {t.music.hint}
        </p>
      </div>
    </section>
  );
};

export default MusicRequestSection;
