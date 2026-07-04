import { z } from 'zod'

export const ContactSchema = z.object({
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  brand_name: z.string().max(100).optional(),
  num_locations: z.string().max(20).optional(),
  country: z.string().max(80).optional(),
  message: z.string().max(2000).optional(),
  wants_demo: z.boolean().default(false),
})

export type ContactFormData = z.infer<typeof ContactSchema>
