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
      <h2 className="font-semibold text-sm text-gray-800 text-center">
        Some of our Accelerators and Partners
      </h2>
      <div className="mt-8 flex justify-center">
        <ul className="inline-grid grid-cols-2 items-center justify-items-center gap-y-8 md:grid-cols-4 lg:grid-cols-4">
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
