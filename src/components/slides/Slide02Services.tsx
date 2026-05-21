import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

const services = [
  {
    n: "01",
    title: "Strategy & Execution",
    body: "From idea to launch. We help you make the right decisions and execute fast — strategy that actually delivers results.",
    tags: ["Business Development", "Product & Concept", "Digital Transformation"],
  },
  {
    n: "02",
    title: "Software Engineering",
    body: "Robust technical foundations that let enterprises scale. No shortcuts, no technical debt — secure, scalable software that performs.",
    tags: ["Specs Driven Development", "Legacy Modernization", "Platform Engineering"],
  },
  {
    n: "03",
    title: "AI & Automation",
    body: "We implement AI and intelligent workflows that save time, reduce errors, and free up resources for what creates value.",
    tags: ["Intelligent Workflows", "LLM Integration", "Process Automation"],
  },
  {
    n: "04",
    title: "Scale & Performance",
    body: "Infrastructure that grows with you. We optimize performance, reduce costs, and ensure your systems can handle growth.",
    tags: ["Performance & Stability", "On-demand Scale", "Data-driven Ops"],
  },
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
          fontWeight: 400,
          letterSpacing: "0.2em",
          animationDelay: "100ms",
        }}
      >
        02 / —
      </div>

      {/* Kicker */}
      <div
        className="absolute top-[220px] left-[160px] text-white/55 slide-fade-in"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          animationDelay: "200ms",
        }}
      >
        Services
      </div>

      {/* Headline */}
      <h1
        className="absolute top-[270px] left-[160px] text-white slide-rise"
        style={{
          fontFamily: "'Inria Serif', 'Times New Roman', serif",
          fontSize: 104,
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-0.03em",
          maxWidth: 1500,
          animationDelay: "300ms",
        }}
      >
        Strategy, engineering<br />and AI — unified.
      </h1>

      {/* Services grid */}
      <div
        className="absolute left-[160px] right-[160px] grid grid-cols-2 gap-x-[80px] gap-y-[56px]"
        style={{ top: 600 }}
      >
        {services.map((s, i) => (
          <div
            key={s.n}
            className="slide-rise"
            style={{ animationDelay: `${500 + i * 120}ms` }}
          >
            <div className="flex items-baseline gap-[20px]">
              <span
                className="text-white/35"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                }}
              >
                {s.n}
              </span>
              <h3
                className="text-white"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 40,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
            </div>
            <p
              className="mt-[14px] text-white/75"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.55,
                maxWidth: 720,
              }}
            >
              {s.body}
            </p>
            <div
              className="mt-[14px] flex flex-wrap gap-x-[18px] gap-y-[6px] text-white/45"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {s.tags.map((t, j) => (
                <span key={t} className="flex items-center gap-[18px]">
                  {t}
                  {j < s.tags.length - 1 && <span className="text-white/20">·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hairline accent */}
      <div
        className="absolute bottom-[60px] left-[160px] h-px slide-fade-in"
        style={{
          width: 120,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)",
          animationDelay: "1200ms",
        }}
      />
    </SlideLayout>
  );
}
