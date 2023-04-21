import Image from "next/image";
import cied from "../../../public/logos/cied.svg";
import u4u from "../../../public/logos/u4u.svg";
import fiskher from "../../../public/logos/fiskher.svg";
import gxegy from "../../../public/logos/gxegy.svg";
import carbominer from "../../../public/logos/carbominer.svg";
import panim from "../../../public/logos/panim.svg";
import fyyl from "../../../public/logos/fyyl.svg";
import disclosed from "../../../public/logos/disclosed.svg";
import sieve from "../../../public/logos/sieve.svg";
import SectionWrapper from "../../SectionWrapper";

const logos = [
  {
    src: cied,
    alt: "cied",
  },
  {
    src: u4u,
    alt: "u4u",
  },
  {
    src: fiskher,
    alt: "fiskher",
  },
  {
    src: gxegy,
    alt: "gxegy",
  },
  {
    src: carbominer,
    alt: "carbominer",
  },
  {
    src: panim,
    alt: "panim",
  },
  {
    src: disclosed,
    alt: "disclosed",
  },
  {
    src: fyyl,
    alt: "fyyl",
  },
  // {
  //   src: sieve,
  //   alt: "sieve",
  // },
];

const LogoGridStartups = () => (
  <SectionWrapper>
    <div className="custom-screen sm:mb-16">
      <h2 className="font-semibold text-sm text-gray-800 text-center">
        Some of our Startups
      </h2>
      <div className="mt-8 flex justify-center">
        <ul className="inline-grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 md:gap-x-16 md:gap-y-24 md:grid-cols-4 lg:grid-cols-4">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image
                src={item.src}
                alt={item.alt}
                height={100}
                width={150}
                style={{ width: 150, height: 100 }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGridStartups;
