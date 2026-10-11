import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type MotionStyle = CSSProperties & Record<`--${string}`, number | string>;

const STAGGER = 0.085;
const SPAN = 0.62;
const STEPS = 6;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// Long, quiet deceleration — the "magnetic stop".
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const easeIn = (t: number) => t * t * t;

/**
 * Scroll-driven scene. Publishes eased, staggered progress values as CSS
 * custom properties so every child can be choreographed in CSS:
 *   --e0 … --e5  staggered entrance (0 → 1)
 *   --x          exit (0 → 1)
 *   --p          pinned travel progress (0 → 1)
 */
export function MotionScene({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    const update = () => {
      frame = 0;
      const style = element.style;
      if (reduced.matches) {
        for (let i = 0; i < STEPS; i++) style.setProperty(`--e${i}`, "1");
        style.setProperty("--x", "0");
        style.setProperty("--p", "0.5");
        return;
      }
      const rect = element.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = clamp01((vh - rect.top) / (vh * 0.9));
      for (let i = 0; i < STEPS; i++) {
        style.setProperty(`--e${i}`, easeOut(clamp01((raw - i * STAGGER) / SPAN)).toFixed(4));
      }
      const travel = Math.max(1, rect.height - vh);
      style.setProperty("--p", clamp01(-rect.top / travel).toFixed(4));
      style.setProperty("--x", easeIn(clamp01((vh - rect.bottom) / (vh * 0.6))).toFixed(4));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduced.addEventListener("change", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduced.removeEventListener("change", requestUpdate);
    };
  }, []);

  const initial: MotionStyle = { "--x": 0, "--p": 0 };
  for (let i = 0; i < STEPS; i++) initial[`--e${i}`] = 0;

  return (
    <section ref={ref} id={id} className={`motion-scene ${className}`} style={initial}>
      {children}
    </section>
  );
}

/** Headline whose lines settle from opposite directions; `accent` lines set in serif italic. */
export function SplitHeading({
  lines,
  accent = [],
  className = "",
}: {
  lines: string[];
  accent?: number[];
  className?: string;
}) {
  return (
    <h2 className={`motion-title ${className}`}>
      {lines.map((line, index) => (
        <span
          className={`motion-line ${accent.includes(index) ? "accent-serif" : ""}`}
          data-line={index}
          key={line}
        >
          {line}
        </span>
      ))}
    </h2>
  );
}

/** Chapter label flanked by hairlines that draw outward from the text. */
export function ChapterMark({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`motion-meta ${className}`}>
      <span className="motion-rule" aria-hidden="true" />
      <span className="motion-meta-label">{label}</span>
      <span className="motion-rule" aria-hidden="true" />
    </div>
  );
}

/** Fine registration marks in opposite corners of a stage. */
export function FrameMarks() {
  return (
    <div className="motion-marks pointer-events-none absolute inset-[clamp(1.25rem,3vw,3rem)]" aria-hidden="true">
      <span className="motion-mark motion-mark-tl" />
      <span className="motion-mark motion-mark-br" />
    </div>
  );
}
