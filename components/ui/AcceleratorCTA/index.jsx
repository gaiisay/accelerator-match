import DarkWrapper from "../../DarkWrapper";
import NavLink from "../NavLink";

const AcceleratorCTA = () => {
  return (
    <div className="space-y-5 max-w-4xl mx-auto text-center">
      <p className="max-w-xl mx-auto">
        Join our growing network as an accelerator and start recieving tailored
        dealflow
      </p>
      <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
        <NavLink
          href="https://airtable.com/shr9JwY4idyTzdSNO"
          className="flex items-center gap-x-2 text-white bg-logo"
        >
          Join accelerator network
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
  );
};

export default AcceleratorCTA;
