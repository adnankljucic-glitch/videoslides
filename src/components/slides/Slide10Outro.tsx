import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

export function Slide10Outro() {
  return (
    <SlideLayout>
      {/* Soft radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(140,110,255,0.28), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[160px]">
        <img
          src={mausLogo}
          alt="MAUS"
          className="h-[120px] w-auto slide-fade-in"
          style={{ animationDelay: "100ms" }}
        />

        <p
          className="mt-[48px] text-white/85 slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 40,
            fontWeight: 400,
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            maxWidth: 1280,
            animationDelay: "300ms",
          }}
        >
          We're a development team passionate about
          <br />
          creating tools that bring teams together.
        </p>

        <h1
          className="mt-[40px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animationDelay: "500ms",
          }}
        >
          Looking to build something amazing
          <br />
          for your organization?
        </h1>

        <div
          className="mt-[40px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', serif",
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            animationDelay: "750ms",
          }}
        >
          Let's work together.
        </div>

        <div
          className="mt-[48px] flex items-center gap-[28px] text-white/80 slide-fade-in"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "0.04em",
            animationDelay: "950ms",
          }}
        >
          <a href="mailto:hello@maus.ba" className="hover:text-white transition">
            hello@maus.ba
          </a>
          <span className="text-white/30">·</span>
          <a href="https://maus.ba" className="hover:text-white transition">
            maus.ba
          </a>
        </div>
      </div>
    </SlideLayout>
  );
}
