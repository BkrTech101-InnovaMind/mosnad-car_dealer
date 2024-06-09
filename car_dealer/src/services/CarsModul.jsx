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

export const useCarData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const cars = res.data;
        const transformedData = [
          { Company: [...new Set(cars.map((car) => car.company_brand))] },
          { Model: [...new Set(cars.map((car) => car.sub_details.model))] },
          { Year: [...new Set(cars.map((car) => car.sub_details.year))] },
        ];
        setData(transformedData);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, error };
};
