import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/content/gallery-items";
import styles from "./GalleryTeaser.module.css";

const FEATURED_IDS = [
  "template-favorite-food",
  "artwork-pizza-drawing",
  "template-memorable-experience",
  "process-coloring-favorite-food",
];

export function GalleryTeaser() {
  const items = FEATURED_IDS.map((id) => GALLERY_ITEMS.find((item) => item.id === id)).filter(
    (item): item is (typeof GALLERY_ITEMS)[number] => Boolean(item)
  );

  return (
    <section className={styles.section} aria-labelledby="gallery-teaser-heading">
      <Container>
        <SectionHeading
          eyebrow="Stories & Gallery"
          title="Real Prompts, Real Drawings"
          description="A look at the guided prompt pads and the drawings they inspire — created by the children and seniors ArtRX visits."
        />
        <div className={styles.grid}>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <figure className={index % 2 === 1 ? `${styles.frame} ${styles.frameTilt}` : styles.frame}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes="(min-width: 700px) 25vw, 50vw"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className={styles.cta}>
          <Button
            href="/gallery"
            variant="secondary"
            icon={<ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />}
          >
            View the Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
