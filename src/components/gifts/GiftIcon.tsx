import { useId } from "react";
import { Cat, CupSoda, Dices, Fish, Gift, Martini, Sailboat, UtensilsCrossed, Wine, type LucideIcon } from "lucide-react";

/** Wash colours lifted from the dress-code illustration. */
const tones = {
  marigold: "#e9b94a",
  sky: "#8fb0d9",
  lilac: "#c6a3d6",
  sage: "#8a9a5b",
  peach: "#e8a37a",
  rose: "#d98aa0",
};

const icons: Record<string, { Icon: LucideIcon; tone: keyof typeof tones }> = {
  "honeymoon-dinner": { Icon: UtensilsCrossed, tone: "peach" },
  "honeymoon-adventures": { Icon: Sailboat, tone: "sky" },
  cocktails: { Icon: Martini, tone: "marigold" },
  "soda-stream": { Icon: CupSoda, tone: "sage" },
  "wine-fridge": { Icon: Wine, tone: "rose" },
  "cat-tree": { Icon: Cat, tone: "lilac" },
  "cat-treats": { Icon: Fish, tone: "sky" },
  "board-games": { Icon: Dices, tone: "marigold" },
  surprise: { Icon: Gift, tone: "lilac" },
};

interface Props {
  id: string;
  className?: string;
}

/** A soft watercolour wash with a line icon on top, so the gift tiles sit with the activity roundels. */
const GiftIcon = ({ id, className = "w-14 h-14" }: Props) => {
  const uid = useId().replace(/:/g, "");
  const entry = icons[id] ?? { Icon: Gift, tone: "sage" as const };
  const colour = tones[entry.tone];
  const { Icon } = entry;

  return (
    <span className={`relative inline-block ${className}`} aria-hidden>
      <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full">
        <defs>
          <filter id={`wc-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
        <g filter={`url(#wc-${uid})`}>
          {/* two overlapping washes read as pooled pigment */}
          <ellipse cx="31" cy="33" rx="26" ry="24" fill={colour} opacity="0.42" />
          <ellipse cx="35" cy="30" rx="22" ry="25" fill={colour} opacity="0.5" />
        </g>
      </svg>
      <Icon className="absolute inset-0 m-auto w-[46%] h-[46%] text-charcoal" strokeWidth={1.6} />
    </span>
  );
};

export default GiftIcon;
