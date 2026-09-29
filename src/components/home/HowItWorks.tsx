import { PenTool, Truck, HeartHandshake, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    icon: PenTool,
    title: "Create",
    description:
      "Thanvi designs simple, guided illustration pads with gentle prompts — like “Draw Your Family” or “What's Your Favorite Food?”",
  },
  {
    icon: Truck,
    title: "Deliver",
    description:
      "The pads are brought directly to hospitals and nursing homes across New York, ready for a patient or resident to pick up.",
  },
  {
    icon: HeartHandshake,
    title: "Connect",
    description:
      "Patients and residents draw, answer the prompt in their own way, and share a little piece of themselves through art.",
  },
  {
    icon: Smile,
    title: "Comfort",
    description:
      "For a little while, their attention shifts away from the hospital setting — toward something creative, personal, and theirs.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Personal Process"
          description="No art experience needed — just a prompt, a page, and a little time."
        />
        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <li className={styles.step}>
                <div className={styles.stepCore}>
                  <p className={styles.stepNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className={styles.iconWrap} aria-hidden="true">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
