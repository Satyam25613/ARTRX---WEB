import { z } from "zod";
import { CONTACT_MESSAGE_LIMIT } from "./constants";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Enter your name.")
    .max(100, "Keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address so the team can reply.")
    .email("Enter a valid email address.")
    .max(254, "That email address is too long."),
  message: z
    .string()
    .trim()
    .min(1, "Add a short question.")
    .max(CONTACT_MESSAGE_LIMIT, `Keep your question under ${CONTACT_MESSAGE_LIMIT} characters.`),
  purpose: z.enum(["general", "volunteer"]),
  // Honeypot: real visitors do not see or fill this field.
  company: z.string().max(200).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
