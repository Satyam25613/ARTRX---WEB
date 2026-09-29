import { Reveal } from "@/components/ui/Reveal";
import { HeroIntro } from "./HeroIntro";
import { HeroStack } from "./HeroStack";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <HeroIntro />
      <Reveal delay={340}>
        <HeroStack />
      </Reveal>
    </header>
  );
}
