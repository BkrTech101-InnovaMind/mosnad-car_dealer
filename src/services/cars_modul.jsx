import axios from "axios";
import { useEffect, useState } from "react";

export const CarsModul = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get("cars.json").then((res) => {
      console.log(res.data);
      setCars(res.data);
    });
  }, []);

  return cars;
};
