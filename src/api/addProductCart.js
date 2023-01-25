export const addProductCart = async (body) => {
  const url = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });

  const { count } = await response.json();
  return count;
};
