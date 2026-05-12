import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryAutumn from "@/assets/gallery-autumn.jpg";
import galleryBeach from "@/assets/gallery-beach.jpg";
import gallerySkiing from "@/assets/gallery/IMG_0759.jpg";
import galleryXochimilco from "@/assets/gallery/IMG_2292.jpg";
import galleryBouquet from "@/assets/gallery/IMG_0740.jpg";
import gallery7105 from "@/assets/gallery/IMG_7105.jpeg";
import gallery7300 from "@/assets/gallery/IMG_7300.jpeg";
import gallery7563 from "@/assets/gallery/IMG_7563.jpeg";
import gallery8179 from "@/assets/gallery/IMG_8179.jpeg";
import gallery9400 from "@/assets/gallery/IMG_9400.jpeg";
import gallery9622 from "@/assets/gallery/IMG_9622.jpeg";
import gallerySegoviaMarket from "@/assets/gallery/IMG_1811.jpeg";
import gallerySegoviaView from "@/assets/gallery/IMG_1797.jpeg";
import galleryDayOfDead from "@/assets/gallery/polaroid-dayofdead.jpg";
import galleryCat from "@/assets/gallery/IMG_0195.jpeg";

const photos = [
  { id: 1, src: galleryAutumn, alt: "Pau & Jakob in autumn leaves" },
  { id: 2, src: galleryBeach, alt: "Pau & Jakob at the beach" },
  { id: 3, src: gallerySkiing, alt: "Pau & Jakob cross-country skiing in Sweden" },
  { id: 4, src: galleryXochimilco, alt: "Pau & Jakob on a trajinera in Xochimilco" },
  { id: 5, src: galleryBouquet, alt: "Pau holding a bouquet by a sunlit mountain window" },
  { id: 6, src: gallery7105, alt: "Pau & Jakob" },
  { id: 7, src: gallery7300, alt: "Pau & Jakob" },
  { id: 8, src: gallery7563, alt: "Pau & Jakob" },
  { id: 9, src: gallery8179, alt: "Pau & Jakob" },
  { id: 10, src: gallery9400, alt: "Pau & Jakob" },
  { id: 11, src: gallery9622, alt: "Pau & Jakob" },
  { id: 12, src: gallerySegoviaMarket, alt: "Pau & Jakob at the Segovia Christmas market" },
  { id: 13, src: gallerySegoviaView, alt: "Pau & Jakob with the Segovia cathedral in the background" },
  { id: 14, src: galleryDayOfDead, alt: "Pau & Jakob in Day of the Dead makeup" },
  { id: 15, src: galleryCat, alt: "Pau & Jakob with their cat" },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="py-6 md:py-10 px-4 md:px-6 bg-ivory">
      <div className="max-w-3xl mx-auto">
        {/* Slideshow Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-elevated bg-charcoal/5">
          {/* Blurred backdrop fills empty space for portrait photos */}
          <img
            src={photos[currentIndex].src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
          />
          {/* Foreground photo, fully visible */}
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="relative w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft hover:bg-ivory transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft hover:bg-ivory transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-charcoal" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gold w-6"
                    : "bg-ivory/60 hover:bg-ivory"
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
