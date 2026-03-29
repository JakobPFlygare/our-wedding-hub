import { useState, useCallback } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<"sealed" | "opening" | "revealing" | "done">("sealed");

  const handleSealClick = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    setTimeout(() => setPhase("revealing"), 1400);
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2600);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-1000 ${
        phase === "revealing" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Full-screen envelope body */}
      <div className="absolute inset-0" style={{ background: "hsl(150, 25%, 38%)" }} />

      {/* Subtle envelope texture / gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(170deg, hsl(150, 25%, 42%) 0%, hsl(150, 25%, 35%) 50%, hsl(150, 25%, 30%) 100%)",
        }}
      />

      {/* Bottom fold triangle */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          background: "hsl(150, 24%, 32%)",
          clipPath: "polygon(0 100%, 100% 100%, 50% 12%)",
          zIndex: 2,
        }}
      />

      {/* Left fold */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: "100%",
          height: "100%",
          background: "hsl(150, 25%, 36%)",
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
          background: "hsl(150, 24%, 34%)",
          clipPath: "polygon(100% 25%, 100% 100%, 50% 55%)",
          zIndex: 3,
        }}
      />

      {/* Top flap */}
      <div
        className={`absolute top-0 left-0 right-0 origin-top transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] ${
          phase === "opening" || phase === "revealing"
            ? "[transform:rotateX(180deg)] duration-[1400ms]"
            : "[transform:rotateX(0deg)] duration-700"
        }`}
        style={{
          height: "55%",
          background: "hsl(150, 25%, 40%)",
          clipPath: "polygon(0 0, 100% 0, 50% 80%)",
          transformStyle: "preserve-3d",
          zIndex: phase === "sealed" ? 10 : 1,
        }}
      />

      {/* Wax seal - white, stamped look */}
      <button
        onClick={handleSealClick}
        className={`absolute left-1/2 -translate-x-1/2 z-20 rounded-full flex items-center justify-center transition-all ${
          phase === "sealed"
            ? "cursor-pointer hover:scale-105 active:scale-95"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: "42%",
          width: "clamp(72px, 14vw, 110px)",
          height: "clamp(72px, 14vw, 110px)",
          background: "hsl(40, 30%, 96%)",
          boxShadow:
            "inset 0 2px 4px hsl(0 0% 0% / 0.08), inset 0 -1px 2px hsl(0 0% 100% / 0.5), 0 1px 3px hsl(0 0% 0% / 0.15)",
          border: "3px solid hsl(40, 20%, 88%)",
          transitionDuration: "300ms",
        }}
        aria-label="Open envelope"
      >
        {/* Inner ring for stamped effect */}
        <div
          className="absolute inset-[6px] rounded-full"
          style={{
            border: "1.5px solid hsl(150, 20%, 55%)",
          }}
        />
        <span
          className="font-display text-lg sm:text-xl md:text-2xl select-none"
          style={{ color: "hsl(150, 25%, 40%)" }}
        >
          P&J
        </span>
      </button>

      {/* Tap hint */}
      {phase === "sealed" && (
        <p
          className="absolute left-1/2 -translate-x-1/2 font-sans text-[11px] tracking-[0.25em] uppercase animate-pulse"
          style={{ top: "57%", color: "hsl(150, 15%, 70%)", zIndex: 20 }}
        >
          Tap to open
        </p>
      )}
    </div>
  );
};

export default EnvelopeAnimation;
