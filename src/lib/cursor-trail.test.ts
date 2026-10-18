import { describe, expect, it } from 'vitest';
import { cursorTrailAllowed, trailProgress, TRAIL_LIFETIME_MS } from './cursor-trail';

describe('cursor trail safeguards', () => {
  it('allows a visible mouse-capable page', () => {
    expect(cursorTrailAllowed(true, false, true, false)).toBe(true);
  });
  it('disables touch-only devices', () => {
    expect(cursorTrailAllowed(false, false, true, false)).toBe(false);
  });
  it('disables reduced motion', () => {
    expect(cursorTrailAllowed(true, true, true, false)).toBe(false);
  });
  it('disables hidden tabs', () => {
    expect(cursorTrailAllowed(true, false, false, false)).toBe(false);
  });
  it('disables an open navigation menu', () => {
    expect(cursorTrailAllowed(true, false, true, true)).toBe(false);
  });
  it('expires completely after the short trail lifetime', () => {
    expect(trailProgress(100, 100)).toBe(0);
    expect(trailProgress(100, 100 + TRAIL_LIFETIME_MS / 2)).toBe(0.5);
    expect(trailProgress(100, 100 + TRAIL_LIFETIME_MS)).toBe(1);
    expect(trailProgress(100, 2000)).toBe(1);
  });
});