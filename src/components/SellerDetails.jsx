import React from "react";

export default function SellerDetails({ car }) {
  return (
    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
      <li>
        Name: {car.company_brand} {car.sub_details.model}
      </li>
      <li>Address: {car.sub_details.seller_details.address}</li>
      <li>warranty: {car.sub_details.warranty}</li>
    </ul>
  );
}
