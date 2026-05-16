'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

const values = [
  { title: 'Innovation', description: 'Fostering creativity and forward-thinking solutions' },
  { title: 'Integrity', description: 'Building character through ethical education' },
  { title: 'Excellence', description: 'Pursuing the highest standards in everything we do' },
  { title: 'Community', description: 'Creating belonging through collaborative learning' },
];

export function About() {
  return (
    <Section id="about" background="default">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              A Legacy of <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              For over five decades, JG University has been at the forefront of educational innovation.
              Our commitment to academic excellence and holistic development has produced leaders
              who shape industries across the globe.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We believe in nurturing not just minds, but character. Our integrated approach to
              education combines rigorous academics with real-world application, preparing our
              graduates for the challenges and opportunities of tomorrow.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
            >
              Discover Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary">
                <Image
                  src="/images/campus-1.svg"
                  alt="Campus building"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary">
                <Image
                  src="/images/students.svg"
                  alt="Students studying"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden bg-primary">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                alt="University campus"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-surface-muted rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-text-secondary text-sm">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}