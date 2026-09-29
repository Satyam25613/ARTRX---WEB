"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT_MESSAGE_LIMIT } from "@/lib/constants";
import { contactFormSchema } from "@/lib/contact-form-schema";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "submitting" | "sent" | "test" | "draft" | "invalid" | "error";
type FieldName = "name" | "email" | "message";
type ContactPurpose = "general" | "volunteer";

const formCopy = {
  general: {
    label: "General inquiry",
    title: "Ask about ArtRX",
    intro: "Use this form for a question about the project or its drawing prompts.",
    messageLabel: "Your question",
    submit: "Send a question",
    subject: "ArtRX general inquiry",
  },
  volunteer: {
    label: "Volunteer interest",
    title: "Ask about getting involved",
    intro: "Tell us a little about your interest in volunteering with ArtRX.",
    messageLabel: "Your interest or question",
    submit: "Send volunteer inquiry",
    subject: "ArtRX volunteer inquiry",
  },
} satisfies Record<ContactPurpose, {
  label: string;
  title: string;
  intro: string;
  messageLabel: string;
  submit: string;
  subject: string;
}>;

function makeDraftHref(contactEmail: string, values: {
  name: string;
  email: string;
  message: string;
  purpose: ContactPurpose;
}) {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Purpose: ${values.purpose === "volunteer" ? "Volunteer interest" : "General inquiry"}`,
    "",
    values.message,
  ].join("\n");
  return `mailto:${contactEmail}?subject=${encodeURIComponent(formCopy[values.purpose].subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({
  purpose,
  contactEmail,
}: {
  purpose: ContactPurpose;
  contactEmail: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [draftHref, setDraftHref] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const copy = formCopy[purpose];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const parsed = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      purpose,
      company: formData.get("company"),
    });

    if (!parsed.success) {
      const errors: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if ((field === "name" || field === "email" || field === "message") && !errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      setStatus("invalid");
      if (errors.name) nameRef.current?.focus();
      else if (errors.email) emailRef.current?.focus();
      else messageRef.current?.focus();
      return;
    }

    setFieldErrors({});

    if (parsed.data.company?.trim()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; reason?: string; delivery?: string }
        | null;

      if (response.ok && result?.ok) {
        setStatus(result.delivery === "test" ? "test" : "sent");
        form.reset();
        return;
      }

      if (result?.reason === "not_configured") {
        setDraftHref(makeDraftHref(contactEmail, parsed.data));
        setStatus("draft");
      } else {
        setDraftHref(makeDraftHref(contactEmail, parsed.data));
        setStatus("error");
      }
    } catch {
      setDraftHref(makeDraftHref(contactEmail, parsed.data));
      setStatus("error");
    }
  }

  if (status === "sent" || status === "test") {
    return (
      <div className={styles.successBanner} role="status" aria-live="polite">
        <span className={styles.successMark} aria-hidden="true">✓</span>
        <p>
          {status === "test"
            ? "Test submission complete. No email was sent."
            : "Your message was sent."}
        </p>
      </div>
    );
  }

  return (
    <form
      id={`${purpose}-form`}
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${purpose}-form-title`}
    >
      <div className={styles.formHeading}>
        <p className={styles.formLabel}>{copy.label}</p>
        <h2 id={`${purpose}-form-title`}>{copy.title}</h2>
        <p className={styles.formIntro}>{copy.intro}</p>
        <p className={styles.requiredNote}>All fields are required.</p>
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${purpose}-company`}>Company</label>
        <input
          id={`${purpose}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={`${styles.group} ${styles.inlineField}`}>
        <label htmlFor={`${purpose}-name`}>Your name</label>
        <input
          id={`${purpose}-name`}
          ref={nameRef}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={styles.control}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? `${purpose}-name-error` : undefined}
        />
        {fieldErrors.name ? (
          <p className={styles.fieldError} id={`${purpose}-name-error`}>
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className={`${styles.group} ${styles.inlineField}`}>
        <label htmlFor={`${purpose}-email`}>Your email address</label>
        <input
          id={`${purpose}-email`}
          ref={emailRef}
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          required
          maxLength={254}
          className={styles.control}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? `${purpose}-email-error` : undefined}
        />
        {fieldErrors.email ? (
          <p className={styles.fieldError} id={`${purpose}-email-error`}>
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className={`${styles.group} ${styles.fullWidth}`}>
        <label htmlFor={`${purpose}-message`}>{copy.messageLabel}</label>
        <textarea
          id={`${purpose}-message`}
          ref={messageRef}
          name="message"
          rows={5}
          required
          maxLength={CONTACT_MESSAGE_LIMIT}
          className={styles.control}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message
              ? `${purpose}-message-error`
              : `${purpose}-message-help`
          }
        />
        {fieldErrors.message ? (
          <p className={styles.fieldError} id={`${purpose}-message-error`}>
            {fieldErrors.message}
          </p>
        ) : (
          <p className={styles.helpText} id={`${purpose}-message-help`}>
            Up to {CONTACT_MESSAGE_LIMIT} characters.
          </p>
        )}
      </div>

      {status === "draft" ? (
        <div className={styles.draftBanner} role="status" aria-live="polite">
          <p>
            Direct message sending is not available here. Open the
            prepared email draft, review it, and press Send to finish.
          </p>
          <a href={draftHref}>Open email draft <span aria-hidden="true">↗</span></a>
        </div>
      ) : null}
      {status === "invalid" ? (
        <p className={styles.fieldSummary} role="alert">
          Check the highlighted fields and try again.
        </p>
      ) : null}
      {status === "error" ? (
        <p className={styles.noticeBanner} role="alert">
          The site could not send your message. You can open a prepared email
          draft instead: <a href={draftHref}>review and send your message</a>.
        </p>
      ) : null}

      <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
        {status === "submitting" ? "Sending your message." : ""}
      </p>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : copy.submit}
        <span aria-hidden="true">↗</span>
      </button>

    </form>
  );
}
