import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryAutumn from "@/assets/gallery-autumn.jpg";
import galleryBeach from "@/assets/gallery-beach.jpg";

const photos = [
  { id: 1, src: galleryAutumn, alt: "Pau & Jakob in autumn leaves" },
  { id: 2, src: galleryBeach, alt: "Pau & Jakob at the beach" },
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

  const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % photos.length;

  return (
    <section className="py-6 md:py-10 bg-ivory overflow-hidden">
      <div className="relative flex items-center justify-center">
        
        {/* Previous Photo Preview - peeking from left */}
        <button
          onClick={goToPrevious}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-24 lg:w-32 h-48 lg:h-64 rounded-r-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer group z-10"
          aria-label="Previous photo"
        >
          <img
            src={photos[prevIndex].src}
            alt={photos[prevIndex].alt}
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
            <div className="p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft">
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </div>
          </div>
        </button>

        {/* Main Photo Container */}
        <div className="relative max-w-3xl w-full mx-4 md:mx-auto px-4 md:px-6">
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-elevated">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover"
            />

            {/* Mobile Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft hover:bg-ivory transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>
            <button
              onClick={goToNext}
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft hover:bg-ivory transition-colors"
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

        {/* Next Photo Preview - peeking from right */}
        <button
          onClick={goToNext}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-24 lg:w-32 h-48 lg:h-64 rounded-l-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer group z-10"
          aria-label="Next photo"
        >
          <img
            src={photos[nextIndex].src}
            alt={photos[nextIndex].alt}
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
            <div className="p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft">
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </div>
          </div>
        </button>
        
      </div>
    </section>
  );
};

export default PhotoGallery;
