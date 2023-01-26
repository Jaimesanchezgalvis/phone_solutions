import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid, Input, Row, Text } from "@nextui-org/react";
import queryString from "query-string";

import { useForm } from "../helpers/UseForm";
import { GetProductByName } from "../helpers/GetProductByName";
import { ProductCard } from "./ProductCard";

export const SearchComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const producto = GetProductByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) {
      navigate("/phone_solutions");
    }
    navigate(`/phone_solutions/?q=${searchText}`);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    navigate("/phone_solutions");
  };

  return (
    <Container fluid>
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <form action="" onSubmit={onSearchSubmit}>
            <Input
              type="text"
              name="searchText"
              labelPlaceholder="Search"
              color="default"
              clearable
              value={searchText}
              onChange={onInputChange}
              onClearClick={clearSearch}
            />
          </form>
        </Row>
        {searchText ? (
          <Row gap={2} align="center" justify="flex-start">
            <Text>Results:</Text>
          </Row>
        ) : null}
        {producto.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </Grid.Container>
    </Container>
  );
};
