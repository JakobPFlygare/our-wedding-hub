import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-charcoal text-ivory/80">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-3xl text-ivory mb-4">
          Pau & Jakob
        </h3>
        
        <p className="font-body text-lg mb-6">
          January 9, 2027
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-12 bg-ivory/30" />
          <Heart className="w-4 h-4 text-blush fill-blush" />
          <div className="h-px w-12 bg-ivory/30" />
        </div>
        
        <p className="font-sans text-sm text-ivory/60">
          #PauAndJakob2027
        </p>
      </div>
    </footer>
  );
};

export default Footer;
