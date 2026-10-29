import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'ink';
type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-lift hover:bg-[#0e7fd8] hover:-translate-y-0.5',
  secondary:
    'bg-white text-ink border border-border shadow-soft hover:border-primary/40 hover:-translate-y-0.5',
  outline:
    'border border-white/30 text-white hover:bg-white/10 backdrop-blur',
  ghost: 'text-ink-muted hover:text-ink hover:bg-muted',
  white: 'bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-lift',
  ink: 'bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5 shadow-soft',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-[15px]',
  lg: 'px-9 py-4 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Props) => {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
