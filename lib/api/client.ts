import { contactSchema, projectSchema, settingsSchema, skillSchema } from "@/lib/validations"
import { z } from "zod"
import { Contact, Project, Settings, Skill } from "../database/schema"

// Type definitions for API requests
export type CreateProjectRequestType = z.infer<typeof projectSchema>
export type UpdateProjectRequestType = Partial<CreateProjectRequestType>

export type CreateSkillRequestType = z.infer<typeof skillSchema>
export type UpdateSkillRequestType = Partial<CreateSkillRequestType>

export type UpdateSettingsRequestType = z.infer<typeof settingsSchema>

export type CreateContactRequestType = z.infer<typeof contactSchema>
export type UpdateContactReadRequestType = { read: boolean }

// API Response wrapper
export type ApiResponse<T> = {
    data: T,
    success: boolean,
    message: string
}

class ClientApi {
    private async request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
        const response = await fetch(endpoint, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers,
            },
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                message: "Unknown error",
                success: false
            }))
            // Forward the exact error message from the API
            throw new Error(errorData.message)
        }

        return await response.json()
    }

    // Projects API
    async getProjects(): Promise<ApiResponse<Project[]>> {
        return this.request<Project[]>("/api/projects")
    }

    async getProjectById(id: string): Promise<ApiResponse<Project>> {
        return this.request<Project>(`/api/projects/${id}`)
    }

    async createProject(data: CreateProjectRequestType): Promise<ApiResponse<Project>> {
        return this.request<Project>("/api/projects", {
            method: "POST",
            body: JSON.stringify(data),
        })
    }

    async updateProject(id: string, data: UpdateProjectRequestType): Promise<ApiResponse<Project>> {
        return this.request<Project>(`/api/projects/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        })
    }

    async deleteProject(id: string): Promise<ApiResponse<{ success: boolean }>> {
        return this.request<{ success: boolean }>(`/api/projects/${id}`, {
            method: "DELETE",
        })
    }

    // Skills API
    async getSkills(): Promise<ApiResponse<Skill[]>> {
        return this.request<Skill[]>("/api/skills")
    }

    async getSkillById(id: string): Promise<ApiResponse<Skill>> {
        return this.request<Skill>(`/api/skills/${id}`)
    }

    async createSkill(data: CreateSkillRequestType): Promise<ApiResponse<Skill>> {
        return this.request<Skill>("/api/skills", {
            method: "POST",
            body: JSON.stringify(data),
        })
    }

    async updateSkill(id: string, data: UpdateSkillRequestType): Promise<ApiResponse<Skill>> {
        return this.request<Skill>(`/api/skills/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        })
    }

    async deleteSkill(id: string): Promise<ApiResponse<{ success: boolean }>> {
        return this.request<{ success: boolean }>(`/api/skills/${id}`, {
            method: "DELETE",
        })
    }

    // Settings API
    async getSettings(): Promise<ApiResponse<Settings>> {
        return this.request<Settings>("/api/settings")
    }

    async updateSettings(data: UpdateSettingsRequestType): Promise<ApiResponse<{ success: boolean }>> {
        return this.request<{ success: boolean }>("/api/settings", {
            method: "PUT",
            body: JSON.stringify(data),
        })
    }

    // Contacts API
    async getContacts(): Promise<ApiResponse<Contact[]>> {
        return this.request<Contact[]>("/api/contacts")
    }

    async getContactById(id: string): Promise<ApiResponse<Contact>> {
        return this.request<Contact>(`/api/contacts/${id}`)
    }

    async createContact(data: CreateContactRequestType): Promise<ApiResponse<Contact>> {
        return this.request<Contact>("/api/contacts", {
            method: "POST",
            body: JSON.stringify(data),
        })
    }

    async updateContactRead(id: string, data: UpdateContactReadRequestType): Promise<ApiResponse<Contact>> {
        return this.request<Contact>(`/api/contacts/${id}/read`, {
            method: "PATCH",
            body: JSON.stringify(data),
        })
    }

    async deleteContact(id: string): Promise<ApiResponse<{ success: boolean }>> {
        return this.request<{ success: boolean }>(`/api/contacts/${id}`, {
            method: "DELETE",
        })
    }
}

export const clientApi = new ClientApi()
