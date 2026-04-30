import Navbar      from '@/components/Navbar';
import Hero        from '@/components/Hero';
import Trust       from '@/components/Trust';
import Services    from '@/components/Services';
import Properties  from '@/components/Properties';
import HowItWorks  from '@/components/HowItWorks';
import About       from '@/components/About';
import Testimonials from '@/components/Testimonials';
import LeadForm    from '@/components/LeadForm';
import FinalCTA    from '@/components/FinalCTA';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Properties />
        <HowItWorks />
        <About />
        <Testimonials />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
