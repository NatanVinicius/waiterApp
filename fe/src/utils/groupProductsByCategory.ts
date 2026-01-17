import type { Product } from "../types/product";

export const groupProductsByCategory = (products: Product[]) => {
  return products.reduce<Record<string, Product[]>>((acc, product) => {
    const categoryName = product.category.name;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(product);
    return acc;
  }, {});
};
