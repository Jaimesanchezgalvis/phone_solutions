export const addProductCart = async (body) => {
  const url = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart";

  const response = await fetch(url, {
    method: "POST",
    credentials: "omit",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Cookie: "SameSite=None",
    },
    body: JSON.stringify(body),
  });

  const { count } = await response.json();

  return count;
};
