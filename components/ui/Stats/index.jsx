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
    <div className="custom-screen text-gray-600">
      <div className="max-w-xl mx-auto xl:text-center">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Get your site to the top of Google
        </h3>
        <p className="mt-3">
          We distribute your visitors to your site across different geographical
          locations.
        </p>
      </div>
      <div className="mt-12">
        <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex justify-center">
          {stats.map((item, idx) => (
            <li key={idx} className="sm:max-w-[15rem]">
              <h4 className="text-4xl text-blue-600 font-semibold">
                {item.data}
              </h4>
              <p className="mt-3 font-medium">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default Stats;
