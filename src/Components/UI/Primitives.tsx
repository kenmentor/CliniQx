import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Badge = ({ children, className = '' }: Props) => (
  <span
    className={`inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-1.5 text-[13px] font-medium text-ink shadow-sm ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
    {children}
  </span>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow text-primary font-medium">{children}</p>
);
