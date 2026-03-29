import { useState, useEffect } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<"sealed" | "opening" | "opened" | "revealing" | "done">("sealed");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("opening"), 800),
      setTimeout(() => setPhase("opened"), 1600),
      setTimeout(() => setPhase("revealing"), 2200),
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        phase === "revealing" ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "hsl(var(--sage-muted))" }}
    >
      {/* Envelope container */}
      <div className="relative w-[340px] h-[240px] sm:w-[420px] sm:h-[280px] md:w-[500px] md:h-[320px]">
        
        {/* Shadow under envelope */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-foreground/10 rounded-[50%] blur-lg" />

        {/* Envelope body */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ background: "hsl(40, 30%, 88%)" }}
        >
          {/* Inner card / letter peeking out */}
          <div
            className={`absolute left-[10%] right-[10%] h-[85%] rounded-t-md flex items-center justify-center transition-all duration-1000 ease-out ${
              phase === "opening" || phase === "opened" || phase === "revealing"
                ? "-top-[45%]"
                : "top-[12%]"
            }`}
            style={{ background: "hsl(var(--ivory))", boxShadow: "0 2px 15px hsl(var(--sage) / 0.15)" }}
          >
            <div className="text-center px-4">
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "hsl(var(--sage))" }}>
                You are invited
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl" style={{ color: "hsl(var(--charcoal))" }}>
                Pau & Jakob
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-px w-6 sm:w-10" style={{ background: "hsl(var(--gold))" }} />
                <p className="font-body text-xs sm:text-sm italic" style={{ color: "hsl(var(--muted-foreground))" }}>
                  January 9, 2027
                </p>
                <div className="h-px w-6 sm:w-10" style={{ background: "hsl(var(--gold))" }} />
              </div>
            </div>
          </div>

          {/* Bottom fold triangle */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "55%",
              background: "hsl(40, 28%, 82%)",
              clipPath: "polygon(0 100%, 100% 100%, 50% 15%)",
            }}
          />
          
          {/* Left fold triangle */}
          <div
            className="absolute bottom-0 left-0"
            style={{
              width: "100%",
              height: "100%",
              background: "hsl(40, 30%, 85%)",
              clipPath: "polygon(0 30%, 0 100%, 50% 60%)",
            }}
          />
          
          {/* Right fold triangle */}
          <div
            className="absolute bottom-0 right-0"
            style={{
              width: "100%",
              height: "100%",
              background: "hsl(40, 30%, 85%)",
              clipPath: "polygon(100% 30%, 100% 100%, 50% 60%)",
            }}
          />
        </div>

        {/* Top flap - this opens */}
        <div
          className={`absolute top-0 left-0 right-0 origin-top transition-transform duration-800 ease-in-out ${
            phase === "opening" || phase === "opened" || phase === "revealing"
              ? "[transform:rotateX(180deg)]"
              : "[transform:rotateX(0deg)]"
          }`}
          style={{
            height: "55%",
            background: "hsl(40, 28%, 84%)",
            clipPath: "polygon(0 0, 100% 0, 50% 85%)",
            transformStyle: "preserve-3d",
            zIndex: phase === "sealed" ? 10 : 1,
          }}
        >
          {/* Seal */}
          <div
            className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-opacity duration-300 ${
              phase !== "sealed" ? "opacity-0" : "opacity-100"
            }`}
            style={{
              background: "hsl(var(--gold))",
              boxShadow: "0 2px 8px hsl(var(--gold) / 0.4)",
              backfaceVisibility: "hidden",
            }}
          >
            <span className="font-display text-sm sm:text-base" style={{ color: "hsl(var(--ivory))" }}>
              P&J
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeAnimation;
