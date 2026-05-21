import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

export function Slide03Boostr() {
  return (
    <SlideLayout>
      {/* MAUS logo */}
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

      {/* Two-column layout */}
      <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr] items-center gap-[80px] px-[160px]">
        {/* LEFT — copy */}
        <div>
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
              fontSize: 140,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              animationDelay: "300ms",
            }}
          >
            Recognize.
            <br />
            Reward.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c5b8ff 0%, #8a7bff 60%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Repeat.
            </span>
          </h1>

          <p
            className="mt-[56px] text-white/80 slide-rise"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.55,
              maxWidth: 760,
              animationDelay: "700ms",
            }}
          >
            Start building a culture of appreciation today.
            <br />
            Get Boostr for your organization and see
            <br />
            the difference recognition makes.
          </p>
        </div>

        {/* RIGHT — Boostr lockup */}
        <div className="flex flex-col items-center justify-center slide-rise" style={{ animationDelay: "500ms" }}>
          <div
            className="relative flex items-center justify-center"
            style={{ width: 520, height: 520 }}
          >
            {/* Soft glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(138,123,255,0.45) 0%, rgba(79,70,229,0.2) 35%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            {/* Disc */}
            <div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 420,
                height: 420,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.25), 0 30px 80px rgba(20,10,80,0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 96,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #c5b8ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Boostr
              </span>
            </div>
          </div>

          <div
            className="mt-[28px] text-white/55"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 18,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
            }}
          >
            Recognition Platform
          </div>
        </div>
      </div>

      {/* Hairline accent */}
      <div
        className="absolute bottom-[60px] left-[160px] h-px slide-fade-in"
        style={{
          width: 120,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)",
          animationDelay: "1400ms",
        }}
      />
    </SlideLayout>
  );
}
