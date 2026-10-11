import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useFrameLoader } from "@/lib/useFrameLoader";
import { Preloader } from "@/components/Preloader";
import { ScrollSequence } from "@/components/ScrollSequence";
import { Story } from "@/components/Story";
import { Purchase } from "@/components/Purchase";
import { BrandStatement } from "@/components/BrandStatement";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Polo Noir — Maison Noir" },
      {
        name: "description",
        content:
          "Le Polo Noir: a twin-tipped Egyptian cotton piqué polo, made slowly in Italy. A cinematic scroll-driven film from Maison Noir.",
      },
      { property: "og:title", content: "Le Polo Noir — Maison Noir" },
      {
        property: "og:description",
        content:
          "Twin-tipped piqué polo in long-staple Egyptian cotton. Boxed by hand in Milano.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { images, progress, ready } = useFrameLoader();

  // Hold the viewport at the top while the film loads.
  useEffect(() => {
    if (ready) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <div id="top" className="min-h-screen bg-ink">
      <Preloader progress={progress} done={ready} />

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[7vw] py-7 mix-blend-difference">
        <a href="#" className="text-[0.7rem] tracking-[0.5em] text-foreground uppercase">
          Maison Noir
        </a>
        <a
          href="#purchase"
          className="text-[0.66rem] tracking-[0.42em] text-foreground uppercase"
        >
          Bag (0)
        </a>
      </header>

      <main>
        <h1 className="sr-only">
          Le Polo Noir — twin-tipped Egyptian cotton piqué polo by Maison Noir
        </h1>
        <ScrollSequence images={images} ready={ready} />
        <Story />
        <Purchase />
        <BrandStatement />
      </main>

      <SiteFooter />
    </div>
  );
}
