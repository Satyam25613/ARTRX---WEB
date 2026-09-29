import type { PartnerContact } from "@/lib/types";

// Historical names only; do not publish these people or describe them as
// partners without direct confirmation of role, affiliation, and permission.
// Names and roles only — the original site published personal Gmail
// addresses for these contacts; we intentionally omit them here rather than
// republish third parties' personal emails without confirming that's wanted.
export const PARTNER_CONTACTS: PartnerContact[] = [
  { id: "varnitha-baddam", name: "Dr. Varnitha Baddam", role: "Internal Medicine" },
  { id: "rajendra-chalasani", name: "Rajendra Chalasani", role: "Lead Engineer" },
];
