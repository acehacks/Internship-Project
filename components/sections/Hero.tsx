'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const stats = [
  { value: '15K+', label: 'Students' },
  { value: '500+', label: 'Faculty' },
  { value: '95%', label: 'Placement' },
  { value: '100+', label: 'Countries' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 pb-12 lg:pb-16">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content - 5 columns */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-muted rounded-full mb-6"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-xs font-medium text-text-secondary">Admissions Open — 2026</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.2] mb-5"
              >
                Where ambition
                <br />
                finds its <span className="text-accent">purpose</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-sm"
              >
                Join a community where world-class education meets transformative experiences. Your journey to excellence starts here.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
                >
                  Explore Programs
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-primary text-sm font-medium hover:text-accent transition-colors"
                >
                  Our Story
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual - 7 columns */}
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Image - Clean, light integration */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-muted">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                  alt="University campus"
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Single floating card - Minimal & meaningful */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg shadow-primary/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">NAAC A++ Accredited</p>
                    <p className="text-xs text-text-muted">Highest grade in India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Subtle decorative element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}