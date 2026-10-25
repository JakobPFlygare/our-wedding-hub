import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'sv';

interface Translations {
  nav: {
    details: string;
    dressCode: string;
    location: string;
    news: string;
    gifts: string;
  };
  hero: {
    gettingMarried: string;
    daysToGo: string;
    when: string;
    where: string;
    dress: string;
    openMaps: string;
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
    shuttleSignup: string;
    stayInfo: string;
  };
  dressCode: {
    subtitle: string;
    title: string;
    formal: string;
    formalDescription: string;
  };
  footer: {
    celebrate: string;
    madeWith: string;
  };
  toastmasters: {
    subtitle: string;
    title: string;
    contact: string;
  };
  activities: {
    subtitle: string;
    title: string;
    intro: string;
    signupTitle: string;
    signupHint: string;
    yourName: string;
    yourNamePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    thankYou: string;
    error: string;
    fillIn: string;
    tryAgain: string;
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
      news: 'What’s new',
      gifts: 'Gifts',
    },
    hero: {
      gettingMarried: 'Are getting married',
      daysToGo: 'days to go',
      when: 'When',
      where: 'Where',
      dress: 'Dress',
      openMaps: 'Open in Maps',
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
      giftsDescription: "Your presence is the greatest gift we could ask for. We kindly ask that you don't bring physical presents – our suitcases simply won't fit them for the journey home!",
    },
    location: {
      subtitle: 'The Venue',
      title: 'Location',
      transportTitle: 'Getting There',
      shuttleTitle: 'Shuttle Bus',
      shuttleInfo: 'Shuttle bus from Mexico City to Cuernavaca on January 8, returning from Cuernavaca to Mexico City on January 10.',
      shuttleSignup: 'Sign up here if you’re interested.',
      stayInfo: 'We recommend staying in Cuernavaca centre. Getting back to Mexico City straight after the wedding isn’t a good idea, so plan to stay nearby.',
      parkingTitle: 'By Car',
      parkingInfo: 'Valet parking is available at the venue for guests arriving by car.',
      accommodationTitle: 'Where to Stay',
    },
    dressCode: {
      subtitle: 'What to Wear',
      title: 'Dress Code',
      formal: 'Formal Attire',
      formalDescription: 'We invite you to dress in elegant formal attire. Think cocktail dresses, suits, or traditional formal wear. Light fabrics are recommended due to the warm weather.',
    },
    footer: {
      celebrate: "We can't wait to celebrate with you!",
      madeWith: 'Made with love',
    },
    toastmasters: {
      subtitle: 'Meet the',
      title: 'Toastmasters',
      contact: 'Get in touch',
    },
    activities: {
      subtitle: 'Make a trip of it',
      title: 'Activities',
      intro: 'We’re planning a few activities for anyone who’d like to meet up before the wedding. If you’re interested, let us know and we’ll set dates and details later.',
      signupTitle: 'I’m interested in…',
      signupHint: 'No commitment – this just helps us plan.',
      yourName: 'Your name',
      yourNamePlaceholder: 'Name (and who you’re bringing)',
      submit: 'Send',
      submitting: 'Sending…',
      success: 'Got it!',
      thankYou: 'Thanks, we’ll be in touch with details.',
      error: 'Error',
      fillIn: 'Please add your name and tick at least one activity.',
      tryAgain: 'Something went wrong. Please try again.',
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
      news: 'Novedades',
      gifts: 'Regalos',
    },
    hero: {
      gettingMarried: 'Se casan',
      daysToGo: 'días para la boda',
      when: 'Cuándo',
      where: 'Dónde',
      dress: 'Vestimenta',
      openMaps: 'Abrir en Maps',
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
      giftsDescription: 'Tu presencia es el mejor regalo que podríamos pedir. Te pedimos que no traigas regalos físicos – ¡nuestras maletas no tendrán espacio para el viaje de regreso!',
    },
    location: {
      subtitle: 'El Lugar',
      title: 'Ubicación',
      transportTitle: 'Cómo Llegar',
      shuttleTitle: 'Autobús',
      shuttleInfo: 'Autobús desde la Ciudad de México a Cuernavaca el 8 de enero, y de regreso de Cuernavaca a la Ciudad de México el 10 de enero.',
      shuttleSignup: 'Regístrate aquí si te interesa.',
      stayInfo: 'Recomendamos hospedarse en el centro de Cuernavaca. No es buena idea volver a la Ciudad de México justo después de la boda, así que mejor quédate cerca.',
      parkingTitle: 'En Coche',
      parkingInfo: 'El lugar cuenta con servicio de valet parking para invitados que lleguen en coche.',
      accommodationTitle: 'Dónde Hospedarse',
    },
    dressCode: {
      subtitle: 'Qué Vestir',
      title: 'Código de Vestimenta',
      formal: 'Vestimenta Formal',
      formalDescription: 'Te invitamos a vestir elegante formal. Piensa en vestidos de cóctel, trajes o vestimenta formal tradicional. Se recomiendan telas ligeras debido al clima cálido.',
    },
    footer: {
      celebrate: '¡Estamos emocionados de celebrar contigo!',
      madeWith: 'Hecho con amor',
    },
    toastmasters: {
      subtitle: 'Conoce a los',
      title: 'Maestros de ceremonia',
      contact: 'Contacto',
    },
    activities: {
      subtitle: 'Aprovecha el viaje',
      title: 'Actividades',
      intro: 'Estamos planeando algunas actividades para quienes quieran reunirse antes de la boda. Si te interesa, avísanos y más adelante fijamos fechas y detalles.',
      signupTitle: 'Me interesa…',
      signupHint: 'Sin compromiso – solo nos ayuda a planear.',
      yourName: 'Tu nombre',
      yourNamePlaceholder: 'Nombre (y con quién vienes)',
      submit: 'Enviar',
      submitting: 'Enviando…',
      success: '¡Listo!',
      thankYou: 'Gracias, te contactamos con los detalles.',
      error: 'Error',
      fillIn: 'Pon tu nombre y marca al menos una actividad.',
      tryAgain: 'Algo salió mal. Inténtalo de nuevo.',
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
      news: 'Nytt',
      gifts: 'Presenter',
    },
    hero: {
      gettingMarried: 'Gifter sig',
      daysToGo: 'dagar kvar',
      when: 'När',
      where: 'Var',
      dress: 'Klädsel',
      openMaps: 'Öppna i Maps',
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
      giftsDescription: 'Er närvaro är den bästa presenten vi kan önska oss. Vi ber er att inte ta med fysiska presenter – våra resväskor har helt enkelt inte plats för dem på hemresan!',
    },
    location: {
      subtitle: 'Platsen',
      title: 'Plats',
      transportTitle: 'Hitta Dit',
      shuttleTitle: 'Shuttlebuss',
      shuttleInfo: 'Buss från Mexico City till Cuernavaca den 8 januari, och tillbaka från Cuernavaca till Mexico City den 10 januari.',
      shuttleSignup: 'Anmäl er här om ni är intresserade.',
      stayInfo: 'Vi rekommenderar att bo i centrala Cuernavaca. Det är ingen bra idé att åka tillbaka till Mexico City direkt efter bröllopet, så bo gärna i närheten.',
      parkingTitle: 'Med Bil',
      parkingInfo: 'Valet parking finns tillgängligt på platsen för gäster som kommer med bil.',
      accommodationTitle: 'Boende',
    },
    dressCode: {
      subtitle: 'Klädkod',
      title: 'Klädsel',
      formal: 'Formell Klädsel',
      formalDescription: 'Vi bjuder in dig att klä dig i elegant formell klädsel. Tänk cocktailklänningar, kostymer eller traditionell formell klädsel. Lätta tyger rekommenderas på grund av det varma vädret.',
    },
    footer: {
      celebrate: 'Vi längtar efter att fira med dig!',
      madeWith: 'Gjord med kärlek',
    },
    toastmasters: {
      subtitle: 'Säg hej till våra',
      title: 'Toastmasters',
      contact: 'Kontakt',
    },
    activities: {
      subtitle: 'Gör en resa av det',
      title: 'Aktiviteter',
      intro: 'Vi planerar några aktiviteter för er som vill träffas innan bröllopet. Är ni intresserade – säg till, så bestämmer vi datum och detaljer senare.',
      signupTitle: 'Jag är intresserad av…',
      signupHint: 'Inget bindande – det hjälper oss bara att planera.',
      yourName: 'Ert namn',
      yourNamePlaceholder: 'Namn (och vem ni tar med)',
      submit: 'Skicka',
      submitting: 'Skickar…',
      success: 'Tack!',
      thankYou: 'Vi återkommer med detaljer.',
      error: 'Fel',
      fillIn: 'Fyll i namn och kryssa i minst en aktivitet.',
      tryAgain: 'Något gick fel. Försök igen.',
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
