export function SiteFooter() {
  return (
    <footer className="footer-rise bg-background px-[6vw] pb-10 pt-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 border-b border-border pb-24 md:grid-cols-2">
          <div><p className="eyebrow">Maison Noir</p><h2 className="footer-title mt-8 max-w-[12ch] font-display text-4xl font-semibold leading-tight sm:text-6xl">The art of less.</h2></div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:gap-24">
            <div><p className="eyebrow">Explore</p><a href="#top" className="mt-7 block text-sm text-smoke hover:text-foreground">The film</a><a href="#purchase" className="mt-4 block text-sm text-smoke hover:text-foreground">The polo</a></div>
            <div><p className="eyebrow">The house</p><a href="#brand" className="mt-7 block text-sm text-smoke hover:text-foreground">Our point of view</a><a href="#purchase" className="mt-4 block text-sm text-smoke hover:text-foreground">The collection</a></div>
          </div>
        </div>
        <div className="grid gap-4 pt-8 text-xs text-muted-foreground sm:grid-cols-2"><span>© 2026 MAISON NOIR</span><span className="sm:text-right">CONSIDERED IN EVERY DETAIL</span></div>
      </div>
    </footer>
  );
}
