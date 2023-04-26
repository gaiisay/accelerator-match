import Image from "next/image";
import startplatz from "../../../public/logos/startplatz.svg";
import recap from "../../../public/logos/recap.svg";
import foundersbay from "../../../public/logos/foundersbay.svg";
import seed from "../../../public/logos/seed.svg";
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
  {
    src: seed,
    alt: "seed",
  },
];

const LogoGridAccelerator = () => (
  <SectionWrapper id="accelerators">
    <div className="custom-screen">
      <h2 className="text-sm font-semibold text-center text-gray-800">
        Some of our Accelerators and Partners
      </h2>
      <div className="flex justify-center mt-8">
        <ul className="items-center inline-grid grid-cols-2 justify-items-center gap-y-8 md:grid-cols-4 lg:grid-cols-4">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image
                src={item.src}
                alt={item.alt}
                height={{ xs: 128, sm: 64 }}
                width="auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGridAccelerator;
