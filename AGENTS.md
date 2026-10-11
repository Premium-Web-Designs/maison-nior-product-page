<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the scroll film as a 596-frame, 60 fps motion-interpolated WebP sequence upscaled from the supplied 720p source to 1080p; it preserves source timing while improving display quality without inventing native 4K detail.
- Keep post-film chapters sourced from the same sequence and styled with semantic graphite/ivory tokens; this maintains visual continuity with the product film.
- Drive post-film motion through MotionScene's eased, staggered CSS variables (--e0…--e5, --x, --p) and the motion-* utilities; this keeps choreography consistent, performant, and reduced-motion safe.
