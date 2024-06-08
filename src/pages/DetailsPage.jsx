import React from "react";
import CarDetails from "../components/CarDetails";
import { useLocation } from "react-router-dom";

export default function DetailsPage() {
  const location = useLocation();
  const { car } = location.state || {};

  return <CarDetails car={car} />;
}
