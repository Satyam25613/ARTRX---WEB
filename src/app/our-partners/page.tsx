import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "A careful introduction to the people and organizations connected with ArtRX, once their roles are confirmed.",
  alternates: { canonical: "/our-partners" },
};

const LISTING_DETAILS = [
  {
    title: "Who is involved",
    body: "Name each person or organization only after their role and connection to ArtRX are confirmed.",
  },
  {
    title: "What the connection means",
    body: "Explain the role in plain language so visitors can understand what the relationship includes.",
  },
  {
    title: "What may be shared",
    body: "Use names, logos, photographs, or quotes only when the people involved have agreed.",
  },
];

export default function OurPartnersPage() {
  return (
    <div className={styles.pageShell}>
      <Reveal>
        <section className={styles.hero} aria-labelledby="partners-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>ArtRX · Our Partners</p>
            <h1 id="partners-title">Connections, shared with care.</h1>
            <p className={styles.lead}>
              This page is being prepared to introduce people and organizations
              connected with ArtRX. Their roles and permission to be named need
              to be confirmed first.
            </p>
            <p className={styles.status}>
              <span className={styles.statusMark} aria-hidden="true" />
              No partner names or testimonials are shown in this preview while
              those details are being checked.
            </p>
            <Link className={styles.action} href="/contact-us">
              Contact ArtRX <span aria-hidden="true">↗</span>
            </Link>
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
            <figcaption>
              Original decorative illustration · It does not show real ArtRX
              partners or relationships.
            </figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className={styles.listingSection} aria-labelledby="listing-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>A clear introduction</p>
            <h2 id="listing-title">What a confirmed listing can explain.</h2>
            <p>
              A useful partner page helps visitors understand the connection,
              without asking them to guess what a name or logo means.
            </p>
          </div>

          <div className={styles.detailList}>
            {LISTING_DETAILS.map((detail, index) => (
              <article className={styles.detailCard} key={detail.title}>
                <span className={styles.detailIndex} aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.body}</p>
                </div>
                <span className={styles.detailArrow} aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={40}>
        <aside className={styles.reviewNote} aria-label="Preview note">
          <div>
            <p className={styles.noteLabel}>Why this preview leaves names out</p>
            <p>
              ArtRX’s current public page includes a testimonial and individual
              contact details. The historical discovery-call record says those
              relationships were not confirmed as genuine partners. This
              preview leaves them out until Thanvi confirms any current roles
              and permission to share them.
            </p>
          </div>
          <a
            href="https://artrx.co/our-partners"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            View the current page <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </Reveal>
    </div>
  );
}
