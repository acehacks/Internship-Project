'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Placements', href: '#placements' },
  { label: 'Admissions', href: '#cta' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-bold text-sm md:text-base">J</span>
            </div>
            <span className="text-base md:text-lg font-semibold text-primary">JG University</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-150"
            >
              Visit Campus
            </a>
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary-light transition-colors duration-150"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-primary"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border/50"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-surface-muted rounded-lg transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 mt-3 border-t border-border/50 flex gap-3">
                  <a
                    href="#cta"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-lg text-center"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2.5 text-sm font-medium border border-border text-primary rounded-lg text-center"
                  >
                    Visit Campus
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}