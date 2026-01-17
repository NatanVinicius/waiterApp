import { api } from "../api";

export const getProductByCategory = async (categoryId: string) => {
  const response = await api.get(`/categories/${categoryId}/products`);
  return response.data;
};
