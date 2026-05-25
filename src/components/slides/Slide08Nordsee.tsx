import mausLogo from "@/assets/maus-logo.svg";

const BG_VIDEO =
  "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/intro_holiday.mp4";

const SLIDE_GRADIENT =
  "radial-gradient(ellipse 90% 80% at 18% 22%, #2a1a6e 0%, #1a0d4a 28%, #0d0628 62%, #060218 100%)";

export function Slide08Nordsee() {
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

        <div className="absolute inset-0 flex flex-col justify-center px-[160px]">
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
            Booking &amp; Tourism · Agentic AI
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
            Nordsee Holiday
          </div>

          <h1
            className="mt-[48px] text-white/95 slide-rise"
            style={{
              fontFamily: "'Inria Serif', 'Times New Roman', serif",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 1500,
              animationDelay: "550ms",
            }}
          >
            Booking solutions for the
            <br />
            holiday industry.
          </h1>

          <p
            className="mt-[36px] text-white/75 slide-rise"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.45,
              maxWidth: 1200,
              animationDelay: "750ms",
            }}
          >
            650+ holiday homes. One conversation. Guests describe their stay —
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
      </div>
    </div>
  );
}
