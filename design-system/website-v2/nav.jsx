const { Button, Logo } = window.AFADesignSystem_93293e;
function Nav({ onApply }) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className={'v2-nav' + (solid ? ' is-solid' : '')}>
      <div className="v2-wrap v2-nav-in">
        <a href="#top" className="v2-brand">
          <Logo lockup={solid ? 'transparent' : 'cream-transparent'} size={30} assetBase="assets" />
          <span>Agentic Finance Alliance</span>
        </a>
        <nav className="v2-links">
          <a href="#about">About</a>
          <a href="#how">Why Join</a>
          <a href="#dinners">Dinners</a>
          <a href="#partners">Partners</a>
        </nav>
        <a className={solid ? 'v2-btn v2-btn-green' : 'v2-btn v2-btn-cream'} href="https://luma.com/g5d9e8zv" target="_blank" rel="noreferrer">Get your seat at the next dinner.</a>
      </div>
    </div>
  );
}
Object.assign(window, { Nav });
