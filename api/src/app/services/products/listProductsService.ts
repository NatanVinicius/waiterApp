import { listProducts } from '../../repositories/productsRepository.js';

export const listProductsService = async () => {
  const data = await listProducts();

  if (!data) {
    throw new Error('No products.');
  }

  return data;
};
