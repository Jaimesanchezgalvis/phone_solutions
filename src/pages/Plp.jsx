import "../styles/pages/plpPage.scss";
import { Container, Row, Grid, Text, Loading, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { ProductBrand } from "../components/ProductBrand";
import { BrandSearch } from "../components/BrandSearch";

export const Plp = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data.data);
      setOriginalData(data.data);
    });
  }, []);

  return (
    <Container
      fluid
      css={{
        width: "90%",
        padding: "0",
      }}
    >
      <HeaderComponent />
      <Spacer y={1} />
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <BrandSearch data={originalData} setData={setData} />
        </Row>
        <Row gap={2} align="center" justify="flex-start">
          <Link to={"/"}>
            <Text
              css={{
                color: "#18738f",
              }}
              weight="bold"
            >
              List of Brands:
            </Text>
          </Link>
        </Row>
        {data.length > 0 ? (
          data.map((product, index) => {
            return <ProductBrand key={index} {...product} />;
          })
        ) : (
          <Loading />
        )}
      </Grid.Container>
    </Container>
  );
};
