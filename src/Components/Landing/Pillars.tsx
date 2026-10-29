import { CheckIcon } from '@heroicons/react/24/solid';
import SectionHeading from '@/Components/UI/SectionHeading';
import Reveal from '@/Components/UI/Reveal';
import { IMG } from '@/data/images';

const PILLARS = [
  {
    title: 'Your visits, remembered',
    text: 'Consultations, lab results, prescriptions and nursing notes land in one story your doctors can actually follow.',
    points: ['History that travels with you', 'Test results without the chase', 'Prescriptions that make sense'],
    img: IMG.clinical,
    alt: 'Physician in a hospital ward reviewing a patient file',
  },
  {
    title: 'Your hospital stay, organised',
    text: 'Beds, theatre slots, staff and medicines arranged around you — fewer delays, fewer repeated questions.',
    points: ['Shorter, calmer queues', 'Staff who already know your case', 'Discharge papers that are clear'],
    img: IMG.operations,
    alt: 'Calm modern hospital ward prepared for patients',
  },
  {
    title: 'Your next step, arranged',
    text: 'Referrals sent ahead, video visits where possible, insurance and bills settled in one understandable statement.',
    points: ['Referrals that arrive before you', 'Video visits from home', 'One bill, fully explained'],
    img: IMG.connected,
    alt: 'Doctor speaking with a patient over a video consultation',
  },
];

const Pillars = () => {
  return (
    <section id="platform" className="section-air bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          no="02"
          eyebrow="What changes for you"
          title="Three ways care finally feels like one."
          lead="Not another app to learn. The hospital itself works differently — behind the desk, so your visit feels simple in front of it."
        />

        <div className="mt-16 md:mt-24 grid gap-6 md:gap-8 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                className={`h-full overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                  i === 1
                    ? 'bg-ink text-white border-ink shadow-lift'
                    : 'bg-background border-border shadow-soft hover:shadow-lift'
                }`}
              >
                <div className="relative h-56 md:h-60 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      i === 1
                        ? 'bg-gradient-to-t from-ink via-ink/20 to-transparent'
                        : 'bg-gradient-to-t from-ink/50 via-transparent to-transparent'
                    }`}
                  />
                </div>
                <div className="p-8 md:p-9">
                  <h3
                    className={`text-2xl tracking-tight ${
                      i === 1 ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-4 text-[15.5px] leading-relaxed ${
                      i === 1 ? 'text-white/70' : 'text-ink-muted'
                    }`}
                  >
                    {p.text}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[15px]">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                            i === 1
                              ? 'bg-white/12 text-secondary'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className={i === 1 ? 'text-white/85' : 'text-ink'}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 md:mt-16 max-w-2xl text-center">
          <p className="text-lg text-ink-muted leading-relaxed">
            One world, connected care — starting with your next visit.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Pillars;
