import React from "react";
import Logo from "/Logo.png";
import ChromeLogo from "/ChromeIcon.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
  { name: "Help Center&Community", href: "#" },
  { name: "Login", href: "#" },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(mobileMenuOpen, "open menu");
  return (
    <>
      <nav className="flex justify-between items-center lg:px-[116px] lg:pt- py-5 px-6">
        <img className=" lg:w-[140px] lg:h-6 w-28 h-5" src={Logo} />
        <ul className="lg:flex lg:gap-6 text-[#666666] font-sans hidden">
          <li>
            <a
              href="#"
              className="active:underline-offset-1 focus:underline focus:text-[#4F4F4F] focus:font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="active:underline-offset-1 focus:underline focus:text-[#4F4F4F] focus:font-semibold"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="active:underline-offset-1 focus:underline focus:text-[#4F4F4F] focus:font-semibold"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="active:underline-offset-1 focus:underline focus:text-[#4F4F4F] focus:font-semibold"
              href="#"
            >
              Help Center & Community
            </a>
          </li>
        </ul>
        <div className="lg:flex lg:items-end lg:gap-3 hidden">
          <p className="text-[#666666] py-2">
            <a href="#">Login</a>
          </p>
          <div className="lg:flex lg:flex-col lg:items-center hidden">
            <p className="font-alph font-bold text-xl">100% free, forever 🤑</p>
            <button className=" flex gap-2 px-4 py-2 bg-black text-white font-bold text-sm rounded-lg font-mulish">
              <span>
                <img className="w-5 h-5" src={ChromeLogo} />
              </span>
              Install Wizard
            </button>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <div className=" block lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* insert Dialog */}
      {mobileMenuOpen && (
        <Dialog
          as="div"
          className="lg:hidden z-50"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="w-full fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className=" lg:w-[140px] lg:h-6 w-28 h-5" src={Logo} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className=" pt-9">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="ml-6 block rounded-lg  font-semibold  text-[#666666] focus:underline focus:text-[#4F4F4F] focus:font-semibold mb-9"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex flex-col items-center ">
                  <button className=" flex gap-2 px-4 py-2 bg-black text-white font-bold text-sm rounded-lg font-mulish">
                    <span>
                      <img className="w-5 h-5" src={ChromeLogo} />
                    </span>
                    Install Wizard
                  </button>
                  <p className="font-alph font-bold text-xl">
                    100% free, forever🤑
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </>
  );
};

export default Header;
