import { Category } from '../../models/Category.js';
import { Product } from '../../models/Product.js';
import type { ProductDto } from '../../schemas/product.schema.js';

export const listProducts = async () => {
  return await Product.find({});
};

export const createProducts = async (product: ProductDto) => {
  return await Product.create(product);
};

export const getProductsById = async (id: string) => {
  return await Product.findById(id);
};

export const getProductByCategory = async (categoryId: string) => {
  const products = await Product.find({ category: categoryId });
  return products;
};

export const deleteProducts = async (id: string) => {
  return await Product.deleteOne({ _id: id });
};
