import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import "../styles/components/detailproductcard.scss";

export const DetailProductCard = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getDetailsProducts(id).then((data) => {
      setData(data);
    });
  }, [id]);

  if (data.length === 0) {
    return <Loading />;
  }

  try {
    const product = data;
    return (
      <>
        <Row gap={2} align="center" justify="flex-start">
          <Link to={"/phone_solutions"}>
            <Text
              css={{
                color: "#18738f",
              }}
              weight="bold"
            >
              List of products/details: {product.model}
            </Text>
          </Link>
        </Row>
        <Container>
          <Grid.Container
            gap={2}
            justify="center"
            align="center"
            css={{ margin: "0 auto" }}
          >
            <Card isHoverable>
              <Card.Body
                css={{
                  paddingLeft: "0",
                }}
              >
                <Row align="center" justify="center" wrap="wrap">
                  <Grid sm={6} justify="flex-start">
                    <Image
                      src={product.imgUrl}
                      alt="Default Image"
                      objectFit="cover"
                      height={350}
                      showSkeleton
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
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Brand:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}> {product.brand}</Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Model:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.model}</Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Price:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.price}€</Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Cpu:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.cpu}</Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Ram:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.ram}</Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Os:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.os}</Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Display:&nbsp;
                        <br />
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.displayResolution}
                      </Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Primary Camera:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.primaryCamera}</Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Secondary Camera:&nbsp;
                      </Text>

                      <Text css={{ margin: "0" }}>
                        {product.secondaryCmera}
                      </Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Dimentions:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.dimentions}</Text>
                    </Row>

                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Weight:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>{product.weight}g</Text>
                    </Row>
                    <Spacer y={1} />

                    <hr />

                    <AddCartProduct product={product} />
                  </Grid>
                </Row>
              </Card.Body>
            </Card>
          </Grid.Container>
          <Spacer y={1} />
        </Container>
      </>
    );
  } catch (error) {
    <Loading />;
  }
};
