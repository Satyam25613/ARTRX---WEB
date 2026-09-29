"use client";

import { useState } from "react";
import { ContactForm } from "./ContactForm";
import styles from "./ContactExperience.module.css";

type ContactPurpose = "general" | "volunteer";

const purposes: Array<{
  value: ContactPurpose;
  number: string;
  title: string;
  description: string;
}> = [
  {
    value: "general",
    number: "01",
    title: "A general question",
    description: "Ask about ArtRX or its drawing prompts.",
  },
  {
    value: "volunteer",
    number: "02",
    title: "Volunteer interest",
    description: "Ask about volunteering or getting involved.",
  },
];

export function ContactExperience({ contactEmail }: { contactEmail: string }) {
  const [purpose, setPurpose] = useState<ContactPurpose>("general");

  return (
    <div className={styles.experience}>
      <fieldset className={styles.purposeChoices}>
        <legend className="visually-hidden">Choose a reason for your message</legend>
        {purposes.map((item) => (
          <label
            key={item.value}
            className={
              purpose === item.value
                ? `${styles.choice} ${styles.choiceSelected}`
                : styles.choice
            }
          >
            <input
              type="radio"
              name="contact-purpose"
              value={item.value}
              checked={purpose === item.value}
              onChange={() => setPurpose(item.value)}
            />
            <span className={styles.choiceNumber} aria-hidden="true">{item.number}</span>
            <span className={styles.choiceCopy}>
              <span className={styles.choiceTitle}>{item.title}</span>
              <span className={styles.choiceDescription}>{item.description}</span>
            </span>
            <span className={styles.choiceArrow} aria-hidden="true">
              {purpose === item.value ? "↘" : "↗"}
            </span>
          </label>
        ))}
      </fieldset>

      <ContactForm
        key={purpose}
        purpose={purpose}
        contactEmail={contactEmail}
      />
    </div>
  );
}
