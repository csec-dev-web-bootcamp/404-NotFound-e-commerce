import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().optional(),
  imgUrl: z.string().optional(),
  price: z.number().default(0.0),
  category: z.string().default(""),
  stockQuantity: z.number().int().positive(),
});
