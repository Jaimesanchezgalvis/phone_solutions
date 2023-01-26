import "../styles/pages/plpPage.scss";
import { Container, Row, Grid, Text, Loading } from "@nextui-org/react";
import { ProductCard } from "../components/ProductCard";
import { SearchComponent } from "../components/SearchComponent";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

export const Plp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <Container
      fluid
      css={{
        width: "90%",
      }}
    >
      <HeaderComponent />
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <SearchComponent />
        </Row>
        <Row gap={2} align="center" justify="flex-start">
          <Link to={"/phone_solutions"}>
            <Text
              css={{
                color: "#18738f",
              }}
              weight="bold"
            >
              List of products:
            </Text>
          </Link>
        </Row>
        {data.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </Grid.Container>
    </Container>
  );
};
