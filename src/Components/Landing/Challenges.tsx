import {
  IdentificationIcon,
  ArrowsRightLeftIcon,
  ClockIcon,
  ReceiptPercentIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { CHALLENGES } from '@/data/cliniqx';

const ICONS = [
  IdentificationIcon,
  ArrowsRightLeftIcon,
  ClockIcon,
  ReceiptPercentIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
];

const Challenges = () => {
  return (
    <section id="why" className="section-air bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          no="01"
          eyebrow="Why this matters"
          title="Getting care should not feel this hard."
          lead="You, your family and your doctors all want the same thing — the full story, in one place, at the right moment. Today it is scattered across files, buildings and bills."
        />

        {/* 3 columns max, huge gaps — anti-cluster */}
        <div className="mt-16 md:mt-24 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={c.title} delay={Math.min(i * 0.06, 0.3)}>
                <div className="h-full rounded-lg border border-border bg-white p-9 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl leading-snug text-ink">{c.title}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
