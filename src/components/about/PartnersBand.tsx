import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PRIMARY_TESTIMONIAL } from "@/content/testimonials";
import { PARTNER_CONTACTS } from "@/content/partners";
import styles from "./PartnersBand.module.css";

export function PartnersBand() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Partners"
          title="Trusted by Medical Professionals"
          description="ArtRX works alongside physicians and community partners who see the impact of this work firsthand."
        />

        <Reveal>
          <blockquote className={styles.quoteCard}>
            <div className={styles.quoteCore}>
              <p className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </p>
              <p className={styles.quote}>{PRIMARY_TESTIMONIAL.quote}</p>
              <footer className={styles.attribution}>
                <span className={styles.name}>{PRIMARY_TESTIMONIAL.name}</span>
                <span className={styles.credential}>{PRIMARY_TESTIMONIAL.credential}</span>
              </footer>
            </div>
          </blockquote>
        </Reveal>

        <div className={styles.contacts}>
          {PARTNER_CONTACTS.map((contact, index) => (
            <Reveal key={contact.id} delay={index * 80}>
              <div className={styles.contactCard}>
                <p className={styles.contactName}>{contact.name}</p>
                <p className={styles.contactRole}>{contact.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
