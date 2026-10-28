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
  description: Localized;
  /** Value sent to the Google Form checkbox question (must match an option there). */
  formValue: string;
}

export const activities: Activity[] = [
  {
    id: "friday-dinner",
    emoji: "🍽️",
    image: "/activities/friday-dinner.webp",
    title: { en: "Dinner on Friday, January 8", es: "Cena el viernes 8 de enero", sv: "Middag fredag 8 januari" },
    description: {
      en: "A relaxed dinner at Las Mañanitas the evening before the wedding, for everyone already in town. Each guest covers their own meal.",
      es: "Una cena relajada en Las Mañanitas la noche antes de la boda, para quienes ya estén en la ciudad. Cada quien cubre su propia cena.",
      sv: "En avslappnad middag på Las Mañanitas kvällen före bröllopet, för alla som redan är på plats. Var och en betalar för sin egen mat.",
    },
    formValue: "Friday dinner",
  },
  {
    id: "shuttle",
    emoji: "🚌",
    image: "/activities/shuttle.webp",
    title: { en: "Shuttle bus", es: "Autobús", sv: "Buss" },
    description: {
      en: "Mexico City → Cuernavaca on January 8, back on January 10. We're still exploring options depending on how many sign up – a stop in Tepoztlán on the way could be fun too (it's really close).",
      es: "Ciudad de México → Cuernavaca el 8 de enero, regreso el 10 de enero. Seguimos viendo opciones según cuántos se apunten – una parada en Tepoztlán en el camino también podría estar divertida (está muy cerca).",
      sv: "Mexico City → Cuernavaca den 8 januari, tillbaka den 10 januari. Vi tittar fortfarande på alternativ beroende på hur många som anmäler sig – ett stopp i Tepoztlán på vägen skulle också kunna vara kul (det ligger riktigt nära).",
    },
    formValue: "Shuttle",
  },
  {
    id: "xochimilco",
    emoji: "🛶",
    image: "/activities/xochimilco.webp",
    title: { en: "Trajinera in Xochimilco", es: "Trajinera en Xochimilco", sv: "Trajinera i Xochimilco" },
    description: {
      en: "We get on a river boat together and ride around the canals while being served mysterious drinks from canoes nearby. It's quite fun!",
      es: "Nos subimos juntos a una trajinera y paseamos por los canales mientras nos sirven bebidas misteriosas desde las canoas de al lado. ¡Es muy divertido!",
      sv: "Vi kliver på en flodbåt tillsammans och åker runt i kanalerna medan mystiska drinkar serveras från kanoter intill. Riktigt kul!",
    },
    formValue: "Xochimilco",
  },
  {
    id: "teotihuacan",
    emoji: "🏛️",
    image: "/activities/teotihuacan.webp",
    title: { en: "Teotihuacán", es: "Teotihuacán", sv: "Teotihuacán" },
    description: {
      en: "Mexico's own pyramids – and you can even climb them! An hour and a half outside the city.",
      es: "Las pirámides de México – ¡y hasta se pueden subir! A una hora y media de la ciudad.",
      sv: "Mexikos egna pyramider – som man till och med får klättra på! En och en halv timme utanför staden.",
    },
    formValue: "Teotihuacan",
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
