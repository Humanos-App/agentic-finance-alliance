/* eslint-disable @next/next/no-img-element */

const STEPS: { n: string; title: string; body: string; img: string; pos: string }[] = [
  {
    n: "01",
    title: "Curated guest list",
    body: "We curate every guest list. We select people building, funding, running or speaking about the same future, so every conversation leads somewhere.",
    img: "/assets/lisbon/dsc06819.jpg",
    pos: "50% 55%",
  },
  {
    n: "02",
    title: "Matchmaking",
    body: "We look across our network for the people who could be valuable to you, and we bring them to the dinner.",
    img: "/assets/lisbon/dsc06756.jpg",
    pos: "50% 55%",
  },
  {
    n: "03",
    title: "At the frontier",
    body: "Each table sits where AI meets financial services: payments, fintech, banks and insurtech. The people building it, funding it and running it.",
    img: "/assets/lisbon/dsc06608.jpg",
    pos: "50% 52%",
  },
];

export function WhyJoin() {
  return (
    <section id="how" className="afa-sec afa-sec-rule">
      <div className="afa-wrap">
        <div className="afa-eb">Why Join</div>
        <h2 className="afa-h2">More than a dinner.</h2>
        <div className="afa-steps">
          {STEPS.map((s, i) => (
            <div key={s.n} className={"afa-step" + (i % 2 ? " is-flip" : "")}>
              <div className="afa-step-media">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: s.pos }}
                />
              </div>
              <div className="afa-step-txt">
                <span className="afa-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
