/** The "CW" mark: a launch tick rising off the W. Same orange as the accent. */
export function Monogram({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="15" fill="var(--accent)" />
      <text
        x="31"
        y="43"
        textAnchor="middle"
        fontFamily="'Fraunces Variable', Georgia, serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-1.5"
        fill="var(--on-accent)"
      >
        CW
      </text>
      <path
        d="M44 17l7-7m0 0h-5m5 0v5"
        stroke="var(--on-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
