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
    saveTheDate: string;
    weddingDetails: string;
    ceremony: string;
    dinner: string;
    tornafiesta: string;
    venueCloses: string;
    time: string;
    location: string;
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
      saveTheDate: 'Save the Date',
      weddingDetails: 'Wedding Details',
      ceremony: 'Ceremony',
      dinner: 'Dinner',
      tornafiesta: 'Torna Fiesta',
      venueCloses: 'Venue Closes',
      time: 'Time',
      location: 'Location',
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
      saveTheDate: 'Reserva la Fecha',
      weddingDetails: 'Detalles de la Boda',
      ceremony: 'Ceremonia',
      dinner: 'Cena',
      tornafiesta: 'Torna Fiesta',
      venueCloses: 'Cierre del Lugar',
      time: 'Hora',
      location: 'Lugar',
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
      saveTheDate: 'Spara Datumet',
      weddingDetails: 'Bröllopsdetaljer',
      ceremony: 'Ceremoni',
      dinner: 'Middag',
      tornafiesta: 'Torna Fiesta',
      venueCloses: 'Lokalen Stänger',
      time: 'Tid',
      location: 'Plats',
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
