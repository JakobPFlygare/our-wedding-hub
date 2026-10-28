// ---------------------------------------------------------------------------
// Gift contributions: ONE place to edit payment details, currencies and the
// list of things guests can contribute towards. Nothing here is secret; every
// value is shown to guests on the /gifts page.
// ---------------------------------------------------------------------------

export type Lang = "en" | "es" | "sv";
export type Localized = Record<Lang, string>;

export const payment = {
  /** Swish (Swedish guests). Phone number without +46, e.g. "0701234567". */
  swish: {
    number: "0706943408", 
    holder: "Jakob Flygare", // name guests will see in the Swish app
  },
  /** Wise (international guests). A wise.com/pay link or Wisetag. */
  wise: {
    payLink: "https://wise.com/pay/me/jakobf7",
    tag: "@jakobf7", 
    holder: "Jakob Flygare",
  },
  /** PayPal.Me handle (no @). */
  paypal: {
    handle: "jakobflygare", 
  },
};

// ---------------------------------------------------------------------------
// Currencies. Amounts in the gift list are in SEK; the other currencies are
// derived with these rough rates (only used for suggested amounts).
// ---------------------------------------------------------------------------

export type Currency = "SEK" | "MXN" | "USD";
export const currencies: Currency[] = ["SEK", "MXN", "USD"];

/** How many units of each currency 1 SEK buys. Update occasionally. */
export const perSek: Record<Currency, number> = {
  SEK: 1,
  MXN: 1.9,
  USD: 0.1,
};

/** Which currency each language starts with. */
export const defaultCurrency: Record<Lang, Currency> = {
  en: "USD",
  es: "MXN",
  sv: "SEK",
};

export const convert = (amount: number, from: Currency, to: Currency): number =>
  from === to ? amount : Math.round((amount / perSek[from]) * perSek[to]);

export const formatAmount = (amount: number, currency: Currency): string => {
  switch (currency) {
    case "SEK":
      return `${amount.toLocaleString("sv-SE")} kr`;
    case "MXN":
      return `$${amount.toLocaleString("es-MX")} MXN`;
    case "USD":
      return `$${amount.toLocaleString("en-US")} USD`;
  }
};

// ---------------------------------------------------------------------------
// Gift list
// ---------------------------------------------------------------------------

export interface GiftItem {
  id: string;
  emoji: string;
  title: Localized;
  description: Localized;
  /** Short label used in the Swish/payment message, e.g. "Honeymoon dinner". */
  reference: string;
}

export const giftItems: GiftItem[] = [
  {
    id: "honeymoon-adventures",
    emoji: "🏝️",
    title: { en: "Honeymoon adventures", es: "Aventuras de luna de miel", sv: "Äventyr på smekmånaden" },
    description: {
      en: "Boat trips, hikes, snorkelling – whatever the trip throws at us.",
      es: "Paseos en lancha, caminatas, esnórquel – lo que el viaje nos ponga enfrente.",
      sv: "Båtturer, vandringar, snorkling – vad resan än bjuder på.",
    },
    reference: "Honeymoon adventures",
  },
  {
    id: "cocktails",
    emoji: "🍹",
    title: { en: "Bottomless cocktails", es: "Cocteles sin fin", sv: "Oändligt med drinkar" },
    description: {
      en: "Rounds of drinks with our feet in the sand.",
      es: "Rondas de bebidas con los pies en la arena.",
      sv: "Drinkar på drinkar med fötterna i sanden.",
    },
    reference: "Bottomless cocktails",
  },
  {
    id: "wine-fridge",
    emoji: "🍷",
    title: { en: "A wine fridge", es: "Una cava para vinos", sv: "Vinkyl" },
    description: {
      en: "So the good bottles are always at the right temperature when you visit.",
      es: "Para que las buenas botellas siempre estén a la temperatura perfecta cuando nos visites.",
      sv: "Så att de goda flaskorna alltid håller rätt temperatur när ni hälsar på.",
    },
    reference: "Wine fridge",
  },
  {
    id: "cat-tree",
    emoji: "🐈",
    title: { en: "A new cat tree for Hugo", es: "Un rascador nuevo para Hugo", sv: "Nytt katträd till Hugo" },
    description: {
      en: "The current one is more scratch than tree. Hugo deserves a penthouse.",
      es: "El actual ya es más rasguño que rascador. Hugo merece un penthouse.",
      sv: "Det nuvarande är mer klös än träd. Hugo förtjänar en takvåning.",
    },
    reference: "Cat tree for Hugo",
  },
];
