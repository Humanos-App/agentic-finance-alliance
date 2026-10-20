function MatchCard() {
  const rows = [
    ['guest_14', 'guest_03', 'payments × capital', 'intro sent'],
    ['guest_07', 'guest_22', 'insurtech × distribution', 'matched'],
    ['guest_19', 'guest_11', 'banking × agents', 'matched'],
    ['guest_02', 'guest_16', 'fintech × hiring', 'intro sent'],
  ];
  return (
    <div className="v2-match">
      <div className="v2-match-h"><span>AFA matchmaking</span><span>London · 3 December</span></div>
      {rows.map((r, i) => (
        <div key={i} className="v2-match-r">
          <code>{r[0]} =&gt; {r[1]}</code>
          <span>{r[2]}</span>
          <b>{r[3]}</b>
        </div>
      ))}
    </div>
  );
}
const V2_STEPS = [
  { n: '01', t: 'Curated guest list', d: 'We curate every guest list. We select people building, funding, running or speaking about the same future, so every conversation leads somewhere.', img: '../../assets/lisbon/dsc06819.jpg', pos: '50% 55%' },
  { n: '02', t: 'Matchmaking', d: 'We look across our network for the people who could be valuable to you, and we bring them to the dinner.', img: '../../assets/lisbon/dsc06756.jpg', pos: '50% 55%' },
  { n: '03', t: 'At the frontier', d: 'Each table sits where AI meets financial services: payments, fintech, banks and insurtech. The people building it, funding it and running it.', img: '../../assets/lisbon/dsc06608.jpg', pos: '50% 52%' },
];
function How() {
  return (
    <section id="how" className="v2-sec v2-sec-rule">
      <div className="v2-wrap">
        <div className="v2-eb">Why Join</div>
        <h2 className="v2-h2">More than a dinner.</h2>
        <div className="v2-steps">
          {V2_STEPS.map((s, i) => (
            <div key={s.n} className={'v2-step' + (i % 2 ? ' is-flip' : '')}>
              <div className="v2-step-media">
                {s.card ? <MatchCard /> : <img src={s.img} alt="" style={{ objectPosition: s.pos }} />}
              </div>
              <div className="v2-step-txt">
                <span className="v2-num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { How });
