import type { Request, Response } from 'express';
import { listCategoriesService } from '../../services/categories/listCategoriesService.js';

export const listCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await listCategoriesService();
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
