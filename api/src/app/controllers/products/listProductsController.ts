import type { Request, Response } from 'express';
import { listProductsService } from '../../services/products/listProductsService.js';

export const listProductsController = async (req: Request, res: Response) => {
  try {
    const products = await listProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
