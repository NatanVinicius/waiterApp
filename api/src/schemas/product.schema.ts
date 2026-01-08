import { z } from 'zod';

export const IngredientSchema = z.object({
  icon: z.string().min(1, 'Icon is required'),
  name: z.string().min(1, 'Name name is required'),
});

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  description: z.string().min(1, 'Description is required.'),
  price: z.coerce.number().positive('Price must be greater then 0'),
  ingredients: z.preprocess((value) => {
    if (typeof value == 'string') {
      return JSON.parse(value);
    }
    return value;
  }, z.array(IngredientSchema)),
  category: z.string().min(1, 'Category is required.'),
  imagePath: z.string().min(1, 'Image is required'),
});

export const ProductByCategorySchema = z.object({
  categoryId: z.string(),
});

export type ProductDto = z.infer<typeof ProductSchema>;
export type ProductByCategoryDto = z.infer<typeof ProductByCategorySchema>;
