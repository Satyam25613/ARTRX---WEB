export interface NavLink {
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  icon: "smile" | "palette";
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  credential: string;
}

export interface PartnerContact {
  id: string;
  name: string;
  role: string;
}

export type GalleryCategory = "prompt" | "in-progress" | "drawing";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export interface SocialLink {
  id: "instagram" | "facebook";
  label: string;
  href: string;
  active: boolean;
}

export type InquiryType = "general" | "volunteer" | "facility";

export interface InquiryOption {
  value: InquiryType;
  label: string;
}
