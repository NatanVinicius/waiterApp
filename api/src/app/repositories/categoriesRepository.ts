import { Category } from '../../models/Category.js';
import type { CategoryType } from '../../interfaces/categories.js';

export const listCategories = async () => {
  return Category.find({});
};

export const createCategories = async (data: CategoryType) => {
  return Category.create(data);
};

export const findCategoriesById = async (id: string) => {
  return Category.findById(id);
};

export const deleteCategories = async (id: string) => {
  return Category.deleteOne({ _id: id });
};
