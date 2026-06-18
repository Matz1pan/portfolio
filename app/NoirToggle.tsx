"use client";

import { useState } from "react";

export default function NoirToggle() {
  const [noir, setNoir] = useState(false);

  return (
    <>
      {/* Graustufen-Schicht */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 900,
          pointerEvents: "none",
          backdropFilter: noir ? "grayscale(1) contrast(1.08)" : "none",
          WebkitBackdropFilter: noir ? "grayscale(1) contrast(1.08)" : "none",
          transition: "backdrop-filter 0.4s ease",
        }}
      />

      {/* Filmkorn + Flacker-Schicht */}
      {noir && (
        <>
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
            <filter id="filmgrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="1.4" intercept="-0.1" />
              </feComponentTransfer>
            </filter>
          </svg>
          <div
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 901,
              pointerEvents: "none",
              filter: "url(#filmgrain)",
              opacity: 0.38,
              mixBlendMode: "multiply",
              animation: "grainShift 0.32s steps(2) infinite",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 902,
              pointerEvents: "none",
              background: "#000",
              opacity: 0.02,
              animation: "filmFlicker 2.4s ease-in-out infinite",
            }}
          />
          {/* leichte Vignette für Kino-Look */}
          <div
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 903,
              pointerEvents: "none",
              boxShadow: "inset 0 0 180px rgba(0,0,0,0.45)",
            }}
          />
          <style>{`
            @keyframes grainShift {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(-4%, 3%); }
              50%  { transform: translate(3%, -3%); }
              75%  { transform: translate(-2%, -4%); }
              100% { transform: translate(4%, 2%); }
            }
            @keyframes filmFlicker {
              0%   { opacity: 0.015; }
              50%  { opacity: 0.035; }
              100% { opacity: 0.015; }
            }
          `}</style>
        </>
      )}

      {/* Schalter */}
      <button
        onClick={() => setNoir((v) => !v)}
        aria-label="Serious Noir umschalten"
        title="Serious Noir"
        style={{
          position: "fixed",
          top: "13px",
          right: "16px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "9px",
          padding: "7px 11px",
          borderRadius: "6px",
          cursor: "pointer",
          border: "1px solid #3a3a3a",
          background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          fontFamily: "var(--font-display)",
        }}
      >
        {/* Diode */}
        <span style={{
          width: "9px", height: "9px", borderRadius: "50%",
          background: noir ? "#ff2200" : "#4a1500",
          boxShadow: noir ? "0 0 9px 1px #ff2200" : "inset 0 1px 2px rgba(0,0,0,0.6)",
          transition: "all 0.25s", flexShrink: 0,
        }} />

        {/* Kippschalter */}
        <span style={{
          position: "relative", width: "24px", height: "15px", borderRadius: "3px",
          background: "#0d0d0d", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)", flexShrink: 0,
        }}>
          <span style={{
            position: "absolute", left: "3px", right: "3px", height: "5px",
            top: noir ? "2px" : "8px", borderRadius: "2px",
            background: "linear-gradient(180deg, #e8e8e8, #9a9a9a)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
            transition: "top 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
          }} />
        </span>

        {/* Label */}
        <span style={{
          fontSize: "10px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase",
          color: noir ? "#ff4a2a" : "#999", transition: "color 0.25s", whiteSpace: "nowrap",
        }}>
          Noir
        </span>
      </button>
    </>
  );
}