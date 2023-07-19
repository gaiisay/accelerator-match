import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Tools",
      children: [{ name: "Purpose Model Canvas", href: "/pmc" }],
    },
  ];

  // useEffect(() => {
  //   document.onclick = (e) => {
  //     const target = e.target;
  //     if (!menuBtnEl.current.contains(target)) setState(false);
  //   };
  // }, []);

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
                if (item.children) {
                  return (
                    <Menu
                      key={idx}
                      as="div"
                      className="relative inline-block text-left"
                    >
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md ">
                          Tools
                          <ChevronDownIcon
                            className="w-5 h-5 -mr-1 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-teal-900 focus:outline-none">
                          <div className="py-1">
                            {item.children.map((item, idx) => (
                              <Menu.Item key={idx}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "dark:bg-teal-800 bg-slate-200"
                                        : "",
                                      "block px-4 py-2"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  );
                }
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
