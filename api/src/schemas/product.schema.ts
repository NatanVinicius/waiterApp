import { z } from 'zod';

export const IngredientSchema = z.object({
  icon: z.string().min(1, 'Ingridient icon is required'),
  name: z.string().min(1, 'Ingridient name is required'),
});

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  description: z.string().min(1, 'Name is required.'),
  imagePath: z.string().min(1, 'Name is required.'),
  price: z.number().positive('Price must be greater then 0'),
  ingredients: z.array(IngredientSchema),
  category: z.string().min(1, 'Category is required.'),
});

export type ProductDto = z.infer<typeof ProductSchema>;
