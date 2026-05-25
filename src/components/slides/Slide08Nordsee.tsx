import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

export function Slide08Nordsee() {
  return (
    <SlideLayout>
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center px-[160px]">
        {/* Logo placeholder */}
        <div
          className="flex items-center justify-center slide-fade-in"
          style={{
            width: 340,
            height: 80,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.05)",
            fontFamily: "'Inria Serif', serif",
            fontSize: 30,
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "-0.02em",
            animationDelay: "200ms",
          }}
        >
          Nordsee Holiday
        </div>

        <div
          className="mt-[40px] text-white/55 slide-fade-in"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            animationDelay: "300ms",
          }}
        >
          Booking &amp; Tourism · Agentic AI
        </div>

        <h1
          className="mt-[32px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            animationDelay: "400ms",
          }}
        >
          650+ holiday homes.
          <br />
          One conversation.
        </h1>

        <p
          className="mt-[48px] text-white/75 slide-rise"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 34,
            fontWeight: 400,
            lineHeight: 1.45,
            maxWidth: 1100,
            animationDelay: "600ms",
          }}
        >
          Guests describe their stay —
          <br />
          the AI finds, prices, and books it.
        </p>
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
