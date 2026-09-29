const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// ArtRX's existing public domain is the metadata base. Indexing stays gated
// until the rebuilt site is explicitly approved for release.
export const SITE_URL = (configuredSiteUrl || "https://artrx.co").replace(
  /\/+$/,
  ""
);

export const SITE_INDEXABLE =
  process.env.NEXT_PUBLIC_SITE_INDEXABLE?.trim().toLowerCase() === "true";

export const CONTACT_MESSAGE_LIMIT = 1_500;
