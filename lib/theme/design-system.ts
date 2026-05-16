export const colors = {
  primary: {
    DEFAULT: '#1a1a2e',
    light: '#2d2d44',
    dark: '#0f0f1a',
  },
  accent: {
    DEFAULT: '#c9a227',
    light: '#d4b84a',
    dark: '#a68920',
  },
  surface: {
    DEFAULT: '#ffffff',
    muted: '#f8f9fa',
    dark: '#16213e',
  },
  text: {
    DEFAULT: '#1a1a2e',
    secondary: '#6b7280',
    muted: '#9ca3af',
    inverse: '#ffffff',
  },
  border: {
    DEFAULT: '#e5e7eb',
    light: '#f3f4f6',
  },
} as const;

export const spacing = {
  section: 'py-20 md:py-24 lg:py-32',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
} as const;

export const typography = {
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
    h3: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h4: 'text-lg md:text-xl font-semibold',
  },
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base leading-relaxed',
  },
  label: 'text-sm font-medium uppercase tracking-wider',
} as const;

export const animation = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.1,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;