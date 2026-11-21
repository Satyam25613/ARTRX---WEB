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
            Whether you&apos;re curious about the prompts or looking for a way to
            help, this is a good place to begin.
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
            <p className={styles.eyebrow}>A single place to reach ArtRX</p>
            <h2 id="forms-title">What would you like to talk about?</h2>
          </div>
          <p>
            Choose what you&apos;d like to share. You can switch at any time. If
            direct sending isn&apos;t available, your email app will open a draft to
            review.
          </p>
        </div>

        <div className={styles.formsLayout}>
          <div className={styles.contactExperience}>
            <ContactExperience contactEmail={CONTACT_EMAIL} />
          </div>
        </div>

        <div className={styles.contactNotes}>
          <p className={styles.addressLine}>
            <span>Prefer email?</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p className={styles.deliveryNote}>
            A prepared email opens for you to review and send.
          </p>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
