import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactExperience } from "@/components/get-involved/ContactExperience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ArtRX with a question about the project, its prompt sheets, or getting involved.",
  alternates: { canonical: "/contact-us" },
};

const CONTACT_EMAIL = "artrx39@gmail.com";

export default function ContactPage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.contactCopy}>
          <p className={styles.eyebrow}>A note to ArtRX</p>
          <h1 id="contact-title">Start with a note.</h1>
          <p className={styles.lead}>
            A question, an idea, or interest in volunteering can begin here.
          </p>
        </div>
        <div className={styles.contactAside}>
          <div className={styles.artworkFrame}>
            <Image
              src="/images/generated/artmaking-study-ochre-2026-09-29.webp"
              alt="AI-generated still life of watercolor paper, a ceramic palette, a brush, and pencils in ochre and blue tones."
              fill
              loading="eager"
              sizes="(min-width: 900px) 26vw, 88vw"
            />
          </div>
          <p>AI-generated visual study · Not an ArtRX prompt sheet or session.</p>
          <Link href="/gallery" className={styles.textLink}>
            First, explore the gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.formsSection} aria-labelledby="forms-title">
        <div className={styles.formsHeader}>
          <div>
            <p className={styles.eyebrow}>Choose a starting point</p>
            <h2 id="forms-title">What would you like to ask?</h2>
          </div>
          <p>
            Pick the option that fits best. You’ll only see the fields for that
            message. In this preview, a prepared email is offered for you to
            review and send.
          </p>
        </div>

        <div className={styles.formsLayout}>
          <aside className={styles.privacyAside} aria-label="A note about privacy">
            <span className={styles.privacyMark} aria-hidden="true">i</span>
            <div>
              <h3>Keep personal health details out</h3>
              <p>
                Please don’t include patient names, diagnoses, treatment details,
                or other private health information in a message.
              </p>
            </div>
          </aside>
          <div className={styles.contactExperience}>
            <ContactExperience contactEmail={CONTACT_EMAIL} />
          </div>
        </div>

        <div className={styles.contactNotes}>
          <p className={styles.addressLine}>
            Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p className={styles.deliveryNote}>
            This address appears on the current ArtRX website. In this review
            preview, the form may open a prepared email for you to check and
            send. The address and who reads it still need Thanvi’s confirmation.
          </p>
        </div>
      </section>
    </div>
  );
}
