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
- `when` is the date line under the title; `description` is shown when the
  card is expanded. The shuttle bus is also an option here so guests can sign up for it.
- `vote` (optional) shows quick-vote buttons on the card (the Teotihuacán
  balloon vote); picking one also ticks the card. The chosen option's `formValue` is sent as one
  more tick in the same "Activities" question, so it must exist there too.

### Sign-up form (Google Form, same trick as the song requests)

1. Create a Google Form with two questions:
   - Short answer: "Name"
   - Checkboxes: "Activities" with the options `Friday dinner`, `Shuttle`, `Xochimilco`, `Teotihuacan`, `Balloon: yes`, `Balloon: no` (must match `formValue` exactly; there is no "Other" option, so a value missing from the form can make the sign-up fail).
2. Open the form's public link, view page source, and find:
   - the `formResponse` action URL
   - the `entry.NNNNN` id of each question
3. Paste them into `activitiesForm` in `src/config/news.ts`.

The form is wired to the "Wedding activities" Google Form (ids filled in on 2026-10-25).
