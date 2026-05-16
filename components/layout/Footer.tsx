import { Container } from './Container';

const footerLinks = {
  academics: [
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#cta' },
    { label: 'Research', href: '#features' },
    { label: 'Faculty', href: '#about' },
  ],
  campus: [
    { label: 'Campus Life', href: '#campus' },
    { label: 'Placements', href: '#placements' },
    { label: 'Industry Connect', href: '#industry' },
    { label: 'Visit Us', href: '#contact' },
  ],
  resources: [
    { label: 'Student Portal', href: '#' },
    { label: 'Career Services', href: '#' },
    { label: 'Alumni Network', href: '#' },
    { label: 'News & Events', href: '#' },
  ],
  contact: [
    { label: 'Admissions Office', href: '#contact' },
    { label: 'admissions@jgu.edu', href: 'mailto:admissions@jgu.edu' },
    { label: '+91 1234-567-890', href: 'tel:+911234567890' },
    { label: 'Visit Campus', href: '#contact' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Twitter', icon: 'tw', href: '#' },
  { label: 'Instagram', icon: 'ig', href: '#' },
  { label: 'YouTube', icon: 'yt', href: '#' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-text-inverse">
      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center -rotate-6">
                      <span className="text-primary font-bold text-base">J</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full" />
                </div>
                <div>
                  <span className="text-2xl font-bold">JG University</span>
                  <span className="block text-xs text-text-muted tracking-widest uppercase">Excellence • Innovation • Impact</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
                A premier institution dedicated to nurturing future leaders through world-class education,
                cutting-edge research, and holistic development since 1975.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-sm font-medium text-text-muted hover:bg-accent hover:text-primary transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">Academics</h4>
              <ul className="space-y-3">
                {footerLinks.academics.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campus */}
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">Campus</h4>
              <ul className="space-y-3">
                {footerLinks.campus.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footerLinks.contact.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Contact</p>
                  <a href={item.href} className="text-sm text-white hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © 2026 JG University. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}