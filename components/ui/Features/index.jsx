import DarkWrapper from "../../DarkWrapper";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-line-chart"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
      title: "Find your growth partner",
      desc: "Take your venture to the next level by joining the next batch of a top accelerator. By signing up, you will recieve exposure to all our accelerator partners, increasing your application chances.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-clipboard-check"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="m9 14 2 2 4-4"></path>
        </svg>
      ),
      title: "Tailored Matchmaking",
      desc: "We match you with accelerators who best-fit your unique profile and growth objectives. Specify whether you prefer remote, on sight, w. funding or corporate backed programmes.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-heart-handshake"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
          <path d="m18 15-2-2"></path>
          <path d="m15 18-2-2"></path>
        </svg>
      ),
      title: "You're in the driving seat",
      desc: "After your sign-up you are ready to recieve offers by accelerators while you focus on building your venture. You decide which offer works best for your needs.",
    },
  ];

  return (
    <DarkWrapper id="features">
      <div className="flex flex-col justify-between custom-screen">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let accelerator scouts chase you
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex items-center justify-center flex-none w-12 h-12 bg-gray-700 rounded-lg text-cyan-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DarkWrapper>
  );
};

export default Features;
