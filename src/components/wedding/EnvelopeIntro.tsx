import { useEffect, useState } from "react";

interface EnvelopeIntroProps {
  onFinish: () => void;
}

// Your invitation image (lives in /public).
const INVITATION_SRC = "/Invitation.png";

// Cheap linen/cardstock texture: fine woven grid + speckle layered over the base gradient.
// Pure CSS gradients (no SVG filters / blend modes) so it stays cheap to paint.
const LINEN =
  "repeating-linear-gradient(0deg, hsl(0 0% 100% / 0.05) 0px, hsl(0 0% 100% / 0.05) 1px, transparent 1px, transparent 3px)," +
  "repeating-linear-gradient(90deg, hsl(35 20% 40% / 0.045) 0px, hsl(35 20% 40% / 0.045) 1px, transparent 1px, transparent 3px)," +
  "repeating-linear-gradient(45deg, hsl(0 0% 100% / 0.03) 0px, hsl(0 0% 100% / 0.03) 1px, transparent 1px, transparent 5px)";

const texturize = (gradient: string) => ({
  backgroundImage: `${LINEN}, ${gradient}`,
});

// Warm ivory/beige cardstock facets (flap lightest, back a touch deeper for interior depth).
const PAPER_FLAP = "linear-gradient(158deg, hsl(42 42% 98%), hsl(40 30% 92%))";
const PAPER_FRONT = "linear-gradient(180deg, hsl(42 38% 96%), hsl(40 28% 90%))";
const PAPER_SIDE = "linear-gradient(120deg, hsl(41 34% 94%), hsl(39 26% 88%))";
const PAPER_BACK = "linear-gradient(180deg, hsl(40 26% 89%), hsl(38 24% 85%))";

type Phase = "closed" | "opening" | "leaving";

const EnvelopeIntro = ({ onFinish }: EnvelopeIntroProps) => {
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase("opening"), 250),
      window.setTimeout(() => setPhase("leaving"), 1600),
      window.setTimeout(() => onFinish(), 2700),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opening = phase === "opening" || phase === "leaving";
  const leaving = phase === "leaving";

  // One single, uninterrupted lift. The exit does NOT change the target, so the card
  // just keeps gliding upward at a constant speed (linear = never decelerates/stops);
  // the website fade happens on top of that motion while it's still moving.
  const cardTransform = opening
    ? "translateX(-50%) translateY(-42%) scale(1)"
    : "translateX(-50%) translateY(38%) scale(1)";

  const cardTransition = "transform 2900ms linear 200ms";

  // Envelope stays put and open the whole time — it only leaves via the overlay crossfade
  // (so the whole scene dissolves into the site together, nothing disappears on its own).
  const shellStyle = {};

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, hsl(36 16% 88%) 0%, hsl(32 13% 79%) 82%)",
        transition: "opacity 1100ms ease-in-out",
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* Envelope stage — anchored toward the lower half so the letter has room to rise */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "9vh",
          width: "min(84vw, 500px)",
          aspectRatio: "3 / 2",
          perspective: "1600px",
        }}
      >
        {/* Envelope back / interior */}
        <div
          className="absolute inset-0 rounded-md"
          style={{
            ...texturize(PAPER_BACK),
            border: "1px solid hsl(38 22% 80%)",
            boxShadow:
              "0 22px 55px hsl(35 30% 25% / 0.28), 0 6px 16px hsl(35 30% 25% / 0.18)",
            ...shellStyle,
            zIndex: 10,
          }}
        />

        {/* Letter mask — clips the card at the envelope bottom, open at the top so it can rise out */}
        <div
          className="absolute"
          style={{
            left: 0,
            width: "100%",
            top: "-170%",
            height: "270%",
            overflow: "hidden",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <div
            className="absolute overflow-hidden rounded-[3px]"
            style={{
              left: "50%",
              bottom: 0,
              width: "72%",
              aspectRatio: "1240 / 1748",
              transformOrigin: "center",
              transform: cardTransform,
              transition: cardTransition,
              background: "hsl(48 20% 95%)",
              boxShadow: opening
                ? "0 22px 55px hsl(100 14% 20% / 0.32)"
                : "0 8px 20px hsl(100 14% 20% / 0.18)",
            }}
          >
            <img
              src={INVITATION_SRC}
              alt="Paulina & Jakob wedding invitation"
              className="block h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* Front pocket (the face that hides the letter as it slides out) */}
        <div
          className="absolute inset-0 overflow-hidden rounded-md"
          style={{ zIndex: 30, ...shellStyle }}
        >
          <div
            className="absolute inset-0"
            style={{ ...texturize(PAPER_SIDE), clipPath: "polygon(0 0, 0 100%, 52% 52%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ ...texturize(PAPER_SIDE), clipPath: "polygon(100% 0, 100% 100%, 48% 52%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ ...texturize(PAPER_FRONT), clipPath: "polygon(0 100%, 100% 100%, 50% 45%)" }}
          />
          {/* soft crease shadows where the facets meet */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, transparent 49.6%, hsl(35 18% 42% / 0.13) 50%, transparent 50.4%), linear-gradient(to bottom left, transparent 49.6%, hsl(35 18% 42% / 0.13) 50%, transparent 50.4%)",
            }}
          />
        </div>

        {/* Top flap (opens up and back) */}
        <div
          className="absolute left-0 top-0 w-full origin-top"
          style={{
            height: "56%",
            ...texturize(PAPER_FLAP),
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transform: opening ? "rotateX(180deg)" : "rotateX(0deg)",
            transformStyle: "preserve-3d",
            transition: "transform 1000ms cubic-bezier(0.45, 0, 0.15, 1)",
            zIndex: opening ? 15 : 40,
            filter: "drop-shadow(0 2px 3px hsl(35 20% 30% / 0.16))",
          }}
        />
      </div>
    </div>
  );
};

export default EnvelopeIntro;
