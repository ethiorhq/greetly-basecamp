# Indigo and Coral Cursor Effect

## Goal
Add a refined, flowing cursor trail inspired by the uploaded canvas example, matching Huzaifa’s existing cool-white, indigo and coral website. Keep the current layout, text, navigation, hover glows and WhatsApp flow unchanged.

## Reference and reported error
- The upload contains partial HTML/CSS and only the final few lines of a much longer JavaScript effect. It cannot run as provided or establish the exact original animation.
- Build a fluid-style interpretation rather than claim an exact recreation. Do not add the example’s “Move the mouse” or “See the magic” headings.
- The pasted TS2686 text contains the feature request, not a usable compiler diagnostic. Leave the React-importing mobile hook unchanged unless fresh diagnostics show a genuine problem.

## Appearance
- A transparent, full-window layer carries soft flowing wisps following mouse movement, not a solid background or a replacement cursor.
- Indigo is dominant; coral supplies occasional restrained accents. Use existing semantic palette tokens rather than independent hardcoded colors.
- Movement creates a short trail that curls, dissipates and disappears when the mouse stops. No idle animation, permanent paint accumulation, random ambient blobs or flashing.
- Keep the trail small and translucent enough to preserve text contrast on the light canvas. Avoid bright additive blending that vanishes against white and dark blending that muddies the page.
- Retain the system cursor and existing clickable states. No follower labels, oversized cursor rings or new settings controls.

## Interaction and accessibility
- Share the effect across the home, Terms and Privacy pages without duplicating it during navigation.
- The layer never captures clicks, scrolling, selection or keyboard focus and is hidden from assistive technology.
- Run only with a fine, hover-capable mouse pointer. Touch interaction does not generate trails or interfere with scrolling.
- Disable completely for reduced-motion preferences, including preference changes while the page is open.
- Fade and stop when the pointer leaves the window, the tab becomes hidden or the mobile menu is open. Resume only after fresh mouse movement.
- Keep form fields and their immediate editing area free of fresh trail emission so typing and validation remain easy to read.

## Technical approach
- Use a small shared browser-only cursor-effect component mounted once in the root layout; keep initial server and browser markup consistent.
- Prefer a maintained WebGL fluid-simulation engine for the core animation rather than recreate the incomplete simulation from the upload. Load it only after checking pointer capability and motion preferences.
- Configure a transparent canvas, bounded simulation resolution and capped pixel density. Use an explicit layer order that keeps menus and interactive content readable.
- Read indigo and coral from global CSS tokens and convert them into the engine’s required color representation without changing the site palette.
- Pause animation when idle and release animation frames, listeners, canvases and GPU resources on teardown. Avoid React state updates per frame.
- If the chosen engine cannot satisfy transparency, cleanup or idle control, use a lightweight canvas flowing-trail fallback. If graphics support is unavailable, preserve the normal website without an effect or error.
- Record the shared mounting and browser-only lifecycle convention in AGENTS.md. No backend, persistence, analytics or publishing is required.

## Verification
1. Check current automatic build diagnostics; address actual errors without speculative mobile-hook changes.
2. Move the mouse across the first screen, service cards, navigation and FAQ; inspect screenshots showing indigo/coral trails on the light background.
3. Verify the trail fades after movement stops, does not keep rendering while idle, and clears when leaving the page or switching tabs.
4. Exercise FAQ expansion, legal-page navigation, text selection, and valid/invalid WhatsApp draft submissions with the effect enabled. Confirm entered values and the fallback draft link remain intact.
5. Check touch-only and reduced-motion environments: no animation layer should run and navigation/scrolling must work normally. Confirm mouse-capable rendering has no horizontal overflow.
6. Test any extracted eligibility/lifecycle rules and run the existing contact tests. Check all content-page metadata remains unchanged and inspect automatic build and browser-error signals before reporting completion.

## Scope boundary
Only add the cursor effect and the lifecycle safeguards it needs. Do not rewrite content, change destinations, replace existing hover treatments, copy the demo headings, add a theme switch or publish the site.