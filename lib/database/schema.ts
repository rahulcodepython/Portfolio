
// ============================================================================
// TYPE EXPORTS (inferred from schemas)
// ============================================================================

import z from "zod"
import { contactCreateSchema, contactFullSchema, contactUpdateSchema, loginSchema, projectCreateSchema, projectFullSchema, projectUpdateSchema, settingsFullSchema, settingsUpdateSchema, skillCreateSchema, skillFullSchema, skillUpdateSchema } from "../validations"

export type Project = z.infer<typeof projectFullSchema>
export type ProjectCreate = z.infer<typeof projectCreateSchema>
export type ProjectUpdate = z.infer<typeof projectUpdateSchema>

export type Skill = z.infer<typeof skillFullSchema>
export type SkillCreate = z.infer<typeof skillCreateSchema>
export type SkillUpdate = z.infer<typeof skillUpdateSchema>

export type Contact = z.infer<typeof contactFullSchema>
export type ContactCreate = z.infer<typeof contactCreateSchema>
export type ContactUpdate = z.infer<typeof contactUpdateSchema>

export type Settings = z.infer<typeof settingsFullSchema>
export type SettingsUpdate = z.infer<typeof settingsUpdateSchema>

export type LoginCredentials = z.infer<typeof loginSchema>