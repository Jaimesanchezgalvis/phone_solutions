export const getDetailProducts = async (slug) => {
  const url = `https://phone-specs-api.azharimm.dev/${slug}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
