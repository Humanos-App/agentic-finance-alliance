/* eslint-disable @next/next/no-img-element */

/** [file, company, rendered height in px]: heights are optically matched. */
const LOGOS: [string, string, number][] = [
  ["mastercard-full.png", "Mastercard", 32],
  ["anchorage.png", "Anchorage Digital", 26],
  ["anthemis.png", "Anthemis", 16],
  ["crossmint.png", "Crossmint", 14],
  ["sponsor-wordmark.svg", "Humanos", 19],
  ["vest-markets.png", "Vest Markets", 26],
  ["temerity.png", "Temerity Capital Partners", 38],
];

export function GuestLogos() {
  return (
    <section className="afa-logos-band">
      <div className="afa-wrap">
        <div className="afa-eb">Guests at our tables have come from</div>
        <div className="afa-logos">
          {LOGOS.map(([file, name, h]) => (
            <img
              key={file}
              src={`/assets/logos/${file}`}
              alt={name}
              style={{ height: h }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
