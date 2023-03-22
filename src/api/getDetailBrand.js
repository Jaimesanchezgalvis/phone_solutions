export const getDetailBrand = async (id) => {
  const url = `https://phone-specs-api.azharimm.dev/brands/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};