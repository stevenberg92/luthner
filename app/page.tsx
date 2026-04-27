import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Trust } from "@/components/Trust";
import { Properties } from "@/components/Properties";
import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import { Leads } from "@/components/Leads";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Trust />
        <Properties />
        <CaseStudies />
        <Services />
        <Leads />
      </main>
      <Footer />
    </>
  );
}
