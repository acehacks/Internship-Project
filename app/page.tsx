import { Navbar, Hero, About, Programs, Features, Testimonials, CTA, Footer } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}