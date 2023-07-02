import SectionWrapper from "../../../SectionWrapper";
import NavLink from "../../standard/NavLink";

const FooterCTA = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-between gap-4 custom-screen gap-x-12 sm:gap-8">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Want to impress accelerators?
          </h2>
          <p className="mt-3">
            Define and implement the purpose for your startup or career with the
            help of the purpose model canvas and mypurpose academy.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <NavLink
            href="/academy"
            className="inline-flex items-center mx-16 text-sm font-medium text-white gap-x-2 bg-logo"
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
      </div>
    </SectionWrapper>
  );
};

export default FooterCTA;
