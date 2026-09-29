import { Sparkle } from "lucide-react";
import { GALLERY_ITEMS } from "@/content/gallery-items";
import styles from "./PromptMarquee.module.css";

// The prompts are the product — a slow editorial ticker of the real pad titles.
const PROMPTS = GALLERY_ITEMS.filter((item) => item.category === "prompt").map(
  (item) => item.title
);

function PromptRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className={hidden ? styles.hiddenRow : styles.row} aria-hidden={hidden || undefined}>
      {PROMPTS.map((prompt) => (
        <span key={prompt} className={styles.prompt}>
          <Sparkle size={13} strokeWidth={1.5} className={styles.sparkle} aria-hidden="true" />
          {prompt}
        </span>
      ))}
    </div>
  );
}

export function PromptMarquee() {
  return (
    <section className={styles.band} aria-label="Drawing prompts from the ArtRX illustration pads">
      {/* Screen readers get the full list; the moving track is decorative. */}
      <ul className={styles.staticList}>
        {PROMPTS.map((prompt) => (
          <li key={prompt}>{prompt}</li>
        ))}
      </ul>

      <div className={styles.viewport}>
        <div className={styles.track}>
          <PromptRow />
          <PromptRow hidden />
        </div>
      </div>
    </section>
  );
}
