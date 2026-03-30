import { useState, useCallback, useEffect } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<"idle" | "crack" | "opening" | "sliding" | "done">("idle");

  const handleSealClick = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("crack");
    setTimeout(() => setPhase("opening"), 500);
    setTimeout(() => setPhase("sliding"), 2200);
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3800);
  }, [phase, onComplete]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  if (phase === "done") return null;

  const isOpening = phase === "opening" || phase === "sliding";
  const isSliding = phase === "sliding";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30, 25%, 94%) 0%, hsl(28, 20%, 90%) 50%, hsl(25, 18%, 86%) 100%)",
      }}
    >
      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, transparent 40%, hsl(25, 15%, 75% / 0.3) 100%)",
        }}
      />

      {/* Envelope wrapper — slides up to reveal content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: isSliding ? "translateY(-110vh)" : "translateY(0)",
          transition: isSliding ? "transform 1.6s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
        }}
      >
        {/* Envelope */}
        <div
          className="relative"
          style={{
            width: "min(88vw, 440px)",
            height: "min(62vw, 310px)",
            perspective: "1200px",
          }}
        >
          {/* ── ENVELOPE BODY ── */}
          <div
            className="absolute inset-0 rounded-[3px] overflow-hidden"
            style={{
              background: "linear-gradient(165deg, hsl(140, 18%, 62%) 0%, hsl(145, 20%, 55%) 40%, hsl(148, 22%, 48%) 100%)",
              boxShadow: `
                0 12px 40px hsl(140, 15%, 25% / 0.3),
                0 4px 12px hsl(140, 15%, 25% / 0.15),
                inset 0 1px 0 hsl(140, 25%, 72% / 0.3)
              `,
            }}
          >
            {/* Watercolor paper texture — coarse grain */}
            <div
              className="absolute inset-0 mix-blend-overlay opacity-[0.12]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`,
                backgroundSize: "300px 300px",
              }}
            />

            {/* Second texture layer — finer fibers */}
            <div
              className="absolute inset-0 mix-blend-soft-light opacity-[0.08]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E")`,
                backgroundSize: "150px 150px",
              }}
            />

            {/* Watercolor wash — organic blotchy feel */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 30%, hsl(135, 25%, 40%) 0%, transparent 50%),
                  radial-gradient(ellipse at 75% 70%, hsl(150, 20%, 35%) 0%, transparent 45%),
                  radial-gradient(ellipse at 50% 50%, hsl(140, 15%, 45%) 0%, transparent 60%)
                `,
              }}
            />

            {/* Bottom V-fold */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "58%",
                clipPath: "polygon(0 100%, 100% 100%, 50% 12%)",
                background: "linear-gradient(0deg, hsl(145, 20%, 50%) 0%, hsl(142, 22%, 56%) 100%)",
              }}
            />
            {/* V-fold crease shadows */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "58%",
                clipPath: "polygon(0 100%, 50% 12%, 4% 96%)",
                background: "linear-gradient(125deg, hsl(148, 20%, 30% / 0.2) 0%, transparent 35%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "58%",
                clipPath: "polygon(100% 100%, 50% 12%, 96% 96%)",
                background: "linear-gradient(-125deg, hsl(148, 20%, 30% / 0.15) 0%, transparent 35%)",
              }}
            />

            {/* Left fold */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 0 100%, 50% 50%)",
                background: "linear-gradient(95deg, hsl(142, 19%, 52%) 0%, hsl(143, 21%, 58%) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 0 100%, 50% 50%)",
                background: "linear-gradient(140deg, hsl(148, 18%, 32% / 0.15) 0%, transparent 45%)",
              }}
            />

            {/* Right fold */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
                background: "linear-gradient(-95deg, hsl(142, 19%, 52%) 0%, hsl(143, 21%, 58%) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
                background: "linear-gradient(-140deg, hsl(148, 18%, 32% / 0.12) 0%, transparent 45%)",
              }}
            />

            {/* Center crease highlight */}
            <div
              className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[1px] h-[30%] opacity-[0.08]"
              style={{ background: "hsl(140, 30%, 80%)" }}
            />
          </div>

          {/* ── TOP FLAP ── hinges from top */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "62%",
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              transform: isOpening ? "rotateX(175deg)" : "rotateX(0deg)",
              transition: isOpening ? "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              zIndex: isOpening ? 1 : 10,
            }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-t-[3px] overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 88%)",
                background: "linear-gradient(180deg, hsl(140, 20%, 60%) 0%, hsl(145, 22%, 53%) 60%, hsl(148, 20%, 48%) 100%)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Texture on flap */}
              <div
                className="absolute inset-0 mix-blend-overlay opacity-[0.1]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`,
                  backgroundSize: "300px 300px",
                  clipPath: "polygon(0 0, 100% 0, 50% 88%)",
                }}
              />
              {/* Flap crease shadow */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 88%)",
                  background: "linear-gradient(180deg, transparent 60%, hsl(148, 20%, 30% / 0.15) 100%)",
                }}
              />
            </div>

            {/* Back face (inside of flap) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 88%)",
                background: "linear-gradient(0deg, hsl(140, 15%, 72%) 0%, hsl(138, 18%, 78%) 100%)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            />

            {/* ── GOLDEN WAX SEAL ── */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: "50%",
                width: "clamp(68px, 19vw, 95px)",
                height: "clamp(68px, 19vw, 95px)",
                backfaceVisibility: "hidden",
                zIndex: 20,
              }}
            >
              {/* Seal shadow for depth */}
              <div
                className="absolute inset-[-2px] rounded-full"
                style={{
                  background: "hsl(35, 20%, 20% / 0.35)",
                  filter: "blur(8px)",
                  transform: "translateY(4px) scale(1.05)",
                }}
              />

              {/* Seal base — warm gold */}
              <div
                className={`absolute inset-0 rounded-full transition-transform ${
                  phase === "crack" ? "scale-[0.96] duration-300" : "duration-200"
                }`}
                style={{
                  background: `radial-gradient(
                    circle at 38% 35%,
                    hsl(43, 65%, 58%) 0%,
                    hsl(40, 55%, 48%) 35%,
                    hsl(36, 50%, 38%) 70%,
                    hsl(32, 45%, 30%) 100%
                  )`,
                  boxShadow: `
                    inset 0 2px 6px hsl(45, 70%, 70% / 0.5),
                    inset 0 -3px 8px hsl(30, 50%, 20% / 0.4),
                    0 2px 6px hsl(30, 30%, 15% / 0.3)
                  `,
                }}
              >
                {/* Wax drip irregularities */}
                <div className="absolute rounded-full" style={{ top: "-4px", right: "12px", width: "16px", height: "11px", background: "hsl(38, 50%, 42%)", filter: "blur(2px)" }} />
                <div className="absolute rounded-full" style={{ bottom: "-3px", left: "16px", width: "12px", height: "9px", background: "hsl(35, 48%, 36%)", filter: "blur(2px)" }} />
                <div className="absolute rounded-full" style={{ top: "8px", left: "-3px", width: "10px", height: "12px", background: "hsl(37, 52%, 40%)", filter: "blur(1.5px)" }} />

                {/* Pressed ring impression */}
                <div
                  className="absolute inset-[15%] rounded-full"
                  style={{
                    border: "1.5px solid hsl(35, 40%, 25% / 0.4)",
                    boxShadow: "inset 0 1px 2px hsl(45, 60%, 65% / 0.3), 0 1px 1px hsl(30, 40%, 20% / 0.2)",
                  }}
                />

                {/* Crack lines */}
                {(phase === "crack" || isOpening) && (
                  <>
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: "65%",
                        height: "1.5px",
                        background: "linear-gradient(90deg, transparent 8%, hsl(30, 40%, 18% / 0.7) 30%, hsl(30, 40%, 18% / 0.9) 50%, hsl(30, 40%, 18% / 0.7) 70%, transparent 92%)",
                        transform: "translate(-50%, -50%) rotate(-12deg)",
                        animation: "seal-crack 0.3s ease-out forwards",
                      }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: "45%",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, hsl(30, 40%, 18% / 0.6) 35%, hsl(30, 40%, 18% / 0.8) 55%, transparent)",
                        transform: "translate(-50%, -50%) rotate(30deg)",
                        animation: "seal-crack 0.3s ease-out 0.08s forwards",
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
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(14px, 3.8vw, 20px)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: "hsl(38, 35%, 25%)",
                      textShadow: "0 1px 0 hsl(45, 60%, 60% / 0.5)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    P & J
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clickable seal area */}
          {phase === "idle" && (
            <button
              onClick={handleSealClick}
              className="absolute left-1/2 -translate-x-1/2 z-30 rounded-full cursor-pointer group"
              style={{
                top: "calc(62% * 0.50 - clamp(34px, 9.5vw, 47px) + 5px)",
                width: "clamp(78px, 22vw, 110px)",
                height: "clamp(78px, 22vw, 110px)",
                background: "transparent",
              }}
              aria-label="Open envelope"
            >
              <div
                className="absolute inset-[-8px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, hsl(43, 50%, 75% / 0.35) 0%, transparent 70%)",
                }}
              />
            </button>
          )}

          {/* Tap hint */}
          {phase === "idle" && (
            <p
              className="absolute left-1/2 -translate-x-1/2 z-20 select-none"
              style={{
                bottom: "-44px",
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(10px, 2.4vw, 12px)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "0.22em",
                color: "hsl(25, 12%, 55%)",
                animation: "hint-pulse 2.8s ease-in-out infinite",
              }}
            >
              tap the seal
            </p>
          )}
        </div>
      </div>

      {/* Background also slides up with envelope */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(30, 25%, 94%) 0%, hsl(28, 20%, 90%) 50%, hsl(25, 18%, 86%) 100%)",
          transform: isSliding ? "translateY(-110vh)" : "translateY(0)",
          transition: isSliding ? "transform 1.6s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
          zIndex: -1,
        }}
      />

      <style>{`
        @keyframes hint-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        @keyframes seal-crack {
          from { opacity: 0; transform: translate(-50%, -50%) scaleX(0.2); }
          to { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default EnvelopeAnimation;
