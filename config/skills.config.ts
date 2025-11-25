import { UpdateSkillRequestType } from "@/lib/api/client"
import type { Skill } from "@/lib/database/schema"

/**
 * Action handlers for the skills table
 */
export interface SkillsTableActions {
    onEdit: (id: string | null, skill: UpdateSkillRequestType) => void
    onDelete: (id: number) => void | Promise<void>
    deletingId?: number | null
}

/**
 * Column configuration for the table
 */
export interface TableColumn {
    header: string
    accessorKey?: keyof Skill
    headerClassName?: string
    className?: string
}

/**
 * Form field types
 */
export type FormFieldType = "text" | "select" | "url"

/**
 * Form field configuration
 */
export interface FormField {
    name: keyof Omit<Skill, "id" | "created_at">
    label: string
    type: FormFieldType
    placeholder?: string
    required: boolean
    options?: Array<{ label: string; value: string }>
}

/**
 * Configuration class for the Skills Table
 */
export class SkillsTableConfig {
    private actions: SkillsTableActions

    constructor(actions: SkillsTableActions) {
        this.actions = actions
    }

    /**
     * Get action handlers
     */
    getActions(): SkillsTableActions {
        return this.actions
    }

    /**
     * Get column configuration
     */
    getColumnsConfig(): TableColumn[] {
        return [
            {
                header: "Name",
                accessorKey: "name",
            },
            {
                header: "Category",
                accessorKey: "category",
            },
            {
                header: "Proficiency",
                accessorKey: "proficiency_level",
            },
            {
                header: "Actions",
                headerClassName: "text-right",
                className: "text-right",
            },
        ]
    }

    /**
     * Get empty state configuration
     */
    getEmptyConfig() {
        return {
            title: "No skills yet",
            description: "Add your first skill to get started",
            action: {
                label: "Add your first skill",
                href: "/dashboard/skills/new",
            },
        }
    }

    /**
     * Get form field configuration
     */
    getFormFields(): FormField[] {
        return [
            {
                name: "name",
                label: "Skill Name",
                type: "text",
                placeholder: "React",
                required: true,
            },
            {
                name: "category",
                label: "Category",
                type: "select",
                required: true,
                options: [
                    { label: "Frontend", value: "Frontend" },
                    { label: "Backend", value: "Backend" },
                    { label: "Tools", value: "Tools" },
                    { label: "Design", value: "Design" },
                    { label: "Other", value: "Other" },
                ],
            },
            {
                name: "proficiency_level",
                label: "Proficiency Level",
                type: "select",
                required: true,
                options: [
                    { label: "Beginner", value: "Beginner" },
                    { label: "Intermediate", value: "Intermediate" },
                    { label: "Advanced", value: "Advanced" },
                    { label: "Expert", value: "Expert" },
                ],
            },
        ]
    }

    /**
     * Get modal configuration
     */
    getModalConfig() {
        return {
            create: {
                title: "Add New Skill",
                description: "Add a new skill to your portfolio",
                submitLabel: "Add Skill",
            },
            edit: {
                title: "Edit Skill",
                description: "Update skill information",
                submitLabel: "Save Changes",
            },
        }
    }

    /**
     * Factory method to create a new instance
     */
    static create(actions: SkillsTableActions): SkillsTableConfig {
        return new SkillsTableConfig(actions)
    }
}
