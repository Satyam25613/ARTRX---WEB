import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/content/nav";
import { SITE_TAGLINE } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const exploreLinks = NAV_LINKS.filter((link) => link.href !== "/contact-us");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <div className={styles.logoPanel}>
              <Image
                src="/images/artrx-logo.png"
                alt="ArtRX logo"
                width={96}
                height={96}
                sizes="96px"
              />
            </div>
            <div className={styles.brandCopy}>
              <p className={styles.tagline}>{SITE_TAGLINE}</p>
              <p className={styles.description}>
                ArtRX shares illustrated prompts and art activities with
                children facing difficult medical circumstances and older
                adults.
              </p>
            </div>
          </div>

          <nav className={styles.explore} aria-label="Explore ArtRX">
            <h2 className={styles.columnTitle}>Explore</h2>
            <ul className={styles.links}>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h2 className={styles.columnTitle}>Questions or want to help?</h2>
            <p className={styles.contactCopy}>
              Ask about ArtRX or choose the volunteer form on our contact page.
            </p>
            <Link href="/contact-us" className={styles.contactLink}>
              Visit the contact page <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} ArtRX</p>
          <p className={styles.bottomNote}>{SITE_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
