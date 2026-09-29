export type ContactDeliveryMode = "disabled" | "mock" | "resend";

/**
 * Contact delivery remains closed unless the sender, recipient, provider, and
 * an explicit client approval flag are all configured. Mock mode never sends.
 */
export function getContactDeliveryMode(): ContactDeliveryMode {
  const configuredMode = process.env.CONTACT_DELIVERY_MODE?.trim().toLowerCase();

  if (configuredMode === "mock") return "mock";

  const liveDeliveryReady =
    configuredMode === "resend" &&
    process.env.CONTACT_LIVE_DELIVERY_APPROVED?.trim().toLowerCase() === "true" &&
    Boolean(process.env.RESEND_API_KEY?.trim()) &&
    Boolean(process.env.RESEND_FROM_EMAIL?.trim()) &&
    Boolean(process.env.CONTACT_TO_EMAIL?.trim());

  return liveDeliveryReady ? "resend" : "disabled";
}
