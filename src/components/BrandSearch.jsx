import { useState } from "react";
import { Input } from "@nextui-org/react";

export const BrandSearch = ({ data, setData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    // Filter data based on search value
    const filteredData = data.filter((brand) =>
      brand.brand_name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <Input
      labelPlaceholder="Search for a brand..."
      onChange={handleSearch}
      value={searchValue}
      clearable
      width="300px"
    />
  );
};
