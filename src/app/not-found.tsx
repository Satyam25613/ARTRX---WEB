import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>This page wandered off the page.</h1>
        <p className={styles.body}>
          The page you&apos;re looking for doesn&apos;t exist, or may have moved.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
