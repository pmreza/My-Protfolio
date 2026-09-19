import React from "react";

export function PMrezaWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3000 500"
      fill="none"
      {...props}
    >
      <text
        x="0"
        y="300"
        fill="currentColor"
        fontFamily="var(--font-pixel)"
        fontWeight="800"
        fontSize="140"
        letterSpacing="-0.05em"
      >
        Mohammad Amin Ahmadi
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 3000 500"><text x="0" y="300" fill="${color}" font-family="var(--font-pixel)" font-weight="800" font-size="140" letter-spacing="-0.05em">Mohammad Amin Ahmadi</text></svg>`;
}
