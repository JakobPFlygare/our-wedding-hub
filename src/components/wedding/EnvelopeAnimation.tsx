import { useState, useCallback } from "react";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [phase, setPhase] = useState<"sealed" | "opening" | "revealing" | "done">("sealed");

  const handleSealClick = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    setTimeout(() => setPhase("revealing"), 1800);
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-1000 ${
        phase === "revealing" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ perspective: "1200px" }}
    >
      {/* Base envelope color */}
      <div className="absolute inset-0" style={{ background: "hsl(150, 22%, 35%)" }} />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, hsl(150, 22%, 40%) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, hsl(150, 20%, 38%) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 80%, hsl(150, 24%, 30%) 0%, transparent 50%)
          `,
        }}
      />

      {/* Linen / fiber texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100%) 2px, hsl(0 0% 100%) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, hsl(0 0% 100%) 3px, hsl(0 0% 100%) 4px)
          `,
        }}
      />

      {/* Floral pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="floral" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Stylized flower */}
            <circle cx="60" cy="60" r="4" fill="white" />
            <ellipse cx="60" cy="48" rx="6" ry="12" fill="white" opacity="0.7" />
            <ellipse cx="60" cy="72" rx="6" ry="12" fill="white" opacity="0.7" />
            <ellipse cx="48" cy="60" rx="12" ry="6" fill="white" opacity="0.7" />
            <ellipse cx="72" cy="60" rx="12" ry="6" fill="white" opacity="0.7" />
            <ellipse cx="51" cy="51" rx="5" ry="10" fill="white" opacity="0.5" transform="rotate(-45 51 51)" />
            <ellipse cx="69" cy="51" rx="5" ry="10" fill="white" opacity="0.5" transform="rotate(45 69 51)" />
            <ellipse cx="51" cy="69" rx="5" ry="10" fill="white" opacity="0.5" transform="rotate(45 51 69)" />
            <ellipse cx="69" cy="69" rx="5" ry="10" fill="white" opacity="0.5" transform="rotate(-45 69 69)" />
            {/* Small leaf accents */}
            <ellipse cx="30" cy="30" rx="3" ry="8" fill="white" opacity="0.4" transform="rotate(30 30 30)" />
            <ellipse cx="90" cy="90" rx="3" ry="8" fill="white" opacity="0.4" transform="rotate(-30 90 90)" />
            <ellipse cx="90" cy="30" rx="3" ry="8" fill="white" opacity="0.4" transform="rotate(-30 90 30)" />
            <ellipse cx="30" cy="90" rx="3" ry="8" fill="white" opacity="0.4" transform="rotate(30 30 90)" />
            {/* Tiny dots */}
            <circle cx="30" cy="60" r="1.5" fill="white" opacity="0.3" />
            <circle cx="90" cy="60" r="1.5" fill="white" opacity="0.3" />
            <circle cx="60" cy="30" r="1.5" fill="white" opacity="0.3" />
            <circle cx="60" cy="90" r="1.5" fill="white" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral)" />
      </svg>

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(150, 25%, 18% / 0.4) 100%)",
        }}
      />

      {/* Bottom fold with shadow crease */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          zIndex: 2,
        }}
      >
        {/* Shadow along the crease */}
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{
            background: "linear-gradient(180deg, hsl(150, 30%, 15% / 0.35) 0%, transparent 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, hsl(150, 22%, 28%) 0%, hsl(150, 22%, 33%) 100%)",
            clipPath: "polygon(0 100%, 100% 100%, 50% 10%)",
          }}
        />
      </div>

      {/* Left fold with shadow crease */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      >
        {/* Crease shadow */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(150, 30%, 15% / 0.3) 0%, transparent 8%)",
            clipPath: "polygon(0 25%, 0 100%, 50% 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, hsl(150, 22%, 30%) 0%, hsl(150, 23%, 35%) 100%)",
            clipPath: "polygon(0 25%, 0 100%, 50% 55%)",
          }}
        />
      </div>

      {/* Right fold with shadow crease */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      >
        {/* Crease shadow */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(-135deg, hsl(150, 30%, 15% / 0.3) 0%, transparent 8%)",
            clipPath: "polygon(100% 25%, 100% 100%, 50% 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, hsl(150, 22%, 30%) 0%, hsl(150, 23%, 34%) 100%)",
            clipPath: "polygon(100% 25%, 100% 100%, 50% 55%)",
          }}
        />
      </div>

      {/* Top flap — lifts with seal attached */}
      <div
        className={`absolute top-0 left-0 right-0 origin-top transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          phase === "opening" || phase === "revealing"
            ? "[transform:rotateX(175deg)] duration-[1800ms]"
            : "[transform:rotateX(0deg)]"
        }`}
        style={{
          height: "55%",
          transformStyle: "preserve-3d",
          zIndex: phase === "sealed" ? 10 : 5,
        }}
      >
        {/* Flap front face */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(150, 23%, 38%) 0%, hsl(150, 22%, 34%) 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 80%)",
            backfaceVisibility: "hidden",
          }}
        />
        {/* Flap floral texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 80%)",
            backfaceVisibility: "hidden",
          }}
        >
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
        {/* Crease shadow at fold line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            background: "linear-gradient(0deg, hsl(150, 30%, 15% / 0.4) 0%, transparent 100%)",
            clipPath: "polygon(0 100%, 100% 100%, 50% 0%)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Flap back face (visible when flipped) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, hsl(150, 18%, 42%) 0%, hsl(150, 20%, 38%) 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 80%)",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        />

        {/* WAX SEAL — attached to flap, lifts with it */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "62%",
            width: "clamp(80px, 15vw, 120px)",
            height: "clamp(80px, 15vw, 120px)",
            backfaceVisibility: "hidden",
            zIndex: 20,
          }}
        >
          {/* Seal shadow on envelope */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "hsl(150, 30%, 15% / 0.35)",
              filter: "blur(6px)",
              transform: "translateY(4px) scale(1.05)",
            }}
          />
          {/* Seal body — irregular wax edges */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 35% 35%, hsl(8, 55%, 48%) 0%, hsl(8, 50%, 38%) 50%, hsl(8, 45%, 30%) 100%)
              `,
              boxShadow: `
                inset 0 2px 4px hsl(8, 60%, 55% / 0.6),
                inset 0 -3px 6px hsl(8, 50%, 20% / 0.4),
                0 2px 8px hsl(0 0% 0% / 0.3)
              `,
            }}
          />
          {/* Wax drip irregularity */}
          <div
            className="absolute rounded-full"
            style={{
              top: "-4px",
              right: "8px",
              width: "18px",
              height: "14px",
              background: "hsl(8, 50%, 40%)",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: "-3px",
              left: "12px",
              width: "14px",
              height: "12px",
              background: "hsl(8, 48%, 36%)",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: "6px",
              left: "-3px",
              width: "12px",
              height: "10px",
              background: "hsl(8, 50%, 38%)",
              filter: "blur(1px)",
            }}
          />
          {/* Inner pressed ring */}
          <div
            className="absolute inset-[12%] rounded-full"
            style={{
              border: "2px solid hsl(8, 40%, 28% / 0.6)",
              boxShadow: "inset 0 1px 2px hsl(8, 60%, 55% / 0.3)",
            }}
          />
          {/* Monogram text — pressed/embossed look */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="select-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 3.5vw, 28px)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "hsl(8, 35%, 28%)",
                textShadow: "0 1px 1px hsl(8, 60%, 55% / 0.5)",
                letterSpacing: "0.05em",
              }}
            >
              P&J
            </span>
          </div>
        </div>
      </div>

      {/* Clickable overlay for seal area (since seal is inside transformed flap) */}
      {phase === "sealed" && (
        <button
          onClick={handleSealClick}
          className="absolute left-1/2 -translate-x-1/2 z-30 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
          style={{
            top: "calc(55% * 0.62 - clamp(40px, 7.5vw, 60px) + 55% * 0.18)",
            width: "clamp(80px, 15vw, 120px)",
            height: "clamp(80px, 15vw, 120px)",
            background: "transparent",
          }}
          aria-label="Open envelope"
        />
      )}

      {/* Tap hint */}
      {phase === "sealed" && (
        <p
          className="absolute left-1/2 -translate-x-1/2 font-sans text-[11px] tracking-[0.25em] uppercase z-30"
          style={{
            bottom: "38%",
            color: "hsl(150, 15%, 65%)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          Tap to open
        </p>
      )}
    </div>
  );
};

export default EnvelopeAnimation;
