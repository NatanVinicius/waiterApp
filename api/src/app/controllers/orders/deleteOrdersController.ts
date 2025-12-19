import type { Request, Response } from 'express';
import { deleteOrdersService } from '../../services/orders/deleteOrdersService.js';

export const deleteOrdersController = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const orderDeleted = deleteOrdersService(String(orderId));
    res.status(204).json({ message: 'Order deleted', orderDeleted });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
