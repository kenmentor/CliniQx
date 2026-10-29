import Reveal from '@/Components/UI/Reveal';
import { Eyebrow } from '@/Components/UI/Primitives';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'center' | 'left';
  no?: string;
};

const SectionHeading = ({ eyebrow, title, lead, align = 'center', no }: Props) => {
  const centered = align === 'center';
  return (
    <Reveal
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}
    >
      <Eyebrow>
        {no && <span className="mr-3 text-ink/30">{no}</span>}
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-5 text-3xl md:text-5xl leading-[1.15] tracking-tight text-ink font-medium">
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-muted">
          {lead}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
