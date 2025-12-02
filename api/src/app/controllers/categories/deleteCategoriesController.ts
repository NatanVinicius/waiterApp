import type { Request, Response } from 'express';
import { deleteCategoriesService } from '../../services/categories/deleteCategoriesService.js';

export const deleteCategoriesController = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    const result = await deleteCategoriesService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? Error : 'Internal server error.' });
  }
};
