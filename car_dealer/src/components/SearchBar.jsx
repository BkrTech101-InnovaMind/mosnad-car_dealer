import React, { useState } from "react";
import { useCarData } from "../services/CarsModul";

export default function SearchBar({ onSearch }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [nestedMenu, setNestedMenu] = useState(false);
  const [query, setQuery] = useState("");
  const { data } = useCarData("cars.json");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    if (!newQuery) onSearch("");
    setQuery(newQuery);
    console.log(newQuery);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
    console.log(query);
  };

  const toggleMenu = (key) => {
    setNestedMenu(nestedMenu === key ? null : key);
  };

  return (
    <form className="max-w-xl lg:flex-1" onSubmit={handleSearch}>
      <div className="flex relative">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          onClick={() =>
            setIsDropdownVisible(!isDropdownVisible, setNestedMenu(false))
          }
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          Filter By :{" "}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownVisible && (
          <>
            <div
              id="dropdown"
              className="absolute right-0 md:left-0 md:top-11 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="relative py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    className="inline-flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    type="button"
                    onClick={() => {
                      onSearch("");
                      setIsDropdownVisible(false);
                    }}
                  >
                    All
                  </button>
                </li>
                {data.map((item) => {
                  const keyName = Object.keys(item)[0];
                  return (
                    <li key={keyName}>
                      <button
                        type="button"
                        className="inline-flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => toggleMenu(keyName)}
                      >
                        {keyName}{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1 4 4 1 7"
                          />
                        </svg>
                      </button>
                      {nestedMenu === keyName && (
                        <ul className="absolute left-40 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 max-h-40 overflow-scroll">
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              onSearch("");
                              setIsDropdownVisible(false);
                            }}
                          >
                            All
                          </button>
                          {item[keyName].map((subItem, index) => (
                            <li
                              key={index}
                              className="hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                  onSearch(subItem);
                                  setIsDropdownVisible(false);
                                }}
                              >
                                {subItem}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
        <div className="relative w-full">
          <input
            value={query}
            onChange={handleInputChange}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search By Brand, Model, Price..."
          />
          <button
            onClick={handleSearch}
            type="button"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
