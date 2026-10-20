const V2_LOGOS = [
  ['mastercard-full.png', 'Mastercard', 32], ['anchorage.png', 'Anchorage Digital', 26], ['anthemis.png', 'Anthemis', 16],
  ['crossmint.png', 'Crossmint', 14], ['sponsor-wordmark.svg', 'Humanos', 19], ['vest-markets.png', 'Vest Markets', 26], ['temerity.png', 'Temerity Capital Partners', 38],
];
function AtTheTable() {
  return (
    <section className="v2-logos-band">
      <div className="v2-wrap">
        <div className="v2-eb" style={{ textAlign: 'center' }}>Guests at our tables have come from</div>
        <div className="v2-logos">
          {V2_LOGOS.map(([f, a, h]) => <img key={f} src={'assets/logos/' + f} alt={a} style={{ height: h }} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AtTheTable });
