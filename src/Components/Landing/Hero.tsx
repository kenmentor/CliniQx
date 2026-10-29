import { motion } from "framer-motion";
import { ArrowRightIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  ReceiptPercentIcon,
  CalendarDaysIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { FingerPrintIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import Button from "@/Components/UI/Button";
import { IMG } from "@/data/images";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, #75c6fc 0%, #128ef322 55%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="eyebrow text-ink-muted mb-6">
            HealthIQue · One world · Connected healthcare
          </p>

          <h1 className="text-4xl leading-[1.08] tracking-tight text-ink font-medium sm:text-6xl md:text-7xl md:leading-[1.05]">
            Your health story,
            <br className="hidden sm:block" />
            wherever care
            <span className="text-primary"> finds you.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            ClinIQx keeps your visits, test results, prescriptions and bills in
            one secure record — so every doctor you meet already knows your
            story.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta">
              <Button size="lg">
                Find a connected hospital
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </a>
            <a href="#platform">
              <Button variant="secondary" size="lg">
                <PlayCircleIcon className="h-5 w-5 text-primary" />
                See how it cares for you
              </Button>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-muted">
            <ShieldCheckIcon className="h-4 w-4 text-primary" />
            Private by design · You approve who sees what
          </div>
        </motion.div>

        {/* Organic hero — real clinical photography + live product frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-16 md:mt-20 max-w-6xl"
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] items-stretch">
            {/* Main photo */}
            <div className="relative overflow-hidden rounded-lg border border-border shadow-lift bg-ink min-h-[340px] md:min-h-[440px]">
              <img
                src={IMG.heroMain}
                alt="Clinician reviewing a unified patient record on a tablet at the bedside"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              {/* Floating proof chips */}
              <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/95 px-4 py-2 text-[13px] text-ink shadow-soft">
                  <FingerPrintIcon className="h-4 w-4 text-primary" />
                  Your file follows you
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/95 px-4 py-2 text-[13px] text-ink shadow-soft">
                  <CircleStackIcon className="h-4 w-4 text-primary" />
                  Visits, tests & bills together
                </span>
              </div>
              <span className="absolute left-5 top-5 md:left-7 md:top-6 rounded-md bg-ink/70 backdrop-blur px-4 py-1.5 text-[12px] tracking-[0.18em] uppercase text-white">
                Now welcoming our first hospitals
              </span>
            </div>

            {/* Stacked secondary proof */}
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-lg border border-border shadow-soft min-h-[220px] bg-white">
                <img
                  src={IMG.heroTeam}
                  alt="Surgical and nursing team coordinating in a modern operating theatre"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-[15px] leading-snug text-white">
                  Your whole care team — finally on the same page.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white shadow-soft overflow-hidden">
                <div className="border-b border-border px-6 py-4">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                    Example visit summary
                  </p>
                  <p className="mt-1 text-[15px] text-ink">
                    Tuesday · General outpatient
                  </p>
                </div>
                <div className="divide-y divide-border text-left">
                  {[
                    {
                      icon: CalendarDaysIcon,
                      k: "Seen & recorded",
                      v: "Consultation notes filed to your story",
                    },
                    {
                      icon: BeakerIcon,
                      k: "Result received",
                      v: "Lab sent ahead — no repeat test",
                    },
                    {
                      icon: ReceiptPercentIcon,
                      k: "Bill settled",
                      v: "Itemised, receipted, insurance filed",
                    },
                  ].map((c) => (
                    <div
                      key={c.k}
                      className="flex items-center gap-4 px-6 py-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[14px] font-medium text-ink">
                          {c.k}
                        </span>
                        <span className="block text-[13px] text-ink-muted">
                          {c.v}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm tracking-wide text-ink-muted">
            One story of your health — shared only with your permission.
          </p>
        </motion.div>
      </div>

      {/* Assurance band — enterprise trust, plain words */}
      <div className="relative border-t border-border bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 sm:grid-cols-3 md:px-10">
          {[
            {
              icon: ShieldCheckIcon,
              t: "Permission first",
              d: "Nothing is shared without your approval. Ever.",
            },
            {
              icon: DocumentCheckIcon,
              t: "Every view recorded",
              d: "Who saw your file, and when — written down.",
            },
            {
              icon: ReceiptPercentIcon,
              t: "Bills in plain words",
              d: "Every charge itemised. Every payment receipted.",
            },
          ].map((a) => (
            <div key={a.t} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <a.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[15px] font-medium text-ink">
                  {a.t}
                </span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-muted">
                  {a.d}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
