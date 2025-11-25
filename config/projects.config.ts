import { UpdateProjectRequestType } from "@/lib/api/client"
import type { Project } from "@/lib/database/schema"

/**
 * Action handlers for the projects table
 */
export interface ProjectsTableActions {
    onEdit: (id: string | null, project: UpdateProjectRequestType) => void
    onDelete: (id: number) => void | Promise<void>
    deletingId?: number | null
}

/**
 * Column configuration for the table
 */
export interface TableColumn {
    header: string
    accessorKey?: keyof Project
    headerClassName?: string
    className?: string
}

/**
 * Form field types
 */
export type FormFieldType = "text" | "textarea" | "url" | "checkbox"

/**
 * Form field configuration
 */
export interface FormField {
    name: keyof Omit<Project, "id" | "created_at">
    label: string
    type: FormFieldType
    placeholder?: string
    required: boolean
}

/**
 * Configuration class for the Projects Table
 */
export class ProjectsTableConfig {
    private actions: ProjectsTableActions

    constructor(actions: ProjectsTableActions) {
        this.actions = actions
    }

    /**
     * Get action handlers
     */
    getActions(): ProjectsTableActions {
        return this.actions
    }

    /**
     * Get column configuration
     */
    getColumnsConfig(): TableColumn[] {
        return [
            {
                header: "Title",
                accessorKey: "title",
            },
            {
                header: "Technologies",
                accessorKey: "technologies",
            },
            {
                header: "Status",
            },
            {
                header: "Links",
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
            title: "No projects yet",
            description: "Create your first project to get started",
            action: {
                label: "Create your first project",
                href: "/dashboard/projects/new",
            },
        }
    }

    /**
     * Get form field configuration
     */
    getFormFields(): FormField[] {
        return [
            {
                name: "title",
                label: "Title",
                type: "text",
                placeholder: "E-Commerce Platform",
                required: true,
            },
            {
                name: "description",
                label: "Description",
                type: "textarea",
                placeholder: "A full-stack e-commerce solution with...",
                required: true,
            },
            {
                name: "technologies",
                label: "Technologies",
                type: "text",
                placeholder: "Next.js, TypeScript, Stripe, Tailwind CSS",
                required: true,
            },
            {
                name: "image_url",
                label: "Image URL",
                type: "url",
                placeholder: "https://example.com/image.jpg",
                required: false,
            },
            {
                name: "live_url",
                label: "Live URL",
                type: "url",
                placeholder: "https://example.com",
                required: false,
            },
            {
                name: "github_url",
                label: "GitHub URL",
                type: "url",
                placeholder: "https://github.com/username/repo",
                required: false,
            },
            {
                name: "featured",
                label: "Featured",
                type: "checkbox",
                required: false,
            },
        ]
    }

    /**
     * Get modal configuration
     */
    getModalConfig() {
        return {
            create: {
                title: "Create New Project",
                description: "Add a new project to your portfolio",
                submitLabel: "Create Project",
            },
            edit: {
                title: "Edit Project",
                description: "Update project information",
                submitLabel: "Save Changes",
            },
        }
    }

    /**
     * Factory method to create a new instance
     */
    static create(actions: ProjectsTableActions): ProjectsTableConfig {
        return new ProjectsTableConfig(actions)
    }
}
