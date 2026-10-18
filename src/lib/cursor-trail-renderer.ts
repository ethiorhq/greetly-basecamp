import { TRAIL_MAX_STREAKS, trailProgress } from './cursor-trail';

type Point = { x: number; y: number };
type Streak = { born: number; points: Point[]; x: number; y: number; vx: number; vy: number; turn: number; color: string; width: number };

/** Canvas fallback: short advected ink filaments, no perpetual render loop. */
export function createCursorTrailRenderer(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d');
  if (!context) return null;
  const ctx = context;
  let streaks: Streak[] = [];
  let frame = 0;
  let lastTime = 0;
  let previous: Point | null = null;
  let pending: Point | null = null;
  let sequence = 0;
  let lastMove = 0;
  let primary = '';
  let accent = '';

  function resize() {
    clear();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const tokens = getComputedStyle(document.documentElement);
    primary = tokens.getPropertyValue('--primary').trim();
    accent = tokens.getPropertyValue('--accent').trim();
  }

  function clear() {
    cancelAnimationFrame(frame);
    frame = 0;
    streaks = [];
    previous = null;
    pending = null;
    lastTime = 0;
    lastMove = 0;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas.dataset.active = 'false';
  }

  function tick(now: number) {
    frame = 0;
    const dt = Math.min((now - (lastTime || now - 16.7)) / 16.7, 2);
    lastTime = now;
    if (pending) {
      const point = pending;
      pending = null;
      if (previous) {
        const dx = point.x - previous.x;
        const dy = point.y - previous.y;
        const distance = Math.hypot(dx, dy);
        // Ignore teleports and stationary pointer events; bound work per frame.
        if (distance > 1 && distance < 240) {
          const count = Math.min(6, Math.ceil(distance / 9));
          const speed = Math.min(distance / 14, 4);
          const nx = -dy / distance;
          const ny = dx / distance;
          for (let i = 1; i <= count; i++) {
            sequence++;
            const side = sequence % 2 ? 1 : -1;
            const x = previous.x + dx * i / count + nx * side * 3;
            const y = previous.y + dy * i / count + ny * side * 3;
            streaks.push({ born: now, x, y, points: [{ x, y }], vx: dx / distance * speed + nx * side * .65, vy: dy / distance * speed + ny * side * .65, turn: side * .035, color: sequence % 5 === 0 ? accent : primary, width: 2 + speed * .7 });
          }
          streaks = streaks.slice(-TRAIL_MAX_STREAKS);
        }
      }
      previous = point;
    }
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    streaks = streaks.filter(s => trailProgress(s.born, now) < 1);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const s of streaks) {
      const progress = trailProgress(s.born, now);
      const angle = s.turn * dt;
      const vx = s.vx * Math.cos(angle) - s.vy * Math.sin(angle);
      s.vy = (s.vx * Math.sin(angle) + s.vy * Math.cos(angle)) * .985;
      s.vx = vx * .985;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.points.push({ x: s.x, y: s.y });
      if (s.points.length > 12) s.points.shift();
      const first = s.points[0];
      if (!first || s.points.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < s.points.length - 1; i++) {
        const p = s.points[i];
        const next = s.points[i + 1];
        ctx.quadraticCurveTo(p.x, p.y, (p.x + next.x) / 2, (p.y + next.y) / 2);
      }
      ctx.lineTo(s.x, s.y);
      const fade = Math.sin(Math.PI * Math.min(.5, progress * 6)) * (1 - progress);
      // Soft outer ink and a fine filament remain readable on a light canvas.
      ctx.strokeStyle = s.color;
      ctx.globalAlpha = .045 * fade;
      ctx.lineWidth = s.width * 4;
      ctx.stroke();
      ctx.globalAlpha = .23 * fade;
      ctx.lineWidth = s.width;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (streaks.length || pending) {
      canvas.dataset.active = 'true';
      frame = requestAnimationFrame(tick);
    } else {
      lastTime = 0;
      canvas.dataset.active = 'false';
    }
  }

  resize();
  return {
    resize,
    clear,
    move(x: number, y: number) {
      const now = performance.now();
      if (now - lastMove > 150) previous = null;
      lastMove = now;
      pending = { x, y };
      if (!frame) frame = requestAnimationFrame(tick);
    },
    destroy() { clear(); canvas.width = 0; canvas.height = 0; },
  };
}