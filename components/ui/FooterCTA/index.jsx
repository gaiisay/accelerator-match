import DarkWrapper from "../../DarkWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => {
  return (
    <DarkWrapper>
      <div className="custom-screen gap-x-12 justify-between flex flex-col items-center sm:gap-8 gap-4">
        <div className="max-w-xl text-center">
          <h2 className="text-white text-3xl font-extrabold sm:text-4xl">
            Looking for an accelerator?
          </h2>
          <p className="mt-3 text-gray-300">
            We connect you with top accelerators around the globe through our
            founder friendly approach. Share your info and start recieving
            requests.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <NavLink
            href="https://5jxl9hujrgm.typeform.com/to/dmAfLDOG"
            className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-logo mx-16"
          >
            Get started
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
      </div>
    </DarkWrapper>
  );
};

export default FooterCTA;
