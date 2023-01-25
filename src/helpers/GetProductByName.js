import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

export const GetProductByName = (name = "") => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  if (name === "") {
    return [];
  }

  return data.filter((product) => {
    // return product.model.toLocaleLowerCase().includes(name);
    return (
      product.model.toLowerCase().includes(name.toLowerCase()) ||
      product.brand.toLowerCase().includes(name.toLowerCase())
    );
  });
};
