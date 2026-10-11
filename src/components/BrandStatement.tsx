import { ChapterMark, FrameMarks, MotionScene, SplitHeading } from "./MotionScene";

export function BrandStatement() {
  return (
    <MotionScene id="brand" className="h-[180svh] border-t border-border bg-ink">
      <div className="motion-stage sticky top-0 flex h-svh items-center overflow-hidden px-[6vw]">
        <FrameMarks />
        <div className="motion-out mx-auto w-full lg:w-[65vw]">
          <ChapterMark label="The house / Maison Noir" />
          <SplitHeading lines={["MAISON", "noir."]} accent={[1]} className="statement mt-12 text-[clamp(4rem,11vw,13rem)]" />
          <div className="motion-fade-late mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:items-start">
            <p className="max-w-[39ch] text-lg leading-relaxed text-smoke">The most powerful statement is the one you never have to make.</p>
            <p className="eyebrow sm:text-right">A study in restraint</p>
          </div>
        </div>
      </div>
    </MotionScene>
  );
}
