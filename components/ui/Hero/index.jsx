import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";
import { motion } from "framer-motion";

const Hero = () => (
  <section>
    <GradientWrapper
      wrapperclassname="inset-0"
      className="custom-screen text-gray-600"
    >
      <motion.div
        className="space-y-5 max-w-4xl mx-auto text-center"
        animate={{ y: 0 }}
      >
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Accelerator applications,{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#3cba92] to-[#07A9B6]">
            on auto-pilot.
          </span>
        </h1>
        <p className="max-w-xl mx-auto">
          Recieve tailored offers by top accelerators via our automated
          startup-accelerator matchmaking tool.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="https://5jxl9hujrgm.typeform.com/to/dmAfLDOG"
            className="flex items-center gap-x-2 text-white bg-logo"
          >
            Free Startup Signup
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <NavLink
            href="#features"
            className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
            scroll={false}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
        <div className="max-w-xl mx-auto flex gap-6 justify-center">
          <span>✌️ 100% Free</span>
          <span>👩‍💻 2-Minutes Sign-Up</span>
          <span>🚀 Top Accelerators</span>
        </div>
      </motion.div>
    </GradientWrapper>
  </section>
);

export default Hero;
