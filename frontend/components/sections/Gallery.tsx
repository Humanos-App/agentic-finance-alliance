/* eslint-disable @next/next/no-img-element */
import { PREVIOUS_DINNER } from "@/lib/dinners";

/** [photo, object-position]: portrait crops from the Lisbon dinner. */
const PHOTOS: [string, string][] = [
  ["dsc06456", "50% 40%"],
  ["dsc06648", "50% 45%"],
  ["dsc06621", "50% 40%"],
  ["dsc06719", "50% 40%"],
  ["dsc06722", "50% 40%"],
  ["dsc07025", "50% 40%"],
  ["dsc06689", "50% 45%"],
  ["dsc06546", "50% 45%"],
];

export function Gallery() {
  return (
    <section className="afa-sec afa-sec-rule">
      <div className="afa-wrap">
        <div className="afa-gallery-h">
          <div>
            <div className="afa-eb">From the table</div>
            <h2 className="afa-h2">{PREVIOUS_DINNER.city}, in pictures.</h2>
          </div>
          <p className="afa-lede">
            {PREVIOUS_DINNER.date} at{" "}
            <a href={PREVIOUS_DINNER.venueUrl} target="_blank" rel="noreferrer">
              {PREVIOUS_DINNER.venueShort}
            </a>
            .
          </p>
        </div>
        <div className="afa-gallery">
          {PHOTOS.map(([file, pos]) => (
            <img
              key={file}
              src={`/assets/lisbon/${file}.jpg`}
              alt={`Guests at the AFA ${PREVIOUS_DINNER.city} dinner`}
              loading="lazy"
              style={{ objectPosition: pos }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
