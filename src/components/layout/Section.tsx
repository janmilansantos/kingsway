import type { ReactNode } from 'react';

interface SectionProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly variant?: 'dark' | 'dark-alt' | 'light' | 'blueprint';
}

const variantClasses: Record<NonNullable<SectionProps['variant']>, string> = {
  dark: 'bg-surface',
  'dark-alt': 'bg-surface-container-low',
  light: 'bg-ice',
  blueprint: 'bg-surface-container-low blueprint-grid',
};

function Section({ children, className = '', variant = 'dark' }: SectionProps) {
  return (
    <section className={`py-24 ${variantClasses[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  readonly label?: string;
  readonly title: string;
  readonly light?: boolean;
}

function SectionHeader({ label, title, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span
          className={`font-headline font-bold tracking-[0.3em] uppercase text-sm mb-4 block ${
            light ? 'text-blue-600' : 'text-blue-400'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-4xl font-headline font-black uppercase ${
          light ? 'text-slate-900' : 'text-white tracking-tighter'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export { Section, SectionHeader };
export default Section;
