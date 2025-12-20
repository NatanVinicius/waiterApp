import type { Response } from 'express';
import { listOrdersService } from '../../services/orders/listOrdersService.js';

export const listOrdersController = async (res: Response) => {
  try {
    const orders = await listOrdersService();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
