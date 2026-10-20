import { GUEST_CTA, NEXT_DINNER } from "@/lib/dinners";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <header id="top" className="afa-hero">
      <HeroVideo />
      <div className="afa-hero-tint" />
      <div className="afa-wrap afa-hero-in">
        <h1 className="afa-h1">Where the future of money and AI gets built.</h1>
        <p className="afa-hero-sub">
          Curated dinners for the founders, investors, leaders and creators
          working where AI meets payments, fintech, banking and insurance.
        </p>
        <div className="afa-hero-ctas">
          <a
            className="afa-btn afa-btn-cream afa-btn-lg"
            href={NEXT_DINNER.seatsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {GUEST_CTA}
          </a>
        </div>
      </div>
    </header>
  );
}
