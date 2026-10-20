function Dinners({ onApply }) {
  return (
    <section id="dinners" className="v2-sec v2-sec-rule">
      <div className="v2-wrap">
        <div className="v2-eb">Dinners</div>
        <div className="v2-dinners">
          <article className="v2-dinner is-next">
            <img src="../../assets/cover-ledger-london.png" alt="AFA London, 3 December" />
            <div className="v2-dinner-txt">
              <span className="v2-tag">Next</span>
              <h3>London</h3>
              <p>3 December · Private dinner</p>
              <a className="v2-btn v2-btn-cream" href="https://luma.com/g5d9e8zv" target="_blank" rel="noreferrer">Get your seat at the next dinner.</a>
            </div>
          </article>
          <article className="v2-dinner">
            <img src="../../assets/lisbon/dsc06856.jpg" alt="Guests at the Lisbon dinner, Capítulo" style={{ objectPosition: '50% 62%' }} />
            <div className="v2-dinner-txt">
              <span className="v2-tag">Previously</span>
              <h3>Lisbon</h3>
              <p>21 September at <a href="https://capitulo.pt/" target="_blank" rel="noreferrer">Capítulo Restaurant &amp; Bar</a>.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Dinners });
