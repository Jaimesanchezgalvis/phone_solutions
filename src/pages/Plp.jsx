import "../styles/pages/plpPage.scss";
import { Container, Row, Grid, Text } from "@nextui-org/react";
import { ProductCard } from "../components/ProductCard";
import { SearchComponent } from "../components/SearchComponent";

export const Plp = () => {
  return (
    <Container fluid>
      <Row justify="left" align="center">
        <h1>Phone Solutions</h1>
      </Row>
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row gap={2} align="center">
          <Grid xs={6} justify="flex-start">
            <Text>List of products:</Text>
          </Grid>
          <Grid xs={6} justify="flex-end">
            <SearchComponent />
          </Grid>
        </Row>
        <ProductCard />
      </Grid.Container>
    </Container>
  );
};
