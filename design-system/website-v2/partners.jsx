const V2_GET = [
  ['Priority intros', 'First calls and intros with the guests.'],
  ['Video and PR', 'A dedicated video team and strategic PR.'],
  ['Priority access', 'Priority access to market data and future events.'],
  ['Extra seats', 'Bring more business partners and team members.'],
];
function Partners() {
  return (
    <section id="partners" className="v2-sec v2-sec-rule">
      <div className="v2-wrap v2-partners">
        <div>
          <div className="v2-eb">Partners</div>
          <h2 className="v2-h2">What you get as a partner.</h2>
          <p className="v2-lede">Each dinner is made possible by a small number of partners.</p>
        </div>
        <div className="v2-get">
          {V2_GET.map(([t, d], i) => (
            <div key={t}><span className="v2-num">{String(i + 1).padStart(2, '0')}</span><b>{t}</b><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Partners });
