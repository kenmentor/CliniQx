import {
  HomeModernIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  VideoCameraIcon,
  HeartIcon,
  ClockIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { IMPACTS } from '@/data/cliniqx';
import { IMG } from '@/data/images';

const MARKET_CARDS = [
  {
    title: 'Your clinic & family doctor',
    text: 'Everyday visits, check-ups and repeat prescriptions — with your history already on screen.',
    img: IMG.consult,
    alt: 'Doctor consulting with a patient and reviewing records together',
    icon: HomeModernIcon,
  },
  {
    title: 'Your hospital',
    text: 'Admission to discharge without lost files — wards, theatre and pharmacy reading the same story.',
    img: IMG.facility,
    alt: 'Modern hospital facility exterior and entrance',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Bills & insurance, settled',
    text: 'One itemised statement, receipts kept, insurance processed without you carrying papers between desks.',
    img: IMG.billing,
    alt: 'Clear billing statement being explained at a hospital desk',
    icon: BanknotesIcon,
  },
  {
    title: 'Video visits & follow-ups',
    text: 'See your doctor from home when a physical visit is not needed — with the same record in front of them.',
    img: IMG.research,
    alt: 'Doctor following up with a patient over a video call',
    icon: VideoCameraIcon,
  },
];

const IMPACT_ICONS = [
  HeartIcon,
  ClockIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  ShareIcon,
];

export const Markets = () => {
  return (
    <section id="who" className="section-air bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          no="03"
          eyebrow="Where you will find it"
          title="From your local clinic to the teaching hospital."
          lead="Starting in one hospital, growing across its network — your record recognised everywhere it operates."
        />
        <div className="mt-16 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2">
          {MARKET_CARDS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="h-full overflow-hidden rounded-lg border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-60 md:h-72 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-md bg-white/95 text-primary shadow-soft">
                    <m.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-9 md:p-11">
                  <h3 className="text-xl md:text-2xl text-ink tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
                    {m.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-[15px] text-ink-muted">
            Ask at reception whether your hospital is connected yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export const Impact = () => {
  return (
    <section id="impact" className="section-air bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          no="04"
          eyebrow="What improves"
          title="What you will notice, visit after visit."
          lead="Not promises about systems — small differences you can feel at the desk, in the ward, and at the bill counter."
        />
        <div className="mx-auto mt-16 md:mt-20 max-w-4xl divide-y divide-border border-y border-border">
          {IMPACTS.map((im, i) => {
            const Icon = IMPACT_ICONS[i % IMPACT_ICONS.length];
            return (
              <Reveal key={im.title} delay={i * 0.04}>
                <div className="grid items-center gap-4 py-9 md:grid-cols-[64px_1fr_1.4fr] md:gap-8 md:py-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl tracking-tight text-ink md:text-2xl">
                    {im.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-ink-muted">
                    {im.text}
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
