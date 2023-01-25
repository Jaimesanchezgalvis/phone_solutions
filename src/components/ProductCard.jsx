import React, { useEffect, useState } from "react";
import { Card, Grid, Text, Image } from "@nextui-org/react";
import { getProducts } from "../api/getProducts";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      {data.map((product) => {
        return (
          <Grid md={3} key={product.id}>
            <Card isPressable isHoverable>
              <Link to={product.id}>
                <Card.Body>
                  <Text>Model: {product.model}</Text>
                  <Image
                    src={product.imgUrl}
                    alt="Default Image"
                    objectFit="cover"
                  />
                </Card.Body>
              </Link>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};
