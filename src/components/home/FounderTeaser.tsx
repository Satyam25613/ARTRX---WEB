import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  FOUNDER_NAME,
  FOUNDER_ROLE,
  FOUNDER_INTRO,
  FOUNDER_CREDENTIALS,
} from "@/content/founder";
import styles from "./FounderTeaser.module.css";

export function FounderTeaser() {
  return (
    <section className={styles.section} aria-labelledby="founder-heading">
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.card}>
              <div className={styles.cardCore}>
                <p className={styles.cardName}>{FOUNDER_NAME}</p>
                <p className={styles.cardRole}>{FOUNDER_ROLE}</p>
                <p className={styles.cardNote}>
                  Jericho High School junior, researcher, and artist.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className={styles.eyebrow}>The Founder</p>
              <h2 id="founder-heading" className={styles.title}>
                Meet {FOUNDER_NAME}
              </h2>
              <p className={styles.body}>{FOUNDER_INTRO}</p>
              <ul className={styles.credentials}>
                {FOUNDER_CREDENTIALS.slice(0, 2).map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
              <Link href="/about" className={styles.link}>
                Read her full story
                <span className={styles.linkChip} aria-hidden="true">
                  <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
