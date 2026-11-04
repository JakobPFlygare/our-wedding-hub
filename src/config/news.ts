// ---------------------------------------------------------------------------
// "What's new" sections: toastmasters and activities. Edit here.
// ---------------------------------------------------------------------------

import type { Lang, Localized } from "./gifts";

export interface Toastmaster {
  name: string;
  /** Optional one-liner under the name, per language. Leave empty to hide. */
  role: Localized;
  /** Shown as written. */
  phoneDisplay: string;
  /** Digits only with country code, for tel: and wa.me links. */
  phoneE164: string;
  /** Path under public/, e.g. "/toastmasters/jesper.jpg". Falls back to initials if missing. */
  photo: string;
  /** Which contact buttons to show. */
  text: boolean;
  whatsapp: boolean;
}

export const toastmasters: Toastmaster[] = [
  {
    name: "Dhamar Rios",
    role: { en: "", es: "", sv: "" },
    phoneDisplay: "+52 55 2865 0710",
    phoneE164: "525528650710",
    photo: "/toastmasters/dhamar.jpg",
    text: false,
    whatsapp: true,
  },
  {
    name: "Jesper Ericsson",
    role: { en: "", es: "", sv: "" },
    phoneDisplay: "+46 73-970 92 00",
    phoneE164: "46739709200",
    photo: "/toastmasters/jesper.jpg",
    text: true,
    whatsapp: true,
  },
];

export interface Activity {
  id: string;
  emoji: string;
  /** Path under public/, shown as a round thumbnail. */
  image: string;
  title: Localized;
  /** Date line under the title, always visible. */
  when: Localized;
  /** Shown when the card is expanded. A "\n" starts a new line. */
  description: Localized;
  /** Value sent to the Google Form checkbox question (must match an option there). */
  formValue: string;
  /** Optional quick vote on the card (voting ticks the card too); each formValue must also be an option in the form. */
  vote?: {
    question: Localized;
    options: { label: Localized; formValue: string }[];
  };
}

