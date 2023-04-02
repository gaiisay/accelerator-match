import CenteredCTAText from "../components/ui/CenteredCTAText";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AcceleratorCTA from "../components/ui/AcceleratorCTA";
import LogoGridAccelerator from "../components/ui/LogoGridAccelerator";
import LogoGridStartups from "../components/ui/LogoGridStartups";
import SecondaryFAQ from "../components/ui/SecondaryFAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoGridAccelerator />
      <AcceleratorCTA />
      <CenteredCTAText />
      <LogoGridStartups />
      <Features />
      <FAQs />
      <SecondaryFAQ />
      <FooterCTA />
      <Footer />
    </>
  );
}
