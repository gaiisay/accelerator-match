import SectionWrapper from "../../SectionWrapper";

const stats = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clipboard-list"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 11h.01"></path>
        <path d="M8 16h.01"></path>
      </svg>
    ),
    desc: "Fill out our typeform once including startup name, short description, vertical and contact info.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check-square"
      >
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    desc: "Select your preferred accelerator type, upload your deck and submit.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-play"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    ),
    desc: "Now you can lean back or focus on building your empire while accelerator scouts browse your profile and reach out to you once they see a match.",
  },
];

const HowItWorks = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col mx-auto gap-y-6">
        <div className="custom-screen">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              How it works
            </h2>
          </div>
        </div>
        <div className="max-w-xl mx-4 my-auto text-center md:max-w-5xl sm:mx-auto xs:w-full">
          <ul className="flex flex-col items-start justify-center gap-8 mt-4 space-y-8 md:flex-row md:space-y-0">
            {stats.map((item, idx) => (
              <li key={idx} className="max-w-[20rem]">
                <h4 className="flex justify-center text-logo">{item.icon}</h4>
                <p className="mt-3 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
