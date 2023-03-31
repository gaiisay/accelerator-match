import Image from "next/image";
import startplatz from "../../../public/logos/startplatz.svg";
import recap from "../../../public/logos/recap.svg";
import foundersbay from "../../../public/logos/foundersbay.svg";
import SectionWrapper from "../../SectionWrapper";

const logos = [
  {
    src: startplatz,
    alt: "startplatz accelerator",
  },
  {
    src: recap,
    alt: "recap",
  },
  {
    src: foundersbay,
    alt: "foundersbay",
  },
];

const LogoGrid = () => (
  <SectionWrapper id="accelerators">
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-800 text-center">
        Our Accelerators and Partners
      </h2>
      <div className="mt-8 flex justify-center">
        <ul className="inline-grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 md:gap-x-16 md:grid-cols-3 lg:grid-cols-3">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image src={item.src} alt={item.alt} height={120} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGrid;
