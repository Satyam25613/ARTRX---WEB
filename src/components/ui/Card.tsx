import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function Card({
  children,
  hoverable = false,
}: {
  children: ReactNode;
  hoverable?: boolean;
}) {
  return (
    <div className={hoverable ? `${styles.card} ${styles.hoverable}` : styles.card}>
      <div className={styles.core}>{children}</div>
    </div>
  );
}
