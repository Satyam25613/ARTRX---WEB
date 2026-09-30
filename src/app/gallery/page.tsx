import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/content/gallery-items";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ArtRX Pads",
  description:
    "Explore ArtRX’s illustrated prompt sheets, drawings in progress, and finished artwork.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal><header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>ArtRX · Gallery</p>
          <h1>ArtRX Pads</h1>
        </div>
        <div className={styles.introAside}>
          <p>
            Browse illustrated prompt sheets, drawings in progress, and
            finished artwork. Choose a group below, or open an image for a
            closer look.
          </p>
          <p className={styles.privacyNote}>
            Images are shown without maker names, health details, or facility
            names.
          </p>
        </div>
      </header>
      </Reveal>

      <Reveal delay={60}><section className={styles.gallery} aria-label="ArtRX image gallery">
        <GalleryExperience items={GALLERY_ITEMS} />
      </section>
      </Reveal>
    </div>
  );
}
