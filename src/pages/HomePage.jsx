import React from "react";
import CarCard from "../components/CarCard";
import { CarsModul } from "../services/CarsModul";

export default function HomePage() {
  const cars = CarsModul();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
