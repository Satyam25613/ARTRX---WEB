import type { StaticImageData } from "next/image";
import hero from "../../assets-review-only/generated-concepts/artmaking-hero-concept-2026-09-29.png";
import blueGreen from "../../assets-review-only/generated-concepts/artmaking-blue-green-concept-2026-09-29.png";
import warmPalette from "../../assets-review-only/generated-concepts/artmaking-warm-palette-concept-2026-09-29.png";

export type ReviewImage = {
  image: StaticImageData;
  alt: string;
  title: string;
};

export const reviewImages = {
  hero: {
    image: hero,
    alt: "AI-generated concept image of a hand beside a rose and coral watercolor painting on paper, with paint supplies nearby.",
    title: "Rose wash",
  },
  blueGreen: {
    image: blueGreen,
    alt: "AI-generated concept image of hands painting a blue-green watercolor wash on paper at a table.",
    title: "Blue and green study",
  },
  warmPalette: {
    image: warmPalette,
    alt: "AI-generated concept image of a watercolor palette and a hand painting a warm pink and orange wash.",
    title: "Warm palette study",
  },
} satisfies Record<string, ReviewImage>;
