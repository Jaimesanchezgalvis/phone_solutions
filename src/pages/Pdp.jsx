import { Container, Spacer } from "@nextui-org/react";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { DetailProductCard } from "../components/DetailProductCard";

export const Pdp = () => {
  return (
    <Container
      display="flex"
      justify="center"
      css={{ width: "90%", padding: "0" }}
    >
      <HeaderComponent />
      <DetailProductCard />
      <Spacer y={3} />
    </Container>
  );
};
