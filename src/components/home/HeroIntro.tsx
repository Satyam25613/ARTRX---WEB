"use client";

import { Palette, HeartHandshake, Sparkles } from "lucide-react";
import { useMounted } from "@/lib/motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SITE_DESCRIPTION } from "@/content/site";
import styles from "./Hero.module.css";

/**
 * The page-load overture: badge, then each headline line rising out of its
 * mask, then the supporting copy and actions — one rehearsed sequence.
 */
export function HeroIntro() {
  const on = useMounted() ? styles.on : "";

  return (
    <div className={styles.lede}>
      <div className={`${styles.introItem} ${on}`}>
        <Badge>
          <Sparkles size={13} strokeWidth={1.5} aria-hidden="true" /> Healing Through
          Creativity
        </Badge>
      </div>

      <h1 className={styles.headline}>
        <span className={styles.mask}>
          <span className={`${styles.line} ${on}`} style={{ transitionDelay: "90ms" }}>
            Comfort <em className={styles.accent}>&amp; Joy</em>
          </span>
        </span>
        <span className={styles.mask}>
          <span className={`${styles.line} ${on}`} style={{ transitionDelay: "190ms" }}>
            through the power
          </span>
        </span>
        <span className={styles.mask}>
          <span className={`${styles.line} ${on}`} style={{ transitionDelay: "290ms" }}>
            of drawing
          </span>
        </span>
      </h1>

      <p
        className={`${styles.subtext} ${styles.introItem} ${on}`}
        style={{ transitionDelay: "400ms" }}
      >
        {SITE_DESCRIPTION}
      </p>

      <div
        className={`${styles.actions} ${styles.introItem} ${on}`}
        style={{ transitionDelay: "500ms" }}
      >
        <Magnetic>
          <Button
            href="/gallery"
            icon={<Palette size={15} strokeWidth={1.5} aria-hidden="true" />}
          >
            Explore Gallery
          </Button>
        </Magnetic>
        <Magnetic>
          <Button
            href="/get-involved"
            variant="secondary"
            icon={<HeartHandshake size={15} strokeWidth={1.5} aria-hidden="true" />}
          >
            Volunteer With Us
          </Button>
        </Magnetic>
      </div>
    </div>
  );
}
