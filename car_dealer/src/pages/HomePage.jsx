import React, { useState } from "react";
import CarCard from "../components/CarCard";
import { CarsModul } from "../services/CarsModul";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filterCars = (car) => {
    if (!query) return true;
    const lowerCaseQuery = query.toLowerCase();
    return (
      car.company_brand.toLowerCase().includes(lowerCaseQuery) ||
      car.sub_details.model.toLowerCase().includes(lowerCaseQuery) ||
      car.sub_details.year.toString().includes(lowerCaseQuery) ||
      car.price.toString().replace(/,/g, "").includes(lowerCaseQuery)
    );
  };
  return (
    <>
      <Navbar onSearch={setQuery} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {CarsModul({ filter: filterCars }).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}
