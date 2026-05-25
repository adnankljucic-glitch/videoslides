import mausLogo from "@/assets/maus-logo.svg";
import boostrRocket from "@/assets/boostr-rocket.png";


const BG_VIDEO =
  "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/services_nofade.mp4";

const SLIDE_GRADIENT =
  "radial-gradient(ellipse 90% 80% at 18% 22%, #2a1a6e 0%, #1a0d4a 28%, #0d0628 62%, #060218 100%)";

export function Slide03Boostr() {
  return (
    <div className="relative w-full h-full overflow-hidden text-white">
      {/* Background video */}
      <video
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Slide-2 gradient overlay at 70% */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: SLIDE_GRADIENT, opacity: 0.7 }}
      />
      {/* Subtle accent vignette (matches SlideLayout) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 90%, rgba(80, 50, 200, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full h-full">

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
        04 / —
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
            {/* Pulsing orbit halo */}
            <div
              className="absolute rounded-full orbit-pulse"
              style={{
                width: 460,
                height: 460,
                left: "50%",
                top: "50%",
                marginLeft: -230,
                marginTop: -230,
                border: "1px solid rgba(197,184,255,0.35)",
                boxShadow:
                  "inset 0 0 60px rgba(138,123,255,0.25), 0 0 80px rgba(79,70,229,0.35)",
              }}
            />
            {/* Rocket */}
            <img
              src={boostrRocket}
              alt="Boostr"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rocket-float"
              style={{
                width: 360,
                height: 360,
                filter: "drop-shadow(0 30px 60px rgba(20,10,80,0.55))",
              }}
            />
          </div>

          {/* BOOSTR wordmark */}
          <div
            className="mt-[28px]"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#ffffff",
            }}
          >
            BOOSTR
          </div>

          <div
            className="mt-[14px] text-white/55"
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
      </div>
    </div>
  );
}
