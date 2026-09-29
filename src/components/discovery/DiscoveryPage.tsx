import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import styles from "./DiscoveryPage.module.css";

export type DiscoverySection = {
  title: string;
  copy: string;
  points?: string[];
};

export type DiscoveryLink = {
  href: string;
  label: string;
  description: string;
};

export function DiscoveryPage({
  eyebrow = "Discovery preview",
  title,
  intro,
  visual,
  sections,
  links,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  visual?: ReactNode;
  sections?: DiscoverySection[];
  links?: DiscoveryLink[];
  children?: ReactNode;
}) {
  return (
    <section className={styles.page} aria-label={title}>
      <Container>
        <div className={visual ? styles.heroGrid : undefined}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
          </header>
          {visual ? <div className={styles.heroVisual}>{visual}</div> : null}
        </div>

        {sections?.length ? (
          <div className={styles.sections}>
            {sections.map((section) => (
              <article className={styles.sectionCard} key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.copy}</p>
                {section.points?.length ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {children ? <div className={styles.extra}>{children}</div> : null}

        {links?.length ? (
          <nav className={styles.related} aria-label="Related pages">
            {links.map((link) => (
              <Link href={link.href} className={styles.relatedLink} key={link.href}>
                <span className={styles.relatedLabel}>{link.label}</span>
                <span className={styles.relatedDescription}>{link.description}</span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
