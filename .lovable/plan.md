# Huzaifa Bukhari — Option B Recoloring Plan

## Goal and scope

Recolor the existing website to the uploaded **cool white, indigo and coral** direction: modern, energetic and credible, suited to a performance-marketing personal brand. Preserve Huzaifa’s identity, current copy, sections, links, contact rules and page structure. This is a visual refinement, not another content rewrite.

The reference supplies the palette and visual hierarchy, not new business claims or features. Do not copy its “4.8x” ROAS, “−32%” cost-per-lead figures, booking button, results link, placeholder name or headline. No new pages, backend, booking integration, fabricated testimonials or results. Do not publish during this task.

## Reported error

The pasted `TS2686` text contains design instructions rather than a complete compiler diagnostic. The current `src/hooks/use-mobile.tsx` explicitly imports React; line 4 is blank. There is no evidence here that the hook needs changing. Leave it untouched unless fresh diagnostics identify an actual error; verify current automatic build output during implementation.

## 1. Exact palette and readable combinations

| Role | Color | Application |
|---|---|---|
| Main background | `#F7F8FC` | Main page canvas, including the first screen and legal pages; never a pure-white full-page canvas |
| Primary | `#3B3FD8` | Main action fills, selected states, links, key name emphasis and focus indicators |
| Coral accent | `#FF6B4A` | Small badge fills, short underline accents and decorative rules only |
| Main text | `#12142B` | Headings, body emphasis and text on coral fills |
| Soft lavender | `#E3E5F2` | Subtle supporting surfaces and decorative separators |
| Raised surface | `#FFFFFF` | Individual service cards, form fields and popovers only |
| Secondary text | Proposed `#646B80` | Paragraphs, labels and supporting information; supplementary to the five supplied colors |

Keep cool white and neutral surfaces dominant; indigo is the action color, coral a small punctuation mark. Avoid large indigo backgrounds, gradients, neon glow, oversized coral panels or a purple-dominated appearance.

Calculated contrast ratios for the supplied colors:
- Dark ink on cool white: **17.05:1**.
- Indigo on cool white: **6.85:1**.
- White on indigo: **7.27:1**.
- Dark ink on coral: **6.42:1**.
- Coral on cool white: **2.65:1** — unsuitable for normal text or essential control outlines.
- Proposed secondary text on cool white: **5.00:1**.

Use indigo or dark ink for readable text. Coral never becomes text on a white/light surface. Lavender separators are decorative; form borders and important control outlines require a separately verified, higher-contrast token. Errors need a distinct accessible red token rather than reusing coral.

## 2. Typography

- Use **Plus Jakarta Sans for headings and the name wordmark**, retaining **Inter for body copy, labels and controls**.
- Load Plus Jakarta Sans through the root document’s font links and replace the current Space Grotesk display token.
- Preserve existing responsive font sizes and readable line lengths; use fixed breakpoint sizes, not viewport-scaled type.
- Keep letter spacing at zero and strengthen hierarchy with weight and size rather than excessive uppercase tracking.
- Check long service names and the professional title for clean wrapping without shrinking text unnecessarily.

## 3. Section-by-section treatment

### Navigation and mobile menu
- Preserve the floating navigation and all destinations.
- Use a cool-white/translucent light surface, a fine neutral border and a restrained neutral shadow; remove the heavy dark treatment.
- Main wordmark is dark ink, with its existing accent detail in indigo.
- Links are readable secondary text; hover/current/focus states use indigo.
- Main WhatsApp action uses indigo fill with white text. Menu icons and close controls use dark ink.
- Recolor the full-screen mobile menu consistently; preserve Escape, managed focus and scroll locking.

### First screen
- Keep **Huzaifa Bukhari** as the prominent heading, with indigo replacing amber emphasis.
- Replace teal punctuation with a small coral detail only where it is decorative; avoid coral heading text.
- Keep the actual professional title and supporting copy, using dark ink and readable secondary text.
- Use the reference’s coral badge idea for the existing performance-marketer label, with dark text and restrained proportions.
- Primary “Message on WhatsApp” action: indigo fill, white text, modest shadow and a darker indigo hover token.
- Secondary “My approach” action: indigo/dark text with a clear focus indicator; no booking/results replacement.
- Keep the introduction unframed rather than copying the reference’s enclosing demo card. Preserve the compact rhythm and a hint of the next section.

### Services
- Keep all five current services and their order.
- White individual cards on the cool-white canvas, with fine neutral borders and minimal shadow.
- Use indigo icons, dark headings and secondary body text; existing emphasized detail may use a small coral underline.
- Hover/focus treatment is a subtle indigo border or shadow, not neon glow. Do not introduce nested cards.

