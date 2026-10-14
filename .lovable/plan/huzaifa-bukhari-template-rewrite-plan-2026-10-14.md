# Huzaifa Bukhari — Template Rewrite Plan

## Goal

Reuse the current premium dark template to create Huzaifa Bukhari’s personal website for Meta Ads and performance marketing, with WhatsApp inquiries as the main action. This plan covers the rewrite; the current site has not been changed.

## What the review found

- Current pages: home, Terms & Conditions and Privacy Policy.
- Reusable foundation: floating pill navigation, compact sections, service cards, FAQ accordion, WhatsApp contact form and legal-page layout.
- Arsalan-specific content occurs in homepage text, results, statistics, portrait, certificate, navigation, social links, contact numbers, legal text and search/share metadata.
- WhatsApp details are duplicated across three files; the portfolio link goes to Arsalan’s external website.
- No booking, Google Analytics, blog, pricing or on-site portfolio is currently implemented.
- Browser checks loaded all three pages successfully with no captured page errors. This is not a complete interaction or TypeScript check.

## Reported error

The supplied `TS2686` message contains the rewrite request rather than a complete compiler diagnostic. The current mobile hook explicitly imports React; its reported line 4 is blank, and the project already uses the automatic React JSX setting. Do not change working code speculatively. If a fresh compiler error appears during implementation, resolve that actual diagnostic before completion.

## 1. Replace identity and contact details comprehensively

- Use **Huzaifa Bukhari**, **Performance Marketer | Meta Ads & Growth Strategy**, and Pakistan.
- Replace all public Arsalan names, phone numbers, social profiles, domain references and WhatsApp greetings.
- WhatsApp: **+92 332 0218839**. Email: **info@huzaifabukhari.com**.
- Use the supplied LinkedIn, Facebook and Instagram profiles.
- Intended domain: **huzaifabukhari.com**. Connecting or publishing it is not part of this approval.
- Keep Huzaifa’s name as the text wordmark and primary first-screen identity; HB Digital can appear in the about copy. Preserve the ETHIOR credit.

## 2. Adapt the appearance to Huzaifa’s supplied palette

- Dark background **#12131C**, structural secondary **#334155**, primary amber **#FFB800**, supporting teal **#00F2FE**, primary text **#FFFFFF**.
- Preserve the premium floating navigation, readable sans-serif type and tighter spacing while replacing old yellow glows and hardcoded colors.
- Use restrained, accessible accents and small-radius repeated cards. WhatsApp retains its recognizable green/white treatment.
- Do not reuse Arsalan’s portrait or certificate. Inspect supplied media before using it; use a typography-led introduction if no suitable Huzaifa portrait is available.

## 3. Rewrite the homepage around performance marketing

Recommended order:
1. Huzaifa introduction and “Message on WhatsApp” action.
2. Five service cards: Meta Ads Management; Lead Generation Campaigns; Audience Research & Targeting; Campaign Optimization & Performance Tracking; Advertising Strategy & Creative Testing.
3. Genuine work examples clearly labelled as example strategies, or a business-first process section if work assets are unavailable.
4. About: audience understanding, creativity plus data, testing and optimization around business goals.
5. Five FAQs about platforms, client fit, campaign approach, realistic expectations and measurement.
6. Contact form and footer.

Remove inherited SEO/Local SEO offers, traffic/revenue results, certification and numeric claims. No fabricated testimonials, client outcomes, package prices or guarantees. The 5–10 monthly inquiry figure is an internal goal, not website proof; the unlabelled “45k” response is not an approved service price.

## 4. Keep interactions coherent

- Every WhatsApp action uses the same number; the form draft starts “Hi Huzaifa”.
- Preserve current form validation and privacy link. Describe opening a draft accurately, not sending or storing an inquiry.
- Replace the external Arsalan portfolio destination with a genuine work destination only when present.
- Ensure navigation works from legal pages, section headings clear the floating bar, and the mobile menu closes visibly and by keyboard.
- Use a single floating-button visibility rule; keep it hidden in the hero and behind no menu controls. Respect reduced-motion preferences.

## 5. Update legal and discoverability content

- Retain `/terms` and `/privacy`; rewrite identity and service scope, and prepare policies matching the actual WhatsApp flow for owner review.
- Do not inherit unconfirmed advance-payment, free-audit, reporting-frequency, retention or tracking promises.
- Update unique titles/descriptions and social-sharing metadata on all three pages, root site identity, canonical URLs, Person/Service structured data, favicon, robots, sitemap, llms summary and README.
- Only include existing pages in the sitemap. Use meaningful absolute HTTPS sharing images when available; otherwise omit image tags rather than using relative placeholders.

## Deferred until real inputs are supplied

- Testimonials: authentic quotes and permission.
- Pricing/packages: approved scope, currency and rates.
- Blog: approved articles or a separate content brief.
- Booking: a real calendar link and booking terms.
- Google Analytics: measurement ID and appropriate consent requirements.
- Portrait, certificates and work: suitable owned assets; five supplied Drive links remain uninspected.

These do not block the core WhatsApp-focused rewrite. No empty pages, fake integrations or invented content will be added.

## Technical details

- Keep TanStack Start, React 19, TypeScript and Tailwind v4; retain root routing and platform infrastructure.
- Centralize public identity/contact settings in a browser-safe module and share header/footer where needed; record structural rules in AGENTS.md.
- Primary files: `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/terms.tsx`, `src/routes/privacy.tsx`, `src/components/SiteNav.tsx`, `src/components/FloatingWhatsApp.tsx`, `src/components/LegalPage.tsx`, `src/styles.css`, public SEO/favicon files, README and retired asset pointers.
- No backend is required for the current WhatsApp flow. A later approved persistent/server feature requires Lovable Cloud first.

## Completion checks

- Add and run focused tests for the shared WhatsApp destination, greeting/encoding and retained form limits.
- Check automatic compiler/build diagnostics and fix actual errors.
- Exercise desktop/mobile menu, legal-page navigation, FAQ, invalid and valid form submission, correct WhatsApp draft, social links, floating-button visibility and available assets.
- Search active source and public content for the old name, number, domain, social profiles and inherited claims.
- Report changed files, verified outcomes and any remaining input-dependent items. Do not publish without explicit permission.

A detailed ready-to-use implementation prompt has also been saved in Files as “huzaifa-rewrite-prompt.md”.
