import Stats from "../components/ui/Stats";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AcceleratorCTA from "../components/ui/AcceleratorCTA";
import LogoGridAccelerator from "../components/ui/LogoGridAccelerator";
import LogoGridStartups from "../components/ui/LogoGridStartups";
import FAQ from "../components/ui/FAQ";
import HowItWorks from "../components/ui/HowitWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoGridAccelerator />
      <AcceleratorCTA />
      <Stats />
      <LogoGridStartups />
      <Features />
      <HowItWorks />
      <FAQ />
      <FooterCTA />
      <Footer />
    </>
  );
}
