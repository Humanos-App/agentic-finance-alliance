/* eslint-disable @next/next/no-img-element */
import { GUEST_CTA, NEXT_DINNER, PREVIOUS_DINNER } from "@/lib/dinners";

export function Dinners() {
  return (
    <section id="dinners" className="afa-sec afa-sec-rule">
      <div className="afa-wrap">
        <div className="afa-eb">Dinners</div>
        <div className="afa-dinners">
          <article className="afa-dinner is-next">
            <img
              src={NEXT_DINNER.cover}
              alt={`AFA ${NEXT_DINNER.city}, ${NEXT_DINNER.date}`}
              loading="lazy"
            />
            <div className="afa-dinner-txt">
              <span className="afa-tag">Next</span>
              <h3>{NEXT_DINNER.city}</h3>
              <p>{NEXT_DINNER.date} · Private dinner</p>
              <a
                className="afa-btn afa-btn-cream"
                href={NEXT_DINNER.seatsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {GUEST_CTA}
              </a>
            </div>
          </article>
          <article className="afa-dinner">
            <img
              src={PREVIOUS_DINNER.photo}
              alt={`Guests at the ${PREVIOUS_DINNER.city} dinner, ${PREVIOUS_DINNER.venueShort}`}
              loading="lazy"
              style={{ objectPosition: "50% 62%" }}
            />
            <div className="afa-dinner-txt">
              <span className="afa-tag">Previously</span>
              <h3>{PREVIOUS_DINNER.city}</h3>
              <p>
                {PREVIOUS_DINNER.date} at{" "}
                <a href={PREVIOUS_DINNER.venueUrl} target="_blank" rel="noreferrer">
                  {PREVIOUS_DINNER.venue}
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
