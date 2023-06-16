import Navbar from "../../components/ui/Navbar";
import FooterCTA from "../../components/ui/FooterCTA";
import Footer from "../../components/ui/Footer";
import { motion } from "framer-motion";
import AboutHero from "../../components/ui/AboutHero";
import OurStory from "../../components/ui/OurStory";
import Team from "../../components/ui/Team";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <OurStory />
      <Team />
      <FooterCTA />
      <Footer />
    </div>
  );
}
