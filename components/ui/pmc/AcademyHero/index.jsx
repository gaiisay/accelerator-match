import { motion } from "framer-motion";
import DarkWrapper from "../../../DarkWrapper";
import Image from "next/image";

const AcademyHero = () => (
  <section>
    <DarkWrapper wrapperclassname="inset-0">
      <motion.div
        className="max-w-4xl mx-auto space-y-5 text-center"
        animate={{ y: 0 }}
      >
        <h1 className="mx-auto text-3xl font-extrabold text-white sm:text-4xl">
          The Purpose Model Canvas
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="max-w-xl mx-auto text-xl">by</p>
          <Image
            src="/logos/mypurpose_academy.svg"
            alt="mypurpose academy logo"
            width={200}
            height={200}
          />
        </div>
      </motion.div>
    </DarkWrapper>
  </section>
);

export default AcademyHero;
