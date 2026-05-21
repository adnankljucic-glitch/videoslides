import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

const services = [
  "Strategy & Execution",
  "Software Engineering",
  "AI & Automation",
  "Scale & Performance",
];

export function Slide02Services() {
  return (
    <SlideLayout>
      {/* Logo */}
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] left-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      {/* Page indicator */}
      <div
        className="absolute top-[96px] right-[100px] text-white/50 slide-fade-in"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 20,
          letterSpacing: "0.2em",
          animationDelay: "100ms",
        }}
      >
        02 / —
      </div>

      {/* Kicker */}
      <div
        className="absolute top-[260px] left-[160px] text-white/55 slide-fade-in"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          animationDelay: "200ms",
        }}
      >
        Services
      </div>

      {/* Headline — big for TV */}
      <h1
        className="absolute top-[320px] left-[160px] text-white slide-rise"
        style={{
          fontFamily: "'Inria Serif', 'Times New Roman', serif",
          fontSize: 140,
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-0.03em",
          maxWidth: 1600,
          animationDelay: "300ms",
        }}
      >
        Strategy, engineering<br />and AI — unified.
      </h1>

      {/* Small service list — no body copy */}
      <div
        className="absolute left-[160px] right-[160px] flex flex-wrap items-center gap-x-[56px] gap-y-[20px]"
        style={{ bottom: 140 }}
      >
        {services.map((s, i) => (
          <div
            key={s}
            className="flex items-center gap-[56px] slide-fade-in"
            style={{ animationDelay: `${700 + i * 150}ms` }}
          >
            <span
              className="text-white/90"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {s}
            </span>
            {i < services.length - 1 && (
              <span className="text-white/25" style={{ fontSize: 28 }}>·</span>
            )}
          </div>
        ))}
      </div>

      {/* Hairline accent */}
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
