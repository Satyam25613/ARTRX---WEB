"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

/**
 * Fades/slides content in once it scrolls into view. No-ops instantly if the
 * visitor prefers reduced motion, or if IntersectionObserver isn't available.
 */
export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    // Content stays visible until JavaScript is ready, so the page still
    // works when scripts are disabled or delayed.
    node.dataset.revealState = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.revealState = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      delete node.dataset.revealState;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={styles.reveal}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
