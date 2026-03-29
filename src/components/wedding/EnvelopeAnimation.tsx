import { useState, useCallback } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<"sealed" | "opening" | "revealing" | "done">("sealed");

  const handleSealClick = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    setTimeout(() => setPhase("revealing"), 1200);
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2400);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${
        phase === "revealing" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Full-screen envelope background */}
      <div className="absolute inset-0" style={{ background: "hsl(40, 30%, 88%)" }} />

      {/* Letter content peeking out when opened */}
      <div
        className={`absolute inset-x-[8%] sm:inset-x-[15%] md:inset-x-[25%] transition-all duration-1000 ease-out flex items-center justify-center ${
          phase === "opening" || phase === "revealing"
            ? "top-[5%] h-[45%]"
            : "top-[30%] h-[40%]"
        }`}
        style={{
          background: "hsl(var(--ivory))",
          borderRadius: "8px 8px 0 0",
          boxShadow: "0 -4px 30px hsl(var(--sage) / 0.15)",
        }}
      >
        <div className="text-center px-6">
          <p
            className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "hsl(var(--sage))" }}
          >
            You are invited
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "hsl(var(--charcoal))" }}
          >
            Pau & Jakob
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-8 sm:w-12" style={{ background: "hsl(var(--gold))" }} />
            <p
              className="font-body text-sm sm:text-base italic"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              January 9, 2027
            </p>
            <div className="h-px w-8 sm:w-12" style={{ background: "hsl(var(--gold))" }} />
          </div>
          <p
            className="font-body text-xs sm:text-sm mt-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Las Mañanitas • Cuernavaca, Mexico
          </p>
        </div>
      </div>

      {/* Bottom fold - covers lower half */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          background: "hsl(40, 28%, 82%)",
          clipPath: "polygon(0 100%, 100% 100%, 50% 10%)",
          zIndex: 2,
        }}
      />

      {/* Left fold */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: "100%",
          height: "100%",
          background: "hsl(40, 30%, 85%)",
          clipPath: "polygon(0 25%, 0 100%, 50% 55%)",
          zIndex: 3,
        }}
      />

      {/* Right fold */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "100%",
          height: "100%",
          background: "hsl(40, 30%, 85%)",
          clipPath: "polygon(100% 25%, 100% 100%, 50% 55%)",
          zIndex: 3,
        }}
      />

      {/* Top flap - opens on click */}
      <div
        className={`absolute top-0 left-0 right-0 origin-top transition-transform ease-in-out ${
          phase === "opening" || phase === "revealing"
            ? "[transform:rotateX(180deg)] duration-1000"
            : "[transform:rotateX(0deg)] duration-700"
        }`}
        style={{
          height: "55%",
          background: "hsl(40, 28%, 84%)",
          clipPath: "polygon(0 0, 100% 0, 50% 80%)",
          transformStyle: "preserve-3d",
          zIndex: phase === "sealed" ? 10 : 1,
        }}
      >
        {/* Back side of flap (visible when opened) */}
        <div
          className="absolute inset-0"
          style={{
            background: "hsl(40, 25%, 80%)",
            clipPath: "polygon(0 0, 100% 0, 50% 80%)",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        />
      </div>

      {/* Wax seal - clickable */}
      <button
        onClick={handleSealClick}
        className={`absolute left-1/2 -translate-x-1/2 z-20 rounded-full flex items-center justify-center transition-all ${
          phase === "sealed"
            ? "cursor-pointer hover:scale-110 active:scale-95"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: "42%",
          width: "clamp(64px, 12vw, 96px)",
          height: "clamp(64px, 12vw, 96px)",
          background: "radial-gradient(circle at 35% 35%, hsl(38, 55%, 58%), hsl(38, 50%, 45%))",
          boxShadow:
            "0 4px 20px hsl(var(--gold) / 0.5), inset 0 1px 2px hsl(38, 60%, 70%)",
          transitionDuration: "300ms",
        }}
        aria-label="Open envelope"
      >
        <span
          className="font-display text-lg sm:text-xl md:text-2xl select-none"
          style={{ color: "hsl(var(--ivory))" }}
        >
          P&J
        </span>
      </button>

      {/* Tap hint */}
      {phase === "sealed" && (
        <p
          className="absolute left-1/2 -translate-x-1/2 font-sans text-xs tracking-widest uppercase animate-pulse"
          style={{ top: "56%", color: "hsl(var(--muted-foreground))", zIndex: 20 }}
        >
          Tap to open
        </p>
      )}
    </div>
  );
};

export default EnvelopeAnimation;
