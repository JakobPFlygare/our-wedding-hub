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
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  { src: galleryXochimilco, alt: "Pau & Jakob on a trajinera in Xochimilco" },
  { src: gallerySkiing, alt: "Pau & Jakob cross-country skiing in Sweden" },
  { src: galleryAutumn, alt: "Pau & Jakob in autumn leaves" },
  { src: galleryBeach, alt: "Pau & Jakob at the beach" },
  { src: galleryDayOfDead, alt: "Pau & Jakob in Day of the Dead makeup" },
  { src: galleryBouquet, alt: "Pau holding a bouquet by a sunlit mountain window" },
  { src: gallerySegoviaView, alt: "Pau & Jakob with the Segovia cathedral in the background" },
  { src: galleryCat, alt: "Pau & Jakob with their cat" },
  { src: gallery7105, alt: "Pau & Jakob" },
  { src: gallery7300, alt: "Pau & Jakob" },
  { src: gallery7563, alt: "Pau & Jakob" },
  { src: gallery8179, alt: "Pau & Jakob" },
  { src: gallery9400, alt: "Pau & Jakob" },
  { src: gallery9622, alt: "Pau & Jakob" },
  { src: gallerySegoviaMarket, alt: "Pau & Jakob at the Segovia Christmas market" },
];

/** A horizontally scrolling strip of photos. */
const PhotoGallery = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="border-t border-charcoal/70 pt-5 mb-6">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">{t.gallery.title}</h2>
        </div>
      </div>
      <div className="overflow-x-auto px-4 md:px-6 pb-3 [scrollbar-width:thin]">
        <div className="flex gap-2 w-max mx-auto">
          {photos.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              loading={i < 4 ? "eager" : "lazy"}
              className="h-52 md:h-72 w-auto object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
