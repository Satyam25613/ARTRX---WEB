import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About ArtRX",
  description:
    "Meet ArtRX founder Thanvi Suvva and learn about the illustrated drawing prompts behind the project.",
  alternates: { canonical: "/about-the-founder" },
};

export default function AboutFounderPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal>
        <section className={styles.founder} aria-labelledby="about-title">
          <div className={styles.founderCopy}>
            <p className={styles.eyebrow}>People behind ArtRX</p>
            <h1 id="about-title">Meet Thanvi Suvva.</h1>
            <p className={styles.lead}>
              ArtRX was founded by Thanvi Suvva, whose interests include art
              and science.
            </p>
            <Link href="/gallery" className={styles.action}>
              Explore the drawing prompts <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <figure className={styles.founderFigure}>
            <div className={styles.founderImage}>
              <Image
                src="/images/gallery/patient-artwork/process-sketching-pizza.jpg"
                alt="A drawing taking shape on an illustrated ArtRX prompt sheet, with art materials nearby."
                fill
                priority
                sizes="(min-width: 900px) 39vw, 100vw"
              />
            </div>
            <figcaption>A drawing taking shape on an ArtRX prompt.</figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.idea} aria-labelledby="idea-title">
          <div className={styles.ideaHeading}>
            <p className={styles.eyebrow}>The idea</p>
            <h2 id="idea-title">A prompt can open a conversation.</h2>
          </div>
          <div className={styles.ideaBody}>
            <p>
              ArtRX shares illustrated prompts and art activities with children
              facing medical circumstances and older adults in nursing homes.
              The pages begin with familiar subjects—family, favorite foods,
              animals, and memories—and leave room for each person to make the
              idea their own.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.team} aria-labelledby="team-title">
          <figure className={styles.teamFigure}>
            <div className={styles.teamImage}>
              <Image
                src="/images/team/jiley-diego.jpg"
                alt="Portrait of ArtRX team member Jiley Diego."
                fill
                sizes="(min-width: 900px) 31vw, 82vw"
              />
            </div>
            <figcaption>Jiley Diego · Student and artist</figcaption>
          </figure>

          <div className={styles.teamCopy}>
            <p className={styles.eyebrow}>ArtRX team</p>
            <h2 id="team-title">Jiley Diego</h2>
            <p className={styles.teamRole}>Student · Artist</p>
            <p className={styles.body}>
              Jiley is interested in the ways art and science can meet. Through
              her work with ArtRX, she hopes to share that interest through
              creative community work.
            </p>
            <Link href="/contact-us" className={styles.textLink}>
              Contact ArtRX <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
