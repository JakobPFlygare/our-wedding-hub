import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryAutumn from "@/assets/gallery-autumn.jpg";
import galleryBeach from "@/assets/gallery-beach.jpg";
import gallerySkiing from "@/assets/gallery/IMG_0759.jpg";
import galleryXochimilco from "@/assets/gallery/IMG_2292.jpg";
import galleryCoyoacan from "@/assets/gallery/IMG_5625.jpg";
import galleryHotdogs from "@/assets/gallery/IMG_6221.jpg";
import galleryPhotobooth from "@/assets/gallery/IMG_8195.jpg";
import galleryBar from "@/assets/gallery/IMG_8526.jpg";
import galleryWedding from "@/assets/gallery/IMG_8723.jpg";
import galleryBouquet from "@/assets/gallery/IMG_0740.JPG";

const photos = [
  { id: 1, src: galleryAutumn, alt: "Pau & Jakob in autumn leaves" },
  { id: 2, src: galleryBeach, alt: "Pau & Jakob at the beach" },
  { id: 3, src: gallerySkiing, alt: "Pau & Jakob cross-country skiing in Sweden" },
  { id: 4, src: galleryXochimilco, alt: "Pau & Jakob on a trajinera in Xochimilco" },
  { id: 5, src: galleryCoyoacan, alt: "Pau & Jakob by the coyote fountain in Coyoacán" },
  { id: 6, src: galleryHotdogs, alt: "Pau & Jakob enjoying hotdogs and beers" },
  { id: 7, src: galleryPhotobooth, alt: "Pau & Jakob in a photobooth strip" },
  { id: 8, src: galleryBar, alt: "Pau & Jakob sharing a drink at a bar" },
  { id: 9, src: galleryWedding, alt: "Pau & Jakob with friends at a celebration" },
  { id: 10, src: galleryBouquet, alt: "Pau holding a bouquet by a sunlit mountain window" },
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
