import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'sv';

interface Translations {
  hero: {
    together: string;
    gettingMarried: string;
    rsvp: string;
    rsvpDeadline: string;
  };
  details: {
    saveTheDate: string;
    weddingDetails: string;
    ceremony: string;
    dinner: string;
    tornafiesta: string;
    time: string;
    location: string;
  };
  location: {
    subtitle: string;
    title: string;
    venueName: string;
    address: string;
    distance: string;
    distanceInfo: string;
    gettingThere: string;
    gettingThereInfo: string;
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
    hero: {
      together: 'Together with their families',
      gettingMarried: 'Are getting married',
      rsvp: 'RSVP Now',
      rsvpDeadline: 'Please RSVP by July 9, 2026',
    },
    details: {
      saveTheDate: 'Save the Date',
      weddingDetails: 'Wedding Details',
      ceremony: 'Ceremony',
      dinner: 'Dinner',
      tornafiesta: 'Torna Fiesta',
      time: 'Time',
      location: 'Location',
    },
    location: {
      subtitle: 'The Venue',
      title: 'Location',
      venueName: 'Las Mañanitas',
      address: 'Ricardo Linares 107, Centro, 62000 Cuernavaca, Morelos, Mexico',
      distance: 'Distance from Mexico City',
      distanceInfo: 'Approximately 1.5 hours by car (85 km) from Mexico City via Highway 95D',
      gettingThere: 'Getting There',
      gettingThereInfo: 'We recommend renting a car or arranging transportation from Mexico City. The venue offers parking facilities.',
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
    hero: {
      together: 'Junto con sus familias',
      gettingMarried: 'Se casan',
      rsvp: 'Confirmar Asistencia',
      rsvpDeadline: 'Por favor confirma antes del 9 de julio de 2026',
    },
    details: {
      saveTheDate: 'Reserva la Fecha',
      weddingDetails: 'Detalles de la Boda',
      ceremony: 'Ceremonia',
      dinner: 'Cena',
      tornafiesta: 'Torna Fiesta',
      time: 'Hora',
      location: 'Lugar',
    },
    location: {
      subtitle: 'El Lugar',
      title: 'Ubicación',
      venueName: 'Las Mañanitas',
      address: 'Ricardo Linares 107, Centro, 62000 Cuernavaca, Morelos, México',
      distance: 'Distancia desde la Ciudad de México',
      distanceInfo: 'Aproximadamente 1.5 horas en coche (85 km) desde la Ciudad de México por la Autopista 95D',
      gettingThere: 'Cómo Llegar',
      gettingThereInfo: 'Recomendamos rentar un coche o coordinar transporte desde la Ciudad de México. El lugar cuenta con estacionamiento.',
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
    hero: {
      together: 'Tillsammans med sina familjer',
      gettingMarried: 'Gifter sig',
      rsvp: 'OSA Nu',
      rsvpDeadline: 'Vänligen OSA senast 9 juli 2026',
    },
    details: {
      saveTheDate: 'Spara Datumet',
      weddingDetails: 'Bröllopsdetaljer',
      ceremony: 'Ceremoni',
      dinner: 'Middag',
      tornafiesta: 'Torna Fiesta',
      time: 'Tid',
      location: 'Plats',
    },
    location: {
      subtitle: 'Platsen',
      title: 'Plats',
      venueName: 'Las Mañanitas',
      address: 'Ricardo Linares 107, Centro, 62000 Cuernavaca, Morelos, Mexiko',
      distance: 'Avstånd från Mexico City',
      distanceInfo: 'Cirka 1,5 timmar med bil (85 km) från Mexico City via motorväg 95D',
      gettingThere: 'Hitta dit',
      gettingThereInfo: 'Vi rekommenderar att hyra bil eller ordna transport från Mexico City. Lokalen har parkering.',
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
