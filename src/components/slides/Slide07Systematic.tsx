import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

export function Slide07Systematic() {
  return (
    <SlideLayout>
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      <div className="absolute inset-0 grid grid-cols-[1.1fr_1fr] items-center gap-[80px] px-[160px]">
        {/* LEFT */}
        <div>
          {/* Logo placeholder */}
          <div
            className="flex items-center justify-center slide-fade-in"
            style={{
              width: 280,
              height: 80,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.05)",
              fontFamily: "'Inria Serif', serif",
              fontSize: 32,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.02em",
              animationDelay: "200ms",
            }}
          >
            Systematic
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
            Healthcare · AI &amp; Automation
          </div>

          <h1
            className="mt-[32px] text-white slide-rise"
            style={{
              fontFamily: "'Inria Serif', 'Times New Roman', serif",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              animationDelay: "400ms",
            }}
          >
            NLP-powered homecare
            <br />
            documentation.
          </h1>

          <p
            className="mt-[36px] text-white/75 slide-rise"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.45,
              maxWidth: 720,
              animationDelay: "600ms",
            }}
          >
            Caregivers speak — forms fill themselves.
          </p>
        </div>

        {/* RIGHT — stat callouts */}
        <div className="flex flex-col gap-[32px]">
          {[
            { value: "↓ 74%", label: "documentation time", delay: 700 },
            { value: "99.1%", label: "field accuracy", delay: 850 },
          ].map((s) => (
            <div
              key={s.label}
              className="slide-rise"
              style={{
                padding: "44px 48px",
                borderRadius: 24,
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.2), 0 24px 60px rgba(10,5,40,0.4)",
                backdropFilter: "blur(4px)",
                animationDelay: `${s.delay}ms`,
              }}
            >
              <div
                className="text-white"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontSize: 96,
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-[16px] text-white/65"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 26,
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </div>
            </div>
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
