import { useState } from "react";
import { STILLS } from "@/lib/frames";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ChapterMark, MotionScene, SplitHeading } from "./MotionScene";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export function Purchase() {
  const [size, setSize] = useState<string | null>("M");
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState<string | null>(null);

  const act = (label: string) => {
    if (!size) {
      setNote("Please select a size.");
      return;
    }
    setNote(`${label} — Le Polo Noir, size ${size}, ×${qty}.`);
  };

  return (
    <MotionScene id="purchase" className="relative overflow-hidden bg-background px-[6vw] py-24 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <ChapterMark label="Object no. 01 / Maison Noir" />
        <SplitHeading lines={["MAKE IT", "yours."]} accent={[1]} className="statement mt-9 mb-14 text-[clamp(3.5rem,11vw,11rem)]" />
      <div className="motion-rule-x grid gap-14 border-t border-border pt-14 lg:grid-cols-12 lg:gap-20">
        <div className="motion-fade lg:col-span-6">
          <figure className="relative overflow-hidden bg-ink">
            <img
              src={STILLS.fullFront}
              alt="Le Polo Noir photographed in low key light"
              loading="lazy"
              className="motion-image aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          <Reveal>
            <p className="eyebrow">The collection / 001</p>
            <h2 className="display mt-6 text-[clamp(2.6rem,4.2vw,4.2rem)]">
              Le Polo Noir
            </h2>
            <p className="mt-6 text-sm leading-[1.9] font-light tracking-wide text-smoke">
              Twin-tipped piqué polo in long-staple Egyptian cotton. Tonal embroidered
              crest, mother-of-pearl buttons, ribbed cuffs. Cut close through the body.
            </p>
            <p className="mt-8 font-display text-3xl">€ 420</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Includes duties · Complimentary delivery
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="hairline mt-12" />

            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow">Size</p>
                <Button variant="link" size="sm"
                  type="button"
                  className="text-xs tracking-[0.2em] text-muted-foreground uppercase underline-offset-4 transition-colors hover:text-foreground"
                  onClick={() => setNote("Size guide: true to size. Take one down for a closer fit.")}
                >
                  Size guide
                </Button>
              </div>
              <div className="mt-5 grid grid-cols-6 gap-2">
                {SIZES.map((s) => {
                  const active = size === s;
                  return (
                    <Button variant="outline"
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      aria-pressed={active}
                      className={`h-12 min-w-0 rounded-none border text-xs uppercase transition-all duration-500 ${
                        active
                          ? "border-champagne bg-accent text-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow">Quantity</p>
              <div className="mt-5 inline-flex h-12 items-center border border-border">
                <Button variant="ghost"
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-full w-12 text-lg font-light text-muted-foreground transition-colors hover:text-foreground"
                >
                  –
                </Button>
                <span className="w-12 text-center text-sm tabular-nums">{qty}</span>
                <Button variant="ghost"
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  className="h-full w-12 text-lg font-light text-muted-foreground transition-colors hover:text-foreground"
                >
                  +
                </Button>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              <Button variant="outline"
                type="button"
                onClick={() => act("Added to bag")}
                className="h-14 rounded-none border-foreground/25 text-xs uppercase transition-all duration-700 hover:border-foreground hover:bg-accent"
              >
                Add to Bag
              </Button>
              <Button
                type="button"
                onClick={() => act("Selected for purchase")}
                className="h-14 rounded-none bg-primary text-xs uppercase transition-all duration-700 hover:bg-champagne"
              >
                Buy Now
              </Button>
            </div>

            <p
              className="mt-6 h-5 text-xs tracking-[0.18em] text-champagne transition-opacity duration-500"
              style={{ opacity: note ? 1 : 0 }}
            >
              {note}
            </p>

            <div className="hairline mt-8" />
            <p className="mt-8 text-xs leading-[2] tracking-[0.14em] text-muted-foreground uppercase">
              Free returns within 30 days · Boxed by hand in Milano
            </p>
          </Reveal>
        </div>
      </div>
      </div>
    </MotionScene>
  );
}
