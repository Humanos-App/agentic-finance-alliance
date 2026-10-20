const V2_GALLERY = [
  ['dsc06456', '50% 40%'], ['dsc06648', '50% 45%'], ['dsc06621', '50% 40%'], ['dsc06719', '50% 40%'],
  ['dsc06722', '50% 40%'], ['dsc07025', '50% 40%'], ['dsc06689', '50% 45%'], ['dsc06546', '50% 45%'],
];
function Gallery() {
  return (
    <section className="v2-sec v2-sec-rule">
      <div className="v2-wrap">
        <div className="v2-gallery-h">
          <div>
            <div className="v2-eb">From the table</div>
            <h2 className="v2-h2">Lisbon, in pictures.</h2>
          </div>
          <p className="v2-lede" style={{ margin: 0 }}>21 September at <a href="https://capitulo.pt/" target="_blank" rel="noreferrer">Capítulo</a>.</p>
        </div>
        <div className="v2-gallery">
          {V2_GALLERY.map(([f, pos]) => (
            <img key={f} src={'../../assets/lisbon/' + f + '.jpg'} alt="Guests at the AFA Lisbon dinner" loading="lazy" style={{ objectPosition: pos }} />
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Gallery });
