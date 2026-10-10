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
    number: "0701234567", // TODO replace
    holder: "Jakob Flygare", // name guests will see in the Swish app
  },
  /** Wise (international guests). A wise.com/pay link or Wisetag. */
  wise: {
    payLink: "https://wise.com/pay/me/pauandjakob", // TODO replace
    tag: "@pauandjakob", // TODO replace
    holder: "Jakob Flygare",
  },
  /** PayPal.Me handle (no @). */
  paypal: {
    handle: "pauandjakob", // TODO replace
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

/** Suggested amounts are rounded to a "nice" step per currency. */
const roundStep: Record<Currency, number> = { SEK: 50, MXN: 50, USD: 5 };

export const convert = (amount: number, from: Currency, to: Currency): number =>
  from === to ? amount : Math.round((amount / perSek[from]) * perSek[to]);

/** Convert a SEK suggestion into a nicely rounded amount in `to`. */
export const suggestIn = (amountSek: number, to: Currency): number => {
  const raw = amountSek * perSek[to];
  return Math.max(roundStep[to], Math.round(raw / roundStep[to]) * roundStep[to]);
};

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
  /** Suggested amounts in SEK. Other currencies are derived with `perSek`. */
  amountsSek: number[];
  /** Hide the amount chips and let guests pick freely. */
  openAmount?: boolean;
}

export const giftItems: GiftItem[] = [
  {
    id: "honeymoon-dinner",
    emoji: "🍽️",
    title: { en: "A dinner on our honeymoon", es: "Una cena en nuestra luna de miel", sv: "En middag på smekmånaden" },
    description: {
      en: "Treat us to a candle-lit dinner somewhere we'll remember forever.",
      es: "Invítanos a una cena a la luz de las velas en un lugar que recordaremos siempre.",
      sv: "Bjud oss på en middag i levande ljus någonstans vi aldrig glömmer.",
    },
    reference: "Honeymoon dinner",
    amountsSek: [300, 600, 1000],
  },
  {
    id: "honeymoon-night",
    emoji: "🏝️",
    title: { en: "A night on the honeymoon", es: "Una noche de luna de miel", sv: "En natt på smekmånaden" },
    description: {
      en: "Help cover a night somewhere special on our trip.",
      es: "Ayúdanos a cubrir una noche en un lugar especial durante el viaje.",
      sv: "Hjälp oss med en natt på ett speciellt ställe under resan.",
    },
    reference: "Honeymoon night",
    amountsSek: [500, 1000, 2000],
  },
  {
    id: "cocktails",
    emoji: "🍹",
    title: { en: "Sunset cocktails", es: "Cocteles al atardecer", sv: "Drinkar i solnedgången" },
    description: {
      en: "A round of drinks with our feet in the sand.",
      es: "Una ronda de bebidas con los pies en la arena.",
      sv: "En runda drinkar med fötterna i sanden.",
    },
    reference: "Sunset cocktails",
    amountsSek: [150, 300, 500],
  },
  {
    id: "soda-stream",
    emoji: "🫧",
    title: { en: "A new SodaStream", es: "Una SodaStream nueva", sv: "En ny SodaStream" },
    description: {
      en: "Ours has seen better days. Keep the bubbles flowing in the new apartment.",
      es: "La nuestra ya vivió sus mejores días. Que no falten las burbujas en el nuevo depa.",
      sv: "Vår har sett bättre dagar. Håll bubblorna igång i nya lägenheten.",
    },
    reference: "SodaStream",
    amountsSek: [200, 500, 1200],
  },
  {
    id: "espresso",
    emoji: "☕",
    title: { en: "Espresso machine", es: "Máquina de espresso", sv: "Espressomaskin" },
    description: {
      en: "Good coffee is non-negotiable in a Mexican-Swedish household.",
      es: "El buen café no se negocia en una casa mexicano-sueca.",
      sv: "Gott kaffe är icke förhandlingsbart i ett mexikansk-svenskt hem.",
    },
    reference: "Espresso machine",
    amountsSek: [300, 700, 1500],
  },
  {
    id: "plants",
    emoji: "🪴",
    title: { en: "Plants for the apartment", es: "Plantas para el depa", sv: "Växter till lägenheten" },
    description: {
      en: "Turn our balcony into a tiny jungle (we promise to water them).",
      es: "Convierte nuestro balcón en una pequeña selva (prometemos regarlas).",
      sv: "Gör vår balkong till en liten djungel (vi lovar att vattna).",
    },
    reference: "Plants",
    amountsSek: [150, 300, 600],
  },
  {
    id: "dinner-table",
    emoji: "🪑",
    title: { en: "A dinner table for friends", es: "Una mesa para cenar con amigos", sv: "Ett matbord för vänner" },
    description: {
      en: "So we can host you properly when you visit.",
      es: "Para recibirte como se debe cuando nos visites.",
      sv: "Så vi kan bjuda hem er ordentligt när ni hälsar på.",
    },
    reference: "Dinner table",
    amountsSek: [500, 1000, 2500],
  },
  {
    id: "surprise",
    emoji: "🎁",
    title: { en: "Surprise us", es: "Sorpréndenos", sv: "Överraska oss" },
    description: {
      en: "Any amount, towards whatever we need most. Thank you!",
      es: "Cualquier cantidad, para lo que más necesitemos. ¡Gracias!",
      sv: "Valfritt belopp till det vi behöver mest. Tack!",
    },
    reference: "Wedding gift",
    amountsSek: [],
    openAmount: true,
  },
];
