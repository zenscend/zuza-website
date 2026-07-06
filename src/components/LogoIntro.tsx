"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "visible" | "exiting" | "done";

export default function LogoIntro() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    if (sessionStorage.getItem("zuza-intro-seen")) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("exiting"), 2000);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("zuza-intro-seen", "1");
    }, 2750);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "#0d0d0d",
        opacity: phase === "exiting" ? 0 : 1,
        transition: phase === "exiting" ? "opacity 0.65s ease-in 0.2s" : "none",
        pointerEvents: phase === "exiting" ? "none" : "auto",
      }}
    >
      {/* Soft yellow radial glow — same language as the hero section blobs */}
      <div
        className={`absolute rounded-full pointer-events-none ${
          phase === "visible" ? "intro-glow-pulse" : ""
        }`}
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(250,204,21,0.18) 0%, rgba(250,204,21,0.04) 45%, transparent 70%)",
          opacity: phase === "exiting" ? 0 : undefined,
          transition: phase === "exiting" ? "opacity 0.3s ease-in" : "none",
        }}
      />

      {/* Logo — no border, just sits atop the glow */}
      <div
        className={phase === "exiting" ? "intro-logo-exit" : ""}
        style={{ position: "relative", width: 150, height: 150 }}
      >
        <Image
          src="/zuza-logo.svg"
          alt="Zuza"
          fill
          sizes="150px"
          className="object-contain"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
