import SectionWrapper from "../../SectionWrapper";

const stats = [
  {
    data: "5x",
    desc: "Accelerator alumni raise capital 5 times faster.",
  },
  {
    data: "3x",
    desc: "Accelerator alumni have 3 times higher survival chances",
  },
  {
    data: "8x",
    desc: "Accelerator alumni reach PMF 8 times faster.",
  },
  {
    data: "3x",
    desc: "Accelerator alumni have 3 times higher exit probability.",
  },
];

const Stats = () => (
  <SectionWrapper>
    <div className="text-gray-600 custom-screen">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Get your site to the top of Google
        </h3>
        <p className="mt-3">
          We distribute your visitors to your site across different geographical
          locations.
        </p>
      </div>
      <div className="max-w-xl my-auto mt-12 text-center sm:mx-auto lg:w-1/2 xs:w-full">
        <ul className="flex-wrap items-center justify-center gap-x-12 gap-y-10 space-y-8 sm:space-y-0 sm:flex">
          {stats.map((item, idx) => (
            <li key={idx} className="sm:max-w-[15rem]">
              <h4 className="text-4xl font-semibold text-logo">{item.data}</h4>
              <p className="mt-3 font-medium">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default Stats;
