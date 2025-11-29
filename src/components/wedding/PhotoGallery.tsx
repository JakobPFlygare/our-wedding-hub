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
    <section className="py-6 md:py-10 px-4 md:px-6 bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-2 md:gap-4">
          
          {/* Previous Photo Preview */}
          <button
            onClick={goToPrevious}
            className="relative group flex-shrink-0 w-16 md:w-32 lg:w-48 aspect-[3/4] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Previous photo"
          >
            <img
              src={photos[prevIndex].src}
              alt={photos[prevIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
              <div className="p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft">
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-charcoal" />
              </div>
            </div>
          </button>

          {/* Current Photo */}
          <div className="relative flex-shrink-0 w-64 md:w-96 lg:w-[500px] aspect-[3/4] rounded-lg overflow-hidden shadow-elevated">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            
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

          {/* Next Photo Preview */}
          <button
            onClick={goToNext}
            className="relative group flex-shrink-0 w-16 md:w-32 lg:w-48 aspect-[3/4] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Next photo"
          >
            <img
              src={photos[nextIndex].src}
              alt={photos[nextIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
              <div className="p-2 rounded-full bg-ivory/80 backdrop-blur-sm shadow-soft">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-charcoal" />
              </div>
            </div>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
