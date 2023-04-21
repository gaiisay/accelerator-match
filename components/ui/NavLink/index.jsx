import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ children, href, ...props }) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    <Link
      href={href}
      {...props}
      className={`py-2.5 px-4 text-center rounded-full duration-150 ${
        props?.className || ""
      }`}
    >
      {children}
    </Link>
  </motion.button>
);

export default NavLink;
