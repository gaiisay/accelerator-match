import { motion } from "framer-motion";

const DarkWrapper = ({ children, ...props }) => (
  <motion.section
    {...props}
    className={`relative overflow-hidden bg-gray-900 py-16 ${
      props.className || ""
    }`}
    initial={{ y: 100 }}
    whileInView={{ y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "tween", duration: 0.6 }}
  >
    <div
      className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </motion.section>
);

export default DarkWrapper;
