import type { Request, Response } from 'express';
import { getProductsByCategoryService } from '../../services/products/getProductsByCategoryService.js';
import { ProductByCategorySchema, type ProductByCategoryDto } from '../../../schemas/product.schema.js';

export const getProductByCategoryController = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const parsed: ProductByCategoryDto = ProductByCategorySchema.parse({ categoryId: categoryId });
    const products = await getProductsByCategoryService(parsed.categoryId);
    console.log(parsed.categoryId);

    return res.status(200).json({ message: 'success', products });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.sendStatus(500);
  }
};
