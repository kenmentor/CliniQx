// INTERNAL — partner room only. Not rendered on the public scroll.
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { PARTNERSHIPS } from '@/data/partner-brief';

const Partnership = () => {
  return (
    <section id="partner" className="section-air bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Investment & partnership"
          title="Help power connected healthcare."
          lead="We seek strategic collaboration across five areas — before broader regional and international expansion."
        />

        <div className="mx-auto mt-16 md:mt-20 max-w-5xl rounded-lg border border-border bg-white shadow-soft overflow-hidden">
          {PARTNERSHIPS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.03}>
              <div className="grid gap-2 md:grid-cols-[1fr_1.4fr] md:gap-10 px-8 md:px-12 py-8 md:py-9 border-b border-border last:border-0 hover:bg-muted/40 transition-colors">
                <h3 className="text-lg text-ink">{p.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-ink-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
