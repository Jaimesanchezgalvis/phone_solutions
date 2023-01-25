import "../styles/pages/plpPage.scss";
import { Container, Row, Grid, Text } from "@nextui-org/react";
import { ProductCard } from "../components/ProductCard";
import { SearchComponent } from "../components/SearchComponent";
import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";

export const Plp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    <Container fluid>
      <Row justify="left" align="center">
        <h1>Phone Solutions</h1>
      </Row>
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <SearchComponent />
        </Row>
        <Row gap={2} align="center" justify="flex-start">
          <Text>List of products:</Text>
        </Row>
        {data.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </Grid.Container>
    </Container>
  );
};