### Approach and About
- Keep unframed section layouts and genuine copy, including the existing three-years experience statement.
- Indigo for step numbers, icons and key emphasis; dark ink for headings.
- Coral may appear as short rules or decorative underlines, never as small text.
- Use the soft lavender tone sparingly to separate supporting content, not as large saturated blocks.

### FAQ
- Preserve accordion behavior and answers.
- Dark question text, secondary answer text, neutral dividers and indigo expand/collapse icons.
- Open, hover and keyboard-focus states remain distinguishable on the light background.

### Contact form
- Preserve all current labels, limits, validation, WhatsApp draft construction, entered-data retention and fallback link.
- Use light fields with dark text, readable placeholders and higher-contrast input borders.
- Indigo focus border/ring; accessible red errors with existing error associations.
- Indigo submit action with white text; fallback draft and email links use indigo.
- Success/draft feedback stays accurate: opening WhatsApp is not sending a message or saving an inquiry.

### Footer, floating WhatsApp and legal pages
- Light footer with a neutral separator, dark identity text, readable secondary copy and indigo link states; retain ETHIOR credit.
- Preserve recognizable WhatsApp green with a separately defined white icon token, not a foreground token that now becomes dark.
- Preserve floating-button visibility and reduced-motion behavior; keep its green pulse restrained.
- Terms and Privacy use the same light palette and type; preserve their content and owner-review status.
- Update the favicon’s amber treatment to indigo, with a legible contrasting “H”. Do not change contact details, metadata wording or legal dates solely for recoloring.

## 4. Technical implementation details

- Use Tailwind v4 and semantic tokens defined in `src/styles.css`; convert palette values to equivalent OKLCH definitions and map them through `@theme inline`.
- Separate role tokens: `primary-foreground` must be white, not aliased to the newly light background; `accent-foreground` must be dark ink; `whatsapp-foreground` must remain white. Give destructive feedback its own readable foreground/background pairing.
- Define independent tokens for raised surfaces, muted surfaces, input borders, hover states and neutral shadows. The existing secondary color currently serves several roles; separate those roles instead of replacing everything with lavender.
- Use existing design-system control variants; do not scatter raw colors or inline color styles through page code.
- Keep all CSS imports at the top; load external fonts with root head links, never remote CSS imports.
- Ensure the default rendered theme is light on home and legal pages; audit any root dark class and browser color-scheme settings rather than adding a theme switch.
- Primary scope: `src/styles.css`, `src/routes/__root.tsx`, `src/routes/index.tsx`, shared navigation/footer/floating WhatsApp and legal layout, and `public/favicon.svg`.
- Preserve the centralized brand/contact module and existing tests. Recoloring must not modify business logic or the mobile hook without an actual diagnostic.
- The uploaded image is a design reference only; do not embed the screenshot as website imagery or invent a portrait.

## 5. Verification and acceptance criteria

1. Check automatic build diagnostics and resolve real errors without speculative hook changes.
2. Run existing contact tests to ensure the WhatsApp destination, greeting and field limits remain unchanged.
3. Inspect home, Terms and Privacy at desktop and mobile sizes; confirm light backgrounds, loaded fonts, wrapping, menu visibility, section offsets and no horizontal overflow.
4. Exercise navigation from home/legal pages, mobile open/close/Escape, FAQ, invalid and valid contact submissions, retained form values and fallback WhatsApp draft.
5. Verify hover, focus, disabled, invalid and open states; check normal text contrast ≥4.5:1 and meaningful control boundaries/focus indicators ≥3:1.
6. Confirm coral is never small text on light surfaces and no amber/teal/neon remnants remain in active UI; WhatsApp green is intentionally retained.
7. Verify zero new runtime errors and all existing unique route titles/share metadata remain intact.

## Ready-to-use implementation prompt

Recolor the existing Huzaifa Bukhari website to Option B from the uploaded reference: cool white `#F7F8FC`, indigo `#3B3FD8`, coral `#FF6B4A`, dark ink `#12142B` and soft lavender `#E3E5F2`. Follow this plan’s section treatments and accessibility requirements. Use Plus Jakarta Sans headings with Inter body text. Retain the current personal-brand heading, five services, approach, About, FAQ, WhatsApp form, shared navigation/footer and legal pages. Keep the canvas light and off pure white, individual cards white, primary actions indigo with white text, body text dark and coral restricted to dark-text badges and small decorative rules. Replace amber/teal and dark-theme styling via semantic OKLCH tokens, carefully decoupling action foregrounds, input borders, muted surfaces and WhatsApp icon colors. Preserve all business facts, contact destinations, form validation and interaction behavior. Do not copy reference performance metrics, placeholder copy, booking links or results claims. Do not add features, backend, theme switch, portrait, or publish. Investigate only genuine compiler diagnostics; the pasted TS2686 text is not a complete error. Run existing contact tests and verify all three pages and the central WhatsApp flow across desktop and mobile before reporting completion.