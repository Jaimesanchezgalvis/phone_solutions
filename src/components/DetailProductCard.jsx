import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Grid,
  Image,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import { getDetailsProducts } from "../api/getDetailsProducts";
import { AddCartProduct } from "./AddCartProduct";

export const DetailProductCard = () => {
  const [data, setData] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    getDetailsProducts(id).then((data) => {
      setData(data);
    });
  }, [id]);
  

  try {
    const product = data;
    return (
      <Container>
        <Row align="center" justify="center">
          <Spacer y={4} />
          <Text
            h2
            size={45}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              margin: "0",
            }}
            weight="bold"
          >
            Model: {product.model}
          </Text>
        </Row>
        <Grid.Container
          gap={2}
          justify="center"
          align="center"
          css={{ width: "100%", margin: "0 auto" }}
        >
          <Card isHoverable>
            <Card.Body>
              <Row align="center" justify="center" wrap="wrap">
                <Grid sm={6} justify="flex-start">
                  <Image
                    src={product.imgUrl}
                    alt="Default Image"
                    objectFit="cover"
                  />
                </Grid>
                <Grid sm={6} justify="flex-start" direction="column">
                  <Text
                    h1
                    size={30}
                    css={{
                      textGradient: "45deg, $purple600 -20%, $pink600 100%",
                      margin: "0",
                    }}
                    weight="bold"
                  >
                    Description:
                  </Text>
                  <Text css={{ margin: "0" }}>Brand: {product.brand}</Text>
                  <Text css={{ margin: "0" }}>Model: {product.model}</Text>
                  <Text css={{ margin: "0" }}>Price: {product.price}€</Text>
                  <Text css={{ margin: "0" }}>cpu: {product.cpu}</Text>
                  <Text css={{ margin: "0" }}>ram: {product.ram}</Text>
                  <Text css={{ margin: "0" }}>os: {product.os}</Text>
                  <Text css={{ margin: "0" }}>
                    Display Resolution: {product.displayResolution}
                  </Text>
                  <Text css={{ margin: "0" }}>
                    Primary Camera: {product.primaryCamera}
                  </Text>
                  <Text css={{ margin: "0" }}>
                    Secondary Camera: {product.secondaryCamera}
                  </Text>
                  <Text css={{ margin: "0" }}>
                    Dimentions: {product.dimentions}
                  </Text>
                  <Text css={{ margin: "0" }}>Weight: {product.weight}g</Text>
                  <AddCartProduct product={product} />
                </Grid>
              </Row>
            </Card.Body>
          </Card>
        </Grid.Container>
        <Spacer y={1} />
      </Container>
    );
  } catch (error) {
    <Loading />;
  }
};
