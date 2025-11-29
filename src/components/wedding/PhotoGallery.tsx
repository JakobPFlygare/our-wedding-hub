import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Placeholder images - replace with actual photos later
const placeholderPhotos = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true },
];

const PhotoGallery = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? placeholderPhotos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % placeholderPhotos.length);
  };

  return (
    <section className="py-6 md:py-10 px-4 md:px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        {/* Slideshow Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-elevated bg-rosa-muted border border-rosa/20">
          {/* Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-turquoise/20 flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <p className="font-body text-muted-foreground">
                {t.gallery.comingSoon}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cream/80 backdrop-blur-sm shadow-soft hover:bg-cream transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cream/80 backdrop-blur-sm shadow-soft hover:bg-cream transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-charcoal" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {placeholderPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-marigold w-6"
                    : "bg-cream/60 hover:bg-cream"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
