import { Building2, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./GetInvolvedCta.module.css";

const AUDIENCES = [
  {
    icon: Building2,
    title: "Hospitals & Senior Facilities",
    description: "Request prompt pads or ask about bringing ArtRX to your ward or center.",
  },
  {
    icon: GraduationCap,
    title: "Students & Volunteers",
    description: "Help design prompts, assemble pads, or join a future outreach visit.",
  },
  {
    icon: Users,
    title: "Community & Supporters",
    description: "Share ArtRX with someone who might want to help, host, or spread the word.",
  },
];

export function GetInvolvedCta() {
  return (
    <section className={styles.section} aria-labelledby="get-involved-heading">
      <Container>
        <SectionHeading
          eyebrow="Get Involved"
          title="There's a Place for You Here"
          description="Whether you're a hospital, a student, or just someone who believes in this — we'd love to hear from you."
        />
        <div className={styles.grid}>
          {AUDIENCES.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 90}>
              <div className={styles.card}>
                <div className={styles.cardCore}>
                  <div className={styles.iconPlate} aria-hidden="true">
                    <audience.icon size={24} strokeWidth={1.5} className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{audience.title}</h3>
                  <p className={styles.cardDescription}>{audience.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/get-involved">Get in Touch</Button>
        </div>
      </Container>
    </section>
  );
}
