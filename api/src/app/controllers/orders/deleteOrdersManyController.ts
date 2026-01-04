import type { Request, Response } from 'express';
import { deleteManyOrdersService } from '../../services/orders/deleteManyOrdersService.js';

export const deleteOrdersManyController = async (req: Request, res: Response) => {
  try {
    const result = await deleteManyOrdersService();
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(204).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
