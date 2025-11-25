"use client"

import { SkillsTable } from "@/app/(admin)/dashboard/skills/skills-table"
import { CreateEditModal } from "@/components/generic/create-edit-modal"
import type { FieldConfig } from "@/components/generic/generic-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSkills } from "@/hooks/use-skills"
import { skillCreateSchema } from "@/lib/validations"
import { Plus } from "lucide-react"

export default function SkillsPage() {
    const { skills, isLoading, isFetching, createSkill, isCreating } = useSkills()

    // Field configuration for the generic form
    const skillFields: FieldConfig[] = [
        {
            name: "name",
            label: "Skill Name",
            type: "text",
            placeholder: "React",
        },
        {
            name: "category",
            label: "Category",
            type: "select",
            options: [
                { label: "Frontend", value: "frontend" },
                { label: "Backend", value: "backend" },
                { label: "Database", value: "database" },
                { label: "DevOps", value: "devops" },
                { label: "Deployment", value: "deployment" },
                { label: "Others", value: "others" },
            ],
        },
        {
            name: "proficiency_level",
            label: "Proficiency Level",
            type: "select",
            options: [
                { label: "Beginner", value: "Beginner" },
                { label: "Intermediate", value: "Intermediate" },
                { label: "Advanced", value: "Advanced" },
                { label: "Expert", value: "Expert" },
            ],
        },
    ]

    // Handle create
    const handleCreate = async (data: any) => {
        await createSkill(data)
    }

    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <CardTitle>All Skills</CardTitle>
                    <CardDescription>
                        View and manage all your skills organized by category
                    </CardDescription>
                </div>
                <CreateEditModal
                    title="Add New Skill"
                    description="Add a new skill to your portfolio"
                    schema={skillCreateSchema}
                    fields={skillFields}
                    onSubmit={handleCreate}
                    submitButtonText="Add Skill"
                >
                    <Button>
                        <Plus className="h-4 w-4" />
                        Add Skill
                    </Button>
                </CreateEditModal>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <SkillsTable skills={skills} />
                )}
            </CardContent>
        </Card>
    )
}
