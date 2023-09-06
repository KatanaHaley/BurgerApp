import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Burger Menu</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          {isOpen ? (
            // <XIcon className="h-6 w-6" aria-hidden="true" />
            <p>X</p>
          ) : (
            // <MenuIcon className="h-6 w-6" aria-hidden="true" />
            <p>menu</p>
          )}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="/burgerdata"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Restaurants
              </a>
              <a
                href="/searchui"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Search
              </a>
              
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navigation;