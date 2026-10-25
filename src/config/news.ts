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
    name: "Jesper Ericsson",
    role: { en: "", es: "", sv: "" },
    phoneDisplay: "+46 73-970 92 00",
    phoneE164: "46739709200",
    photo: "/toastmasters/jesper.jpg",
    text: true,
    whatsapp: true,
  },
  {
    name: "Dhamar Rios",
    role: { en: "", es: "", sv: "" },
    phoneDisplay: "+52 55 2865 0710",
    phoneE164: "525528650710",
    photo: "/toastmasters/dhamar.jpg",
    text: false,
    whatsapp: true,
  },
];

export interface Activity {
  id: string;
  emoji: string;
  title: Localized;
  description: Localized;
  /** Value sent to the Google Form checkbox question (must match an option there). */
  formValue: string;
}

export const activities: Activity[] = [
  {
    id: "friday-dinner",
    emoji: "🍽️",
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
    title: { en: "Shuttle bus", es: "Autobús", sv: "Buss" },
    description: {
      en: "Mexico City → Cuernavaca on January 8, back on January 10.",
      es: "Ciudad de México → Cuernavaca el 8 de enero, regreso el 10 de enero.",
      sv: "Mexico City → Cuernavaca den 8 januari, tillbaka den 10 januari.",
    },
    formValue: "Shuttle",
  },
  {
    id: "xochimilco",
    emoji: "🛶",
    title: { en: "Trajinera in Xochimilco", es: "Trajinera en Xochimilco", sv: "Trajinera i Xochimilco" },
    description: {
      en: "A floating party on the canals of Mexico City – colourful boats, mariachi and micheladas.",
      es: "Fiesta flotante por los canales de la ciudad – trajineras de colores, mariachi y micheladas.",
      sv: "Flytande fest på kanalerna i Mexico City – färgglada båtar, mariachi och micheladas.",
    },
    formValue: "Xochimilco",
  },
  {
    id: "teotihuacan",
    emoji: "🏛️",
    title: { en: "Teotihuacán", es: "Teotihuacán", sv: "Teotihuacán" },
    description: {
      en: "Climb the Pyramids of the Sun and the Moon, an hour outside the city.",
      es: "Sube a las Pirámides del Sol y de la Luna, a una hora de la ciudad.",
      sv: "Bestig Sol- och Månpyramiden, en timme utanför staden.",
    },
    formValue: "Teotihuacan",
  },
  {
    id: "tepoztlan",
    emoji: "⛰️",
    title: { en: "Tepoztlán", es: "Tepoztlán", sv: "Tepoztlán" },
    description: {
      en: "Magical mountain town near Cuernavaca – hike up to the Tepozteco and eat your way through the market.",
      es: "Pueblo mágico cerca de Cuernavaca – sube al Tepozteco y recorre el mercado comiendo.",
      sv: "Magisk bergsby nära Cuernavaca – vandra upp till Tepozteco och ät er igenom marknaden.",
    },
    formValue: "Tepoztlan",
  },
];

/**
 * Google Form that collects the sign-ups (same trick as the song requests).
 * Create a form with a short-answer "Name" question and a checkbox question
 * with the options above, then paste the formResponse URL and entry ids.
 * See docs/NEWS_SETUP.md.
 */
export const activitiesForm = {
  url: "https://docs.google.com/forms/d/e/TODO/formResponse", // TODO replace
  nameEntry: "entry.TODO", // TODO replace
  activitiesEntry: "entry.TODO", // TODO replace
};

export type { Lang };
