"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const VIDEO = "/assets/aftermovie.mp4";
const POSTER = "/assets/aftermovie-poster.jpg";
const FALLBACK = "/assets/lisbon/dsc06462.jpg";

/**
 * The muted, looping after movie. React doesn't render `muted` into the
 * server HTML, so browsers that only autoplay muted video won't start it
 * on their own: set it on the element and start playback after mount.
 * Falls back to a Lisbon photo if the video can't load.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      // Autoplay refused (e.g. low-power mode): the poster frame stays up.
    });
  }, []);

  if (failed) {
    return (
      <img
        className="afa-hero-media"
        src={FALLBACK}
        alt=""
        style={{ objectPosition: "50% 30%" }}
      />
    );
  }

  return (
    <video
      ref={ref}
      className="afa-hero-media"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      <source src={VIDEO} type="video/mp4" onError={() => setFailed(true)} />
    </video>
  );
}
