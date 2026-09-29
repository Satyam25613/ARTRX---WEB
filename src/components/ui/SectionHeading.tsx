import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./SectionHeading.module.css";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "left" ? styles.headingLeft : styles.heading}>
      <Reveal>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </Reveal>
    </div>
  );
}
