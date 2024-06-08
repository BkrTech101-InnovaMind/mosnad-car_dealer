import React from "react";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
      <img
        className="rounded-t-lg w-full"
        src={car.primary_image}
        alt={`${car.company_brand} ${car.sub_details.model} ${car.sub_details.year}`}
      />
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {car.company_brand} {car.sub_details.model} {car.sub_details.year}
          </h5>
        </Link>
        <div className="my-2">{car.sub_details.seller_details.address}</div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${car.price}
          </span>
          <Link
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
