// INTERNAL — partner room only. Not rendered on the public scroll.
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { ARCH_LAYERS } from '@/data/partner-brief';

const Architecture = () => {
  return (
    <section id="architecture" className="section-air bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="HealthIQue — ClinIQx architecture"
          title="Three layers. Clear accountability."
          lead="A calm stack: ecosystem on top, operating system in the middle, trusted identity at the foundation — supported by reusable YOUreka services."
        />

        <div className="mx-auto mt-16 md:mt-24 max-w-3xl space-y-5">
          {ARCH_LAYERS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08}>
              <div
                className={`rounded-lg border p-9 md:p-11 text-center shadow-soft ${
                  i === 1
                    ? 'bg-primary text-white border-primary shadow-lift md:scale-[1.04]'
                    : 'bg-background border-border'
                }`}
              >
                <p
                  className={`eyebrow ${
                    i === 1 ? 'text-white/80' : 'text-primary'
                  }`}
                >
                  {`Layer 0${3 - i} — ${l.role}`}
                </p>
                <h3
                  className={`mt-3 text-3xl md:text-4xl tracking-tight ${
                    i === 1 ? 'text-white' : 'text-ink'
                  }`}
                >
                  {l.name}
                </h3>
                <p
                  className={`mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed ${
                    i === 1 ? 'text-white/80' : 'text-ink-muted'
                  }`}
                >
                  {l.text}
                </p>
              </div>
              {i < ARCH_LAYERS.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden>
                  <div className="h-8 w-px bg-border" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-md border border-border bg-background px-8 py-5 text-center text-[15px] text-ink-muted">
            Supported by PayIQue · DAAMS · Comms · Workflow automation ·
            Interoperability — independently deployable, natively interoperable.
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Architecture;
