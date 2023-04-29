import Image from "next/image";
import startplatz from "../../../public/logos/startplatz.svg";
import startplatzDark from "../../../public/logos/startplatz-dark.svg";
import recap from "../../../public/logos/recap.svg";
import foundersbay from "../../../public/logos/foundersbay.svg";
import foundersbayDark from "../../../public/logos/foundersbay-dark.svg";
import seed from "../../../public/logos/seed.svg";
import SectionWrapper from "../../SectionWrapper";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const logos = [
  {
    src: startplatz,
    src_dark: startplatzDark,
    alt: "startplatz accelerator",
    url: "https://www.startplatz.de/accelerator/",
  },
  {
    src: recap,
    src_dark: recap,
    alt: "recap",
    url: "https://www.recap.world/",
  },
  {
    src: foundersbay,
    src_dark: foundersbayDark,
    alt: "foundersbay",
    url: "https://founders-bay.io/",
  },
  {
    src: seed,
    src_dark: seed,
    alt: "seed",
    url: "https://seed-accelerator.com/",
  },
];

const LogoGridAccelerator = () => {
  const { theme } = useTheme();
  const [src, setSrc] = useState("src");

  useEffect(() => {
    if (theme === "dark") {
      setSrc("src_dark");
    } else {
      setSrc("src");
    }
  }, [theme]);

  console.log(theme);
  return (
    <SectionWrapper id="accelerators">
      <div className="custom-screen">
        <h2 className="text-sm font-semibold text-center">
          Some of our Accelerators and Partners
        </h2>
        <div className="flex justify-center mt-8">
          <ul className="inline-grid items-center grid-cols-2 gap-8 justify-items-center md:grid-cols-4 lg:grid-cols-4">
            {logos.map((item, idx) => (
              <li key={idx}>
                <Link href={item.url}>
                  <Image
                    src={item[src]}
                    alt={item.alt}
                    height={{ xs: 128, sm: 64 }}
                    width="auto"
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

export default LogoGridAccelerator;
