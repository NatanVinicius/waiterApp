import { Product } from '../../../models/Product.js';
import { createProducts } from '../../repositories/productsRepository.js';
import type { ProductDto } from '../../../schemas/product.schema.js';

export const createProductssService = async (product: ProductDto) => {
  const exists = await Product.findOne({ name: product.name });

  if (exists) {
    throw new Error('Product already exists');
  }

  return createProducts(product);
};
