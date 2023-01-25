import { Link } from "react-router-dom";
import { DetailProductCard } from "../components/DetailProductCard";
import { Button, Container, Spacer } from "@nextui-org/react";

export const Pdp = () => {
  return (
    <Container display="flex" justify="flex-end" css={{ width: "90%" }}>
      <DetailProductCard />
      <Button
        size="sm"
        shadow
        color="gradient"
        as={Link}
        to="/"
        css={{ width: "10%" }}
      >
        Back
      </Button>
      <Spacer y={3} />
    </Container>
  );
};
