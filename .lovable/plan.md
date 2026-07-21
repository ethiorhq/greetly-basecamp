# Services Section — "What I Do"

Add a new section below the hero on `/` presenting Arsalan's three services as premium dark cards.

## Placement

- In `src/routes/index.tsx`, append a `<section id="services">` after the closing hero `</section>` inside the same `<main>`.
- Section has its own vertical breathing room (`py-24 sm:py-32`) and stays within the existing `max-w-7xl` container.

## Header

- Small yellow eyebrow: `SERVICES` (uppercase, tracked, `text-primary`, with the same short yellow rule motif as the hero for consistency).
- Centered H2 in the display font: `What I Do` — `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`.
- Optional single-line supporting sentence in `text-muted-foreground` under the H2 to tie the three services together (e.g. "Three focused services. One goal — more visibility, more leads.").

## The three cards

Grid: `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`, `mt-16`.

Each card:
- Element: `<article>` for semantics.
- Background: `bg-card` (already defined, slightly lighter than page bg via the existing `--card` token).
- Border: 1px `border-border` at rest; on hover the top edge / full border shifts to `border-primary/60` with a soft yellow glow (`shadow-[0_20px_60px_-20px_var(--color-primary)]`) and a `-translate-y-1` lift. Transition ~300ms.
- Padding: `p-8`, rounded `rounded-2xl`.
- Icon on top: 48px lucide icon inside a rounded square badge (`h-14 w-14 rounded-xl bg-primary/10 border border-primary/30`), icon color `text-primary`.
  - SEO → `TrendingUp`
  - Local SEO → `MapPin`
  - Social Media Marketing → `Share2` (fallback: `Instagram`)
- Service name: `h3`, display font, `text-xl font-semibold`, `mt-6`.
- Description (one sentence, tuned to this specialist's focus):
  - **SEO** — "Rank higher on Google with technical fixes, keyword strategy, and content that pulls in the right traffic."
  - **Local SEO** — "Optimize your Google Business Profile so nearby customers find you first when they're ready to buy."
  - **Social Media Marketing** — "Build a magnetic brand presence with strategy, content, and engagement that turns followers into leads."
- Description styling: `mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground`.

## Accessibility & motion

- Hover state also present on `:focus-visible` for keyboard users (same lift + border-primary).
- `transition-all duration-300 ease-out` on the card; icon badge gets a subtle `group-hover:bg-primary/20` shift.

## Responsive

- Mobile: single column stack, gap-6.
- Tablet+ (`md:`): 3 columns of equal width.
- Header stays centered at every breakpoint.

## Files touched

1. `src/routes/index.tsx` — add the services section markup and import 3 lucide icons (`TrendingUp`, `MapPin`, `Share2`) alongside the existing `ArrowRight`.

No new tokens, no CSS changes — everything reuses `bg-card`, `border-border`, `text-primary`, `text-muted-foreground` already defined in `src/styles.css`.
