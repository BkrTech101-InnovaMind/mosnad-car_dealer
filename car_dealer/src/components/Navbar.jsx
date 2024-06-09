import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Modal from "./AddCarModal";

export default function Navbar({ onSearch }) {
  const [show, setShow] = useState(false);
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
              <button
                onClick={() => setShow(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                + Add a New Car
              </button>
              <Modal
                show={show}
                onClose={() => setShow(false)}
                handleClose={() => setShow(false)}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
