import { z } from 'zod'

export const DemoSchema = z.object({
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  brand_name: z.string().max(100).optional(),
  num_locations: z.string().max(20).optional(),
  country: z.string().max(80).optional(),
  product_interest: z.string().max(100).optional(),
  wants_demo: z.literal(true).default(true),
})

export type DemoFormData = z.infer<typeof DemoSchema>
