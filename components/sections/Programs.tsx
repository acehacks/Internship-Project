'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

const programs = [
  {
    title: 'Computer Science',
    description: 'Cutting-edge curriculum in AI, machine learning, and software engineering.',
    icon: '💻',
    duration: '4 Years',
    degree: 'B.Tech',
  },
  {
    title: 'Business Administration',
    description: 'Comprehensive training in leadership, strategy, and entrepreneurship.',
    icon: '📊',
    duration: '4 Years',
    degree: 'BBA',
  },
  {
    title: 'Data Science',
    description: 'Master data analysis, visualization, and predictive modeling techniques.',
    icon: '📈',
    duration: '4 Years',
    degree: 'B.Sc',
  },
  {
    title: 'Biotechnology',
    description: 'Innovative research in genetics, bioinformatics, and bioengineering.',
    icon: '🧬',
    duration: '4 Years',
    degree: 'B.Tech',
  },
  {
    title: 'Environmental Science',
    description: 'Addressing global challenges through sustainable solutions.',
    icon: '🌍',
    duration: '4 Years',
    degree: 'B.Sc',
  },
  {
    title: 'Psychology',
    description: 'Understanding human behavior and mental processes in depth.',
    icon: '🧠',
    duration: '4 Years',
    degree: 'BA',
  },
];

export function Programs() {
  return (
    <Section id="programs" background="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Explore Our <span className="text-accent">Programs</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose from a diverse range of undergraduate and graduate programs designed
            to launch your career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
              <p className="text-text-secondary mb-5">{program.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-text-muted">{program.duration}</span>
                <span className="text-sm font-medium text-accent">{program.degree}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
          >
            View All Programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}