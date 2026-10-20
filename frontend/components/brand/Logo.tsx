/* eslint-disable @next/next/no-img-element */

/** The geometric A mark. Green on cream, cream ("toasted") on deep green. */
const SRC = {
  green: "/assets/logo-green-transparent.png",
  cream: "/assets/logo-toasted-transparent.png",
} as const;

export function Logo({
  tone = "green",
  size = 30,
}: {
  tone?: keyof typeof SRC;
  size?: number;
}) {
  return (
    <img
      src={SRC[tone]}
      alt="Agentic Finance Alliance"
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size }}
    />
  );
}
