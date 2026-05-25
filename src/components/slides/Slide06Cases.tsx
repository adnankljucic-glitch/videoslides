import mausLogo from "@/assets/maus-logo.svg";
import { SlideLayout } from "./SlideLayout";

const HealthcareIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
    <path d="M32 18 V46 M18 32 H46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const BookingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
    <path d="M14 38 L50 24 L46 36 L18 44 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M28 32 L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EventsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
    <path d="M16 26 a4 4 0 0 0 0 8 V42 a2 2 0 0 0 2 2 H46 a2 2 0 0 0 2 -2 V34 a4 4 0 0 0 0 -8 V22 a2 2 0 0 0 -2 -2 H18 a2 2 0 0 0 -2 2 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M32 22 V42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
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
