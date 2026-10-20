"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/lib/nav-links";
import { GUEST_CTA, NEXT_DINNER } from "@/lib/dinners";

export function Navbar() {
  // Cream text over the hero; solid cream once the hero is mostly gone.
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"afa-nav" + (solid ? " is-solid" : "")}>
      <div className="afa-wrap afa-nav-in">
        <a href="#top" className="afa-brand">
          <Logo tone={solid ? "green" : "cream"} size={30} />
          <span>Agentic Finance Alliance</span>
        </a>
        <nav className="afa-links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className={solid ? "afa-btn afa-btn-green" : "afa-btn afa-btn-cream"}
          href={NEXT_DINNER.seatsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {GUEST_CTA}
        </a>
      </div>
    </div>
  );
}
