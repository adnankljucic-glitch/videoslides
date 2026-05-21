import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ScaledSlide } from "@/components/slides/ScaledSlide";
import { Slide01Intro } from "@/components/slides/Slide01Intro";
import { Slide02Services } from "@/components/slides/Slide02Services";

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

const slides = [Slide01Intro, Slide02Services];

function Index() {
  const [i, setI] = useState(1);

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
