import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/acceleratormatch.svg"
    alt="AcceleratorMatch logo"
    {...props}
    width={220}
    height={48}
    className="w-48 h-12 sm:w-56"
    priority
  />
);
export default Brand;
