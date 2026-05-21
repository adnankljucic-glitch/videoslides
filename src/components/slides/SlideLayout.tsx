import type { ReactNode } from "react";

/**
 * Fixed 1920x1080 slide canvas with the MAUS dark-indigo gradient background.
 * Children are positioned in slide coordinates (px = 1:1).
 */
export function SlideLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 18% 22%, #2a1a6e 0%, #1a0d4a 28%, #0d0628 62%, #060218 100%)",
      }}
    >
      {/* subtle grain / vignette accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 90%, rgba(80, 50, 200, 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}
