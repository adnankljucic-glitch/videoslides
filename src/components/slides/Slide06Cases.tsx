import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

const industries = ["Healthcare", "Booking & Tourism", "Events & Ticketing"];

export function Slide06Cases() {
  return (
    <SlideLayout>
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[160px]">
        <div
          className="text-white/60 slide-fade-in"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            animationDelay: "200ms",
          }}
        >
          Cases
        </div>

        <h1
          className="mt-[32px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            animationDelay: "350ms",
          }}
        >
          Built for the industries
          <br />
          that move the world.
        </h1>

        <div className="mt-[56px] flex flex-wrap items-baseline justify-center gap-x-[72px] gap-y-[20px]">
          {industries.map((name, i) => (
            <span
              key={name}
              className="text-white slide-rise"
              style={{
                fontFamily: "'Inria Serif', 'Times New Roman', serif",
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animationDelay: `${550 + i * 160}ms`,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-[60px] left-[160px] h-px slide-fade-in"
        style={{
          width: 120,
          background: "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)",
          animationDelay: "1200ms",
        }}
      />
    </SlideLayout>
  );
}
