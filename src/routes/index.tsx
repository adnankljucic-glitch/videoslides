import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ScaledSlide } from "@/components/slides/ScaledSlide";
import { Slide01Intro } from "@/components/slides/Slide01Intro";
import { Slide02Services } from "@/components/slides/Slide02Services";
import { Slide03Products } from "@/components/slides/Slide03Products";
import { Slide03Boostr } from "@/components/slides/Slide03Boostr";
import { Slide04LMS } from "@/components/slides/Slide04LMS";
import { Slide05Rssheap } from "@/components/slides/Slide05Rssheap";
import { Slide06Cases } from "@/components/slides/Slide06Cases";
import { Slide07Systematic } from "@/components/slides/Slide07Systematic";
import { Slide08Nordsee } from "@/components/slides/Slide08Nordsee";
import { Slide09RunEvents } from "@/components/slides/Slide09RunEvents";
import { Slide10Outro } from "@/components/slides/Slide10Outro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAUS — Video Presentation" },
      {
        name: "description",
        content:
          "MAUS — a software consultancy built for enterprises that refuse to compromise on quality. Aarhus · Sarajevo · Building globally.",
      },
      { property: "og:title", content: "MAUS — Video Presentation" },
      {
        property: "og:description",
        content:
          "A software consultancy built for enterprises that refuse to compromise on quality.",
      },
    ],
  }),
  component: Index,
});

const slides = [Slide01Intro, Slide02Services, Slide03Products, Slide03Boostr, Slide04LMS, Slide05Rssheap, Slide06Cases, Slide07Systematic, Slide08Nordsee, Slide09RunEvents, Slide10Outro];

function Index() {
  const [i, setI] = useState(() => {
    if (typeof window === "undefined") return 0;
    const p = new URLSearchParams(window.location.search).get("slide");
    const n = p ? parseInt(p, 10) - 1 : 0;
    return Number.isFinite(n) && n >= 0 && n < slides.length ? n : 0;
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") setI((v) => Math.min(v + 1, slides.length - 1));
      else if (e.key === "ArrowLeft") setI((v) => Math.max(v - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Current = slides[i];
  return (
    <>
      <ScaledSlide key={i}>
        <Current />
      </ScaledSlide>
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-8 rounded-full transition ${
              idx === i ? "bg-white" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}
