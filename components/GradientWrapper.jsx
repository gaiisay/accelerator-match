import { motion } from "framer-motion";

const GradientWrapper = ({ children, ...props }) => (
  <motion.div
    {...props}
    className={`relative py-28 ${props.className || ""}`}
    initial={{ y: 100 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "tween", duration: 0.6 }}
  >
    <div
      className={`absolute top-12 m-auto max-w-3xl h-[250px] blur-[130px] ${
        props.wrapperclassname || ""
      }`}
      style={{
        background:
          "linear-gradient(108.49deg, rgba(103, 197, 240, 0.24) 23.1%, rgba(78, 123, 237, 0.06) 62.53%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </motion.div>
);

export default GradientWrapper;
