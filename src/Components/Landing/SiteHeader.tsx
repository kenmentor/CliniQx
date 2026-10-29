import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAV_LINKS } from '@/data/cliniqx';
import Button from '@/Components/UI/Button';

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-[76px] items-center justify-between gap-6">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white text-lg font-medium shadow-soft">
              C
            </span>
            <span className="leading-tight">
              <span className="block text-[17px] tracking-tight text-ink">
                ClinIQx
              </span>
              <span className="block text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                by HealthIQue
              </span>
            </span>
          </a>

          {/* Desktop nav — intentionally few items, lots of air */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] text-ink-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#stories">
              <Button variant="ghost" size="sm">
                Patient stories
              </Button>
            </a>
            <a href="#cta">
              <Button size="sm">Find a hospital</Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink py-2 border-b border-muted last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a href="#cta" onClick={() => setOpen(false)} className="flex-1">
                <Button className="w-full">Find a hospital</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
