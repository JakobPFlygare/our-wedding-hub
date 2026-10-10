import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'sv';

interface Translations {
  nav: {
    details: string;
    dressCode: string;
    location: string;
    rsvp: string;
    gifts: string;
  };
  hero: {
    together: string;
    gettingMarried: string;
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
    childrenMexicanNote: string;
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
    contactTitle: string;
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
  gifts: {
    subtitle: string;
    title: string;
    intro: string;
    howItWorks: string;
    step1: string;
    step2: string;
    step3: string;
    contribute: string;
    backHome: string;
    linkFromDetails: string;
    dialogTitle: string;
    yourName: string;
    yourNamePlaceholder: string;
    amount: string;
    amountPlaceholder: string;
    message: string;
    swishTab: string;
    wiseTab: string;
    paypalTab: string;
    swishHelp: string;
    swishScan: string;
    openSwish: string;
    swishNumber: string;
    wiseHelp: string;
    openWise: string;
    paypalHelp: string;
    openPaypal: string;
    copy: string;
    copied: string;
    thanks: string;
    chipIn: string;
    done: string;
    currency: string;
    swishConverted: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      details: 'Wedding Details',
      dressCode: 'Dress Code',
      location: 'Location',
      rsvp: 'RSVP',
      gifts: 'Gifts',
    },
    hero: {
      together: 'Together with their families',
      gettingMarried: 'Are getting married',
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
      childrenDescription: "We believe guests will enjoy the wedding more if they are able to attend childfree. However, we realize this is simply not possible for some and children are of course welcome. Let us know if you are bringing a kid so we can plan accordingly with the menu etc.",
      childrenMexicanNote: '',
      giftsTitle: 'Wedding Gifts',
      giftsDescription: "We truly don't expect anything – having you there is all we wish for. If you'd still like to give something, we've put together a few things you can contribute to instead of bringing a present (our suitcases will thank you).",
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
      subtitle: 'Thank You for Responding',
      title: 'RSVP Is Now Closed',
      description: 'The deadline to RSVP has passed. Thank you to everyone who responded.',
      contactTitle: 'Can\'t make it or didn\'t have time to respond?',
      contactUs: 'Please contact us directly by phone – you know how to find us!',
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
    gifts: {
      subtitle: 'Wedding Gifts',
      title: 'Contribute to Our Adventure',
      intro: "Your presence is the greatest gift. If you'd still like to give something, we'd love a contribution towards one of these – a fun way to give without filling our suitcases.",
      howItWorks: 'How it works',
      step1: 'Pick something you like below – any amount counts.',
      step2: 'Pay with Swish, Wise or PayPal – whatever is easiest for you.',
      step3: 'Add your name to the message so we know who to thank!',
      contribute: 'Chip in',
      backHome: 'Back to the invitation',
      linkFromDetails: 'A few ideas, if you’d like →',
      dialogTitle: 'Chip in towards',
      yourName: 'Your name',
      yourNamePlaceholder: 'So we know who to thank',
      amount: 'Amount',
      amountPlaceholder: 'Any amount',
      message: 'Payment message',
      swishTab: 'Swish',
      wiseTab: 'Wise',
      paypalTab: 'PayPal',
      swishHelp: 'For guests with a Swedish bank. Scan the code with the Swish app, or tap the button on your phone.',
      swishScan: 'Scan with Swish',
      openSwish: 'Open Swish',
      swishNumber: 'Swish number',
      wiseHelp: 'Pay by card or bank transfer in your own currency – no Wise account needed.',
      openWise: 'Pay with Wise',
      paypalHelp: 'Pay with your PayPal balance or a card.',
      openPaypal: 'Pay with PayPal',
      copy: 'Copy',
      copied: 'Copied!',
      thanks: 'Thank you so much – it means the world to us.',
      chipIn: 'Any amount is perfect – you’re chipping in, not buying the whole thing!',
      done: 'Done',
      currency: 'Currency',
      swishConverted: 'Swish is paid in SEK; the amount below is converted.',
    },
  },
  es: {
    nav: {
      details: 'Detalles',
      dressCode: 'Vestimenta',
      location: 'Ubicación',
      rsvp: 'Confirmar',
      gifts: 'Regalos',
    },
    hero: {
      together: 'Junto con sus familias',
      gettingMarried: 'Se casan',
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
      childrenMexicanNote: '',
      giftsTitle: 'Regalos de Boda',
      giftsDescription: 'De verdad no esperamos nada – tenerte ahí es todo lo que deseamos. Si aun así quieres darnos algo, armamos una lista de cosas a las que puedes contribuir en lugar de traer un regalo (nuestras maletas lo agradecerán).',
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
      subtitle: 'Gracias por Responder',
      title: 'Confirmaciones Cerradas',
      description: 'El plazo para confirmar asistencia ha terminado. Gracias a todos los que respondieron.',
      contactTitle: '¿No puedes asistir o no alcanzaste a responder?',
      contactUs: 'Por favor contáctanos directamente por teléfono – ¡ya sabes cómo encontrarnos!',
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
    gifts: {
      subtitle: 'Regalos de Boda',
      title: 'Contribuye a Nuestra Aventura',
      intro: 'Tu presencia es el mejor regalo. Si aun así quieres darnos algo, nos encantaría una contribución para alguna de estas cosas – una forma divertida de regalar sin llenar nuestras maletas.',
      howItWorks: 'Cómo funciona',
      step1: 'Elige algo que te guste de la lista – cualquier cantidad cuenta.',
      step2: 'Paga con Wise, PayPal o Swish – lo que te sea más fácil.',
      step3: '¡Pon tu nombre en el mensaje para saber a quién agradecer!',
      contribute: 'Cooperar',
      backHome: 'Volver a la invitación',
      linkFromDetails: 'Algunas ideas, si quieres →',
      dialogTitle: 'Cooperar para',
      yourName: 'Tu nombre',
      yourNamePlaceholder: 'Para saber a quién agradecer',
      amount: 'Cantidad',
      amountPlaceholder: 'Cualquier cantidad',
      message: 'Mensaje del pago',
      swishTab: 'Swish',
      wiseTab: 'Wise',
      paypalTab: 'PayPal',
      swishHelp: 'Para invitados con banco sueco. Escanea el código con la app de Swish o toca el botón desde tu celular.',
      swishScan: 'Escanea con Swish',
      openSwish: 'Abrir Swish',
      swishNumber: 'Número de Swish',
      wiseHelp: 'Paga con tarjeta o transferencia en pesos – no necesitas cuenta de Wise.',
      openWise: 'Pagar con Wise',
      paypalHelp: 'Paga con tu saldo de PayPal o con tarjeta.',
      openPaypal: 'Pagar con PayPal',
      copy: 'Copiar',
      copied: '¡Copiado!',
      thanks: 'Muchísimas gracias – significa el mundo para nosotros.',
      chipIn: 'Cualquier cantidad es perfecta – es una cooperación, ¡no tienes que pagar la cosa completa!',
      done: 'Listo',
      currency: 'Moneda',
      swishConverted: 'Swish se paga en coronas suecas (SEK); el monto de abajo ya está convertido.',
    },
  },
  sv: {
    nav: {
      details: 'Detaljer',
      dressCode: 'Klädsel',
      location: 'Plats',
      rsvp: 'OSA',
      gifts: 'Presenter',
    },
    hero: {
      together: 'Tillsammans med sina familjer',
      gettingMarried: 'Gifter sig',
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
      childrenDescription: 'Vi tror att gästerna kommer att njuta mer av bröllopet om de kan delta utan barn. Vi förstår dock att detta inte är möjligt för alla och barn är självklart välkomna. Låt oss veta om du tar med dig ett barn så att vi kan planera i enlighet med menyn etc.',
      childrenMexicanNote: '',
      giftsTitle: 'Bröllopspresenter',
      giftsDescription: 'Vi förväntar oss verkligen ingenting – att ni är där är allt vi önskar. Vill ni ändå ge något har vi samlat några saker ni kan bidra till i stället för en present (våra resväskor tackar).',
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
      subtitle: 'Tack för Era Svar',
      title: 'OSA Är Nu Stängd',
      description: 'Sista dagen för OSA har passerat. Tack till alla som har svarat.',
      contactTitle: 'Kan du inte komma eller hann du inte svara?',
      contactUs: 'Hör av dig direkt till oss via telefon – du vet hur du når oss!',
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
    gifts: {
      subtitle: 'Bröllopspresenter',
      title: 'Bidra till vårt äventyr',
      intro: 'Er närvaro är den finaste presenten. Vill ni ändå ge något blir vi jätteglada för ett bidrag till något av det här – ett roligt sätt att ge utan att fylla våra resväskor.',
      howItWorks: 'Så funkar det',
      step1: 'Välj något ni gillar nedan – alla belopp räknas.',
      step2: 'Betala med Swish, Wise eller PayPal – det som är enklast för er.',
      step3: 'Skriv ert namn i meddelandet så vi vet vem vi ska tacka!',
      contribute: 'Bidra',
      backHome: 'Tillbaka till inbjudan',
      linkFromDetails: 'Några idéer, om ni vill →',
      dialogTitle: 'Bidra till',
      yourName: 'Ert namn',
      yourNamePlaceholder: 'Så vi vet vem vi ska tacka',
      amount: 'Belopp',
      amountPlaceholder: 'Valfritt belopp',
      message: 'Meddelande',
      swishTab: 'Swish',
      wiseTab: 'Wise',
      paypalTab: 'PayPal',
      swishHelp: 'Skanna koden med Swish-appen, eller tryck på knappen om du är på mobilen.',
      swishScan: 'Skanna med Swish',
      openSwish: 'Öppna Swish',
      swishNumber: 'Swishnummer',
      wiseHelp: 'Betala med kort eller banköverföring i valfri valuta – inget Wise-konto behövs.',
      openWise: 'Betala med Wise',
      paypalHelp: 'Betala med PayPal-saldo eller kort.',
      openPaypal: 'Betala med PayPal',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      thanks: 'Tusen tack – det betyder allt för oss.',
      chipIn: 'Alla belopp är välkomna – ni bidrar med en slant, ni ska inte köpa hela grejen!',
      done: 'Klar',
      currency: 'Valuta',
      swishConverted: 'Swish betalas i SEK; beloppet nedan är omräknat.',
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
  // Persist the choice so it survives navigating between pages (e.g. /gifts).
  const LANG_KEY = 'language';
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return saved === 'en' || saved === 'es' || saved === 'sv' ? saved : 'en';
    } catch {
      return 'en';
    }
  });
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  };

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
