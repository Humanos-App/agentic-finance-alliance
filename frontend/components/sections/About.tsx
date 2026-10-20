const POINTS: [string, string][] = [
  [
    "The experience",
    "Curated and hosted in exceptional venues, so every guest has a memorable evening.",
  ],
  [
    "The people",
    "Our in-house matchmaking system seats every guest among the brightest minds, with connections that last long after the dinner ends.",
  ],
  [
    "Worth your time",
    "Less noise, more signal. Straight to the answers our guests came for.",
  ],
];

export function About() {
  return (
    <section id="about" className="afa-sec">
      <div className="afa-wrap afa-about">
        <div className="afa-eb">What is AFA</div>
        <div>
          <p className="afa-statement">
            Private dinners for the people bringing AI into financial services.
          </p>
          <div className="afa-about-pts">
            {POINTS.map(([title, body]) => (
              <div key={title}>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
