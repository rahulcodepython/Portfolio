import { z } from "zod"

// Contact form schema, shared by the form and the Cloudflare Pages Function
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

export type ContactFormData = z.infer<typeof contactSchema>
