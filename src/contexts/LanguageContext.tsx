import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'sv';

interface Translations {
  nav: {
    details: string;
    dressCode: string;
    location: string;
    rsvp: string;
  };
  hero: {
    together: string;
    gettingMarried: string;
    rsvp: string;
    rsvpDeadline: string;
  };
  gallery: {
    subtitle: string;
    title: string;
    comingSoon: string;
  };
  details: {
    schedule: string;
    weddingDetails: string;
    ceremony: string;
    cocktail: string;
    dinner: string;
    tornafiesta: string;
    venueCloses: string;
    childrenTitle: string;
    childrenDescription: string;
    giftsTitle: string;
    giftsDescription: string;
  };
  location: {
    subtitle: string;
    title: string;
    transportTitle: string;
    shuttleTitle: string;
    shuttleInfo: string;
    parkingTitle: string;
    parkingInfo: string;
    accommodationTitle: string;
    venueHotelInfo: string;
    guestDiscount: string;
    otherHotels: string;
    moreOptionsSoon: string;
  };
  dressCode: {
    subtitle: string;
    title: string;
    formal: string;
    formalDescription: string;
    weather: string;
    weatherDescription: string;
  };
  rsvp: {
    subtitle: string;
    title: string;
    description: string;
    rsvpOnline: string;
    emailUs: string;
    questions: string;
    contactUs: string;
  };
  music: {
    subtitle: string;
    title: string;
    description: string;
    artistPlaceholder: string;
    songPlaceholder: string;
    addSong: string;
    added: string;
    success: string;
    thankYou: string;
    error: string;
    fillBoth: string;
    tryAgain: string;
    hint: string;
  };
  footer: {
    celebrate: string;
    madeWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      details: 'Wedding Details',
      dressCode: 'Dress Code',
      location: 'Location',
      rsvp: 'RSVP',
    },
    hero: {
      together: 'Together with their families',
      gettingMarried: 'Are getting married',
      rsvp: 'RSVP Now',
      rsvpDeadline: 'Please RSVP by July 9, 2026',
    },
    gallery: {
      subtitle: 'Our Story',
      title: 'Moments Together',
      comingSoon: 'Photos coming soon...',
    },
    details: {
      schedule: 'Wedding Details',
      weddingDetails: 'January 9, 2027',
      ceremony: 'Ceremony',
      cocktail: 'Cocktail Hour',
      dinner: 'Dinner',
      tornafiesta: 'Torna Fiesta aka Vickning',
      venueCloses: 'Venue Closes',
      childrenTitle: 'Children',
      childrenDescription: 'We believe guests will enjoy the wedding more if they are able to attend childfree. However, we realize this is simply not possible for some and children are of course welcome.',
      giftsTitle: 'Wedding Gifts',
      giftsDescription: "Your presence is the greatest gift we could ask for. We kindly ask that you don't bring physical presents – our suitcases simply won't fit them for the journey home!",
    },
    location: {
      subtitle: 'The Venue',
      title: 'Location',
      transportTitle: 'Getting There',
      shuttleTitle: 'Shuttle Bus',
      shuttleInfo: 'We will provide a shuttle bus from Mexico City for guests without a car. Details will be shared closer to the date.',
      parkingTitle: 'By Car',
      parkingInfo: 'Valet parking is available at the venue for guests arriving by car.',
      accommodationTitle: 'Where to Stay',
      venueHotelInfo: 'Stay at the wedding venue itself for ultimate convenience.',
      guestDiscount: 'Guest Discount Available',
      otherHotels: 'Other Options',
      moreOptionsSoon: 'More hotel recommendations coming soon...',
    },
    dressCode: {
      subtitle: 'What to Wear',
      title: 'Dress Code',
      formal: 'Formal Attire',
      formalDescription: 'We invite you to dress in elegant formal attire. Think cocktail dresses, suits, or traditional formal wear. Light fabrics are recommended due to the warm weather.',
      weather: 'January Weather',
      weatherDescription: 'Cuernavaca enjoys pleasant spring-like weather year-round. January evenings can be cool, so consider bringing a light jacket or shawl.',
    },
    rsvp: {
      subtitle: "We Can't Wait to See You",
      title: 'Kindly Respond',
      description: 'Please let us know if you\'ll be joining us for our special day by July 9, 2026. We truly hope you can celebrate with us!',
      rsvpOnline: 'RSVP Online',
      emailUs: 'Email Us',
      questions: 'Questions?',
      contactUs: 'Feel free to reach out to us via phone – you know how to find us!',
    },
    music: {
      subtitle: 'Help Us Create the Playlist',
      title: 'Song Requests',
      description: 'What songs will get you on the dance floor? Let us know your favorites and we\'ll do our best to play them!',
      artistPlaceholder: 'Artist name',
      songPlaceholder: 'Song title',
      addSong: 'Add Song',
      added: 'Added!',
      success: 'Song Added',
      thankYou: 'Thanks for your music suggestion!',
      error: 'Error',
      fillBoth: 'Please fill in both artist and song name.',
      tryAgain: 'Something went wrong. Please try again.',
      hint: 'Add as many songs as you like!',
    },
    footer: {
      celebrate: "We can't wait to celebrate with you!",
      madeWith: 'Made with love',
    },
  },
  es: {
    nav: {
      details: 'Detalles',
      dressCode: 'Vestimenta',
      location: 'Ubicación',
      rsvp: 'Confirmar',
    },
    hero: {
      together: 'Junto con sus familias',
      gettingMarried: 'Se casan',
      rsvp: 'Confirmar Asistencia',
      rsvpDeadline: 'Por favor confirma antes del 9 de julio de 2026',
    },
    gallery: {
      subtitle: 'Nuestra Historia',
      title: 'Momentos Juntos',
      comingSoon: 'Fotos próximamente...',
    },
    details: {
      schedule: 'Detalles de la Boda',
      weddingDetails: '9 de Enero, 2027',
      ceremony: 'Ceremonia',
      cocktail: 'Cóctel',
      dinner: 'Cena',
      tornafiesta: 'Torna Fiesta aka Vickning',
      venueCloses: 'Cierre del Lugar',
      childrenTitle: 'Niños',
      childrenDescription: 'Creemos que los invitados disfrutarán más de la boda si pueden asistir sin niños. Sin embargo, entendemos que esto no es posible para todos y los niños son bienvenidos.',
      giftsTitle: 'Regalos de Boda',
      giftsDescription: 'Tu presencia es el mejor regalo que podríamos pedir. Te pedimos que no traigas regalos físicos – ¡nuestras maletas no tendrán espacio para el viaje de regreso!',
    },
    location: {
      subtitle: 'El Lugar',
      title: 'Ubicación',
      transportTitle: 'Cómo Llegar',
      shuttleTitle: 'Autobús',
      shuttleInfo: 'Proporcionaremos un autobús desde la Ciudad de México para invitados sin coche. Los detalles se compartirán más cerca de la fecha.',
      parkingTitle: 'En Coche',
      parkingInfo: 'El lugar cuenta con servicio de valet parking para invitados que lleguen en coche.',
      accommodationTitle: 'Dónde Hospedarse',
      venueHotelInfo: 'Hospédate en el mismo lugar de la boda para mayor comodidad.',
      guestDiscount: 'Descuento para Invitados',
      otherHotels: 'Otras Opciones',
      moreOptionsSoon: 'Más recomendaciones de hoteles próximamente...',
    },
    dressCode: {
      subtitle: 'Qué Vestir',
      title: 'Código de Vestimenta',
      formal: 'Vestimenta Formal',
      formalDescription: 'Te invitamos a vestir elegante formal. Piensa en vestidos de cóctel, trajes o vestimenta formal tradicional. Se recomiendan telas ligeras debido al clima cálido.',
      weather: 'Clima en Enero',
      weatherDescription: 'Cuernavaca disfruta de un clima primaveral agradable todo el año. Las noches de enero pueden ser frescas, así que considera traer una chaqueta ligera o chal.',
    },
    rsvp: {
      subtitle: 'Esperamos Verte',
      title: 'Confirma tu Asistencia',
      description: 'Por favor confirma tu asistencia antes del 9 de julio de 2026. ¡Esperamos poder celebrar contigo!',
      rsvpOnline: 'Confirmar en Línea',
      emailUs: 'Escríbenos',
      questions: '¿Preguntas?',
      contactUs: 'No dudes en contactarnos por teléfono – ¡ya sabes cómo encontrarnos!',
    },
    music: {
      subtitle: 'Ayúdanos a Crear la Playlist',
      title: 'Canciones',
      description: '¿Qué canciones te harán bailar? ¡Cuéntanos tus favoritas y haremos lo posible por ponerlas!',
      artistPlaceholder: 'Nombre del artista',
      songPlaceholder: 'Título de la canción',
      addSong: 'Agregar',
      added: '¡Agregada!',
      success: 'Canción Agregada',
      thankYou: '¡Gracias por tu sugerencia musical!',
      error: 'Error',
      fillBoth: 'Por favor completa el nombre del artista y la canción.',
      tryAgain: 'Algo salió mal. Por favor intenta de nuevo.',
      hint: '¡Agrega tantas canciones como quieras!',
    },
    footer: {
      celebrate: '¡Estamos emocionados de celebrar contigo!',
      madeWith: 'Hecho con amor',
    },
  },
  sv: {
    nav: {
      details: 'Detaljer',
      dressCode: 'Klädsel',
      location: 'Plats',
      rsvp: 'OSA',
    },
    hero: {
      together: 'Tillsammans med sina familjer',
      gettingMarried: 'Gifter sig',
      rsvp: 'OSA Nu',
      rsvpDeadline: 'Vänligen OSA senast 9 juli 2026',
    },
    gallery: {
      subtitle: 'Vår Historia',
      title: 'Stunder Tillsammans',
      comingSoon: 'Foton kommer snart...',
    },
    details: {
      schedule: 'Bröllopsdetaljer',
      weddingDetails: '9 Januari, 2027',
      ceremony: 'Ceremoni',
      cocktail: 'Cocktail',
      dinner: 'Middag',
      tornafiesta: 'Torna Fiesta aka Vickning',
      venueCloses: 'Lokalen Stänger',
      childrenTitle: 'Barn',
      childrenDescription: 'Vi tror att gästerna kommer att njuta mer av bröllopet om de kan delta utan barn. Vi förstår dock att detta inte är möjligt för alla och barn är självklart välkomna.',
      giftsTitle: 'Bröllopspresenter',
      giftsDescription: 'Er närvaro är den bästa presenten vi kan önska oss. Vi ber er att inte ta med fysiska presenter – våra resväskor har helt enkelt inte plats för dem på hemresan!',
    },
    location: {
      subtitle: 'Platsen',
      title: 'Plats',
      transportTitle: 'Hitta Dit',
      shuttleTitle: 'Shuttlebuss',
      shuttleInfo: 'Vi tillhandahåller en shuttlebuss från Mexico City för gäster utan bil. Detaljer kommer närmare datumet.',
      parkingTitle: 'Med Bil',
      parkingInfo: 'Valet parking finns tillgängligt på platsen för gäster som kommer med bil.',
      accommodationTitle: 'Boende',
      venueHotelInfo: 'Bo på bröllopslokalen för ultimat bekvämlighet.',
      guestDiscount: 'Gästrabatt Tillgänglig',
      otherHotels: 'Andra Alternativ',
      moreOptionsSoon: 'Fler hotellrekommendationer kommer snart...',
    },
    dressCode: {
      subtitle: 'Klädkod',
      title: 'Klädsel',
      formal: 'Formell Klädsel',
      formalDescription: 'Vi bjuder in dig att klä dig i elegant formell klädsel. Tänk cocktailklänningar, kostymer eller traditionell formell klädsel. Lätta tyger rekommenderas på grund av det varma vädret.',
      weather: 'Väder i Januari',
      weatherDescription: 'Cuernavaca har ett behagligt vårliknande klimat året runt. Januarikvällar kan vara svala, så överväg att ta med en lätt jacka eller sjal.',
    },
    rsvp: {
      subtitle: 'Vi Längtar Efter att Träffa Dig',
      title: 'Vänligen Svara',
      description: 'Vänligen meddela oss om du kan delta senast den 9 juli 2026. Vi hoppas verkligen att du kan fira med oss!',
      rsvpOnline: 'OSA Online',
      emailUs: 'Maila Oss',
      questions: 'Frågor?',
      contactUs: 'Hör gärna av dig via telefon – du vet hur du når oss!',
    },
    music: {
      subtitle: 'Hjälp Oss Skapa Spellistan',
      title: 'Önskelåtar',
      description: 'Vilka låtar får dig ut på dansgolvet? Berätta dina favoriter så gör vi vårt bästa för att spela dem!',
      artistPlaceholder: 'Artistnamn',
      songPlaceholder: 'Låttitel',
      addSong: 'Lägg Till',
      added: 'Tillagd!',
      success: 'Låt Tillagd',
      thankYou: 'Tack för ditt musikförslag!',
      error: 'Fel',
      fillBoth: 'Vänligen fyll i både artist och låtnamn.',
      tryAgain: 'Något gick fel. Försök igen.',
      hint: 'Lägg till så många låtar du vill!',
    },
    footer: {
      celebrate: 'Vi längtar efter att fira med dig!',
      madeWith: 'Gjord med kärlek',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
