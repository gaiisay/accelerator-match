import { motion } from "framer-motion";

const SectionWrapper = ({ children, ...props }) => (
  <motion.section
    {...props}
    className={`py-16 lg:py-20 ${props.className || ""}`}
    initial={{ y: 100 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "tween", duration: 0.6 }}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
