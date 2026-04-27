import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Properties from '@/components/Properties';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Properties />
        <CaseStudies />
        <Services />
        <Pricing />
        <Testimonials />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
