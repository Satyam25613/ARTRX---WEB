import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  FOUNDER_NAME,
  FOUNDER_ROLE,
  FOUNDER_INTRO,
  FOUNDER_BIO,
  FOUNDER_CREDENTIALS,
} from "@/content/founder";
import styles from "./FounderBio.module.css";

export function FounderBio() {
  return (
    <section className={styles.section} aria-labelledby="founder-bio-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.card}>
              <div className={styles.cardCore}>
                <p className={styles.cardName}>{FOUNDER_NAME}</p>
                <p className={styles.cardRole}>{FOUNDER_ROLE}</p>
                <p className={styles.cardNote}>
                  Jericho High School Junior, passionate about the intersection of
                  scientific research, medicine, and therapeutic art.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h1 id="founder-bio-heading" className={styles.title}>
                About the Founder
              </h1>
              <p className={styles.body}>{FOUNDER_INTRO}</p>
              <p className={styles.body}>{FOUNDER_BIO}</p>
              <ul className={styles.credentials}>
                {FOUNDER_CREDENTIALS.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
