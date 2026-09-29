import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/content/nav";
import { SITE_TAGLINE } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
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
            <p className={styles.tagline}>{SITE_TAGLINE}</p>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className={styles.copy}>ArtRX · Drawing prompts and art activities</p>
      </div>
    </footer>
  );
}
