import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Learn how ArtRX brings illustrated drawing prompts into care settings, and find a way to ask a question or get involved.",
  alternates: { canonical: "/our-partners" },
};

const CONTACT_PATHS = [
  {
    title: "Care teams",
    body: "If a prompt might suit your community, ask how ArtRX's pages and activities could fit.",
  },
  {
    title: "Volunteers",
    body: "Want to give time, skills, or ideas? Tell us what you would enjoy doing.",
  },
  {
    title: "Families and neighbors",
    body: "Curious about the project, or have a thought to share? We would be glad to hear from you.",
  },
];

const PARTNER_ORGANIZATION = {
  name: "Arbor’s assisted-living communities at West",
  description: "For questions about this connection, contact ArtRX.",
};

export default function OurPartnersPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal>
        <section className={styles.hero} aria-labelledby="partners-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>ArtRX · Our Partners</p>
            <h1 id="partners-title">A little creativity can bring people together.</h1>
            <p className={styles.lead}>
              ArtRX shares illustrated drawing prompts with children in
              hospitals and older adults in nursing homes. We welcome care
              teams, volunteers, families, and neighbors who want to learn more
              or help.
            </p>
            <div className={styles.actions}>
              <Link className={styles.action} href="/contact-us">
                Find a way to connect <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.secondaryAction} href="/gallery">
                Explore the gallery
              </Link>
            </div>
          </div>

          <figure className={styles.artwork}>
            <svg
              className={styles.connectionDrawing}
              viewBox="0 0 560 470"
              fill="none"
              aria-hidden="true"
            >
              <rect
                className={styles.backSheet}
                x="92"
                y="74"
                width="350"
                height="294"
                rx="30"
                transform="rotate(7 92 74)"
              />
              <rect
                className={styles.frontSheet}
                x="98"
                y="89"
                width="350"
                height="294"
                rx="30"
                transform="rotate(-5 98 89)"
              />
              <path
                className={styles.connectionLine}
                d="M173 265c35-75 85-100 139-62 40 28 56 81 95 74 24-4 38-28 53-57"
              />
              <path
                className={styles.smallLine}
                d="M185 315c58-9 104-1 138 20"
              />
              <circle className={styles.nodeOne} cx="173" cy="265" r="12" />
              <circle className={styles.nodeTwo} cx="312" cy="203" r="12" />
              <circle className={styles.nodeThree} cx="407" cy="277" r="12" />
              <path
                className={styles.leafMark}
                d="M346 118c24-16 52-16 75-3-8 25-28 41-57 43-11-13-17-26-18-40Z"
              />
            </svg>
            <figcaption>A shared idea can begin with a simple prompt.</figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal delay={40}>
        <section className={styles.listingSection} aria-labelledby="partner-organization-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Partner organization</p>
            <h2 id="partner-organization-title">A community connection.</h2>
            <p>
              For questions about this connection, contact ArtRX.
            </p>
          </div>

          <div className={styles.detailList}>
            <article className={styles.detailCard}>
              <span className={styles.detailIndex} aria-hidden="true">01</span>
              <div>
                <h3>{PARTNER_ORGANIZATION.name}</h3>
                <p>{PARTNER_ORGANIZATION.description}</p>
              </div>
              <Link
                className={styles.detailArrow}
                href="/contact-us"
                aria-label={`Contact ArtRX about ${PARTNER_ORGANIZATION.name}`}
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.listingSection} aria-labelledby="listing-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>A place to begin</p>
            <h2 id="listing-title">Where would you like to begin?</h2>
            <p>
              Whether you care for someone, want to volunteer, or are simply
              curious, there is a place to start.
            </p>
          </div>

          <div className={styles.detailList}>
            {CONTACT_PATHS.map((path, index) => (
              <article className={styles.detailCard} key={path.title}>
                <span className={styles.detailIndex} aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{path.title}</h3>
                  <p>{path.body}</p>
                </div>
                <Link
                  className={styles.detailArrow}
                  href="/contact-us"
                  aria-label={`Contact ArtRX: ${path.title}`}
                >
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
