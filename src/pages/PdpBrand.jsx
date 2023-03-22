import { Container, Spacer } from "@nextui-org/react";

import HeaderComponent from "../components/HeaderComponent";
import { ProductCard } from "../components/ProductCard";

export const PdpBrand = () => {
  return (
    <Container
      display="flex"
      justify="center"
      css={{ width: "90%", padding: "0" }}
    >
      <HeaderComponent />
      <ProductCard />
      <Spacer y={3} />
    </Container>
  );
};
