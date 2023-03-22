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

import { getDetailProducts } from "../api/getDetailProducts";
import "../styles/components/detailproductcard.scss";

export const DetailProductCard = () => {
  const [data, setData] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    getDetailProducts(slug).then((data) => {
      setData(data.data);
    });
  }, [slug]);

  if (data.length === 0) {
    return <Loading />;
  }

  try {
    const product = data;
    return (
      <>
        <Row gap={2} align="center" justify="flex-start">
          <Link to={"/"}>
            <Text
              css={{
                color: "#18738f",
              }}
              weight="bold"
            >
              Details of: {product.phone_name}
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
                      src={product.phone_images[0]}
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
                      <Text css={{ margin: "0" }}>{product.phone_name}</Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Cpu:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.cpu} {product.cpuCores}
                      </Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Ram:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.specifications[5].specs[1].val[0]}
                      </Text>
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
                        {product.specifications[3].specs[1].val[0]}{" "}
                      </Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Primary Camera:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.specifications[6].specs[0].val[0]}
                      </Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Secondary Camera:&nbsp;
                      </Text>

                      <Text css={{ margin: "0" }}>
                        {product.specifications[7].specs[0].val[0]}
                      </Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Dimentions:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.specifications[2].specs[0].val[0]}
                      </Text>
                    </Row>
                    <Row>
                      <Text b css={{ margin: "0" }}>
                        Weight:&nbsp;
                      </Text>
                      <Text css={{ margin: "0" }}>
                        {product.specifications[2].specs[1].val[0]}
                      </Text>
                    </Row>
                    <Spacer y={1} />
                    <hr />
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
