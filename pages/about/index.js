import Navbar from "../../components/ui/standard/Navbar";
import FooterCTA from "../../components/ui/standard/FooterCTA";
import Footer from "../../components/ui/standard/Footer";
import AboutHero from "../../components/ui/about/AboutHero";
import OurStory from "../../components/ui/about/OurStory";
import Team from "../../components/ui/about/Team";

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
