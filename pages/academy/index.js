import Navbar from "../../components/ui/standard/Navbar";
import Footer from "../../components/ui/standard/Footer";
import AcademyHero from "../../components/ui/academy/AcademyHero";
import PurposeStory from "../../components/ui/academy/PurposeStory";
import Author from "../../components/ui/academy/Author";
import AcademyCTA from "../../components/ui/academy/AcademyCTA";

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
