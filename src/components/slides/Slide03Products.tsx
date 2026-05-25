import mausLogo from "@/assets/maus-logo.svg";
import boostrRocket from "@/assets/boostr-rocket.png";
import mausLmsLogo from "@/assets/maus-lms-logo.svg";
import rssheapLogo from "@/assets/rssheap-logo.svg";
import { SlideLayout } from "./SlideLayout";

const products = [
  {
    name: "Boostr",
    logo: boostrRocket,
    description: "Recognition Platform",
  },
  {
    name: "MAUS LMS",
    logo: mausLmsLogo,
    description: "Learning Management",
  },
  {
    name: "rssheap",
    logo: rssheapLogo,
    description: "RSS Aggregator",
  },
];

export function Slide03Products() {
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
        03 / —
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[160px]">
        {/* Header */}
        <div className="text-center">
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
            Our Products
          </div>

          <h1
            className="mt-[36px] text-white slide-rise"
            style={{
              fontFamily: "'Inria Serif', 'Times New Roman', serif",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              animationDelay: "300ms",
            }}
          >
            Tools we built for ourselves —
            <br />
            now available for everyone.
          </h1>
        </div>

        {/* Product cards */}
        <div className="mt-[80px] grid grid-cols-3 gap-[40px]">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="flex flex-col items-center slide-rise"
              style={{ animationDelay: `${500 + i * 150}ms` }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: 28,
                  background:
                    "linear-gradient(155deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015))",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.18), 0 20px 50px rgba(10,5,40,0.35)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="object-contain"
                  style={{
                    width: 160,
                    height: 160,
                    filter: p.name === "Boostr"
                      ? "drop-shadow(0 10px 30px rgba(20,10,80,0.4))"
                      : "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                  }}
                />
              </div>

              <div
                className="mt-[28px] text-white"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {p.name}
              </div>

              <div
                className="mt-[8px] text-white/50"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 18,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                {p.description}
              </div>
            </div>
          ))}
        </div>
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
