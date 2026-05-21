import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

export function Slide01Intro() {
  return (
    <SlideLayout>
      {/* Logo, top left */}
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] left-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      {/* Page indicator, top right */}
      <div
        className="absolute top-[96px] right-[100px] text-white/50 slide-fade-in"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: "0.2em",
          animationDelay: "100ms",
        }}
      >
        01 / —
      </div>

      {/* Centered headline + sub */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[160px] text-center">
        <h1
          className="text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 200,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            animationDelay: "300ms",
          }}
        >
          We are MAUS.
        </h1>

        <p
          className="mt-[56px] text-white/85 slide-rise"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 36,
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: "0",
            maxWidth: 1300,
            animationDelay: "650ms",
          }}
        >
          A software consultancy built for enterprises
          <br />
          that refuse to compromise on quality.
        </p>

        <div
          className="mt-[96px] flex items-center gap-[28px] text-white/60 slide-fade-in"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            animationDelay: "1000ms",
          }}
        >
          <span>Aarhus</span>
          <span className="text-white/30">·</span>
          <span>Sarajevo</span>
          <span className="text-white/30">·</span>
          <span>Building globally</span>
        </div>
      </div>

      {/* Hairline accent */}
      <div
        className="absolute bottom-[90px] left-1/2 -translate-x-1/2 h-px slide-fade-in"
        style={{
          width: 120,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          animationDelay: "1200ms",
        }}
      />
    </SlideLayout>
  );
}
