
import React, { useState } from "react";
import { BiUser,BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="dashboard-header transition-all duration-200 fixed lg:left-72 left-0 z-30 shadow-front-2 bg-white h-28 lg:w-[calc(100%-250px)] w-full px-7  py-4 flex flex-col justify-center dark:bg-foreground dark:text-gray-200 top-0"
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="mr-3 lg:hidden block dashboard-header-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <button
            type="button"
            className="mr-3 block dashboard-sidebar-control"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className="lg:flex hidden items-center">
            <li className="mr-9">
              <a href="dashboard-home.html" className="hover:text-blue-500">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mr-9">
            <div className="relative">
              <button
                className="inline-flex justify-center items-center space-x-2 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <BiUser />
                <span>My Account</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1  ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className=" px-4 py-2 text-sm flex items-center gap-2 text-gray-700  hover:text-blue-500 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <BiUser /> Account
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm flex items-center gap-2 text-gray-700  hover:text-blue-500 hover:bg-gray-100"
                    >
                      <BiLogOut/>
                      Log out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
