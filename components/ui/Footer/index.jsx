import Link from "next/link";
import Newsletter from "../Newsletter";
import Brand from "../Brand";

const navigation = [
  { name: "About", href: "/about" },
  { name: "FAQs", href: "#faqs" },
];

const Footer = () => (
  <footer className="pt-16">
    <div className="custom-screen text-gray-600">
      <div className="flex flex-wrap gap-y-10 items-center justify-between">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Brand />
          </Link>
          <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">
            Accelerator Applications on auto-pilot
          </h2>
          <p className="max-w-md">
            Recieve tailored offers by top accelerators via our automated
            startup-accelerator matchmaking tool.
          </p>
          <div className="pt-2 flex items-center gap-x-6 text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=100090705556931"
              target="_blank"
              aria-label="Social media facebook"
              rel="noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/acceleratormatch"
              target="_blank"
              aria-label="Social media LinkedIn"
              rel="noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 28 28"
              >
                <g clipPath="url(#clip0_1274_2978)">
                  <path
                    fill="currentColor"
                    d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1274_2978">
                    <path fill="#fff" d="M0 0h28v28H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex">
        <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="font-medium text-gray-700 hover:text-gray-900 duration-150"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 sm:mt-0">
          © 2023 AcceleratorMatch.io. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
