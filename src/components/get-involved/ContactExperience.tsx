"use client";

import { useState } from "react";
import { ContactForm, type ContactFormValues, type ContactPurpose } from "./ContactForm";
import styles from "./ContactExperience.module.css";

const purposes: Array<{
  value: ContactPurpose;
  title: string;
  description: string;
}> = [
  {
    value: "general",
    title: "A question about ArtRX",
    description: "Ask about the project or its drawing prompts.",
  },
  {
    value: "volunteer",
    title: "Getting involved",
    description: "Share your interest in volunteering with ArtRX.",
  },
];

const emptyValues: ContactFormValues = { name: "", email: "", message: "" };

export function ContactExperience({ contactEmail }: { contactEmail: string }) {
  const [purpose, setPurpose] = useState<ContactPurpose>("general");
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.experience}>
      <fieldset className={styles.purposePicker} disabled={isSubmitting}>
        <legend>What would you like to get in touch about?</legend>
        <div className={styles.purposeChoices}>
          {purposes.map((option) => {
            const selected = purpose === option.value;

            return (
              <label
                className={`${styles.purposeChoice} ${selected ? styles.selected : ""}`}
                key={option.value}
              >
                <input
                  type="radio"
                  name="contact-purpose"
                  value={option.value}
                  checked={selected}
                  onChange={() => setPurpose(option.value)}
                />
                <span className={styles.choiceMark} aria-hidden="true" />
                <span className={styles.choiceCopy}>
                  <span className={styles.choiceTitle}>{option.title}</span>
                  <span className={styles.choiceDescription}>{option.description}</span>
                </span>
                <span className={styles.choiceArrow} aria-hidden="true">↗</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className={styles.formArea} aria-busy={isSubmitting}>
        <ContactForm
          key={purpose}
          purpose={purpose}
          contactEmail={contactEmail}
          values={values}
          onValuesChange={setValues}
          onBusyChange={setIsSubmitting}
        />
      </div>
    </div>
  );
}
