import Image from "next/image";
import cied from "../../../public/logos/cied.svg";
import u4u from "../../../public/logos/u4u.svg";
import fiskher from "../../../public/logos/fiskher.svg";
import gxegy from "../../../public/logos/gxegy.svg";
import carbominer from "../../../public/logos/carbominer.svg";
import panim from "../../../public/logos/panim.svg";
import panimDark from "../../../public/logos/panim-dark.svg";
import fyyl from "../../../public/logos/fyyl.svg";
import fyylDark from "../../../public/logos/fyyl-dark.svg";
import disclosed from "../../../public/logos/disclosed.svg";
import sieve from "../../../public/logos/sieve.svg";
import SectionWrapper from "../../SectionWrapper";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const logos = [
  {
    src: cied,
    src_dark: cied,
    alt: "cied",
    url: "https://cied.eu/",
  },
  {
    src: u4u,
    src_dark: u4u,
    alt: "u4u",
    url: "https://u4uteen.com/",
  },
  {
    src: fiskher,
    src_dark: fiskher,
    alt: "fiskher",
    url: "https://fiskher.com/de/",
  },
  {
    src: gxegy,
    src_dark: gxegy,
    alt: "gxegy",
    url: "https://www.gxegy.com/",
  },
  {
    src: carbominer,
    src_dark: carbominer,
    alt: "carbominer",
    url: "https://carbominer.com/",
  },
  {
    src: panim,
    src_dark: panimDark,
    alt: "panim",
    url: "https://www.panimmemorial.com/",
  },
  {
    src: disclosed,
    src_dark: disclosed,
    alt: "disclosed",
    url: "",
  },
  {
    src: fyyl,
    src_dark: fyylDark,
    alt: "fyyl",
    url: "https://www.fyyl.de/",
  },
  // {
  //   src: sieve,
  //   alt: "sieve",
  // },
];

const LogoGridStartups = () => {
  const { theme } = useTheme();
  const [src, setSrc] = useState("src");

  useEffect(() => {
    if (theme === "dark") {
      setSrc("src_dark");
    } else {
      setSrc("src");
    }
  }, [theme]);

  return (
    <SectionWrapper>
      <div className="custom-screen sm:mb-16">
        <h2 className="text-sm font-semibold text-center text-gray-800">
          Some of our Startups
        </h2>
        <div className="flex justify-center mt-8">
          <ul className="inline-grid items-center grid-cols-2 justify-items-center gap-x-10 gap-y-8 md:gap-x-16 md:gap-y-24 md:grid-cols-4 lg:grid-cols-4">
            {logos.map((item, idx) => (
              <li key={idx}>
                <Link href={item.url}>
                  <Image
                    src={item[src]}
                    alt={item.alt}
                    height={100}
                    width={150}
                    style={{ width: 150, height: 100 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LogoGridStartups;
