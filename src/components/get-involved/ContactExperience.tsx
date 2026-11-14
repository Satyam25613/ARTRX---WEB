import { ContactForm } from "./ContactForm";
import styles from "./ContactExperience.module.css";

export function ContactExperience({ contactEmail }: { contactEmail: string }) {
  return (
    <div className={styles.experience}>
      <section aria-label="General inquiry form">
        <ContactForm purpose="general" contactEmail={contactEmail} />
      </section>
      <section aria-label="Volunteer interest form">
        <ContactForm purpose="volunteer" contactEmail={contactEmail} />
      </section>
    </div>
  );
}
