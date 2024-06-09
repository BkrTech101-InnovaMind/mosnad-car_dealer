import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="#"
          replace
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cars Dealer
          </span>
        </Link>
        <SearchBar onSearch={onSearch} />
        <div
          className="items-center justify-between flex w-auto order-1"
          id="navbar-search"
        >
          <ul className="flex p-0 mt-4 font-medium space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/add_car"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Add Car
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
