import type { CategoryType } from '../../../interfaces/categories.js';
import { Category } from '../../../models/Category.js';
import { createCategories } from '../../repositories/categoriesRepository.js';

export const createCategoriesService = async (data: CategoryType) => {
  if (!data.name) {
    throw new Error('Name is required');
  }

  if (!data.icon) {
    throw new Error('Icon is required');
  }

  const exists = await Category.findOne({ name: data.name });

  if (exists) {
    throw new Error('Name already in use');
  }

  return createCategories(data);
};
