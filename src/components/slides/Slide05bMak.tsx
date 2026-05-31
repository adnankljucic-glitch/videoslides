import mausLogo from "@/assets/maus-logo.svg";
import makLogo from "@/assets/mak-logo.png";

const BG_VIDEO =
  "https://ttycsupkjrsqjvqaxtca.supabase.co/storage/v1/object/public/MAUS%20VIDEOS/services_nofade.mp4";

const SLIDE_GRADIENT =
  "radial-gradient(ellipse 90% 80% at 18% 22%, #0b3b34 0%, #082e2a 28%, #051d1c 62%, #03100f 100%)";

const features = [
  { label: "Live video", desc: "2MP Full HD camera, ultra-wide angle" },
  { label: "Two-way talk", desc: "Speak to visitors from your phone" },
  { label: "Open the door", desc: "Unlock remotely with one tap" },
  { label: "Push alerts", desc: "Instant notification on every ring" },
];

export function Slide05bMak() {
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
        style={{ background: SLIDE_GRADIENT, opacity: 0.78 }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-parallax-overlay-slow"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 82% 88%, rgba(45, 212, 168, 0.18) 0%, transparent 70%)",
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
                fontWeight: 600,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                animationDelay: "200ms",
              }}
            >
              Our Products · IoT
            </div>

            <h1
              className="mt-[36px] text-white slide-rise"
              style={{
                fontFamily: "'Inria Serif', 'Times New Roman', serif",
                fontSize: 130,
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                animationDelay: "300ms",
              }}
            >
              Ring.
              <br />
              See.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #8af0d3 0%, #2dd4a8 60%, #0f9e88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Answer.
              </span>
            </h1>

            <p
              className="mt-[44px] text-white/80 slide-rise"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: 740,
                animationDelay: "700ms",
              }}
            >
              A smart mailbox with a built-in video intercom that talks
              <br />
              to your phone — see who's at the door, speak with them,
              <br />
              and unlock from anywhere in the world.
            </p>

            {/* Feature grid */}
            <div
              className="mt-[44px] grid grid-cols-2 gap-x-[40px] gap-y-[26px] slide-rise"
              style={{ maxWidth: 760, animationDelay: "900ms" }}
            >
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-[16px]">
                  <span
                    className="mt-[10px] shrink-0 rounded-full"
                    style={{
                      width: 12,
                      height: 12,
                      background:
                        "linear-gradient(90deg, #8af0d3, #2dd4a8)",
                      boxShadow: "0 0 14px rgba(45,212,168,0.7)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 26,
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {f.label}
                    </div>
                    <div
                      className="text-white/60"
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-[44px] flex items-center gap-[20px] slide-rise"
              style={{ animationDelay: "1100ms" }}
            >
              <a
                href="https://www.smart-mak.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[14px] rounded-full px-[28px] py-[16px]"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  background:
                    "linear-gradient(90deg, #2dd4a8 0%, #0f9e88 100%)",
                  color: "#03100f",
                  boxShadow: "0 14px 40px rgba(15,158,136,0.45)",
                }}
              >
                smart-mak.com
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
                Free app · No subscription
              </span>
            </div>
          </div>

          {/* RIGHT — MAK lockup */}
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
                    "radial-gradient(circle at 50% 50%, rgba(45,212,168,0.45) 0%, rgba(15,158,136,0.2) 35%, transparent 70%)",
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
                  border: "1px solid rgba(138,240,211,0.35)",
                  boxShadow:
                    "inset 0 0 60px rgba(45,212,168,0.25), 0 0 80px rgba(15,158,136,0.35)",
                }}
              />
              {/* MAK logo tile */}
              <div
                className="relative flex items-center justify-center rounded-[40px] bg-white rocket-float"
                style={{
                  width: 400,
                  height: 360,
                  boxShadow: "0 30px 60px rgba(3,16,15,0.55)",
                }}
              >
                <img src={makLogo} alt="MAK" className="w-[80%] h-auto" />
              </div>
            </div>

            {/* Product wordmark */}
            <div
              className="mt-[28px]"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#ffffff",
              }}
            >
              MAK LUMO
            </div>

            <div
              className="mt-[14px] text-white/55"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 18,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
              }}
            >
              Smart Mailbox · Video Intercom
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
