import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/acceleratormatch.svg"
    alt="AcceleratorMatch logo"
    {...props}
    width={220}
    height={48}
    style={{ width: 220, height: 48 }}
    priority
  />
);
export default Brand;
