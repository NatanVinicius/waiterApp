import type { Request, Response } from 'express';
import { createCategoriesService } from '../../services/categories/createCategoriesService.js';

export const createCategoriesController = async (req: Request, res: Response) => {
  try {
    const category = await createCategoriesService(req.body);
    return res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};
