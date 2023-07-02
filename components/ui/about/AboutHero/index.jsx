import { motion } from "framer-motion";
import DarkWrapper from "../../../DarkWrapper";

const AboutHero = () => (
  <section>
    <DarkWrapper wrapperclassname="inset-0">
      <motion.div
        className="max-w-4xl mx-auto space-y-5 text-center"
        animate={{ y: 0 }}
      >
        <h1 className="mx-auto text-5xl font-extrabold sm:text-6xl">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-xl ">
          Navigating the accelerator jungle can be a daunting task for young
          founders. We want to change that.
        </p>
      </motion.div>
    </DarkWrapper>
  </section>
);

export default AboutHero;
