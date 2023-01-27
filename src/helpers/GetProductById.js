export const GetProductById = (id) => {
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  const product = data.find((product) => product.id === id);

  return product;
};
