import { STILLS } from "@/lib/frames";
import { ChapterMark, FrameMarks, MotionScene, SplitHeading } from "./MotionScene";

export function Story() {
  return (
    <div className="bg-ink">
      <MotionScene className="h-[200svh] bg-ink">
        <div className="motion-stage sticky top-0 h-svh overflow-hidden">
          <div className="absolute inset-0 isolate overflow-hidden">
            <img src={STILLS.fullFront} alt="The black piqué polo suspended in soft light" loading="lazy" className="motion-image absolute inset-0 -z-20 h-full w-full object-cover opacity-75" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--ink)_0%,transparent_80%)]" />
            <div className="motion-veil absolute inset-0 bg-ink" />
          </div>
          <FrameMarks />
          <div className="motion-out absolute inset-0 flex flex-col justify-center px-[6vw]">
            <ChapterMark label="Chapter 01 — The form" />
            <SplitHeading lines={["NOTHING", "to hide."]} accent={[1]} className="statement mt-10 max-w-[9ch]" />
            <p className="motion-fade mt-12 max-w-[35ch] text-lg leading-relaxed text-smoke">A silhouette that needs no introduction. Just form, fabric, and the space between.</p>
          </div>
          <p className="motion-fade-late eyebrow absolute bottom-[clamp(1.25rem,3vw,3rem)] right-[6vw]">Maison Noir / Object no. 01</p>
        </div>
      </MotionScene>

      <MotionScene className="h-[200svh] bg-background">
        <div className="motion-stage sticky top-0 grid h-svh overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[45svh] overflow-hidden bg-ink">
            <img src={STILLS.tipping} alt="Close-up of the ivory tipped collar and cotton piqué texture" loading="lazy" className="motion-image absolute inset-0 h-full w-full object-cover" />
            <div className="motion-veil absolute inset-0 bg-ink" />
            <span className="motion-fade-late eyebrow absolute bottom-8 left-[6vw] text-foreground">Fig. 01 — The detail</span>
          </div>
          <div className="motion-out relative flex flex-col justify-center px-[6vw] py-16">
            <span className="motion-axis absolute inset-y-0 left-0 hidden w-px bg-border lg:block" aria-hidden="true" />
            <ChapterMark label="Chapter 02 — The material" />
            <SplitHeading lines={["FEEL THE", "difference."]} accent={[1]} className="statement mt-10 text-[clamp(3.25rem,6.5vw,7.5rem)]" />
            <p className="motion-fade mt-10 max-w-[37ch] text-lg leading-relaxed text-smoke">Dense piqué with a quiet weight. Ivory lines trace the collar and cuff. Every detail earns its place.</p>
            <div className="motion-fade-late mt-12 grid max-w-lg grid-cols-2 gap-8 border-t border-border pt-8 text-sm">
              <div><p className="eyebrow">Fabric</p><p className="mt-3">Cotton piqué</p></div>
              <div><p className="eyebrow">Finish</p><p className="mt-3">Twin-tipped edges</p></div>
            </div>
          </div>
        </div>
      </MotionScene>

      <MotionScene className="h-[200svh] bg-ink">
        <div className="motion-stage sticky top-0 h-svh overflow-hidden">
          <div className="absolute inset-0 isolate overflow-hidden">
            <img src={STILLS.crest} alt="Tonal crest embroidered on the polo chest" loading="lazy" className="motion-image absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--ink)_0%,transparent_76%)]" />
            <div className="motion-veil absolute inset-0 bg-ink" />
          </div>
          <FrameMarks />
          <div className="motion-out absolute inset-0 flex flex-col justify-end px-[6vw] py-20">
            <ChapterMark label="Chapter 03 — The signature" />
            <SplitHeading lines={["QUIETLY", "unmistakable."]} accent={[1]} className="statement mt-8 text-[clamp(2.6rem,10vw,11rem)]" />
          </div>
        </div>
      </MotionScene>

      <MotionScene className="h-[170svh] bg-background">
        <div className="motion-stage sticky top-0 flex h-svh items-center overflow-hidden px-[6vw]">
          <FrameMarks />
          <span className="motion-axis absolute left-1/2 top-[12%] hidden h-[76%] w-px bg-[linear-gradient(180deg,transparent,var(--border),transparent)] lg:block" aria-hidden="true" />
          <div className="motion-out relative mx-auto w-full max-w-[1500px]">
            <ChapterMark label="Designed to remain" />
            <div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)] lg:items-end">
              <SplitHeading lines={["BEYOND", "a season."]} accent={[1]} className="statement text-[clamp(3.5rem,10vw,11rem)]" />
              <div className="motion-fade-late pb-3">
                <p className="max-w-[35ch] text-lg leading-relaxed text-smoke">Not made to compete for attention. Made to keep it, long after the moment has passed.</p>
                <a href="#purchase" className="motion-link mt-10 inline-flex items-center gap-6 border-b border-foreground pb-3 text-xs font-medium uppercase text-foreground transition-colors hover:text-champagne">Discover the polo <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </div>
      </MotionScene>
    </div>
  );
}
