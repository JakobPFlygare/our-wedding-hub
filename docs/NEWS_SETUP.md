# "What's new" sections: toastmasters + activities

Both live on the main page under the `#news` anchor (the "What's new" menu
entry, which replaced RSVP). Everything to edit is in `src/config/news.ts`;
page copy is in the `toastmasters` and `activities` blocks of
`src/contexts/LanguageContext.tsx`.

## Toastmasters

- Names, phone numbers and which buttons to show (Text / WhatsApp) are in
  `toastmasters`. `phoneE164` is digits only with country code and feeds the
  `tel:`, `sms:` and `wa.me` links.
- `role` is an optional one-liner under the name per language; empty hides it.
- Photos go in `public/toastmasters/` (`jesper.jpg`, `dhamar.jpg`). Square
  crops around 600×600 look best; the page shows them in a circle. If a file
  is missing the card falls back to initials.

## Activities

- The list is `activities` (emoji, trilingual title + description, and
  `formValue`, the exact option text in the Google Form).
- Dates/times are not shown yet; the page says "to be confirmed". When known,
  add them to the description text.

### Sign-up form (Google Form, same trick as the song requests)

1. Create a Google Form with two questions:
   - Short answer: "Name"
   - Checkboxes: "Activities" with the options `Xochimilco`, `Teotihuacan`,
     `Tepoztlan` (must match `formValue` exactly).
2. Open the form's public link, view page source, and find:
   - the `formResponse` action URL
   - the `entry.NNNNN` id of each question
3. Paste them into `activitiesForm` in `src/config/news.ts`.

Until this is done the form still "succeeds" in the browser (the request is
sent with `no-cors` so failures are invisible) but nothing is recorded. Do
this before going live.
