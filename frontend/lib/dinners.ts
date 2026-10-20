/**
 * The next and the previous dinner. Update these when a new dinner is
 * announced: the hero, navbar, dinners section, gallery and OG card all
 * read from here.
 */

export const NEXT_DINNER = {
  city: "London",
  date: "3 December",
  seatsUrl: "https://luma.com/g5d9e8zv",
  cover: "/assets/cover-ledger-london.png",
} as const;

export const PREVIOUS_DINNER = {
  city: "Lisbon",
  date: "21 September",
  venue: "Capítulo Restaurant & Bar",
  venueShort: "Capítulo",
  venueUrl: "https://capitulo.pt/",
  photo: "/assets/lisbon/dsc06856.jpg",
} as const;

/** Approved CTA lines. Use as written. */
export const GUEST_CTA = "Get your seat at the next dinner.";
export const PARTNER_CTA = "Become a partner for the next dinner.";
