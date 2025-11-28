import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'sv';

interface Translations {
  hero: {
    together: string;
    gettingMarried: string;
    rsvp: string;
  };
  details: {
    saveTheDate: string;
    weddingDetails: string;
    ceremony: string;
    reception: string;
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
    viewOnMaps: string;
    gettingThere: string;
    gettingThereInfo: string;
  };
  rsvp: {
    subtitle: string;
    title: string;
    description: string;
    rsvpOnline: string;
    emailUs: string;
    questions: string;
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
    },
    details: {
      saveTheDate: 'Save the Date',
      weddingDetails: 'Wedding Details',
      ceremony: 'Ceremony',
      reception: 'Reception',
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
      viewOnMaps: 'View on Google Maps',
      gettingThere: 'Getting There',
      gettingThereInfo: 'We recommend renting a car or arranging transportation from Mexico City. The venue offers parking facilities.',
    },
    rsvp: {
      subtitle: "We Can't Wait to See You",
      title: 'Kindly Respond',
      description: 'Please let us know if you\'ll be joining us for our special day by December 1, 2026. We truly hope you can celebrate with us!',
      rsvpOnline: 'RSVP Online',
      emailUs: 'Email Us',
      questions: 'Questions?',
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
    },
    details: {
      saveTheDate: 'Reserva la Fecha',
      weddingDetails: 'Detalles de la Boda',
      ceremony: 'Ceremonia',
      reception: 'Recepción',
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
      viewOnMaps: 'Ver en Google Maps',
      gettingThere: 'Cómo Llegar',
      gettingThereInfo: 'Recomendamos rentar un coche o coordinar transporte desde la Ciudad de México. El lugar cuenta con estacionamiento.',
    },
    rsvp: {
      subtitle: 'Esperamos Verte',
      title: 'Confirma tu Asistencia',
      description: 'Por favor confirma tu asistencia antes del 1 de diciembre de 2026. ¡Esperamos poder celebrar contigo!',
      rsvpOnline: 'Confirmar en Línea',
      emailUs: 'Escríbenos',
      questions: '¿Preguntas?',
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
    },
    details: {
      saveTheDate: 'Spara Datumet',
      weddingDetails: 'Bröllopsdetaljer',
      ceremony: 'Ceremoni',
      reception: 'Fest',
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
      viewOnMaps: 'Visa på Google Maps',
      gettingThere: 'Hitta dit',
      gettingThereInfo: 'Vi rekommenderar att hyra bil eller ordna transport från Mexico City. Lokalen har parkering.',
    },
    rsvp: {
      subtitle: 'Vi Längtar Efter att Träffa Dig',
      title: 'Vänligen Svara',
      description: 'Vänligen meddela oss om du kan delta senast den 1 december 2026. Vi hoppas verkligen att du kan fira med oss!',
      rsvpOnline: 'OSA Online',
      emailUs: 'Maila Oss',
      questions: 'Frågor?',
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
