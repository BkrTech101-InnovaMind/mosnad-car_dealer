// /services/CarsModul.jsx
import axios from "axios";
import { useEffect, useState } from "react";

export const CarsModul = ({ filter }) => {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    axios.get("cars.json").then((res) => {
      setCarsList(res.data);
    });
  }, []);

  const cars = filter ? carsList.filter(filter) : carsList;
  return cars;
};
