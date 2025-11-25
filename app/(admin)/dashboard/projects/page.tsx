"use client"

import { ProjectsTable } from "@/app/(admin)/dashboard/projects/projects-table"
import { CreateEditModal } from "@/components/generic/create-edit-modal"
import type { FieldConfig } from "@/components/generic/generic-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useProjects } from "@/hooks/use-projects"
import { projectCreateSchema } from "@/lib/validations"
import { Plus } from "lucide-react"

export default function ProjectsPage() {
    const { projects, isLoading, isFetching, createProject, isCreating } = useProjects()

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
            defaultValue: 0,
        },
    ]

    // Handle create
    const handleCreate = async (data: any) => {
        await createProject(data)
    }

    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>View and manage all your portfolio projects</CardDescription>
                </div>
                <CreateEditModal
                    title="Create New Project"
                    description="Add a new project to your portfolio"
                    schema={projectCreateSchema}
                    fields={projectFields}
                    onSubmit={handleCreate}
                    submitButtonText="Create Project"
                >
                    <Button>
                        <Plus className="h-4 w-4" />
                        Add Project
                    </Button>
                </CreateEditModal>
            </CardHeader>
            <CardContent>
                {
                    isLoading ? <p>Loading...</p> :
                        isFetching ? <p>Updating...</p> :
                            <ProjectsTable projects={projects} />
                }
            </CardContent>
        </Card>
    )
}
