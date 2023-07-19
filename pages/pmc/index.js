import Navbar from "../../components/ui/standard/Navbar";
import Footer from "../../components/ui/standard/Footer";
import AcademyHero from "../../components/ui/pmc/AcademyHero";
import PurposeStory from "../../components/ui/pmc/PurposeStory";
import Author from "../../components/ui/pmc/Author";
import AcademyCTA from "../../components/ui/pmc/AcademyCTA";

export default function About() {
  return (
    <div>
      <Navbar />
      <AcademyHero />
      <PurposeStory />
      <AcademyCTA />
      <Author />
      <Footer />
    </div>
  );
}