// In date order.
export const activities: Activity[] = [
  {
    id: "teotihuacan",
    emoji: "🏛️",
    image: "/activities/teotihuacan.webp",
    title: { en: "Teotihuacán", es: "Teotihuacán", sv: "Teotihuacán" },
    when: { en: "Tuesday, January 5", es: "Martes 5 de enero", sv: "Tisdag 5 januari" },
    description: {
      en: "Mexico's own pyramids – and you can even climb them! An hour and a half outside the city.\nIf enough of you are up for it, we could even float over them in a hot-air balloon at sunrise. Let us know what you think below!",
      es: "Las pirámides de México – ¡y hasta se pueden subir! A una hora y media de la ciudad.\nSi hay suficientes interesados, hasta podríamos volar sobre ellas en globo al amanecer. ¡Vota abajo!",
      sv: "Mexikos egna pyramider – som man till och med får klättra på! En och en halv timme utanför staden.\nÄr tillräckligt många sugna kan vi till och med sväva över dem i luftballong i soluppgången. Rösta här nedanför!",
    },
    formValue: "Teotihuacan",
    vote: {
      question: { en: "Hot-air balloon at sunrise?", es: "¿Globo al amanecer?", sv: "Luftballong i soluppgången?" },
      options: [
        { label: { en: "🎈 Balloon", es: "🎈 Globo", sv: "🎈 Ballong" }, formValue: "Balloon: yes" },
        { label: { en: "No balloon", es: "Sin globo", sv: "Ingen ballong" }, formValue: "Balloon: no" },
      ],
    },
  },
  {
    id: "xochimilco",
    emoji: "🛶",
    image: "/activities/xochimilco.webp",
    title: { en: "Trajinera in Xochimilco", es: "Trajinera en Xochimilco", sv: "Trajinera i Xochimilco" },
    when: { en: "Thursday, January 7", es: "Jueves 7 de enero", sv: "Torsdag 7 januari" },
    description: {
      en: "We'll rent a trajinera, a colourful wooden boat, and spend the afternoon on the canals of Xochimilco. The canals are what's left of the lakes where the Aztecs grew their food before the Spanish arrived. Smaller boats come by selling food, drinks and mariachi songs.",
      es: "Rentamos una trajinera y pasamos la tarde en los canales de Xochimilco. Los canales y chinampas son lo que queda de los lagos donde los aztecas cultivaban antes de la llegada de los españoles. Desde otras lanchas venden comida, bebidas y canciones de mariachi.",
      sv: "Vi hyr en trajinera, en färgglad träbåt, och tillbringar eftermiddagen på kanalerna i Xochimilco. Kanalerna är det som finns kvar av sjöarna där aztekerna odlade sin mat innan spanjorerna kom. Mindre båtar kommer förbi och säljer mat, dryck och mariachimusik.",
    },
    formValue: "Xochimilco",
  },
  {
    id: "shuttle",
    emoji: "🚌",
    image: "/activities/shuttle.webp",
    title: { en: "Our minibus", es: "Nuestro minibús", sv: "Vår minibuss" },
    when: { en: "January 8 & 10", es: "8 y 10 de enero", sv: "8 & 10 januari" },
    description: {
      en: "We're renting a small minibus to take guests from Mexico City to Cuernavaca and back. It leaves Mexico City on Friday, January 8 at 10:00 am, and we'll confirm the exact pick-up point closer to the date. The ride takes about an hour and twenty minutes.\nFor the trip back, it leaves from the main entrance of Las Mañanitas on Sunday, January 10 at 12:30 pm.\nSeats are limited, so it's first come, first served! Please pack light so there's room for everyone's bags.\nIf the dates don't suit you, regular public buses also run between Mexico City and Cuernavaca. You'll find them under Getting There.",
      es: "Vamos a rentar un minibús para llevar a los invitados de la Ciudad de México a Cuernavaca y de regreso. Sale de la Ciudad de México el viernes 8 de enero a las 10:00 a.m., y confirmaremos el punto de salida exacto más adelante. El trayecto dura aproximadamente una hora y veinte minutos.\nPara el regreso, sale de la entrada principal de Las Mañanitas el domingo 10 de enero a las 12:30 p.m.\nLos lugares son limitados y se asignan por orden de registro, ¡así que no te tardes! Te pedimos llevar poco equipaje para que haya espacio para todos.\nSi las fechas no te convienen, también hay autobuses públicos entre la Ciudad de México y Cuernavaca. Los encuentras en Cómo Llegar.",
      sv: "Vi hyr en minibuss som tar gästerna från Mexico City till Cuernavaca och tillbaka. Den avgår från Mexico City fredag 8 januari kl. 10.00, och vi bekräftar exakt avgångsplats närmare datumet. Resan tar ungefär en timme och tjugo minuter.\nTillbaka går minibussen från huvudentrén på Las Mañanitas söndag 10 januari kl. 12.30.\nAntalet platser är begränsat, så först till kvarn! Packa gärna lätt så att allas väskor får plats.\nPassar inte datumen går det också vanliga linjebussar mellan Mexico City och Cuernavaca. Mer om dem finns under Hitta Dit.",
    },
    formValue: "Shuttle",
  },
  {
    id: "friday-dinner",
    emoji: "🍽️",
    image: "/activities/friday-dinner.webp",
    title: { en: "Dinner in Cuernavaca", es: "Cena en Cuernavaca", sv: "Middag i Cuernavaca" },
    when: { en: "Friday, January 8", es: "Viernes 8 de enero", sv: "Fredag 8 januari" },
    description: {
      en: "A relaxed dinner the evening before the wedding, for everyone already in town. Exact place to be confirmed. This one is informal and everyone pays their own way.",
      es: "Una cena relajada la noche antes de la boda, para quienes ya estén en la ciudad. El lugar exacto está por confirmar. Esta es informal y cada quien paga lo suyo.",
      sv: "En avslappnad middag kvällen före bröllopet, för alla som redan är på plats. Exakt plats bekräftas senare. Den här är enkel och var och en betalar för sig.",
    },
    formValue: "Friday dinner",
  },
];

/**
 * Google Form that collects the sign-ups (same trick as the song requests).
 * Create a form with a short-answer "Name" question and a checkbox question
 * with the options above, then paste the formResponse URL and entry ids.
 * See docs/NEWS_SETUP.md.
 */
export const activitiesForm = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSezEC4ECK_gn6uPdsY1a4PEh6uZ2qSq9g8I8kZ6uvaaCxMlcg/formResponse",
  nameEntry: "entry.260784579",
  activitiesEntry: "entry.1355089442",
};

export type { Lang };
