"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/motion";
import { PRIMARY_TESTIMONIAL } from "@/content/testimonials";
import { GALLERY_ITEMS } from "@/content/gallery-items";
import styles from "./Hero.module.css";

const HERO_ARTWORK = GALLERY_ITEMS.find((item) => item.id === "artwork-pizza-drawing");

/**
 * The hero's right-hand stack, with a quiet scroll parallax: the artwork and
 * testimonial drift at slightly different rates, like objects at different
 * depths. Pointer devices with motion allowed only — touch and reduced-motion
 * visitors get the still composition.
 */
export function HeroStack() {
  const artRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    let frame = 0;

    function apply() {
      frame = 0;
      const y = window.scrollY;
      const art = artRef.current;
      const card = cardRef.current;
      if (art) art.style.transform = `translateY(${Math.max(y * -0.05, -30)}px)`;
      if (card) card.style.transform = `translateY(${Math.min(y * 0.04, 24)}px)`;
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(apply);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div className={styles.stack}>
      <div ref={artRef} className={styles.parallaxArt}>
        {HERO_ARTWORK ? (
          <figure className={styles.artworkFrame}>
            <Image
              src={HERO_ARTWORK.src}
              alt={HERO_ARTWORK.alt}
              fill
              sizes="(min-width: 900px) 40vw, 90vw"
              className={styles.artworkImage}
              priority
            />
          </figure>
        ) : null}
      </div>

      <div ref={cardRef} className={styles.parallaxCard}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialCore}>
            <p className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </p>
            <blockquote className={styles.quote}>{PRIMARY_TESTIMONIAL.quote}</blockquote>
            <div className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">
                DV
              </div>
              <div>
                <p className={styles.authorName}>{PRIMARY_TESTIMONIAL.name}</p>
                <p className={styles.authorCredential}>
                  {PRIMARY_TESTIMONIAL.credential}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
