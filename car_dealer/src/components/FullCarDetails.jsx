import React from "react";

export default function FullCarDetails({ car }) {
  const subDetails = car.sub_details;
  return (
    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
      <li>
        Name: {car.company_brand} {subDetails.model}
      </li>
      <li>Address: {subDetails.seller_details.address}</li>
      <li>warranty: {subDetails.warranty}</li>
      <li>fuel type: {subDetails.fuel_type}</li>
      <li>transmission: {subDetails.transmission}</li>
      <li>Mile Age: {subDetails.mileage} Miles</li>
      <li>Body Type: {subDetails.body_type}</li>
      <li>Engine: {subDetails.engine}</li>
      <li>Engine Type: {subDetails.engine_type}</li>
      <li>Engine Power: {subDetails.engine_power}</li>
      <li>Registration: {subDetails.registration}</li>
      <li>Engine Capacity : {subDetails.engine_capacity}</li>
      <li>Doors: {subDetails.doors}</li>
      <li>Seets: {subDetails.seats}</li>
      <li>Wheels: {subDetails.wheels}</li>
      <li>Drive: {subDetails.drive}</li>
      <li>Features: {subDetails.features.map((f) => f).join(", ")}</li>
      <li>
        Specifications: {subDetails.specifications.map((s) => s).join(", ")}
      </li>
    </ul>
  );
}
