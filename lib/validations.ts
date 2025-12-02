import { z } from "zod"

// ============================================================================
// PROJECTS SCHEMAS (based on projects table)
// ============================================================================

// Full project schema (includes all database fields)
export const projectFullSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  description: z.string().min(1, "Description is required").max(1000, "Description too long"),
  technologies: z.string().min(1, "Technologies are required"),
  image_url: z.string().url("Must be a valid URL").nullable(),
  live_url: z.string().url("Must be a valid URL").nullable(),
  github_url: z.string().url("Must be a valid URL").nullable(),
  featured: z.number().int().min(0).max(1).default(0),
  created_at: z.string().datetime(),
})

// Schema for creating a new project (excludes id and created_at)
export const projectCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  description: z.string().min(1, "Description is required").max(1000, "Description too long"),
  technologies: z.string().min(1, "Technologies are required"),
  image_url: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")).transform(val => !val || val === "" ? null : val),
  live_url: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")).transform(val => !val || val === "" ? null : val),
  github_url: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")).transform(val => !val || val === "" ? null : val),
  featured: z.preprocess(
    (val) => {
      // Convert boolean to number (0 or 1) for database compatibility
      if (typeof val === "boolean") return val ? 1 : 0
      // If it's already a number, validate it
      if (typeof val === "number") return val
      // Default to 0 if undefined
      if (val === undefined || val === null) return 0
      return val
    },
    z.number().int().min(0).max(1).default(0)
  ),
})

// Schema for updating a project (all fields optional)
export const projectUpdateSchema = projectCreateSchema.partial()

// Legacy export for backward compatibility
export const projectSchema = projectCreateSchema

// ============================================================================
// SKILLS SCHEMAS (based on skills table)
// ============================================================================

// Full skill schema (includes all database fields)
export const skillFullSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  category: z.string().min(1, "Category is required"),
  proficiency_level: z.string().min(1, "Proficiency level is required"),
  created_at: z.string().datetime(),
})

// Schema for creating a new skill (excludes id and created_at)
export const skillCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  category: z.enum(["frontend", "backend", "database", "devops", "deployment", "others"], {
    required_error: "Category is required",
  }),
  proficiency_level: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"], {
    required_error: "Proficiency level is required",
  }),
})

// Schema for updating a skill (all fields optional)
export const skillUpdateSchema = skillCreateSchema.partial()

// Legacy export for backward compatibility
export const skillSchema = skillCreateSchema

// ============================================================================
// CONTACTS SCHEMAS (based on contacts table)
// ============================================================================

// Full contact schema (includes all database fields)
export const contactFullSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
  read: z.number().int().min(0).max(1).default(0),
  created_at: z.string().datetime(),
})

// Schema for creating a new contact (excludes id, read, and created_at)
export const contactCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

// Schema for updating contact read status
export const contactUpdateSchema = z.object({
  read: z.number().int().min(0).max(1),
})

// Legacy export for backward compatibility
export const contactSchema = contactCreateSchema

// ============================================================================
// SETTINGS SCHEMAS (based on settings table)
// ============================================================================

// Full settings schema (includes all database fields)
export const settingsFullSchema = z.object({
  id: z.number().int().positive(),
  github_url: z.string().url("Must be a valid URL").nullable(),
  linkedin_url: z.string().url("Must be a valid URL").nullable(),
  twitter_url: z.string().url("Must be a valid URL").nullable(),
  facebook_url: z.string().url("Must be a valid URL").nullable(),
  instagram_url: z.string().url("Must be a valid URL").nullable(),
  cv_url: z.string().url("Must be a valid URL").nullable(),
  image_url: z.string().url("Must be a valid URL").nullable(),
  updated_at: z.string().datetime(),
})

// Schema for updating settings (excludes id and updated_at, all fields optional)
export const settingsUpdateSchema = z.object({
  github_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  linkedin_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  twitter_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  facebook_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  instagram_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  cv_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")).transform(val => val === "" ? null : val),
}).partial()

// Legacy export for backward compatibility
export const settingsSchema = settingsUpdateSchema

// ============================================================================
// AUTHENTICATION SCHEMAS
// ============================================================================

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
})

