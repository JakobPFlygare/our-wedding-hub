/**
 * Helpers for Swish pre-filled payments.
 *
 * QR format (Swish "C" code, scannable with the Swish app's QR reader):
 *   C<payee>;<amount>;<message>;<lock>
 * where <lock> is a bit mask (1 = amount locked, 2 = message locked,
 * 4 = payee locked). We leave everything editable (0) so guests can adjust.
 *
 * There is no tap-to-open link: tested on iPhone (2026-11), both the old
 * swish://payment?data=... link and Swish's documented
 * https://app.swish.nu/1/p/sw/?sw=... link (even with only `sw`) open the
 * app with "the link has an incorrect format". Phone users copy the number
 * and message instead.
 */

const sanitizeMessage = (message: string) =>
  // Swish messages: max 50 chars, no semicolons (QR separator).
  message.replace(/;/g, ",").slice(0, 50);

export const swishQrPayload = (payee: string, amount: number | "", message: string) =>
  `C${payee};${amount === "" ? "" : amount};${sanitizeMessage(message)};0`;
