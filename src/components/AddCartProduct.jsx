import React, { useState } from "react";
import { addProductCart } from "../api/addProductCart";

export const AddCartProduct = () => {
  //   const [count, setcount] = useState({});

  //   const handleAddCart = () => {
  //     setBody({
  //       id: 1,
  //       colorCode: "Product 1",
  //       storageCode: 100,
  //     });
  // };

  const body = {
    id: "2",
    colorCode: "3",
    storageCode: "asdf",
  };

  //   addProductCart(body);

  //   console.log(body);

  return (
    <div>
      <button onClick={() => addProductCart(body)}>add</button>
    </div>
  );
};
