import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import queryString from "query-string";

import { useForm } from "../helpers/UseForm";
import { GetProductByName } from "../helpers/GetProductByName";

export const SearchComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const producto = GetProductByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) {
      return;
    }
    navigate(`search/?q=${searchText}`);
  };

  return (
    <>
      <form action="" onSubmit={onSearchSubmit}>
        <Input
          type="text"
          name="searchText"
          labelPlaceholder="Search"
          color="default"
          clearable
          value={searchText}
          onChange={onInputChange}
        />
      </form>
      {producto.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.model}</h1>
            <p>{product.description}</p>
          </div>
        );
      })}
    </>
  );
};
