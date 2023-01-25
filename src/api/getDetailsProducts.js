export const getDetailsProducts = async (id) => {
  const url = `https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
