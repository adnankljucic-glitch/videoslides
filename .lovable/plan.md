## Goal

A presentation-style intro slide for a MAUS video, rendered as an interactive 16:9 web slide that scales to any viewport. Built so we can append Slides 02, 03, … in the same conversation without reworking the foundation.

## Visual direction (from maus.ba)

- Background: deep indigo→near-black radial gradient (top-left bright indigo `#2a1a6e`-ish, fading to `#0a0420` corners), matching the hero on maus.ba.
- Typography: serif display for headline (Cormorant / Instrument Serif — similar to the maus.ba hero serif), clean sans for caption (Inter).
- Color: white text, subtle indigo accent line.
- Logo: uploaded `Logotip_MAUS_Bijela.pdf` (white MAUS wordmark). Converted to SVG/PNG and placed top-left.

## Slide 01 content

```
[MAUS logo — top left]

                We are MAUS.
   A software consultancy built for enterprises
        that refuse to compromise on quality.

        Aarhus  ·  Sarajevo  ·  Building globally
                                                          [01 / —]
```

- Large centered serif headline "We are MAUS." (~140px)
- Supporting line in lighter serif (~44px), max-width ~1300px
- Locations line in tracked uppercase sans (~22px) with dot separators
- Subtle "01" page indicator bottom-right
- Soft entrance: headline fades+rises, subtitle staggers in, locations last (CSS only, no scroll-triggered libs)

## Architecture (reusable for future slides)

```
src/
  components/slides/
    SlideLayout.tsx        # 1920x1080 fixed canvas, scaled via transform
    ScaledSlide.tsx        # wraps a slide, computes scale = min(vw/1920, vh/1080)
    Slide01Intro.tsx       # content of slide 01
  routes/
    index.tsx              # renders current slide full-viewport, arrow-key nav stub
  styles.css               # add gradient tokens + serif font import
```

- `SlideLayout` is a 1920×1080 absolutely-positioned box centered via `left:50%; top:50%; margin -960/-540; transform: scale(var(--scale))`.
- `ScaledSlide` measures the viewport with a `ResizeObserver` and sets `--scale`.
- Index route shows Slide 01 today; later slides plug into a small array and arrow keys cycle.
- Background gradient lives on `SlideLayout` so every slide inherits the MAUS look (overridable per slide).

## Asset handling

- Convert `user-uploads://Logotip_MAUS_Bijela.pdf` → `src/assets/maus-logo.svg` (or PNG fallback at 2x) and import as ES module.

## Out of scope (for this turn)

- Slides 02+ content, navigation UI (prev/next buttons), present/fullscreen mode, thumbnail strip, notes panel. The architecture supports adding these next, but I'll only build Slide 01 now per your instruction.

## Confirm

Proceeding will: install a Google serif font, convert the logo, add the slide scaffolding, and ship Slide 01 on `/`. OK to implement?