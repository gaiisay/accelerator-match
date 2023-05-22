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
import { motion } from "framer-motion";
import InfiniteBanner, { useClock } from "../../InfiniteBanner";

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
  const clock = useClock({
    defaultValue: Date.now(),
    reverse: false,
  });
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
        <h2 className="mb-8 text-sm font-semibold text-center">
          Some of our Accelerators and Partners
        </h2>
        <InfiniteBanner clock={clock.value}>
          <div className="flex justify-center gap-16 p-8 align-middle">
            {logos.map((item, idx) => (
              <Link key={idx} href={item.url}>
                <Image
                  src={item[src]}
                  alt={item.alt}
                  height={100}
                  width="auto"
                />
              </Link>
            ))}
          </div>
        </InfiniteBanner>
      </div>
    </SectionWrapper>
  );
};

export default LogoGridAccelerator;
