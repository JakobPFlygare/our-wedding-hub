import { useState, useCallback, useEffect } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<
    "idle" | "crack" | "opening" | "revealing" | "done"
  >("idle");

  const handleSealClick = useCallback(() => {
    if (phase !== "idle") return;

    // Seal cracks
    setPhase("crack");

    // After crack, flap begins opening
    setTimeout(() => setPhase("opening"), 600);

    // Fade / bloom into site
    setTimeout(() => setPhase("revealing"), 2400);

    // Done
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3600);
  }, [phase, onComplete]);

  // Preload font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  if (phase === "done") return null;

  const isOpening = phase === "opening" || phase === "revealing";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all ${
        phase === "revealing"
          ? "opacity-0 scale-105 blur-sm duration-[1200ms]"
          : "opacity-100 scale-100 blur-0 duration-500"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, hsl(30, 30%, 95%) 0%, hsl(30, 20%, 88%) 60%, hsl(25, 15%, 80%) 100%)",
      }}
    >
      {/* Soft ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, hsl(40, 40%, 97% / 0.6) 0%, transparent 60%)",
        }}
      />

      {/* Envelope container */}
      <div
        className="relative"
        style={{
          width: "min(85vw, 420px)",
          height: "min(60vw, 300px)",
          perspective: "1000px",
        }}
      >
        {/* ── ENVELOPE BODY ── */}
        <div
          className="absolute inset-0 rounded-sm overflow-hidden"
          style={{
            background:
              "linear-gradient(170deg, hsl(32, 35%, 82%) 0%, hsl(28, 30%, 76%) 50%, hsl(25, 28%, 70%) 100%)",
            boxShadow: `
              0 8px 32px hsl(25, 20%, 40% / 0.25),
              0 2px 8px hsl(25, 20%, 40% / 0.15),
              inset 0 1px 0 hsl(35, 40%, 90% / 0.4)
            `,
          }}
        >
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />

          {/* Subtle floral watermark */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="env-floral"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <ellipse
                  cx="40"
                  cy="30"
                  rx="4"
                  ry="9"
                  fill="currentColor"
                  opacity="0.6"
                />
                <ellipse
                  cx="40"
                  cy="50"
                  rx="4"
                  ry="9"
                  fill="currentColor"
                  opacity="0.6"
                />
                <ellipse
                  cx="30"
                  cy="40"
                  rx="9"
                  ry="4"
                  fill="currentColor"
                  opacity="0.6"
                />
                <ellipse
                  cx="50"
                  cy="40"
                  rx="9"
                  ry="4"
                  fill="currentColor"
                  opacity="0.6"
                />
                <ellipse
                  cx="20"
                  cy="20"
                  rx="2"
                  ry="6"
                  fill="currentColor"
                  opacity="0.3"
                  transform="rotate(35 20 20)"
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="2"
                  ry="6"
                  fill="currentColor"
                  opacity="0.3"
                  transform="rotate(-35 60 60)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#env-floral)" />
          </svg>

          {/* Bottom V-fold crease */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "55%",
              clipPath: "polygon(0 100%, 100% 100%, 50% 15%)",
              background:
                "linear-gradient(0deg, hsl(28, 28%, 72%) 0%, hsl(30, 32%, 78%) 100%)",
            }}
          />
          {/* Crease shadow line */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "55%",
              clipPath: "polygon(0 100%, 50% 15%, 3% 97%)",
              background:
                "linear-gradient(120deg, hsl(25, 20%, 55% / 0.2) 0%, transparent 30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "55%",
              clipPath: "polygon(100% 100%, 50% 15%, 97% 97%)",
              background:
                "linear-gradient(-120deg, hsl(25, 20%, 55% / 0.15) 0%, transparent 30%)",
            }}
          />

          {/* Left fold */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 0 100%, 50% 50%)",
              background:
                "linear-gradient(90deg, hsl(30, 30%, 74%) 0%, hsl(30, 33%, 80%) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 0 100%, 50% 50%)",
              background:
                "linear-gradient(135deg, hsl(25, 20%, 50% / 0.12) 0%, transparent 40%)",
            }}
          />

          {/* Right fold */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
              background:
                "linear-gradient(-90deg, hsl(30, 30%, 74%) 0%, hsl(30, 33%, 80%) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
              background:
                "linear-gradient(-135deg, hsl(25, 20%, 50% / 0.1) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* ── TOP FLAP ── hinges from top edge */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "60%",
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
            transition: isOpening
              ? "transform 1.6s cubic-bezier(0.22, 0.61, 0.36, 1)"
              : "none",
            zIndex: isOpening ? 1 : 10,
          }}
        >
          {/* Front face of flap */}
          <div
            className="absolute inset-0 rounded-t-sm"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 90%)",
              background:
                "linear-gradient(180deg, hsl(32, 36%, 84%) 0%, hsl(30, 30%, 78%) 60%, hsl(28, 28%, 74%) 100%)",
              backfaceVisibility: "hidden",
              boxShadow: "inset 0 -2px 8px hsl(25, 20%, 50% / 0.15)",
            }}
          >
            {/* Flap paper grain */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                clipPath: "polygon(0 0, 100% 0, 50% 90%)",
              }}
            />
            {/* Floral watermark on flap */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.025]"
              xmlns="http://www.w3.org/2000/svg"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 90%)" }}
            >
              <rect width="100%" height="100%" fill="url(#env-floral)" />
            </svg>
          </div>

          {/* Back face of flap (lighter inside) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 90%)",
              background:
                "linear-gradient(0deg, hsl(35, 30%, 88%) 0%, hsl(35, 35%, 92%) 100%)",
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
            }}
          />

          {/* ── WAX SEAL ── sits on the flap, lifts with it */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "52%",
              width: "clamp(64px, 18vw, 90px)",
              height: "clamp(64px, 18vw, 90px)",
              backfaceVisibility: "hidden",
              zIndex: 20,
            }}
          >
            {/* Seal drop shadow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "hsl(20, 15%, 30% / 0.3)",
                filter: "blur(6px)",
                transform: "translateY(3px) scale(1.08)",
              }}
            />

            {/* Seal base — deep burgundy wax */}
            <div
              className={`absolute inset-0 rounded-full transition-all ${
                phase === "crack"
                  ? "scale-[0.97] duration-300"
                  : "duration-200"
              }`}
              style={{
                background: `radial-gradient(
                  circle at 40% 38%,
                  hsl(355, 45%, 42%) 0%,
                  hsl(350, 40%, 35%) 40%,
                  hsl(345, 38%, 28%) 100%
                )`,
                boxShadow: `
                  inset 0 2px 4px hsl(355, 50%, 50% / 0.4),
                  inset 0 -2px 6px hsl(345, 40%, 18% / 0.5),
                  0 1px 4px hsl(0, 0%, 0% / 0.2)
                `,
              }}
            >
              {/* Wax irregularities */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "-3px",
                  right: "10px",
                  width: "14px",
                  height: "10px",
                  background: "hsl(350, 40%, 34%)",
                  filter: "blur(1px)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  bottom: "-2px",
                  left: "14px",
                  width: "10px",
                  height: "8px",
                  background: "hsl(348, 38%, 30%)",
                  filter: "blur(1px)",
                }}
              />

              {/* Pressed ring impression */}
              <div
                className="absolute inset-[14%] rounded-full"
                style={{
                  border: "1.5px solid hsl(345, 35%, 24% / 0.5)",
                  boxShadow:
                    "inset 0 1px 1px hsl(355, 50%, 50% / 0.2), 0 1px 1px hsl(345, 30%, 20% / 0.15)",
                }}
              />

              {/* Crack lines — appear on click */}
              {(phase === "crack" || isOpening) && (
                <>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[crack-appear_0.3s_ease-out_forwards]"
                    style={{
                      width: "70%",
                      height: "1.5px",
                      background:
                        "linear-gradient(90deg, transparent 10%, hsl(345, 30%, 20% / 0.6) 30%, hsl(345, 30%, 20% / 0.8) 50%, hsl(345, 30%, 20% / 0.6) 70%, transparent 90%)",
                      transform: "translate(-50%, -50%) rotate(-15deg)",
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[crack-appear_0.3s_ease-out_0.1s_forwards]"
                    style={{
                      width: "50%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, hsl(345, 30%, 20% / 0.5) 40%, hsl(345, 30%, 20% / 0.7) 60%, transparent)",
                      transform: "translate(-50%, -50%) rotate(25deg)",
                      opacity: 0,
                    }}
                  />
                </>
              )}

              {/* Monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="select-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(16px, 4vw, 22px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "hsl(350, 30%, 24%)",
                    textShadow:
                      "0 1px 0 hsl(355, 45%, 45% / 0.4)",
                    letterSpacing: "0.08em",
                  }}
                >
                  P & J
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clickable seal overlay */}
        {phase === "idle" && (
          <button
            onClick={handleSealClick}
            className="absolute left-1/2 -translate-x-1/2 z-30 rounded-full cursor-pointer group"
            style={{
              top: "calc(60% * 0.52 - clamp(32px, 9vw, 45px) + 4px)",
              width: "clamp(72px, 20vw, 100px)",
              height: "clamp(72px, 20vw, 100px)",
              background: "transparent",
            }}
            aria-label="Open envelope"
          >
            {/* Hover glow ring */}
            <div
              className="absolute inset-[-6px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle, hsl(40, 50%, 85% / 0.4) 0%, transparent 70%)",
              }}
            />
          </button>
        )}

        {/* Tap hint */}
        {phase === "idle" && (
          <p
            className="absolute left-1/2 -translate-x-1/2 z-20 select-none"
            style={{
              bottom: "-40px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(11px, 2.5vw, 13px)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "0.2em",
              color: "hsl(25, 15%, 55%)",
              animation: "envelope-pulse 2.5s ease-in-out infinite",
            }}
          >
            tap to open
          </p>
        )}
      </div>

      {/* Light bloom during reveal */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ${
          phase === "revealing"
            ? "opacity-100 duration-[1000ms]"
            : "opacity-0 duration-300"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(35, 40%, 97% / 0.9) 0%, transparent 60%)",
        }}
      />

      <style>{`
        @keyframes envelope-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes crack-appear {
          from { opacity: 0; transform: translate(-50%, -50%) scaleX(0.3); }
          to { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default EnvelopeAnimation;
