import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

const services = [
  { n: "01", title: "Strategy & Execution" },
  { n: "02", title: "Software Engineering" },
  { n: "03", title: "AI & Automation" },
  { n: "04", title: "Scale & Performance" },
];

export function Slide02Services() {
  return (
    <SlideLayout>
      {/* Logo */}
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      {/* Two-column body */}
      <div className="absolute inset-0 grid grid-cols-[1.05fr_1fr] items-center gap-[80px] px-[160px]">
        {/* LEFT */}
        <div>
          <div
            className="text-white/55 slide-fade-in"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              animationDelay: "200ms",
            }}
          >
            Services
          </div>

          <h1
            className="mt-[36px] text-white slide-rise"
            style={{
              fontFamily: "'Inria Serif', 'Times New Roman', serif",
              fontSize: 110,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              animationDelay: "300ms",
            }}
          >
            Strategy,
            <br />
            engineering
            <br />
            and AI unified.
          </h1>

          <p
            className="mt-[48px] text-white/75 slide-rise"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.55,
              maxWidth: 720,
              animationDelay: "650ms",
            }}
          >
            From idea to production. No shortcuts,
            <br />
            no technical debt.
          </p>
        </div>

        {/* RIGHT — 4 service boxes */}
        <div className="grid grid-cols-2 gap-[28px]">
          {services.map((s, i) => (
            <div
              key={s.n}
              className="relative flex flex-col justify-between slide-rise"
              style={{
                height: 280,
                padding: "32px 32px 28px",
                borderRadius: 20,
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015))",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.18), 0 20px 50px rgba(10,5,40,0.35)",
                backdropFilter: "blur(4px)",
                animationDelay: `${600 + i * 120}ms`,
              }}
            >
              <span
                className="text-white/40"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 24,
                  letterSpacing: "0.15em",
                }}
              >
                {s.n}
              </span>
              <h3
                className="text-white"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 38,
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
            </div>
          ))}
        </div>
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
