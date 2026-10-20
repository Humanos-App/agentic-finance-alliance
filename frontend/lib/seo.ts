/**
 * Single source of truth for SEO-related constants.
 * Consumed by app/layout.tsx, app/sitemap.ts, app/robots.ts,
 * app/manifest.ts and the generated OG image.
 */

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL once the domain is live;
 * until then Vercel's production URL is used (set automatically on
 * Vercel builds), and localhost in development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = "Agentic Finance Alliance";

export const SHORT_NAME = "AFA";

export const DEFAULT_TITLE =
  "Agentic Finance Alliance · Private dinners at the frontier of AI and finance";

export const DEFAULT_DESCRIPTION =
  "Curated dinners for the founders, investors, leaders and creators working where AI meets payments, fintech, banking and insurance.";

/** Brand palette (mirrors the tokens in app/globals.css). */
export const BRAND = {
  cream: "#F1EDE3",
  creamDeep: "#E8E3D6",
  green: "#14342B",
  greenBright: "#2E6B52",
  onGreenSoft: "#A9C3B5",
} as const;

/**
 * Every public, indexable route. Drives the sitemap so it can't drift
 * from the actual pages. Keep in sync when adding/removing routes.
 */
export const ROUTES: string[] = ["/"];

/** Absolute URL for a path on the canonical origin. */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
