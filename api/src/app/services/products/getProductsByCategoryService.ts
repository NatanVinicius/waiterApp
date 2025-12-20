import { Category } from '../../../models/Category.js';
import { getProductByCategory } from '../../repositories/productsRepository.js';

export const getProductsByCategoryService = async (categoryId: string) => {
  const categoryExists = await Category.findById(categoryId);
  if (!categoryExists) {
    throw new Error('Category not found');
  }

  const products = await getProductByCategory(categoryId);

  if (!products) {
    throw new Error('Product not found');
  }

  return products;
};
