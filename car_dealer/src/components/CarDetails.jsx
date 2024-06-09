import React, { useState } from "react";
import ImageViewer from "../components/ImageVieuwer";
import FullCarDetails from "./FullCarDetails";
import SellerDetails from "./SellerDetails";

export default function CarDetails({ car }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!car) return <div>No car details available</div>;
  return (
    <div className="font-sans">
      <div className="grid items-start grid-cols-1 lg:grid-cols-3">
        <ImageViewer car={car} />
        <div className="px-10 py-6 max-lg:max-w-2xl">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {`${car.company_brand} ${car.sub_details.model} ${car.sub_details.year}`}
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              {car.sub_details.description}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-gray-800 text-3xl font-bold">$ {car.price}</p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="w-12 h-12 border-2 border-blue-800 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0">
                {car.sub_details.car_state.toUpperCase()}
              </p>
              <p className="w-12 h-12 border-2 border-blue-800 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0">
                {car.sub_details.year}
              </p>
              <p className="w-12 text-clip h-12 border-2 border-blue-800 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0">
                {car.sub_details.color}
              </p>
              <p className="w-12 h-12 border-2 border-blue-800 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0">
                {car.sub_details.body_type}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              className="w-full px-4 py-2.5 border border-blue-800 bg-transparent hover:bg-blue-800 text-gray-800 hover:text-white text-sm font-semibold rounded"
            >
              Contact Seller
            </button>
          </div>

          <div className="mt-8">
            <div className="flex justify-around">
              <button
                type="button"
                className={`text-lg font-bold text-gray-800 rounded-lg px-5 py-3 hover:bg-blue-800 hover:text-white ${
                  showDetails ? "bg-gray-200" : "bg-blue-800 text-white"
                }`}
                onClick={() => setShowDetails(false)}
              >
                Full Car Details
              </button>
              <button
                type="button"
                className={`text-lg font-bold text-gray-800 rounded-lg px-5 py-3 hover:bg-blue-800 hover:text-white ${
                  !showDetails ? "bg-gray-200" : "bg-blue-800 text-white"
                }`}
                onClick={() => setShowDetails(true)}
              >
                Seller Details
              </button>
            </div>
            {showDetails ? (
              <SellerDetails car={car} />
            ) : (
              <FullCarDetails car={car} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
