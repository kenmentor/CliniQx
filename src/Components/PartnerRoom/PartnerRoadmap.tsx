// INTERNAL — partner room only. Not rendered on the public scroll.
import Reveal from '@/Components/UI/Reveal';
import { ROADMAP } from '@/data/partner-brief';

export const Roadmap = () => {
  return (
    <section id="roadmap" className="section-air bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-end">
          <div>
            <p className="eyebrow text-secondary">Delivery plan for executives</p>
            <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.15]">
              What the board approves, in what order — and what it returns.
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-white/60 max-w-md lg:justify-self-end">
            Each phase is a funding and governance gate: defined entry criteria,
            a working institution at exit, and evidence before the next release
            of capital.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5 md:gap-6">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-md border border-white/12 bg-white/[0.04] p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-[12.5px] tracking-[0.2em] uppercase text-secondary">
                    {r.phase}
                  </p>
                  <span className="text-[12.5px] text-white/35">0{i + 1} / 05</span>
                </div>
                <h3 className="mt-4 text-[19px] leading-snug tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-[14px] font-medium text-secondary">
                  {r.outcome}
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/60 flex-1">
                  {r.text}
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-white/50">
                  {r.signal}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-14">
          <div className="grid gap-6 rounded-md border border-white/12 bg-white/[0.03] px-8 py-8 md:grid-cols-3 md:gap-10 md:px-12">
            <div>
              <p className="text-[12.5px] tracking-[0.2em] uppercase text-white/40">
                Method
              </p>
              <p className="mt-2 text-[15px] text-white/75">
                Design → Develop → Validate → Pilot → Evaluate → Scale
              </p>
            </div>
            <div>
              <p className="text-[12.5px] tracking-[0.2em] uppercase text-white/40">
                Non-negotiables
              </p>
              <p className="mt-2 text-[15px] text-white/75">
                Patient safety, consent, data protection and regulatory compliance
              </p>
            </div>
            <div>
              <p className="text-[12.5px] tracking-[0.2em] uppercase text-white/40">
                Commercial shape
              </p>
              <p className="mt-2 text-[15px] text-white/75">
                Subscription + modular licensing + implementation services
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Roadmap;
