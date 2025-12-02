import { deleteCategories, findCategoriesById } from '../../repositories/categoriesRepository.js';

export const deleteCategoriesService = async (id: string) => {
  if (!id) {
    throw new Error('Id is required.');
  }

  const exists = await findCategoriesById(id);

  if (!exists) {
    throw new Error('Category not found');
  }

  await deleteCategories(id);

  return { message: 'Category deleted successfully.' };
};
