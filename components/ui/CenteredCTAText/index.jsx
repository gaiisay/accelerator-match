import SectionWrapper from "../../SectionWrapper";

const CenteredCTAText = () => {
  return (
    <SectionWrapper>
      <div className="custom-screen text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Manually applying to accelerators is sooo 2012....
          </h2>
          <p className="mt-3 text-gray-600">
            We revolutionise the accelerator application process by shifting the
            power back to founders. No more spending countless hours on
            researching the web for suitable accelerators and manually applying
            to them one-by-one.
          </p>
          <p className="mt-3 text-gray-600">
            With Acceleratormatch, founders share key business information via
            our typeform onyl once and start recieving offers by best-fit
            accelerators to join their batch.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CenteredCTAText;
