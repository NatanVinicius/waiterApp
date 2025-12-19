import { z } from 'zod';

const objectId = () => z.string().regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid ObjectId' });

export const createOrderSchema = z.object({
  table: z.number().min(1, { message: 'Table is required and must be greater than 1' }),
  status: z.enum(['WAITING', 'PREPARING', 'DONE']).optional().default('WAITING'),
  products: z
    .array(
      z.object({
        product: objectId(),
        quantity: z.number().min(1).optional().default(1),
      }),
    )
    .nonempty(),
});

export type createOrderDto = z.infer<typeof createOrderSchema>;
