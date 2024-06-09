import React from "react";

export default function FullCarDetails({ car }) {
  return (
    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
      <li>
        Name: {car.company_brand} {car.sub_details.model}
      </li>
      <li>Address: {car.sub_details.seller_details.address}</li>
      <li>warranty: {car.sub_details.warranty}</li>
      <li>fuel type: {car.sub_details.fuel_type}</li>
      <li>transmission: {car.sub_details.transmission}</li>
      <li>Mile Age: {car.sub_details.mileage} Miles</li>
      <li>Body Type: {car.sub_details.body_type}</li>
      <li>Engine: {car.sub_details.engine}</li>
      <li>Engine Type: {car.sub_details.engine_type}</li>
      <li>Engine Power: {car.sub_details.engine_power}</li>
      <li>Registration: {car.sub_details.registration}</li>
      <li>Engine Capacity : {car.sub_details.engine_capacity}</li>
      <li>Doors: {car.sub_details.doors}</li>
      <li>Seets: {car.sub_details.seats}</li>
      <li>Wheels: {car.sub_details.wheels}</li>
      <li>Drive: {car.sub_details.drive}</li>
      <li>Features: {car.sub_details.features.map((f) => f).join(", ")}</li>
      <li>
        Specifications:{" "}
        {car.sub_details.specifications.map((s) => s).join(", ")}
      </li>
    </ul>
  );
}
