import Navbar       from '@/components/Navbar';
import Hero         from '@/components/Hero';
import Intro        from '@/components/Intro';
import Trust        from '@/components/Trust';
import About        from '@/components/About';
import Services     from '@/components/Services';
import Properties   from '@/components/Properties';
import HowItWorks   from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import LeadForm     from '@/components/LeadForm';
import FinalCTA     from '@/components/FinalCTA';
import Footer       from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Trust />
        <About />
        <Services />
        <Properties />
        <HowItWorks />
        <Testimonials />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
