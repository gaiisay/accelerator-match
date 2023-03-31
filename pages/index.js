import Head from "next/head";
import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import LogoGrid2 from "../components/ui/LogoGrid2";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Navbar />
      <Hero />
      <LogoGrid />
      <CenteredCTAText />
      <Stats />
      <LogoGrid2 />
      <CTA />
      <Features />
      <FAQs />
      <FooterCTA />
      <Footer />
    </>
  );
}
