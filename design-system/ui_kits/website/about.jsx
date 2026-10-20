function About() {
  const ledger = React.useMemo(() => document.getElementById('ledger-src').innerHTML, []);
  return (
    <>
      <section id="about" className="v2-sec">
        <div className="v2-wrap v2-about">
          <div className="v2-eb">What is AFA</div>
          <div>
            <p className="v2-statement">Private dinners for the people bringing AI into financial services.</p>
            <div className="v2-about-pts">
              <div><b>The experience</b><p>Curated and hosted in exceptional venues, so every guest has a memorable evening.</p></div>
              <div><b>The people</b><p>Our in-house matchmaking system seats every guest among the brightest minds, with connections that last long after the dinner ends.</p></div>
              <div><b>Worth your time</b><p>Less noise, more signal. Straight to the answers our guests came for.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="v2-punch">
        <pre className="v2-ledger" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ledger }}></pre>
        <div className="v2-wrap" style={{ position: 'relative' }}>
          <h2><span className="v2-punch-l">AI is changing what financial services can do.</span><span className="v2-punch-l">Nobody figures that out alone.</span></h2>
        </div>
      </section>
    </>
  );
}
Object.assign(window, { About });
