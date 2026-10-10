/**
 * Helpers for Swish pre-filled payments.
 *
 * QR format (Swish "C" code, scannable with the Swish app's QR reader):
 *   C<payee>;<amount>;<message>;<lock>
 * where <lock> is a bit mask (1 = amount locked, 2 = message locked,
 * 4 = payee locked). We leave everything editable (0) so guests can adjust.
 *
 * Deep link format (opens the Swish app directly on a phone):
 *   swish://payment?data=<url-encoded JSON>
 * Documented by Swish for merchants; works for private numbers too.
 */

const sanitizeMessage = (message: string) =>
  // Swish messages: max 50 chars, no semicolons (QR separator).
  message.replace(/;/g, ",").slice(0, 50);

export const swishQrPayload = (payee: string, amount: number | "", message: string) =>
  `C${payee};${amount === "" ? "" : amount};${sanitizeMessage(message)};0`;

export const swishDeepLink = (payee: string, amount: number | "", message: string) => {
  const data = {
    version: 1,
    payee: { value: payee, editable: false },
    amount: { value: amount === "" ? 0 : amount, editable: true },
    message: { value: sanitizeMessage(message), editable: true },
  };
  return `swish://payment?data=${encodeURIComponent(JSON.stringify(data))}`;
};

export const isMobile = () =>
  typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
