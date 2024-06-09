import React from "react";

export default function ImageVieuwer({ car }) {
  return (
    <div className="col-span-2 grid grid-cols-2 lg:sticky top-0 lg:h-[98vh]">
      <div className="columns-2 gap-0 h-[100%]">
        {car.sub_details.images.map((image) => (
          <div className="h-[50%] border-2 border-gray-200">
            <img
              src={image}
              alt={`${car.company_brand} ${car.sub_details.model} ${car.sub_details.year}`}
              className="h-full object-cover object-top shadow-md"
            />
          </div>
        ))}
      </div>
      <div>
        <img
          src={car.primary_image}
          alt={`${car.company_brand} ${car.sub_details.model} ${car.sub_details.year}`}
          className="h-full object-cover object-top shadow-md"
        />
      </div>
    </div>
  );
}
