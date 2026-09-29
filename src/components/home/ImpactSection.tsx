import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ImpactSection.module.css";

export function ImpactSection() {
  return (
    <section className={styles.section} aria-labelledby="impact-heading">
      <Container>
        <Reveal>
          <div className={styles.panel}>
            <p className={styles.eyebrow}>Why It Matters</p>
            <h2 id="impact-heading" className={styles.title}>
              Long hospital stays can be lonely. Drawing gives that time somewhere to go.
            </h2>
            <p className={styles.body}>
              Children and seniors in long-term care often go long stretches without
              visitors, and the days can start to feel defined by the hospital or
              nursing-home setting around them. A simple prompt — draw your family,
              your favorite food, a memory you love — gives someone a few minutes to
              think about something else entirely, and a small, personal piece of
              paper that&apos;s entirely their own.
            </p>
            <p className={styles.note}>
              ArtRX is a new, volunteer-run initiative — we&apos;ll share real numbers
              here as our reach grows.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
