import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ArtRX | A creative place to begin",
  description:
    "ArtRX brings illustrated drawing prompts to children in hospitals and older adults in nursing homes, creating room to draw, remember, and imagine.",
  alternates: { canonical: "/" },
};

const COLLECTION = [
  {
    label: "Prompt sheet",
    title: "What's your favorite food?",
    detail: "A familiar question, with room for your own answer.",
    src: "/images/gallery/prompt-concepts/favorite-food.jpg",
    alt: "Illustrated ArtRX prompt sheet asking about a favorite food, with a bowl of fruit, bread, and pizza around a blank center.",
    kind: "prompt",
  },
  {
    label: "In progress",
    title: "Coloring a favorite-food prompt",
    detail: "An idea taking shape through color.",
    src: "/images/gallery/patient-artwork/process-coloring-favorite-food.jpg",
    alt: "Hands coloring an ArtRX favorite-food prompt sheet, with colored pencils nearby.",
    kind: "process",
  },
  {
    label: "Completed drawing",
    title: "A favorite food, in color",
    detail: "A finished page, kept in the artist's own style.",
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
              ArtRX · Guided art prompts
            </p>
            <h1 id="hero-title">A question can open a new world.</h1>
            <p className={styles.heroLead}>
              ArtRX brings illustrated drawing prompts to children in hospitals and older adults in nursing homes.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/gallery">
                Explore the gallery <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.textAction} href="/about-the-founder">
                Why ArtRX began
              </Link>
            </div>
          </div>
        </figure>
      </section>

      <Reveal>
      <section className={styles.contextSection} aria-labelledby="context-title">
        <div className={styles.contextHeading}>
          <p className={styles.eyebrow}>The idea</p>
          <h2 id="context-title">It can start with something familiar.</h2>
        </div>
        <div className={styles.contextBody}>
          <p>
            A favorite food. The people who feel like home. A place you hope to
            go. ArtRX turns familiar ideas into illustrated prompts, so anyone
            can begin with a memory, a wish, or a few marks of color. There is
            no right way to fill the page.
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
            <p className={styles.eyebrow}>A look inside the gallery</p>
            <h2 id="collection-title">From first question to finished page.</h2>
          </div>
          <p>
            A question makes room to begin. A few marks turn into a drawing
            that belongs to the person who made it.
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
          <p>See the prompts and drawings up close.</p>
          <Link href="/gallery" className={styles.inlineLink}>
            Browse the gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      </Reveal>

      <Reveal delay={70}>
      <section className={styles.aboutStrip} aria-labelledby="about-title">
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>Why ArtRX began</p>
          <h2 id="about-title">A creative voice, when words are hard to find.</h2>
          <p>
            Founder Thanvi Suvva created ArtRX to give children in hospitals
            and older adults in nursing homes a creative way to share what
            matters to them.
          </p>
          <Link href="/about-the-founder" className={styles.lightLink}>
            Meet Thanvi and the team <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <figure className={styles.aboutArtwork}>
          <Image
            src="/images/gallery/prompt-concepts/draw-family.jpg"
            alt="ArtRX prompt sheet titled Draw Your Family, with a house, potted plant, and family portrait around a blank center."
            fill
            loading="lazy"
            sizes="(min-width: 900px) 38vw, 100vw"
          />
          <figcaption>Draw Your Family · illustrated prompt</figcaption>
        </figure>
      </section>
      </Reveal>

      <Reveal delay={70}>
      <section className={styles.contactStrip} aria-labelledby="contact-title">
        <div>
          <p className={styles.eyebrow}>Contact ArtRX</p>
          <h2 id="contact-title">Curious about ArtRX or want to help?</h2>
        </div>
        <Link href="/contact-us" className={styles.contactAction}>
          We would love to hear from you <span aria-hidden="true">↗</span>
        </Link>
      </section>
      </Reveal>
    </div>
  );
}
