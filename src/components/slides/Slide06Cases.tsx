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

      <div className="absolute inset-0 flex flex-col justify-center px-[160px]">
        <div
          className="text-white/55 slide-fade-in"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            animationDelay: "200ms",
          }}
        >
          Cases
        </div>

        <h1
          className="mt-[36px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 120,
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            animationDelay: "300ms",
          }}
        >
          Built for the industries
          <br />
          that move the world.
        </h1>

        <div className="mt-[90px] flex flex-wrap items-baseline gap-x-[80px] gap-y-[24px]">
          {industries.map((name, i) => (
            <span
              key={name}
              className="text-white slide-rise"
              style={{
                fontFamily: "'Inria Serif', serif",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animationDelay: `${600 + i * 180}ms`,
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
          animationDelay: "1400ms",
        }}
      />
    </SlideLayout>
  );
}
