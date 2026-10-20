const { Logo } = window.AFADesignSystem_93293e;
function Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-wrap v2-footer-in">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo lockup="cream-transparent" size={28} assetBase="../../assets" />
          <span style={{ fontWeight: 600, letterSpacing: '-.02em' }}>Agentic Finance Alliance</span>
        </div>
        <div className="v2-footer-links">
          <a href="#about">About</a><a href="#how">Why Join</a><a href="#dinners">Dinners</a><a href="#partners">Partners</a><a href="#apply">Become a partner</a>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
