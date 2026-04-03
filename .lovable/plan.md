

## RSVP: Submit Without Leaving the Website

### Approach
Submit directly to Google Forms in the background using a `fetch` POST request (no-cors mode) to the `formResponse` endpoint. The user never leaves the page. We also add a required email field for identification instead of requiring Google login.

**Important**: You will need to disable "Require sign-in" in your Google Form settings (Settings > Responses > uncheck "Limit to 1 response" and "Collect email addresses" if they force login). The email will be collected by our custom form instead.

### Changes

**1. RSVPSection.tsx**
- Change submission from `window.open(prefilled URL)` to a background `fetch` POST to `https://docs.google.com/forms/d/e/.../formResponse`
- Add a new **email field** (required) at the top of the form — mapped to an existing or new Google Form entry ID
- Show a success confirmation inline (no redirect, no "complete in new tab" messaging)
- Add loading state during submission
- Remove the "redirect note" text and "almost done / complete in tab" messaging

**2. LanguageContext.tsx**
- Add translation strings for the email field (label, placeholder, validation error)
- Update success message to a simple "Thank you! Your RSVP has been received"
- Remove redirect-related strings

### Technical Detail
- The `fetch` uses `mode: 'no-cors'` — Google Forms doesn't return CORS headers, so the response is opaque. We treat a completed request as success.
- If the form currently requires sign-in, background POST will fail silently. The user must disable that setting in Google Forms.
- Email field needs a corresponding `entry.XXXXXXX` ID from the Google Form. I'll visit the form to find or you may need to add an email question to the form and share the new entry ID.

