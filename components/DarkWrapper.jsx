import { motion } from "framer-motion";

const DarkWrapper = ({ children, ...props }) => (
  <motion.section
    {...props}
    className={`relative overflow-hidden bg-teal-900  text-darkMode py-16 ${
      props.className || ""
    }`}
    initial={{ y: 100 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "tween", duration: 0.6 }}
  >
    <div className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px] bg-gradient-to-br from-teal-600 to-teal-800"></div>
    <div className="relative">{children}</div>
  </motion.section>
);

export default DarkWrapper;
