import { useId } from "react";

/**
 * A soft watercolor wash: a few blurred, overlapping blobs in the palette of
 * the dress-code illustration. Purely decorative; place it absolutely inside a
 * `relative` parent and keep it behind content.
 */
type Palette = "garden" | "sunset" | "sky" | "bougainvillea";

const palettes: Record<Palette, string[]> = {
  garden: ["#8aa36b", "#d9c14f", "#b8cfa2"],
  sunset: ["#e9b94a", "#e07a8a", "#f1d48a"],
  sky: ["#a9c4e2", "#8aa36b", "#dfe8f2"],
  bougainvillea: ["#d85a8b", "#f0a7bd", "#e9b94a"],
};

interface Props {
  palette?: Palette;
  className?: string;
  /** 0–1, how strong the wash reads. */
  opacity?: number;
  /** Mirror horizontally for variety. */
  flip?: boolean;
}

const Watercolor = ({ palette = "garden", className = "", opacity = 0.55, flip = false }: Props) => {
  const id = useId();
  const [a, b, c] = palettes[palette];
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, transform: flip ? "scaleX(-1)" : undefined, mixBlendMode: "multiply" }}
    >
      <defs>
        <filter id={`${id}-soft`} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id={`${id}-edge`} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <g filter={`url(#${id}-soft)`}>
        <ellipse cx="150" cy="150" rx="120" ry="80" fill={a} opacity="0.55" />
        <ellipse cx="250" cy="120" rx="90" ry="70" fill={b} opacity="0.5" />
      </g>
      <g filter={`url(#${id}-edge)`}>
        <ellipse cx="200" cy="170" rx="70" ry="45" fill={c} opacity="0.45" />
        <ellipse cx="120" cy="110" rx="40" ry="28" fill={b} opacity="0.35" />
      </g>
    </svg>
  );
};

export default Watercolor;
