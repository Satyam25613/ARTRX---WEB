import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ArtRX | Illustrated drawing prompts",
  description:
    "Explore ArtRX’s illustrated drawing prompts, art activities, gallery, and story.",
  alternates: { canonical: "/" },
};

const COLLECTION = [
  {
    label: "Drawing in progress",
    title: "Coloring a favorite-food prompt",
    detail: "A prompt page being filled in with color.",
    src: "/images/gallery/patient-artwork/process-coloring-favorite-food.jpg",
    alt: "Hands coloring an ArtRX favorite-food prompt sheet, with colored pencils nearby.",
    kind: "process",
  },
  {
    label: "Prompt sheet",
    title: "What's your favorite food?",
    detail: "An illustrated prompt with room to draw.",
    src: "/images/gallery/guided-templates/template-favorite-food.jpg",
    alt: "Blank illustrated ArtRX prompt sheet asking what your favorite food is.",
    kind: "prompt",
  },
  {
    label: "Completed drawing",
    title: "A favorite food, in color",
    detail: "A drawing shown on its original prompt sheet.",
    src: "/images/gallery/patient-artwork/oriented/artwork-pizza-drawing.jpg",
    alt: "Colored-pencil drawing of a pizza on an ArtRX favorite-food prompt sheet.",
    kind: "drawing",
  },
] as const;

export default function HomePage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.heroSection} aria-labelledby="hero-title">
        <figure className={styles.heroFigure}>
          <Image
            src="/images/generated/artrx-home-artmaking-concept-2026-09-29.webp"
            alt="A hand painting on paper beside watercolor pots."
            fill
            loading="eager"
            sizes="(min-width: 1480px) 1480px, 100vw"
            className={styles.heroPhoto}
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow + " " + styles.eyebrowLight}>
              Drawing prompts and art activities
            </p>
            <h1 id="hero-title">ArtRX</h1>
            <p className={styles.heroLead}>
              A question to begin. A page to make your own.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/gallery">
                Explore the gallery <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.textAction} href="/about-the-founder">
                Meet the founder
              </Link>
            </div>
          </div>
        </figure>
      </section>

      <Reveal>
      <section className={styles.contextSection} aria-labelledby="context-title">
        <div className={styles.contextHeading}>
          <p className={styles.eyebrow}>The idea</p>
          <h2 id="context-title">A familiar question. An open page.</h2>
        </div>
        <div className={styles.contextBody}>
          <p>
            ArtRX shares illustrated drawing prompts and art activities with
            children facing medical circumstances and older adults in nursing
            homes. Familiar subjects—family, favorite foods, animals, and
            memories—offer an open place to begin.
          </p>
        </div>
        <figure className={styles.conceptArtwork}>
          <div className={styles.conceptImageFrame}>
            <Image
              src="/images/generated/artmaking-study-teal-2026-09-29.webp"
              alt="An open sketchbook, watercolor, pencils, and a brush in soft teal and coral tones."
              fill
              loading="lazy"
              sizes="(min-width: 900px) 24vw, (min-width: 680px) 58vw, 100vw"
            />
          </div>
        </figure>
      </section>
      </Reveal>

      <Reveal delay={70}>
      <section className={styles.collectionSection} aria-labelledby="collection-title">
        <header className={styles.collectionHeading}>
          <div>
            <p className={styles.eyebrow}>From the gallery</p>
            <h2 id="collection-title">Three views of the ArtRX pads.</h2>
          </div>
          <p>
            Prompt sheets, drawing in progress, and completed drawings each
            have a different place in the collection. The labels explain what
            visitors are looking at.
          </p>
        </header>

        <div className={styles.collectionGrid}>
          {COLLECTION.map((item) => (
            <figure
              className={styles.collectionItem + " " + styles[item.kind]}
              key={item.label}
            >
              <div className={styles.collectionImage}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 900px) 55vw, 100vw"
                  className={styles.collectionPhoto}
                />
              </div>
              <figcaption className={styles.collectionCaption}>
                <span className={styles.collectionLabel}>{item.label}</span>
                <span className={styles.collectionTitle}>{item.title}</span>
                <span className={styles.collectionDetail}>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.galleryLinkRow}>
          <p>Browse the full ArtRX image collection.</p>
          <Link href="/gallery" className={styles.inlineLink}>
            Visit the gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      </Reveal>

      <Reveal delay={70}>
      <section className={styles.aboutStrip} aria-labelledby="about-title">
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>About ArtRX</p>
          <h2 id="about-title">Art and science are part of the story.</h2>
          <p>
            ArtRX founder Thanvi Suvva has interests in art and science. The
            project shares illustrated prompts and art activities with people
            in care settings.
          </p>
          <Link href="/about-the-founder" className={styles.lightLink}>
            Meet Thanvi and Jiley <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <figure className={styles.aboutArtwork}>
          <Image
            src="/images/gallery/guided-templates/template-draw-your-family.jpg"
            alt="ArtRX prompt sheet titled Draw Your Family, framed by illustrated sea animals."
            fill
            loading="lazy"
            sizes="(min-width: 900px) 38vw, 100vw"
          />
          <figcaption>Draw Your Family · ArtRX prompt sheet</figcaption>
        </figure>
      </section>
      </Reveal>

      <Reveal delay={70}>
      <section className={styles.contactStrip} aria-labelledby="contact-title">
        <div>
          <p className={styles.eyebrow}>Contact ArtRX</p>
          <h2 id="contact-title">A question about the project?</h2>
        </div>
        <Link href="/contact-us" className={styles.contactAction}>
          Contact ArtRX <span aria-hidden="true">↗</span>
        </Link>
      </section>
      </Reveal>
    </div>
  );
}
