import { useEffect, useRef, useState } from "react";
import { OVERLAYS, type Overlay } from "@/lib/frames";

function windowedOpacity(p: number, [enter, exit]: [number, number]) {
  const fade = Math.min(0.05, (exit - enter) * 0.35);
  if (p < enter - fade || p > exit + fade) return 0;
  if (p < enter) return (p - (enter - fade)) / fade;
  if (p > exit) return 1 - (p - exit) / fade;
  return 1;
}

function OverlayBlock({ overlay, progress }: { overlay: Overlay; progress: number }) {
  const o = windowedOpacity(progress, overlay.range);
  const t = (1 - o) * (overlay.align === "left" ? -34 : 34);
  const y = (1 - o) * 16;

  const vertical =
    overlay.vertical === "top"
      ? "justify-start pt-[14vh]"
      : overlay.vertical === "bottom"
        ? "justify-end pb-[16vh]"
        : "justify-center";

  const horizontal =
    overlay.align === "left"
      ? "items-start text-left pl-[7vw] pr-[52vw]"
      : "items-end text-right pr-[7vw] pl-[52vw]";

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex flex-col ${vertical} ${horizontal}`}
      style={{ opacity: o, willChange: "opacity" }}
    >
      <div style={{ transform: `translate3d(${t}px, ${y}px, 0)` }}>
        {overlay.eyebrow ? <p className="eyebrow">{overlay.eyebrow}</p> : null}
        <h2 className="display mt-5 whitespace-pre-line text-[clamp(2.6rem,6.2vw,6.4rem)] text-foreground">
          {overlay.title}
        </h2>
        {overlay.body ? (
          <p className="mt-6 max-w-[24ch] text-sm leading-relaxed font-light tracking-wide text-smoke sm:text-base">
            {overlay.body}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ScrollSequence({
  images,
  ready,
}: {
  images: HTMLImageElement[];
  ready: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let lastDrawn = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      lastDrawn = -1;
    };

    const draw = (index: number) => {
      const img = images[index];
      if (!img || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      // Keep the whole garment in frame on narrow screens rather than cropping it away.
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.fillStyle = getComputedStyle(canvas).backgroundColor;
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const readScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      targetRef.current = p;
    };

    const tick = () => {
      // eased follow keeps frame progression fluid on wheel/trackpad jitter
      currentRef.current += (targetRef.current - currentRef.current) * 0.055;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0002) {
        currentRef.current = targetRef.current;
      }
      const p = currentRef.current;
      const index = Math.min(images.length - 1, Math.round(p * (images.length - 1)));
      if (index !== lastDrawn) {
        draw(index);
        lastDrawn = index;
      }
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };

    resize();
    readScroll();
    currentRef.current = targetRef.current;
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", resize);
    };
  }, [images, ready]);

  return (
    <section ref={sectionRef} className="relative h-[1000vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-ink" />
        <div className="pointer-events-none absolute inset-0">
          {OVERLAYS.map((o) => (
            <OverlayBlock key={o.id} overlay={o} progress={progress} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-[7vw] pb-8">
          <span className="eyebrow">Scroll</span>
          <div className="h-px w-40 bg-border sm:w-72">
            <div
              className="h-px bg-champagne"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="font-sans text-[0.66rem] tracking-[0.42em] text-muted-foreground tabular-nums">
            {String(Math.round(progress * 100)).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
