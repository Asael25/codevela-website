import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Guarantee from "@/components/sections/Guarantee";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Pricing />
        <Guarantee />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}