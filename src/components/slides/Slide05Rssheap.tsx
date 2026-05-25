import mausLogo from "@/assets/maus-logo.svg";
import rssheapLogo from "@/assets/rssheap-logo.svg";

const BG_VIDEO =
  "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/services_nofade.mp4";

const SLIDE_GRADIENT =
  "radial-gradient(ellipse 90% 80% at 18% 22%, #2a1a6e 0%, #1a0d4a 28%, #0d0628 62%, #060218 100%)";

export function Slide05Rssheap() {
  return (
    <div className="relative w-full h-full overflow-hidden text-white">
      {/* Background video */}
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
        style={{ background: SLIDE_GRADIENT, opacity: 0.7 }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-parallax-overlay-slow"
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
          className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
          style={{ animationDelay: "100ms" }}
        />

        {/* Two-column layout */}
        <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr] items-center gap-[80px] px-[160px]">
          {/* LEFT — copy */}
          <div>
            <div
              className="text-white/55 slide-fade-in"
              style={{
                fontFamily: "'Barlow', sans-serif",
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
              Follow.
              <br />
              Stay.
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
                Informed.
              </span>
            </h1>

            <p
              className="mt-[56px] text-white/80 slide-rise"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.55,
                maxWidth: 760,
                animationDelay: "700ms",
              }}
            >
              Follow what matters in tech
              <br />
              without the noise.
              <br />
              A curated RSS aggregator built by MAUS,
              <br />
              free for everyone to use.
            </p>

            <div
              className="mt-[48px] flex items-center gap-[20px] slide-rise"
              style={{ animationDelay: "900ms" }}
            >
              <a
                href="https://rssheap.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[14px] rounded-full px-[28px] py-[16px]"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  background:
                    "linear-gradient(90deg, #8a7bff 0%, #4f46e5 100%)",
                  color: "#ffffff",
                  boxShadow: "0 14px 40px rgba(79,70,229,0.45)",
                }}
              >
                rssheap.com
              </a>
              <span
                className="text-white/60"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 20,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Free to use
              </span>
            </div>
          </div>

          {/* RIGHT — rssheap lockup */}
          <div
            className="flex flex-col items-center justify-center slide-rise"
            style={{ animationDelay: "500ms" }}
          >
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
              {/* rssheap logo tile */}
              <div
                className="relative flex items-center justify-center rounded-[40px] bg-white rocket-float"
                style={{
                  width: 360,
                  height: 360,
                  boxShadow: "0 30px 60px rgba(20,10,80,0.55)",
                }}
              >
                <img
                  src={rssheapLogo}
                  alt="rssheap"
                  className="w-[78%] h-auto"
                />
              </div>
            </div>

            {/* rssheap wordmark */}
            <div
              className="mt-[28px]"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#ffffff",
              }}
            >
              rssheap
            </div>

            <div
              className="mt-[14px] text-white/55"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 18,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
              }}
            >
              RSS Aggregator
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
