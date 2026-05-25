import mausLogo from "@/assets/maus-logo.svg";

const BG_VIDEO =
  "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/intro_hosipital.mp4";

const SLIDE_GRADIENT =
  "radial-gradient(ellipse 90% 80% at 18% 22%, #2a1a6e 0%, #1a0d4a 28%, #0d0628 62%, #060218 100%)";

export function Slide07Systematic() {
  return (
    <div className="relative w-full h-full overflow-hidden text-white">
      <video
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-parallax-video"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-parallax-overlay"
        style={{ background: SLIDE_GRADIENT, opacity: 0.78 }}
      />

      <div className="relative w-full h-full">
        <img
          src={mausLogo}
          alt="MAUS"
          className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
          style={{ animationDelay: "100ms" }}
        />

        <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr] items-center gap-[80px] px-[160px]">
          {/* LEFT */}
          <div>
            <div
              className="text-white/60 slide-fade-in"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                animationDelay: "200ms",
              }}
            >
              Healthcare · AI &amp; Automation
            </div>

            <div
              className="mt-[28px] text-white slide-rise"
              style={{
                fontFamily: "'Inria Serif', 'Times New Roman', serif",
                fontSize: 160,
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                animationDelay: "350ms",
              }}
            >
              Systematic
            </div>

            <h1
              className="mt-[44px] text-white/95 slide-rise"
              style={{
                fontFamily: "'Inria Serif', 'Times New Roman', serif",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                animationDelay: "550ms",
              }}
            >
              NLP-powered homecare
              <br />
              documentation.
            </h1>

            <p
              className="mt-[32px] text-white/75 slide-rise"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 1.45,
                maxWidth: 720,
                animationDelay: "750ms",
              }}
            >
              Caregivers speak — forms fill themselves.
            </p>
          </div>

          {/* RIGHT — stat callouts */}
          <div className="flex flex-col gap-[32px]">
            {[
              { value: "↓ 74%", label: "documentation time", delay: 850 },
              { value: "99.1%", label: "field accuracy", delay: 1000 },
            ].map((s) => (
              <div
                key={s.label}
                className="slide-rise"
                style={{
                  padding: "44px 48px",
                  borderRadius: 24,
                  background:
                    "linear-gradient(155deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.22), 0 24px 60px rgba(10,5,40,0.45)",
                  backdropFilter: "blur(6px)",
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
                  className="mt-[16px] text-white/70"
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
      </div>
    </div>
  );
}
