import Image from "next/image";
import GradientWrapper from "../../../GradientWrapper";
import { InlineWidget } from "react-calendly";

const Author = () => {
  return (
    <GradientWrapper wrapperclassname="top-40 inset-x-0" className="pt-12">
      <section className=" custom-screen">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            About the Author
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-16 sm:grid-cols-2 sm:space-y-0">
          <div
            className={`bg-white shadow-xl dark:bg-teal-900 dark:text-white relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 max-w-md`}
          >
            <Image
              className="mx-auto mt-4 rounded-md"
              src={"/manaen.jpeg"}
              alt={"Picture of Joav"}
              width={100}
              height={100}
            />
            <div className="p-4 space-y-2 sm:text-center">
              <div className="mb-4 text-3xl font-semibold text-center">
                Mana
              </div>
              <span className="font-medium text-indigo-600 dark:text-indigo-400 ">
                Founder & CEO @ mypurpose academy
              </span>
            </div>
            <div className="flex items-center justify-center pt-2 mb-4 gap-x-6">
              <a
                href="https://www.linkedin.com/in/mana%C3%A9n-yosef-st%C3%BCrenberg-herrera-44005025"
                target="_blank"
                aria-label="Social media LinkedIn"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 duration-150 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 28 28"
                >
                  <g clipPath="url(#clip0_1274_2978)">
                    <path
                      fill="currentColor"
                      d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1274_2978">
                      <path fill="#fff" d="M0 0h28v28H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="p-4 text-justify text-gray-500 dark:text-darkMode">
              <p>
                Hi 👋 <br />
                My name is Mana.
                <br />I am a trained sociologist (M.Sc., with a specialisation
                on quantitative science), entrepreneur, and husband. I believe
                that purpose is the key to a fulfilled life. However, many
                people struggle to cultivate their purpose. My mission is to
                help pentrepreneurs – ambitious founders and young professionals
                – cultivate their purpose to maximise their effectiveness, so
                that they make meaningful contributions towards a better future
                for us all.
              </p>
            </div>
          </div>
          <div className="w-full">
            <InlineWidget
              styles={{ height: "700px" }}
              url="https://calendly.com/manaen/workshop"
            />
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default Author;
