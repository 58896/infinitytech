import { z } from 'zod'

export const JobApplicationSchema = z.object({
  job_listing_id: z.string().uuid(),
  applicant_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  cover_letter: z.string().max(3000).optional(),
})

export type JobApplicationFormData = z.infer<typeof JobApplicationSchema>
