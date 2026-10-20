const WHO: [string, string][] = [
  ["Founders", "Building what AI makes possible in finance."],
  ["Investors", "Backing the next wave of financial infrastructure."],
  ["Leaders", "Running payments, banks and insurers at scale."],
  ["Creators", "The voices promoting these companies and telling their story."],
];

export function Who() {
  return (
    <section className="afa-sec afa-sec-rule">
      <div className="afa-wrap">
        <div className="afa-eb">Who sits at the table</div>
        <div className="afa-who">
          {WHO.map(([title, body]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
