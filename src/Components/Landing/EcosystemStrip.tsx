import Reveal from '@/Components/UI/Reveal';

const items = [
  'Hospitals',
  'Clinics',
  'Diagnostics',
  'Pharmacies',
  'Insurers',
  'Emergency',
];

const EcosystemStrip = () => {
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-16">
        <Reveal className="text-center">
          <p className="eyebrow text-ink-muted">
            Everyone involved in your care — finally connected
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {items.map((b) => (
              <span
                key={b}
                className="text-xl md:text-2xl tracking-tight text-ink/35 font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EcosystemStrip;
