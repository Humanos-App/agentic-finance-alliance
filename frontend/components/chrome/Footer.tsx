import { Logo } from "@/components/brand/Logo";
import { FOOTER_LINKS } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="afa-footer">
      <div className="afa-wrap afa-footer-in">
        <div className="afa-footer-brand">
          <Logo tone="cream" size={28} />
          <span>Agentic Finance Alliance</span>
        </div>
        <nav className="afa-footer-links" aria-label="Footer">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
