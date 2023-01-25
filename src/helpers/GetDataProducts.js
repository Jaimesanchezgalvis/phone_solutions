import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

export const GetDataProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);
  return data;
};
