function Hero({ onApply }) {
  const [hasVideo, setHasVideo] = React.useState(true);
  return (
    <header id="top" className="v2-hero">
      {hasVideo ? (
        <video className="v2-hero-media" autoPlay muted loop playsInline poster="assets/lisbon/dsc06462.jpg" onError={() => setHasVideo(false)}>
          <source src="assets/aftermovie-2.mp4" type="video/mp4" onError={() => setHasVideo(false)} />
        </video>
      ) : (
        <img className="v2-hero-media" src="assets/lisbon/dsc06462.jpg" alt="" style={{ objectPosition: '50% 30%' }} />
      )}
      <div className="v2-hero-tint"></div>
      <div className="v2-wrap v2-hero-in">
        <h1 className="v2-h1">Where the future of money and AI gets built.</h1>
        <p className="v2-hero-sub">Curated dinners for the founders, investors, leaders and creators working where AI meets payments, fintech, banking and insurance.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34 }}>
          <a className="v2-btn v2-btn-cream v2-btn-lg" href="https://luma.com/g5d9e8zv" target="_blank" rel="noreferrer">Get your seat at the next dinner.</a>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Hero });
