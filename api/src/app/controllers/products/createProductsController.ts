import type { Request, Response } from 'express';
import { ProductSchema } from '../../../schemas/product.schema.js';
import { createProductssService } from '../../services/products/createProductsService.js';
import { ZodError } from 'zod';

export const createProductsController = async (req: Request, res: Response) => {
  try {
    const data = ProductSchema.parse(req.body);
    const product = await createProductssService(data);

    res.status(201).json(product);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.issues });
    }

    return res.status(500).json({ error: error instanceof Error ? { message: error.message } : error });
  }
};
