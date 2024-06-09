import React from "react";

export default function SellerDetails({ car }) {
  const sellerDetails = car.sub_details.seller_details;
  return (
    <div class="mt-5 flex flex-col rounded-lg bg-white text-surface drop-shadow-2xl dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
      <img
        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
        src={sellerDetails.image}
        alt={sellerDetails.name}
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="text-xl font-medium">{sellerDetails.name}</h5>
        <ul>
          <li class="my-4 text-base">{sellerDetails.phone}</li>
          <li class="text-base">{sellerDetails.email}</li>
          <li class="mt-3 text-xs text-surface/75 dark:text-neutral-300">
            {sellerDetails.address}
          </li>
        </ul>
      </div>
    </div>
  );
}
