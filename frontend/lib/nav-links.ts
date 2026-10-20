/** In-page anchors. The navbar shows the first four; the footer shows all. */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Join", href: "#how" },
  { label: "Dinners", href: "#dinners" },
  { label: "Partners", href: "#partners" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Become a partner", href: "#apply" },
] as const;
