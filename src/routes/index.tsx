import { createFileRoute } from "@tanstack/react-router";
import { ScaledSlide } from "@/components/slides/ScaledSlide";
import { Slide01Intro } from "@/components/slides/Slide01Intro";

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

function Index() {
  return (
    <ScaledSlide>
      <Slide01Intro />
    </ScaledSlide>
  );
}
