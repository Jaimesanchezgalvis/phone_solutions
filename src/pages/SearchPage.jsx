import { Container, Spacer } from "@nextui-org/react";
import { SearchComponent } from "../components/SearchComponent";

export const SearchPage = () => {
  return (
    <Container display="flex" justify="flex-end" css={{ width: "90%" }}>
      <Spacer y={15} />
      <SearchComponent />
    </Container>
  );
};
