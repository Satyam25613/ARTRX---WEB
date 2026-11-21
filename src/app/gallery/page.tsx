import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/content/gallery-items";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The ArtRX Gallery",
  description:
    "Explore the ArtRX prompts, the pages taking shape, and drawings shared along the way.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>The ArtRX gallery</p>
          <h1>Every page begins with a question.</h1>
          <p className={styles.introLead}>
            A favorite food. A remembered place. Something still to come.
            Explore the prompts, the making, and the drawings shared along the
            way.
          </p>
          <p className={styles.privacyNote}>
            Artist names and care-setting details are left out of this collection.
          </p>
      </header>
      </Reveal>

      <section id="prompt-sheets" className={styles.gallery} aria-label="ArtRX gallery collection">
        <GalleryExperience items={GALLERY_ITEMS} />
      </section>
    </div>
  );
}
