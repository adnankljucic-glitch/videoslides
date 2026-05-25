import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

// Hand-drawn sketchy illustrations (MAUS style)
const sketchStroke = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const HealthcareIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full" style={{ filter: "url(#sketch-rough)" }}>
    {/* wobbly heart */}
    <path
      d="M60 92 C 30 74, 18 56, 24 40 C 28 28, 44 24, 52 34 C 56 38, 58 42, 60 46 C 62 42, 64 38, 68 34 C 76 24, 92 28, 96 40 C 102 56, 90 74, 60 92 Z"
      {...sketchStroke}
    />
    {/* pulse line inside */}
    <path d="M34 58 L46 58 L50 50 L56 66 L62 54 L68 60 L86 60" {...sketchStroke} strokeWidth={1.2} opacity={0.85} />
  </svg>
);

const BookingIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full">
    {/* little cottage with a path */}
    <path d="M30 78 L60 50 L90 78" {...sketchStroke} />
    <path d="M38 74 L38 96 L82 96 L82 74" {...sketchStroke} />
    <path d="M54 96 L54 80 L66 80 L66 96" {...sketchStroke} />
    <path d="M72 64 L72 56 L78 56 L78 70" {...sketchStroke} />
    {/* sun */}
    <circle cx="92" cy="32" r="6" {...sketchStroke} />
    <path d="M92 18 L92 22 M92 42 L92 46 M78 32 L82 32 M102 32 L106 32 M82 22 L85 25 M99 25 L102 22" {...sketchStroke} />
    {/* wavy path / waves */}
    <path d="M16 104 Q 28 98, 40 104 T 64 104 T 88 104 T 110 104" {...sketchStroke} opacity={0.7} />
  </svg>
);

const EventsIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full">
    {/* ticket */}
    <path
      d="M22 46 A6 6 0 0 1 28 52 A6 6 0 0 1 22 58 L22 74 A6 6 0 0 1 28 80 A6 6 0 0 1 22 86 L22 92 L98 92 L98 86 A6 6 0 0 1 92 80 A6 6 0 0 1 98 74 L98 58 A6 6 0 0 1 92 52 A6 6 0 0 1 98 46 L98 40 L22 40 Z"
      {...sketchStroke}
    />
    <path d="M52 46 L52 86" {...sketchStroke} strokeDasharray="3 4" />
    <path d="M64 56 L88 56 M64 66 L84 66 M64 76 L86 76" {...sketchStroke} strokeWidth={1.2} opacity={0.85} />
    {/* confetti */}
    <path d="M30 24 L34 28 M40 18 L40 24 M52 22 L56 18 M70 16 L74 22 M86 24 L90 20 M100 30 L104 28" {...sketchStroke} strokeWidth={1.2} opacity={0.85} />
  </svg>
);


const industries = [
  { name: "Healthcare", Icon: HealthcareIcon },
  { name: "Booking & Tourism", Icon: BookingIcon },
  { name: "Events & Ticketing", Icon: EventsIcon },
];

export function Slide06Cases() {
  return (
    <SlideLayout>
      <img
        src={mausLogo}
        alt="MAUS"
        className="absolute top-[80px] right-[100px] h-[60px] w-auto slide-fade-in"
        style={{ animationDelay: "100ms" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[160px]">
        <div
          className="text-white/60 slide-fade-in"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            animationDelay: "200ms",
          }}
        >
          Cases
        </div>

        <h1
          className="mt-[32px] text-white slide-rise"
          style={{
            fontFamily: "'Inria Serif', 'Times New Roman', serif",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            animationDelay: "350ms",
          }}
        >
          Built for the industries
          <br />
          that move the world.
        </h1>

        <div className="mt-[72px] flex flex-wrap items-start justify-center gap-x-[96px] gap-y-[40px]">
          {industries.map(({ name, Icon }, i) => (
            <div
              key={name}
              className="flex flex-col items-center slide-rise"
              style={{ animationDelay: `${550 + i * 160}ms` }}
            >
              <div className="w-[120px] h-[120px] text-white/85 mb-[20px]">
                <Icon />
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: "'Inria Serif', 'Times New Roman', serif",
                  fontSize: 56,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {name}
              </span>
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
