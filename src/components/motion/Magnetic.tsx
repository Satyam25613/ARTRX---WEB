"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { useReducedMotion } from "@/lib/motion";
import styles from "./Magnetic.module.css";

/**
 * Gently pulls its child toward the pointer while hovered — physical, not
 * gimmicky: a few pixels at most, springing back on leave. Pointer devices
 * only; never active for touch or reduced-motion visitors.
 */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;

    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const strength = 5;

    node.style.transform = `translate(${offsetX * strength}px, ${offsetY * strength}px)`;
  }

  function handlePointerLeave() {
    const node = ref.current;
    if (node) node.style.transform = "";
  }

  return (
    <div
      ref={ref}
      className={styles.magnetic}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
