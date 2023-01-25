import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

export const GetProductById = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  const product = data.find((product) => product.id === id);

  console.log(product);

  return product;
};
