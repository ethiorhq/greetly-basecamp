import { useEffect, useRef } from 'react';
import { cursorTrailAllowed, isCursorEditingTarget } from '@/lib/cursor-trail';

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;
    if (!element) return;
    const canvas: HTMLCanvasElement = element;
    const pointer = matchMedia('(hover: hover) and (pointer: fine)');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let loading = false;
    let renderer: ReturnType<typeof import('@/lib/cursor-trail-renderer').createCursorTrailRenderer> = null;
    const eligible = () => cursorTrailAllowed(pointer.matches, motion.matches, document.visibilityState === 'visible', document.documentElement.dataset.menuOpen === 'true');

    async function sync() {
      const allowed = eligible();
      canvas.hidden = !allowed;
      if (!allowed) {
        renderer?.destroy();
        renderer = null;
        return;
      }
      if (renderer || loading) return;
      loading = true;
      try {
        const { createCursorTrailRenderer } = await import('@/lib/cursor-trail-renderer');
        if (!disposed && eligible()) renderer = createCursorTrailRenderer(canvas);
      } catch {
        // Decorative enhancement: graphics failure must never break the website.
        canvas.hidden = true;
      } finally {
        loading = false;
      }
    }
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !eligible()) return;
      if (isCursorEditingTarget(event.target) || isCursorEditingTarget(document.activeElement)) {
        renderer?.clear();
        return;
      }
      renderer?.move(event.clientX, event.clientY);
    };
    const clear = () => renderer?.clear();
    const onFocus = () => { if (isCursorEditingTarget(document.activeElement)) clear(); };
    const onResize = () => renderer?.resize();
    const observer = new MutationObserver(() => { void sync(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-menu-open'] });
    pointer.addEventListener('change', sync);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', clear);
    window.addEventListener('blur', clear);
    window.addEventListener('scroll', clear, { passive: true });
    document.addEventListener('focusin', onFocus);
    window.addEventListener('resize', onResize, { passive: true });
    void sync();
    return () => {
      disposed = true;
      renderer?.destroy();
      observer.disconnect();
      pointer.removeEventListener('change', sync);
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', clear);
      window.removeEventListener('blur', clear);
      window.removeEventListener('scroll', clear);
      document.removeEventListener('focusin', onFocus);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" hidden />;
}