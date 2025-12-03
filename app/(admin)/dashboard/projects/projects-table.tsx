"use client"

import { CreateEditModal } from "@/components/generic/create-edit-modal"
import type { ColumnDef } from "@/components/generic/data-table"
import { DataTable } from "@/components/generic/data-table"
import { DeleteModal } from "@/components/generic/delete-modal"
import type { FieldConfig } from "@/components/generic/generic-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectsTableConfig } from "@/config/projects.config"
import { useProjects } from "@/hooks/use-projects"
import type { Project } from "@/lib/database/schema"
import { projectCreateSchema } from "@/lib/validations"
import { Earth, Github, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

interface ProjectsTableProps {
    projects: Project[]
}

export function ProjectsTable({ projects: initialProjects }: ProjectsTableProps) {
    // Use React Query hook for project operations
    const { deleteProject, isDeleting, updateProject, isUpdating } = useProjects()

    // State for edit modal
    const [editingProject, setEditingProject] = useState<Project | null>(null)
    const [editModalOpen, setEditModalOpen] = useState(false)

    const handleEdit = async (data: any) => {
        if (editingProject) {
            await updateProject(editingProject.id.toString(), data)
            setEditModalOpen(false)
            setEditingProject(null)
        }
    }

    const handleDelete = async (id: number) => {
        await deleteProject(id.toString())
    }

    // Create table configuration with actions
    const tableConfig = useMemo(
        () =>
            ProjectsTableConfig.create({
                onEdit: () => { },
                onDelete: handleDelete,
                deletingId: null,
            }),
        []
    )

    // Field configuration for the generic form
    const projectFields: FieldConfig[] = [
        {
            name: "title",
            label: "Title",
            type: "text",
            placeholder: "E-Commerce Platform",
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
            placeholder: "A full-stack e-commerce solution with...",
        },
        {
            name: "technologies",
            label: "Technologies",
            type: "text",
            placeholder: "Next.js, TypeScript, Stripe, Tailwind CSS",
        },
        {
            name: "image_url",
            label: "Image URL",
            type: "file",
            placeholder: "https://example.com/image.jpg",
            fileConfig: {
                uploadPath: "projectImage",
                allowedTypes: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
                maxSizeMB: 5,
                accept: "image/jpeg,image/jpg,image/png,image/webp",
            },
        },
        {
            name: "live_url",
            label: "Live URL",
            type: "url",
            placeholder: "https://example.com",
        },
        {
            name: "github_url",
            label: "GitHub URL",
            type: "url",
            placeholder: "https://github.com/username/repo",
        },
        {
            name: "featured",
            label: "Featured Project",
            type: "switch",
            defaultValue: false,
        },
    ]

    // Get configuration data
    const columnsConfig = tableConfig.getColumnsConfig()
    const emptyConfig = tableConfig.getEmptyConfig()
    const actions = tableConfig.getActions()

    // Build column definitions with JSX rendering
    const columns: ColumnDef<Project>[] = columnsConfig.map((col) => {
        const column: ColumnDef<Project> = {
            header: col.header,
            accessorKey: col.accessorKey,
            headerClassName: col.headerClassName,
            className: col.className,
        }

        // Add custom cell renderers based on column
        if (col.accessorKey === "title") {
            column.cell = (project) => (
                <div>
                    <p className="font-medium text-foreground">{project.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                        {project.description.slice(0, 50) + "..."}
                    </p>
                </div>
            )
        } else if (col.accessorKey === "technologies") {
            column.cell = (project) => (
                <p className="text-sm text-muted-foreground">{project.technologies}</p>
            )
        } else if (col.header === "Status") {
            column.cell = (project) =>
                project.featured ? (
                    <Badge variant="default">Featured</Badge>
                ) : (
                    <Badge variant="secondary">Standard</Badge>
                )
        } else if (col.header === "Links") {
            column.cell = (project) => (
                <div className="flex gap-2">
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80"
                        >
                            <Earth className="h-4 w-4" />
                        </a>
                    )}
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    )}
                </div>
            )
        } else if (col.header === "Actions") {
            column.cell = (project) => (
                <div className="flex justify-end gap-2">
                    <CreateEditModal
                        title="Edit Project"
                        description="Update project information"
                        schema={projectCreateSchema}
                        fields={projectFields}
                        defaultValues={{
                            title: project.title,
                            description: project.description,
                            technologies: project.technologies,
                            image_url: project.image_url || "",
                            live_url: project.live_url || "",
                            github_url: project.github_url || "",
                            featured: project.featured,
                        } as any}
                        onSubmit={handleEdit}
                        submitButtonText="Save Changes"
                        open={editModalOpen && editingProject?.id === project.id}
                        onOpenChange={(open) => {
                            setEditModalOpen(open)
                            if (open) {
                                setEditingProject(project)
                            } else {
                                setEditingProject(null)
                            }
                        }}
                    >
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                    </CreateEditModal>
                    <DeleteModal
                        isDeleting={isDeleting}
                        onDelete={actions.onDelete}
                        id={project.id}
                        title="Delete Project?"
                        description="Are you sure you want to delete this project? This action cannot be undone."
                    >
                        <Button
                            variant="ghost"
                            size="sm"
                            disabled={isDeleting}
                        >
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                    </DeleteModal>
                </div>
            )
        }

        return column
    })

    // Show custom empty state if no projects
    if (initialProjects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">{emptyConfig.title}</p>
                <Button asChild className="mt-4">
                    <Link href={emptyConfig.action.href}>{emptyConfig.action.label}</Link>
                </Button>
            </div>
        )
    }

    return (
        <DataTable<Project>
            data={initialProjects}
            columns={columns}
            emptyMessage={emptyConfig.title}
        />
    )
}
