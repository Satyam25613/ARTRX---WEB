import { Smile, Palette } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS } from "@/content/pillars";
import styles from "./ProgramPillars.module.css";

const ICONS = { smile: Smile, palette: Palette };

export function ProgramPillars() {
  return (
    <section className={styles.section} aria-labelledby="programs-heading">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="How Drawing Brings Comfort"
          description="You don't need to be a great artist to feel the healing impact of art. When words are hard to find, drawing gives everyone a voice."
        />
        <div className={styles.grid}>
          {PILLARS.map((pillar, index) => {
            const Icon = ICONS[pillar.icon];
            return (
              <Reveal key={pillar.id} delay={index * 100}>
                <Card hoverable>
                      <div className={styles.icon} aria-hidden="true">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                  <h3 className={styles.title}>{pillar.title}</h3>
                  <p className={styles.description}>{pillar.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
