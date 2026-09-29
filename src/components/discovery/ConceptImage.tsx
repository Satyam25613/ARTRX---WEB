import Image from "next/image";
import type { ReactNode } from "react";
import type { ReviewImage } from "@/content/review-images";
import styles from "./ConceptImage.module.css";

export function ConceptImage({
  image,
  alt,
  title,
  variant = "tile",
  priority = false,
  overlay,
}: ReviewImage & {
  variant?: "hero" | "page" | "tile";
  priority?: boolean;
  overlay?: ReactNode;
}) {
  return (
    <figure className={`${styles.figure} ${styles[variant]}`} data-review-concept>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          fill
          sizes={
            variant === "hero"
              ? "(max-width: 680px) 100vw, 56vw"
              : "(max-width: 680px) 100vw, 42vw"
          }
          preload={priority}
        />
        <span className={styles.stamp}>AI concept</span>
        {overlay}
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.title}>{title}</span>
        <span className={styles.disclosure}>
          AI-generated layout concept. It does not show ArtRX, a participant, or
          participant artwork.
        </span>
      </figcaption>
    </figure>
  );
}
