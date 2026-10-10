# Gift contributions page (`/gifts`)

A page where guests pick something to contribute towards (honeymoon dinner,
SodaStream, plants, ...) and pay via Swish, Wise, a Mexican bank transfer or
PayPal. There is no backend: guests pay directly to us with a reference
message like `Honeymoon dinner - Anna`, and we match payments afterwards in
the Swish / Wise / bank / PayPal history.

## Everything to edit lives in one file

`src/config/gifts.ts`

- `payment` – Swish number, Wise pay link + Wisetag, Mexican CLABE, PayPal.Me
  handle. All values are currently **placeholders marked `TODO`**.
- `MXN_PER_SEK` – rough rate used only to show equivalent suggested amounts.
- `giftItems` – the list of things to contribute towards, with trilingual
  title/description, a short `reference` used in the payment message, and
  suggested amounts in SEK.

Page copy (intro, button labels, help texts) is in the `gifts` block of
`src/contexts/LanguageContext.tsx`, in all three languages.

## Setting up the payment methods

### Swish (Swedish guests)
Nothing to set up beyond having Swish on a Swedish phone number. Put the
number (without +46, e.g. `0701234567`) in `payment.swish.number`.

The page shows a pre-filled Swish QR code (number, amount and message) and,
on phones, an "Open Swish" button that deep-links into the app. Both leave
amount and message editable so guests can adjust them.

### Wise (Mexican and other international guests)
1. Open a Wise account (personal is fine) and add a SEK or EUR balance.
2. Turn on **Wisetag** (Profile → Wisetag) to get `@yourname` and a
   `https://wise.com/pay/me/yourname` link.
3. Put both in `payment.wise`.

Guests who open the link can pay by card or local bank transfer in MXN
without having a Wise account. Wise shows the payer's name, which is why the
page also asks guests to put their name in the message.

### Mexican bank transfer (SPEI)
For guests who prefer a plain transfer from their Mexican bank. Needs a
Mexican account (one of you or a family member). Put holder name, bank and
the 18-digit CLABE in `payment.bankMx`. If you don't want this option, delete
the `bank` tab in `src/components/gifts/ContributeDialog.tsx`.

### PayPal
Create a PayPal.Me link (paypal.me → Create your PayPal.Me) and put the
handle in `payment.paypal.handle`. The page builds links like
`paypal.me/handle/500MXN` so the amount is pre-filled. Note PayPal takes a
fee on "goods and services" payments; guests can choose "friends and family"
where available.

## How the message / reference works
Every tab shows the same copyable message built as
`<item.reference> - <guest name>`. Swish and the SPEI "concepto" carry it
directly; Wise and PayPal show the payer name anyway, and the message is a
fallback if the guest adds it in the payment note.

## Known limitations of this proof of concept
- No tracking or progress bars; it's an honor system.
- The MXN amounts are approximate (fixed rate in the config).
- The language choice is now persisted in `localStorage` so it survives
  navigating between `/` and `/gifts`.
