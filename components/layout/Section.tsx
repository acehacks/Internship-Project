import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'dark';
}

const backgrounds = {
  default: 'bg-white',
  muted: 'bg-surface-muted',
  dark: 'bg-primary',
};

const textColors = {
  default: 'text-text',
  muted: 'text-text',
  dark: 'text-text-inverse',
};

export function Section({ children, className = '', id, background = 'default' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-24 lg:py-32 ${backgrounds[background]} ${textColors[background]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}