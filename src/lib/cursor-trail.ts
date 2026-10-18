export const TRAIL_LIFETIME_MS = 720;
export const TRAIL_MAX_STREAKS = 96;

export function cursorTrailAllowed(finePointer: boolean, reducedMotion: boolean, visible: boolean, menuOpen: boolean) {
  return finePointer && !reducedMotion && visible && !menuOpen;
}

export function trailProgress(born: number, now: number) {
  return Math.max(0, Math.min(1, (now - born) / TRAIL_LIFETIME_MS));
}

export function isCursorEditingTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest('form, input, textarea, select, [contenteditable]:not([contenteditable="false"])'));
}