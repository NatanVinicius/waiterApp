import { listCategories } from '../../repositories/categoriesRepository.js';

export const listCategoriesService = async () => {
  const data = await listCategories();
  return data;
};
