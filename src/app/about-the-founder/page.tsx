import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Meet the people introduced on ArtRX's current website and learn how it describes the project.",
  alternates: { canonical: "/about-the-founder" },
};

export default function AboutFounderPage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.founder} aria-labelledby="about-title">
        <div className={styles.founderCopy}>
          <p className={styles.eyebrow}>People behind ArtRX</p>
          <h1 id="about-title">Art and science are part of the story.</h1>
          <p className={styles.lead}>
            Thanvi Suvva is named as the founder of ArtRX on its current
            website. Her profile brings together her interests in art and
            science, and the place creative expression can have in people&apos;s
            lives.
          </p>
          <Link href="/gallery" className={styles.action}>
            See the drawing prompts <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <figure className={styles.founderFigure}>
          <div className={styles.founderImage}>
            <Image
              src="/images/gallery/patient-artwork/process-sketching-pizza.jpg"
              alt="Photo from ArtRX's current gallery showing a drawing taking shape on an illustrated prompt sheet with art materials nearby."
              fill
              priority
              sizes="(min-width: 900px) 39vw, 100vw"
            />
          </div>
          <figcaption>
            From ArtRX&apos;s current public gallery · Permission to reuse on a new site still needs confirmation.
          </figcaption>
        </figure>
      </section>

      <section className={styles.idea} aria-labelledby="idea-title">
        <div className={styles.ideaHeading}>
          <p className={styles.eyebrow}>ArtRX, as described today</p>
          <h2 id="idea-title">A prompt can open a conversation.</h2>
        </div>
        <div className={styles.ideaBody}>
          <p>
            ArtRX&apos;s public site describes illustrated drawing prompts and
            art activities for children facing difficult medical circumstances
            and older adults in nursing homes. It frames the aim as offering
            opportunities for creativity, self-expression, and emotional
            comfort. Prompts shown on the site ask about family, favorite food,
            animals, and memorable experiences.
          </p>
          <p className={styles.sourceNote}>
            This is ArtRX&apos;s stated aim, not a measured result. Its current
            audience, locations, activity, and preferred wording still need
            Thanvi&apos;s confirmation before release.{" "}
            <a
              href="https://artrx.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the current public description <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </section>

      <section className={styles.profileReview} aria-labelledby="profile-title">
        <div className={styles.profileHeader}>
          <div>
            <p className={styles.eyebrow}>Current public profile · for review</p>
            <h2 id="profile-title">Details Thanvi can keep, change, or leave out.</h2>
          </div>
          <div className={styles.profileIntro}>
            <p>
              These details are summarized from ArtRX&apos;s current About page.
              They are not independently verified or approved for this draft.
              Please check accuracy, current status, and what Thanvi wants to
              share publicly.
            </p>
            <a
              href="https://artrx.co/about-the-founder"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceLink}
            >
              View the published profile <span aria-hidden="true">↗</span>
            </a>
            <span className={styles.checkedDate}>Checked 30 September 2026</span>
          </div>
        </div>

        <ul className={styles.profileList}>
          <li className={styles.profileRow}>
            <span className={styles.profileTopic}>ArtRX focus</span>
            <p>
              The profile connects Thanvi&apos;s interests in art and science
              with activities for children in difficult medical circumstances
              and older adults in care settings across New York. That is what
              the page says, not confirmation of current delivery or locations.
            </p>
            <span className={styles.reviewStatus}>Confirm current scope</span>
          </li>
          <li className={styles.profileRow}>
            <span className={styles.profileTopic}>Research</span>
            <p>
              The page mentions cancer-immunotherapy research through
              “Cornell Weil Medical Center” and earlier limb-regeneration
              research under “Professor Ay Birol at Harvard University,”
              described as pending publication. Check the institution and
              mentor wording, current status, and permission to name them.
            </p>
            <span className={styles.reviewStatus}>Verify details</span>
          </li>
          <li className={styles.profileRow}>
            <span className={styles.profileTopic}>Learning &amp; service</span>
            <p>
              The profile lists participation in SARAS at Stony Brook
              University, management of the Jericho High School Boys&apos;
              Badminton Team, and a Scholastic Art &amp; Writing Gold Key.
              Confirm names, roles, dates, and whether each belongs on the site.
            </p>
            <span className={styles.reviewStatus}>Verify details</span>
          </li>
          <li className={styles.profileRow}>
            <span className={styles.profileTopic}>Time-sensitive wording</span>
            <p>
              The public profile calls Thanvi a “rising junior.” School-year
              wording can become outdated quickly, so this draft does not use
              it as the main introduction. Thanvi can decide whether any school
              detail should appear.
            </p>
            <span className={styles.reviewStatus}>Optional to share</span>
          </li>
        </ul>

        <p className={styles.profileSourceNote}>
          <strong>Source boundary:</strong> this section records statements
          found on the public profile on the date above. It does not confirm
          credentials, affiliation, publication status, or current activity.
          No medical benefit is inferred from these details.
        </p>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <figure className={styles.teamFigure}>
          <div className={styles.teamImage}>
            <Image
              src="/images/team/jiley-diego.jpg"
              alt="Portrait of Jiley Diego, featured on the ArtRX team page."
              fill
              sizes="(min-width: 900px) 31vw, 82vw"
            />
          </div>
          <figcaption>Jiley Diego · ArtRX team profile</figcaption>
        </figure>

        <div className={styles.teamCopy}>
          <p className={styles.eyebrow}>Our team</p>
          <h2 id="team-title">Jiley Diego</h2>
          <p className={styles.teamRole}>Student · Artist</p>
          <p className={styles.body}>
            ArtRX&apos;s current profile introduces Jiley as a student and
            artist interested in art, medicine, gene editing, regenerative
            medicine, and biotechnology. It also describes her hope to connect
            art and science through community outreach. Jiley should confirm
            this wording and the use of her portrait before release.
          </p>
          <a
            href="https://artrx.co/about-the-founder"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            See Jiley&apos;s current profile <span aria-hidden="true">↗</span>
          </a>
          <Link href="/contact-us" className={styles.textLink}>
            Contact ArtRX <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <aside className={styles.reviewNote} aria-label="Review note">
        <span className={styles.noteMark} aria-hidden="true">i</span>
        <p>
          The current public ArtRX site includes more personal profile details
          that can change over time. Thanvi should choose which are current and
          appropriate to share. Jiley should confirm her profile wording and
          photo permission before public release.
        </p>
      </aside>
    </div>
  );
}
