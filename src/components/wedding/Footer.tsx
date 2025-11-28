import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 bg-charcoal text-ivory/80">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3 md:mb-4">
          Pau & Jakob
        </h3>
        
        <p className="font-body text-base md:text-lg mb-4 md:mb-6">
          January 9, 2027
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
          <div className="h-px w-8 md:w-12 bg-ivory/30" />
          <Heart className="w-4 h-4 text-blush fill-blush" />
          <div className="h-px w-8 md:w-12 bg-ivory/30" />
        </div>
        
        <p className="font-sans text-xs md:text-sm text-ivory/60">
          #PauAndJakob2027
        </p>
      </div>
    </footer>
  );
};

export default Footer;
