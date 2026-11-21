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
            <p className={styles.eyebrow}>ArtRX founder</p>
            <h1 id="about-title">Meet Thanvi Suvva.</h1>
            <p className={styles.lead}>
              ArtRX began with Thanvi Suvva&apos;s interests in art and science, and
              a simple idea: a familiar question can help someone begin. Her
              illustrated prompts give children in hospitals and older adults
              in nursing homes room to draw, remember, and imagine.
            </p>
            <Link href="/gallery" className={styles.action}>
              Explore the drawing prompts <span aria-hidden="true">↗</span>
            </Link>
          </div>

        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.idea} aria-labelledby="idea-title">
          <div className={styles.ideaHeading}>
            <p className={styles.eyebrow}>The idea</p>
            <h2 id="idea-title">A prompt is an invitation, not an instruction.</h2>
          </div>
          <div className={styles.ideaBody}>
            <p>
              A favorite food, a family, a place you remember. Each prompt
              starts with something familiar and leaves space for the artist&apos;s
              own answer. It might be a drawing, a few colors, or simply a page
              that feels theirs. There is no right way to make art here.
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
              Jiley is a student and artist curious about gene editing,
              regenerative medicine, and biotechnology. She wonders how these
              ideas may shape the future of care and brings that curiosity to
              ArtRX&apos;s community outreach and art.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className={styles.team} aria-labelledby="zander-title">
          <figure className={styles.teamFigure}>
            <div className={styles.teamImage}>
              <Image
                src="/images/team/zander.jpg"
                alt="Portrait of ArtRX team member Zander."
                fill
                sizes="(min-width: 900px) 31vw, 82vw"
              />
            </div>
            <figcaption>Zander · Student and artist</figcaption>
          </figure>

          <div className={styles.teamCopy}>
            <p className={styles.eyebrow}>ArtRX team</p>
            <h2 id="zander-title">Zander</h2>
            <p className={styles.teamRole}>Student · Artist</p>
            <p className={styles.body}>
              Zander is a student and artist interested in animal behavior and
              the challenges animals face. He believes art can bring joy in
              hard times, and that care should extend to animals as well as
              people.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.contactPanel} aria-labelledby="contact-panel-title">
          <div className={styles.contactPanelCopy}>
            <p className={styles.eyebrow}>Contact ArtRX</p>
            <h2 id="contact-panel-title">Have a question or want to get involved?</h2>
            <p className={styles.contactPanelText}>
              Whether you have a question or want to lend a hand, there is room
              for both on the contact page.
            </p>
          </div>
          <Link href="/contact-us" className={styles.contactPanelAction}>
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
