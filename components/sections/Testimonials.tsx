'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Google',
    batch: 'Class of 2020',
    quote: 'The practical approach to learning at JG University gave me the confidence to tackle real-world problems. The faculty mentorship was invaluable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'Arjun Mehta',
    role: 'Investment Banker at Goldman Sachs',
    batch: 'Class of 2018',
    quote: 'The rigorous curriculum and competitive environment prepared me well for the corporate world. The alumni network opened doors I never imagined.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Sarah Chen',
    role: 'Research Scientist at MIT',
    batch: 'Class of 2019',
    quote: 'The research opportunities at JG University sparked my passion for academia. I published my first paper during my third year here.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" background="dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hear From Our <span className="text-accent">Alumni</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Our graduates are making an impact across industries worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.batch}</p>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}