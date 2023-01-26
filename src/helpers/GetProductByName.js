export const GetProductByName = (name = "") => {
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  if (name === "") {
    return [];
  }

  return data.filter((product) => {
    return (
      product.model.toLowerCase().includes(name.toLowerCase()) ||
      product.brand.toLowerCase().includes(name.toLowerCase())
    );
  });
};
