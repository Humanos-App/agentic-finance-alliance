const PERKS: [string, string][] = [
  ["Priority intros", "First calls and intros with the guests."],
  ["Video and PR", "A dedicated video team and strategic PR."],
  ["Priority access", "Priority access to market data and future events."],
  ["Extra seats", "Bring more business partners and team members."],
];

export function Partners() {
  return (
    <section id="partners" className="afa-sec afa-sec-rule">
      <div className="afa-wrap afa-partners">
        <div>
          <div className="afa-eb">Partners</div>
          <h2 className="afa-h2">What you get as a partner.</h2>
          <p className="afa-lede">
            Each dinner is made possible by a small number of partners.
          </p>
        </div>
        <div className="afa-get">
          {PERKS.map(([title, body], i) => (
            <div key={title}>
              <span className="afa-num">{String(i + 1).padStart(2, "0")}</span>
              <b>{title}</b>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
