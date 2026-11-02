/**
 * Helpers for Swish pre-filled payments.
 *
 * QR format (Swish "C" code, scannable with the Swish app's QR reader):
 *   C<payee>;<amount>;<message>;<lock>
 * where <lock> is a bit mask (1 = amount locked, 2 = message locked,
 * 4 = payee locked). We leave everything editable (0) so guests can adjust.
 *
 * App link (opens the Swish app on a phone), per Swish's "Generate QR codes" spec:
 *   https://app.swish.nu/1/p/sw/?sw=<payee>&amt=<amount>&msg=<message>&edit=amt,msg
 * amt/msg are locked unless named in `edit`. On Android the https link only
 * opens the app if link verification is on, otherwise it shows a download
 * page, so there we wrap it in an intent:// URL that names the Swish package.
 */

const sanitizeMessage = (message: string) =>
  // Swish messages: max 50 chars, no semicolons (QR separator).
  message.replace(/;/g, ",").slice(0, 50);

export const swishQrPayload = (payee: string, amount: number | "", message: string) =>
  `C${payee};${amount === "" ? "" : amount};${sanitizeMessage(message)};0`;

// The app link wants the international form: 0701234567 -> 46701234567.
const toInternational = (payee: string) => payee.replace(/[\s-]/g, "").replace(/^\+?0?(?=7)/, "46");

export const swishAppLink = (payee: string, amount: number | "", message: string) => {
  const params = [`sw=${toInternational(payee)}`];
  // Empty amt is not allowed; leaving it out keeps the field open.
  if (amount !== "" && amount > 0) params.push(`amt=${amount.toFixed(2)}`);
  const msg = sanitizeMessage(message).trim();
  if (msg) params.push(`msg=${encodeURIComponent(msg)}`);
  params.push("edit=amt,msg");
  return `https://app.swish.nu/1/p/sw/?${params.join("&")}`;
};

export const swishDeepLink = (payee: string, amount: number | "", message: string) => {
  const link = swishAppLink(payee, amount, message);
  if (!isAndroid()) return link;
  const rest = link.replace(/^https:\/\//, "");
  return `intent://${rest}#Intent;scheme=https;package=se.bankgirot.swish;S.browser_fallback_url=${encodeURIComponent(link)};end`;
};

const isAndroid = () => typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);

export const isMobile = () =>
  typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
