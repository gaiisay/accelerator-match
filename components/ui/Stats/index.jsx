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
    <div className="custom-screen">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold sm:text-4xl">
          Manually applying to accelerators is sooo 2012....{" "}
        </h3>
        <p className="mt-3">
          We revolutionise the accelerator application process by shifting the
          power back to founders. No more spending countless hours on
          researching the web for suitable accelerators and manually applying to
          them one-by-one. With Acceleratormatch, founders share key business
          information via our typeform only once and start recieving offers by
          best-fit accelerators to join their batch.
        </p>
      </div>
      <div className="max-w-xl my-auto mt-12 text-center sm:mx-auto lg:w-1/2 xs:w-full">
        <ul className="flex-wrap items-center justify-center space-y-8 gap-x-12 gap-y-10 sm:space-y-0 sm:flex">
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
