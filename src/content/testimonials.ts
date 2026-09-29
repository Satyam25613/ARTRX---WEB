import type { Testimonial } from "@/lib/types";

// Historical quote only. It is excluded from public routes until the speaker,
// wording, affiliation, and permission to republish are verified.
// Verbatim from the medical partner testimonial published on the original
// artrx.co "Our Partners" page — do not reword.
export const PRIMARY_TESTIMONIAL: Testimonial = {
  id: "dr-venugopal",
  quote:
    "ArtRX brings an innovative and compassionate approach to mental health support. Their workshops have helped our participants reduce anxiety and discover new ways to communicate emotions.",
  name: "Dr. Venugopal",
  credential: "Gastroenterologist, Stars Surgical Suites",
};
