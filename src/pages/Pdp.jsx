import { DetailProductCard } from "../components/DetailProductCard";
import { Container, Spacer } from "@nextui-org/react";

import HeaderComponent from "../components/HeaderComponent";

export const Pdp = () => {
  return (
    <Container display="flex" justify="center" css={{ width: "90%" }}>
      <HeaderComponent />
      <DetailProductCard />
      <Spacer y={3} />
    </Container>
  );
};
