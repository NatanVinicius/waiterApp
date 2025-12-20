import type { Request, Response } from 'express';
import { changeOrderStatusSchema, type changeOrderSchemaDto } from '../../../schemas/orderStatus.schema.js';
import { changeOrderStatusService } from '../../services/orders/changeOrdersStatusService.js';
import { ZodError } from 'zod';

export const changeOrderStatusController = async (req: Request, res: Response) => {
  try {
    const { params, body }: changeOrderSchemaDto = changeOrderStatusSchema.parse({
      params: req.params,
      body: req.body,
    });
    const updatedOrder = await changeOrderStatusService(params.id, body.status);

    return res.status(200).json({ message: 'Orders changed.', updatedOrder });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
    }
    if (err instanceof ZodError) {
      return res.status(400).json({ error: err.issues });
    }

    return res.sendStatus(500);
  }
};
