import { Resend } from "resend";
import type { ContactFormValues } from "./contact-form-schema";
import { getContactDeliveryMode } from "./contact-delivery";

export type SendContactEmailResult =
  | { ok: true; delivery: "test" | "sent" }
  | { ok: false; reason: "not_configured" | "send_failed" };

/** Delivers only after explicit configuration; mock mode never contacts Resend. */
export async function sendContactEmail(
  values: Pick<ContactFormValues, "name" | "purpose" | "email" | "message">
): Promise<SendContactEmailResult> {
  const mode = getContactDeliveryMode();

  if (mode === "mock") return { ok: true, delivery: "test" };
  if (mode !== "resend") return { ok: false, reason: "not_configured" };

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !from || !to) return { ok: false, reason: "not_configured" };

  try {
    const resend = new Resend(apiKey);
    const purposeLabel =
      values.purpose === "volunteer" ? "volunteer interest" : "general inquiry";
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `New ArtRX ${purposeLabel}`,
      text: `Purpose: ${purposeLabel}\nName: ${values.name}\nReply to: ${values.email}\n\n${values.message}`,
    });

    return error
      ? { ok: false, reason: "send_failed" }
      : { ok: true, delivery: "sent" };
  } catch {
    // Provider details and message content are deliberately not logged or returned.
    return { ok: false, reason: "send_failed" };
  }
}
