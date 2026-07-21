# Hero Section — Arsalan Khattak

A single, premium dark hero on `/` (replacing the placeholder), split layout on desktop (text left / portrait right), stacked on mobile (portrait above text).

## Design tokens (src/styles.css)

Add dark brand tokens so we never hardcode colors in JSX:
- `--background: oklch(0.05 0 0)` → near-black `#0A0A0A`
- `--foreground: oklch(0.97 0.01 95)` → warm off-white `#F5F5F0`
- `--muted-foreground: oklch(0.62 0 0)` → `#8A8A8A`
- `--primary: oklch(0.96 0.24 115)` → neon/acid yellow `#E8FF00`
- `--primary-foreground: oklch(0.05 0 0)` → black text on yellow
- Force dark by default on `:root` (this is a dark-only marketing site).

## Layout (src/routes/index.tsx)

Full-viewport section, `min-h-screen`, near-black bg, generous padding.

```
Desktop (lg+):  [ text 6/12 ] [ portrait 6/12 ]
Mobile:         [ portrait ]
                [ text     ]
```

Grid: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`.
Portrait column uses `order-first lg:order-last` for the mobile stack requirement.

## Content

- Eyebrow: `Arsalan Khattak` — small, tracked-out uppercase, `text-muted-foreground`, with a short yellow rule before it.
- H1: `Digital Marketing Specialist` — huge (`text-5xl sm:text-6xl lg:text-7xl`), tight leading, `font-bold`, off-white. The word "Specialist" (or "Marketing") gets `text-primary` for accent — one word only to keep it premium.
- Subtext: the provided sentence, `text-lg text-muted-foreground max-w-xl`.
- CTA: `Let's Talk` — anchor `<a>` (external), `bg-primary text-primary-foreground`, rounded-full, bold, arrow icon (lucide `ArrowRight`). Hover = brighter glow via `shadow-[0_0_40px_-5px_var(--primary)]` and slight scale. Opens `https://api.whatsapp.com/send/?phone=923118099156&text&type=phone_number&app_absent=0` in a new tab (`target="_blank" rel="noopener noreferrer"`).

## Portrait treatment

- User will upload a transparent-PNG cutout. Placeholder plan:
  - Import path: `src/assets/arsalan-portrait.png` (referenced via `.asset.json` pointer once uploaded — I'll wire the import now with a TODO if the file isn't in yet, or wait for the upload before finalizing).
  - Rendered as a plain `<img>`, **no card / no border / no bg**.
  - Behind it, an absolutely-positioned yellow radial glow div sits at shoulder height: `bg-[radial-gradient(ellipse_at_center,var(--primary)/25%,transparent_70%)] blur-3xl`.
  - Image sits above the glow with `relative z-10`, sized `max-h-[80vh] w-auto mx-auto`.

## Ambient polish

- Very subtle vignette/grain overlay on the section (radial dark gradient) to add cinematic depth without clutter.
- No nav, no other sections this pass (per your answer).

## SEO / head

Update `src/routes/index.tsx` `Route` with a `head()`:
- Title: `Arsalan Khattak — Digital Marketing Specialist`
- Description: the subtext line (trimmed <160 chars).
- og:title / og:description / og:type=website / twitter:card=summary_large_image.

## Files touched

1. `src/styles.css` — add dark brand tokens, default-dark `:root`.
2. `src/routes/index.tsx` — replace placeholder with the hero + head metadata.
3. `src/assets/arsalan-portrait.png` — added after you attach the cutout; imported via Lovable Assets pointer.

## Open item

I still need the transparent portrait PNG attached to this chat before I can drop it into the hero. Once you send it I'll upload it as a CDN asset and wire the import in the same build step.
