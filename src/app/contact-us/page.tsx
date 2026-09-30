import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactExperience } from "@/components/get-involved/ContactExperience";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ArtRX with a question about the project or to ask about volunteering.",
  alternates: { canonical: "/contact-us" },
};

const CONTACT_EMAIL = "artrx39@gmail.com";

export default function ContactPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal><section className={styles.contact} aria-labelledby="contact-title">
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
              alt="Watercolor paper, a ceramic palette, a brush, and pencils in ochre and blue tones."
              fill
              loading="eager"
              sizes="(min-width: 900px) 26vw, 88vw"
            />
          </div>
          <Link href="/gallery" className={styles.textLink}>
            First, explore the gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      </Reveal>

      <Reveal delay={60}><section className={styles.formsSection} aria-labelledby="forms-title">
        <div className={styles.formsHeader}>
          <div>
            <p className={styles.eyebrow}>Choose a starting point</p>
            <h2 id="forms-title">What would you like to ask?</h2>
          </div>
          <p>
            Pick the option that fits best. You’ll only see the fields for that
            message. If direct sending is unavailable, use the prepared email
            link to open your email app and send it there.
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
            If your email app does not open, you can write to this address
            directly. Please leave patient names, diagnoses, and other private
            health details out of your message.
          </p>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
