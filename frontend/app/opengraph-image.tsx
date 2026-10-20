/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND, SITE_NAME } from "@/lib/seo";
import { NEXT_DINNER } from "@/lib/dinners";

export const alt = `${SITE_NAME} · Where the future of money and AI gets built.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/logo-toasted-transparent.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND.green,
          color: BRAND.cream,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} width={64} height={64} alt="" />
          <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>
            {SITE_NAME}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            maxWidth: 960,
          }}
        >
          Where the future of money and AI gets built.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: BRAND.onGreenSoft,
          }}
        >
          <span>Private dinners at the frontier of AI and finance.</span>
          <span>
            {NEXT_DINNER.city} · {NEXT_DINNER.date}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
