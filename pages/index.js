import Hero from "../components/ui/home/Hero";
import Navbar from "../components/ui/standard/Navbar";
import LogoGridAccelerator from "../components/ui/home/LogoGridAccelerator";
import AcceleratorCTA from "../components/ui/home/AcceleratorCTA";
import BeforeAfter from "../components/ui/home/BeforeAfter";
import Stats from "../components/ui/home/Stats";
import LogoGridStartups from "../components/ui/home/LogoGridStartups";
import Features from "../components/ui/home/Features";
import HowItWorks from "../components/ui/home/HowItWorks";
import FAQ from "../components/ui/home/FAQ";
import Roadmap from "../components/ui/home/Roadmap";
import Footer from "../components/ui/standard/Footer";
import FooterCTA from "../components/ui/standard/FooterCTA";
import AcademyCTA from "../components/ui/home/AcademyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoGridAccelerator />
      <AcceleratorCTA />
      <BeforeAfter />
      <Stats />
      <LogoGridStartups />
      <Features />
      <HowItWorks />
      <AcademyCTA />
      <FAQ />
      <Roadmap />
      <FooterCTA />
      <Footer />
    </>
  );
}
