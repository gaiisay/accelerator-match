import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="relative">
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`bg-white dark:bg-bgDarkMode px-5 pb-5 md:text-sm md:static md:block ${
          state
            ? "absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none"
            : "hidden"
        }`}
      >
        <div className="items-center custom-screen gap-x-20 md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`flex-1 items-center mt-8 md:font-medium md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    <Link href={item.href} className="block" scroll={false}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="items-center justify-end flex-1 mt-6 space-y-6 gap-x-6 md:flex md:space-y-0 md:mt-0">
              <NavLink
                href="https://5jxl9hujrgm.typeform.com/to/dmAfLDOG"
                className="flex items-center justify-center text-sm font-medium text-white gap-x-1 bg-logo md:inline-flex"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
