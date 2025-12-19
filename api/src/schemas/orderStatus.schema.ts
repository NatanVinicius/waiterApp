import mongoose from 'mongoose';
import z from 'zod';

export const changeOrderStatusSchema = z.object({
  params: z.object({
    id: z.string().refine(mongoose.Types.ObjectId.isValid, { message: 'Invalid order id.' }),
  }),
  body: z.object({
    status: z.enum(['WAITING', 'PREPARING', 'DONE']).default('WAITING'),
  }),
});

export type changeOrderSchemaDto = z.infer<typeof changeOrderStatusSchema>;
