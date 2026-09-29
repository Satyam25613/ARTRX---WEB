import { Building2, GraduationCap, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./AudienceCards.module.css";

const AUDIENCES = [
  {
    icon: Building2,
    title: "Hospitals & Senior Facilities",
    description:
      "Child Life specialists and Activity Directors can request guided prompt pads or ask about a visit — choose “Hospital / Senior Facility Request” below.",
  },
  {
    icon: GraduationCap,
    title: "Students & Volunteers",
    description:
      "Want to help design prompts, assemble pads, or join an outreach visit? Choose “Volunteer Interest” below.",
  },
  {
    icon: Users,
    title: "Everyone Else",
    description:
      "Questions, ideas, or just want to say hello? Choose “General Inquiry” below — we read every message.",
  },
];

export function AudienceCards() {
  return (
    <div className={styles.grid}>
      {AUDIENCES.map((audience, index) => (
        <Reveal key={audience.title} delay={index * 80}>
          <div className={styles.card}>
            <div className={styles.cardCore}>
              <div className={styles.iconPlate} aria-hidden="true">
                <audience.icon size={22} strokeWidth={1.5} className={styles.icon} />
              </div>
              <h3 className={styles.title}>{audience.title}</h3>
              <p className={styles.description}>{audience.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
