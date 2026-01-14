import { api } from "../api";

export const deleteCategoryById = async (categoryId: string) => {
  const response = await api.delete(`/categories/${categoryId}`);
  return response.data;
};
