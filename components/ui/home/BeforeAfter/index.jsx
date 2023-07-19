import { Check, X } from "lucide-react";
import GradientWrapper from "../../../GradientWrapper";

const BeforeAfter = () => {
  return (
    <GradientWrapper wrapperclassname="top-40 inset-x-0" className="pt-12">
      <section className=" custom-screen">
        <div className="flex flex-col items-center justify-center gap-16 mt-16 md:flex-row sm:grid-cols-2 sm:space-y-0">
          <div
            className={`bg-white dark:bg-teal-900 shadow-xl dark:text-white relative flex-1 flex justify-center flex-col rounded-xl mt-6 sm:mt-0 max-w-xs h-80`}
          >
            <div className="p-4 text-3xl font-extrabold">
              <h3>Before AcceleratorMatch</h3>
            </div>
            <div className="px-4 pb-8 text-justify text-gray-500 dark:text-darkMode">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center space-x-3">
                  <X className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />
                  <span>Hours of research to identify best fit programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />

                  <span>Long and annoying application forms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />

                  <span>Uncertainty of accelerator interest</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />

                  <span>Bad program fit resulting in sub-optimal results</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`bg-white h-80 dark:bg-teal-900 shadow-xl dark:text-white relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 max-w-xs`}
          >
            <div className="p-4 text-3xl font-extrabold">
              <h3>After AcceleratorMatch</h3>
            </div>
            <div className="px-4 pb-8 text-justify text-gray-500 dark:text-darkMode">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>One time sign up</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Accelerator approaches you</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Don't waste time on applications</span>{" "}
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>
                    Build your startup instead of researching programs
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>
                    Benefit from network effects, from founders for founders
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default BeforeAfter;
