import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=923118099156&text&type=phone_number&app_absent=0";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  {
    href: "https://portfolio.arsalankhattak.com",
    label: "Portfolio",
    external: true,
  },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      history.replaceState(null, "", href);
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <header
        className={`pointer-events-auto w-full max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-primary/20 bg-background/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-background/50 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2.5 pl-5 pr-2.5 sm:py-3 sm:pl-6 sm:pr-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-sm font-semibold tracking-tight text-foreground sm:text-base"
          >
            Arsalan Khattak
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-6px_var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
            >
              Let's Talk
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`pointer-events-auto fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2 px-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              style={{ fontFamily: "var(--font-display)" }}
              className="px-4 py-3 text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Let's Talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </div>
  );
}
