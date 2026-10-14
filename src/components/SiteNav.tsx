import { useEffect, useRef, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brand, whatsappUrl } from '@/lib/brand';
const links = [{ hash: 'services', label: 'Services' }, { hash: 'approach', label: 'Approach' }, { hash: 'about', label: 'About' }, { hash: 'faq', label: 'FAQ' }, { hash: 'contact', label: 'Contact' }];
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { const update = () => setScrolled(window.scrollY > 12); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.dataset.menuOpen = 'true';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab') return;
      const items = [toggle.current, ...Array.from(menu.current?.querySelectorAll<HTMLElement>('a') ?? [])].filter((item): item is HTMLElement => item !== null);
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    document.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; delete document.documentElement.dataset.menuOpen; document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); toggle.current?.focus(); };
  }, [open]);
  return <><div className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 sm:pt-6"><header className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border backdrop-blur-xl transition-all duration-300 ${scrolled ? 'border-border bg-background/95 px-5 py-2 shadow-nav' : 'border-border bg-card/85 px-6 py-3'}`}>
    <Link to="/" onClick={() => setOpen(false)} className="font-display text-sm font-bold sm:text-lg">{brand.name}<span className="text-primary">.</span></Link>
    <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">{links.map(l => <Link key={l.hash} to="/" hash={l.hash} className="text-xs font-medium text-muted-foreground transition-colors hover:text-accent">{l.label}</Link>)}</nav>
    <Button asChild className="hidden rounded-full px-5 lg:inline-flex"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Let's talk<ArrowUpRight /></a></Button>
    <Button ref={toggle} variant="outline" size="icon" className="rounded-full lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
  </header></div>{open && <div ref={menu} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 bg-background lg:hidden">{links.map(l => <Link key={l.hash} to="/" hash={l.hash} onClick={() => setOpen(false)} className="font-display text-3xl font-semibold hover:text-accent">{l.label}</Link>)}<Button asChild size="lg" className="mt-4 h-12 rounded-full"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Message on WhatsApp<ArrowUpRight /></a></Button></div>}</>;
}
