// INTERNAL — partner room only. Not rendered on the public scroll.
import { useState } from 'react';
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { DOMAINS } from '@/data/partner-brief';

const Domains = () => {
  const [active, setActive] = useState(0);
  const current = DOMAINS[active];

  return (
    <section id="domains" className="section-air bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Core solution framework"
          title="Eight domains. One coherent system."
          lead="Modular by design — deploy what you need today, stay integrated with the HealthIQue ecosystem tomorrow."
        />

        <div className="mt-16 md:mt-20 grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Selector list — shadcn-style, airy */}
          <Reveal>
            <div className="rounded-lg border border-border bg-white shadow-soft overflow-hidden">
              {DOMAINS.map((d, i) => (
                <button
                  key={d.n}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-7 md:px-8 py-5 md:py-6 flex items-center gap-5 transition-colors border-b border-border last:border-0 ${
                    i === active ? 'bg-ink text-white' : 'hover:bg-muted/60'
                  }`}
                >
                  <span
                    className={`text-sm font-medium tracking-widest ${
                      i === active ? 'text-secondary' : 'text-ink-muted'
                    }`}
                  >
                    {d.n}
                  </span>
                  <span
                    className={`text-[15.5px] md:text-base ${
                      i === active ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {d.title}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Detail panel — single impression at a time */}
          <Reveal delay={0.1} key={current.n}>
            <div className="rounded-lg bg-ink text-white p-10 md:p-14 shadow-lift min-h-[420px] flex flex-col justify-between">
              <div>
                <p className="eyebrow text-secondary">{`Domain ${current.n}`}</p>
                <h3 className="mt-5 text-3xl md:text-4xl tracking-tight leading-tight">
                  {current.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-lg">
                  {current.text}
                </p>
              </div>
              <div className="mt-12 flex items-center gap-3">
                <div className="flex gap-2">
                  {DOMAINS.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to domain ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active
                          ? 'w-10 bg-secondary'
                          : 'w-4 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-auto text-sm text-white/50">
                  {current.n} / 08
                </span>
              </div>
            </div>
            <p className="mt-6 text-[15px] text-ink-muted leading-relaxed max-w-lg">
              Each domain ships independently yet shares identity, consent,
              security and interoperability underneath.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Domains;
