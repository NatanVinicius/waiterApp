import type { Request, Response } from 'express';
import { createOrderSchema, type createOrderDto } from '../../../schemas/createOrder.schema.js';
import { createOrdersService } from '../../services/orders/createOrdersService.js';
import { ZodError } from 'zod';

export const createOrdersController = async (req: Request, res: Response) => {
  try {
    const validatedData: createOrderDto = createOrderSchema.parse(req.body);
    const order = await createOrdersService(validatedData);

    res.status(201).json({ message: 'Order created.', order });
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ errors: err.issues });
    }
    if (err instanceof Error) {
      // ✅ enviar err.message, não err
      return res.status(400).json({ error: err.message });
    }

    // caso seja algum outro tipo inesperado
    res.status(500).json({ error: 'Internal server error' });
  }
};
