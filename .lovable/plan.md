# Final CTA + Contact Form Section

Add the closing section of the page — bold call-to-action headline and a dark-themed contact form. On submit, the form opens WhatsApp with the visitor's name, email, and message prefilled (same number as the hero CTA). No backend needed.

## Placement

- Append `<ContactSection />` at the end of `<main>` in `src/routes/index.tsx`, after `<AboutSection />`.
- Section id `contact` so the hero CTA can later anchor here if desired.
- Wrapper: `mx-auto max-w-4xl px-6 py-24 sm:py-32`.

## Header

- Yellow eyebrow with rule motif (consistent with Services/About): `CONTACT`.
- H2 centered: `Ready to Grow Your Business Online?` — display font, `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`.
- Short supporting line under it: `Tell me about your business. I'll reply on WhatsApp.` (muted).

## Form (client-only, no backend)

Form fields, stacked, `max-w-2xl mx-auto mt-12`:

1. **Name** — `<input type="text">`, required, 2–80 chars.
2. **Email** — `<input type="email">`, required, valid email, max 120 chars.
3. **Message** — `<textarea>`, required, 10–800 chars, 5 rows.

Each field:
- Label above input, `text-xs uppercase tracking-[0.25em] text-muted-foreground`.
- Input styling: `w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60`.
- Focus: `focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_30px_-8px_var(--color-primary)]` for the yellow glow.
- `transition-all duration-200`.

Submit button:
- Full-width on mobile, auto width on `sm:`, aligned right.
- Same neon-yellow style as the hero `Let's Talk` button (`bg-primary`, `text-primary-foreground`, rounded-full, uppercase, tracked, arrow icon, hover glow + scale).
- Label: `Send Message`.

## Validation (client-side, zod)

- Add `zod` schema in the same file with rules above.
- On submit: `preventDefault()`, parse with zod, show inline error messages under each field (`text-xs text-destructive mt-1`) if invalid.
- No console logging of form values.

## Submit behavior

On valid submit:
1. Build message text: `Hi Arsalan, I'm {name} ({email}).\n\n{message}`.
2. URL-encode via `encodeURIComponent`.
3. Open `https://api.whatsapp.com/send/?phone=923118099156&text={encoded}&type=phone_number&app_absent=0` in a new tab (`window.open(url, "_blank", "noopener,noreferrer")`).
4. Reset the form and show a small yellow-accented success line: `Opening WhatsApp…` (auto-clears after ~4s).

Phone number is extracted to a module-level constant (`WHATSAPP_PHONE = "923118099156"`) shared with the hero CTA to avoid drift; hero CTA URL rebuilt from the same constant.

## Accessibility

- Every input has an associated `<label htmlFor>`.
- Error messages linked via `aria-describedby`.
- Invalid inputs get `aria-invalid="true"`.

## Files touched

1. `src/routes/index.tsx` — add `ContactSection` component + zod schema + shared WhatsApp constant. Extract `WHATSAPP_URL` builder to reuse in the hero button.
2. `package.json` — `zod` is already installed with shadcn/react-hook-form scaffolding; verify with `bun pm ls zod`. If missing, `bun add zod`.

No CSS token changes. No new files.
