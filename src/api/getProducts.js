export const getProducts = async () => {
  const url = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
