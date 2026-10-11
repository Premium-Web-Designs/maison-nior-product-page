export function Preloader({ progress, done }: { progress: number; done: boolean }) {
  const pct = Math.round(progress * 100);

  return (
    <div
      aria-hidden={done}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink"
      style={{
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        transition: "opacity 1.2s var(--ease-lux), visibility 0s linear 1.2s",
      }}
    >
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="relative flex flex-col items-center px-6">
        <p className="eyebrow">Maison Noir</p>
        <p className="display mt-6 text-5xl sm:text-6xl">Le Polo Noir</p>
        <div className="mt-14 h-px w-64 overflow-hidden bg-border sm:w-80">
          <div
            className="h-full bg-champagne"
            style={{
              width: `${pct}%`,
              transition: "width 0.45s var(--ease-lux)",
            }}
          />
        </div>
        <div className="mt-5 flex w-64 items-center justify-between sm:w-80">
          <span className="eyebrow">Preparing the film</span>
          <span className="font-sans text-xs tracking-[0.3em] text-muted-foreground tabular-nums">
            {String(pct).padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
