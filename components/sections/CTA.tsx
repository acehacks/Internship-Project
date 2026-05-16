'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function CTA() {
  return (
    <Section id="cta" background="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200')] bg-cover bg-center opacity-10" />
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Ready to Begin Your <span className="text-accent">Journey?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10"
            >
              Applications are now open for the 2026 academic year. Take the first step
              towards your dream career today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#"
                className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Download Brochure
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-text-muted text-sm mt-6"
            >
              Early application deadline: June 30, 2026
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}