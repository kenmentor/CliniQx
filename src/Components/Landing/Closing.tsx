import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/Components/UI/Reveal';
import Button from '@/Components/UI/Button';
import { IMG } from '@/data/images';

export const FinalCTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white">
      <img
        src={IMG.facility}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36 text-center">
          <Reveal className="mx-auto max-w-3xl">
            <p className="eyebrow text-secondary">
              Your next visit can be different
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl tracking-tight leading-[1.08]">
              Bring your whole health story with you.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Ask whether your hospital is connected — or leave your details and
              we will point you to the nearest connected facility.
            </p>
            <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:care@healthique.global?subject=Find%20a%20connected%20hospital">
                <Button variant="white" size="lg">
                  Find a connected hospital
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </a>
              <a href="#platform">
                <Button variant="outline" size="lg">
                  How it protects you
                </Button>
              </a>
            </div>
            <p className="mt-9 text-sm text-white/40">
              Your records are shared only with your permission. Always.
            </p>
          </Reveal>
      </div>
    </section>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-ink text-lg">
                C
              </span>
              <span className="leading-tight">
                <span className="block text-[17px]">ClinIQx</span>
                <span className="block text-[11px] tracking-[0.22em] uppercase text-white/50">
                  by HealthIQue
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              One secure record for your visits, results, prescriptions and
              bills — recognised everywhere care finds you.
            </p>
            <p className="mt-6 text-[13px] tracking-[0.22em] uppercase text-white/40">
              One world · Connected healthcare
            </p>
          </div>

          <div>
            <p className="text-sm tracking-[0.18em] uppercase text-white/40">
              Care
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li><a href="#platform" className="hover:text-white">Your visits</a></li>
              <li><a href="#who" className="hover:text-white">Where to find it</a></li>
              <li><a href="#impact" className="hover:text-white">What improves</a></li>
              <li><a href="#stories" className="hover:text-white">Patient stories</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.18em] uppercase text-white/40">
              Trust
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>Your consent first</li>
              <li>Private by design</li>
              <li>Clear bills</li>
              <li>Named accountability</li>
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.18em] uppercase text-white/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li><a href="#impact" className="hover:text-white">What improves</a></li>
              <li><a href="#stories" className="hover:text-white">Stories</a></li>
              <li><a href="#cta" className="hover:text-white">Find a hospital</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] uppercase tracking-[0.18em] text-white/40">
            <span>Privacy-first</span>
            <span aria-hidden className="text-white/20">·</span>
            <span>Consent-led</span>
            <span aria-hidden className="text-white/20">·</span>
            <span>Access recorded</span>
            <span aria-hidden className="text-white/20">·</span>
            <span>Bills itemised</span>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
            <span>© 2026 ClinIQx · HealthIQue · One world, connected care</span>
            <span>Your health story — shared only with your permission</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
