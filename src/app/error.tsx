"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.eyebrow}>Something Went Wrong</p>
        <h1 className={styles.title}>We hit a snag loading this page.</h1>
        <p className={styles.body}>
          Please try again, or head back to the homepage.
        </p>
        <Button type="button" onClick={() => reset()}>
          Try Again
        </Button>
      </Container>
    </section>
  );
}
