import DarkWrapper from "../../DarkWrapper";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Find your growth partner",
      desc: "Take your venture to the next level by joining the next batch of a top accelerator. By signing up, you will recieve exposure to all our accelerator partners, increasing your application chances.",
    },
    {
      icon: (
        <svg
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M18.1265 12.4791C17.9568 12.6902 17.6428 12.7256 17.426 12.5507C17.4258 12.5505 17.4255 12.5503 17.4253 12.5501L17.2159 12.3795L16.634 11.9054L16.1604 12.4877L14.9338 13.9955L14.9332 13.9962C14.6911 14.2947 14.2515 14.3415 13.9541 14.1045L13.2644 13.5072L12.7367 13.0503L12.2431 13.5439L12.2353 13.5517L12.2082 13.5788L12.1839 13.6086C11.5772 14.3541 10.4851 14.4709 9.73739 13.8749L6.21809 10.69L6.00383 10.4961H5.75V2.81106L7.66656 0.898003L7.66705 0.897518C7.76255 0.802012 7.88892 0.75 8.01953 0.75H9.36329L7.59117 2.37263L7.59052 2.37323C6.14561 3.69938 6.04186 5.95047 7.37245 7.40472L7.37299 7.40532C8.68474 8.83586 10.9352 8.96449 12.404 7.62434L12.4052 7.62318L13.1001 6.98626L18.4276 11.3111C18.4279 11.3113 18.4281 11.3115 18.4283 11.3117C18.6436 11.4883 18.6761 11.8022 18.4997 12.0196L18.1287 12.4765L18.1265 12.4791ZM19.2461 2.81066V8.43344L15.1479 5.10645L15.526 4.76017L15.5282 4.75813C16.0797 4.24914 16.1305 3.38222 15.6118 2.81782C15.0973 2.25351 14.2256 2.22707 13.6717 2.72982L13.6717 2.72981L13.6691 2.73215L10.5988 5.54503C10.579 5.55941 10.5582 5.57599 10.5371 5.59506C10.3879 5.72677 10.177 5.79184 9.94256 5.77372C9.69827 5.75483 9.50187 5.651 9.40135 5.54098L9.40067 5.54024C9.10879 5.22164 9.10939 4.7197 9.4433 4.40591L9.45179 4.39794L9.46002 4.38971C9.47072 4.379 9.4801 4.36899 9.48813 4.36006L13.2876 0.88138C13.2877 0.881351 13.2877 0.881323 13.2877 0.881294C13.3803 0.796628 13.5005 0.75 13.625 0.75H16.9805C17.1147 0.75 17.2413 0.80439 17.3285 0.893043L17.3285 0.893061L17.333 0.897518L19.2461 2.81066ZM22 9.83932V3.25781H24.25V9.83932C24.0009 9.48555 23.5894 9.25391 23.125 9.25391C22.6606 9.25391 22.2491 9.48555 22 9.83932ZM23.9146 11.7539C24.0447 11.6623 24.1584 11.5486 24.25 11.4185V11.7539H23.9146ZM22.0691 11.5085C22.1224 11.5725 22.1815 11.6315 22.2454 11.6848C22.1727 11.6419 22.112 11.5812 22.0691 11.5085ZM0.75 11.4185C0.840341 11.5468 0.952047 11.659 1.07989 11.75H0.75V11.4185ZM0.75 3.25781H3V9.83932C2.75091 9.48555 2.33941 9.25391 1.875 9.25391C1.41194 9.25391 0.999609 9.48345 0.75 9.83748V3.25781ZM2.77154 11.6705C2.82555 11.6239 2.87591 11.5732 2.92214 11.5189C2.88348 11.5797 2.83204 11.6315 2.77154 11.6705Z"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Tailored Matchmaking",
      desc: "We match you with accelerators who best-fit your unique profile and growth objectives. Specify whether you prefer remote, on sight, w. funding or corporate backed programmes.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        </svg>
      ),
      title: "You're in the driving seat",
      desc: "After your sign-up you are ready to recieve offers by accelerators while you focus on building your venture. You decide which offer works best for your needs.",
    },
  ];

  return (
    <DarkWrapper id="features">
      <div className="custom-screen text-gray-300 justify-between flex flex-col">
        <div className="max-w-xl">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Let accelerator scouts chase you
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-100 font-semibold">
                    {item.title}
                  </h4>
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
