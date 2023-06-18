import Image from "next/image";
import GradientWrapper from "../../GradientWrapper";

const Team = () => {
  return (
    <GradientWrapper wrapperclassname="top-40 inset-x-0" className="pt-12">
      <section className=" custom-screen">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Team</h1>
        </div>
        <div className="flex items-center justify-center gap-6 mt-16 sm:grid-cols-2 sm:space-y-0">
          <div
            className={`bg-white dark:bg-teal-900 dark:text-white relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 max-w-xs`}
          >
            <Image
              className="object-cover mx-auto mt-4 rounded-full w-28 h-28"
              src={"/profile_joav.jpeg"}
              alt={"Picture of Joav"}
              width={200}
              height={200}
            />
            <div className="p-4 space-y-2 sm:text-center">
              <div className="mb-4 text-3xl font-semibold ">Joav Isay</div>
              <span className="font-medium text-indigo-600 dark:text-indigo-400 ">
                Founder
              </span>
            </div>
            <div className="flex items-center justify-center pt-2 mb-4 gap-x-6">
              <a
                href="https://www.linkedin.com/in/joav-isay"
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
                Hi, my name is Joav and I am the founder of Acceleratormatch. I
                have worked several years in the early startup ecosystem, and
                have seen first hand the struggles of young founders. This has
                inspired me to take action and build something other founders
                would want. I really hope it helps you.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default Team;
