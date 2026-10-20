const V2_WHO = [
  ['Founders', 'Building what AI makes possible in finance.'],
  ['Investors', 'Backing the next wave of financial infrastructure.'],
  ['Leaders', 'Running payments, banks and insurers at scale.'],
  ['Creators', 'The voices promoting these companies and telling their story.'],
];
function Who() {
  return (
    <section className="v2-sec v2-sec-rule">
      <div className="v2-wrap">
        <div className="v2-eb">Who sits at the table</div>
        <div className="v2-who">
          {V2_WHO.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Who });
