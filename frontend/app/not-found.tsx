import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="afa-apply afa-not-found">
      <div className="afa-wrap">
        <div className="afa-eb afa-eb-soft">Error · 404</div>
        <h2>This page is not here.</h2>
        <p>It may have moved, or the link may be wrong.</p>
        <Link className="afa-btn afa-btn-cream afa-btn-lg" href="/">
          Back to the homepage.
        </Link>
      </div>
    </main>
  );
}
