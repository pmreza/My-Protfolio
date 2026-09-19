export function PMrezaMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 40"
      fill="currentColor"
      {...props}
    >
      <text
        x="0"
        y="30"
        fontFamily="var(--font-pixel)"
        fontWeight="800"
        fontSize="32"
        letterSpacing="-0.05em"
      >
        PMreza
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 40"><text x="0" y="30" fill="${color}" font-family="var(--font-pixel)" font-weight="800" font-size="32" letter-spacing="-0.05em">PMreza</text></svg>`;
}
