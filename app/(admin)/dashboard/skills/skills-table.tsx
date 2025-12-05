"use client"

import { CreateEditModal } from "@/components/generic/create-edit-modal"
import type { ColumnDef } from "@/components/generic/data-table"
import { DataTable } from "@/components/generic/data-table"
import { DeleteModal } from "@/components/generic/delete-modal"
import type { FieldConfig } from "@/components/generic/generic-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SkillsTableConfig } from "@/config/skills.config"
import { useSkills } from "@/hooks/use-skills"
import type { Skill } from "@/lib/database/schema"
import { skillCreateSchema } from "@/lib/validations"
import { Filter, Pencil, Trash2, X } from "lucide-react"
import { useMemo, useState } from "react"

interface SkillsTableProps {
    skills: Skill[]
}

const proficiencyColors = {
    Beginner: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Intermediate: "bg-green-500/10 text-green-700 dark:text-green-400",
    Advanced: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    Expert: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
}

export function SkillsTable({ skills: initialSkills }: SkillsTableProps) {
    // Use React Query hook for skill operations
    const { deleteSkill, isDeleting, updateSkill, isUpdating } = useSkills()

    // State for edit modal
    const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
    const [editModalOpen, setEditModalOpen] = useState(false)

    // State for filters
    const [categoryFilter, setCategoryFilter] = useState<string>("")
    const [proficiencyFilter, setProficiencyFilter] = useState<string>("")

    // Apply filters to skills
    const filteredSkills = useMemo(() => {
        let filtered = initialSkills

        if (categoryFilter) {
            filtered = filtered.filter(skill => skill.category === categoryFilter)
        }

        if (proficiencyFilter) {
            filtered = filtered.filter(skill => skill.proficiency_level === proficiencyFilter)
        }

        return filtered
    }, [initialSkills, categoryFilter, proficiencyFilter])

    // Check if any filters are active
    const hasActiveFilters = categoryFilter !== "" || proficiencyFilter !== ""

    // Clear all filters
    const clearFilters = () => {
        setCategoryFilter("")
        setProficiencyFilter("")
    }

    const handleEdit = async (data: any) => {
        if (editingSkill) {
            await updateSkill(editingSkill.id.toString(), data)
            setEditModalOpen(false)
            setEditingSkill(null)
        }
    }

    const handleDelete = async (id: number) => {
        await deleteSkill(id.toString())
    }

    // Create table configuration with actions
    const tableConfig = useMemo(
        () =>
            SkillsTableConfig.create({
                onEdit: () => { },
                onDelete: handleDelete,
                deletingId: null,
            }),
        []
    )

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

    // Get configuration data
    const columnsConfig = tableConfig.getColumnsConfig()
    const emptyConfig = tableConfig.getEmptyConfig()
    const actions = tableConfig.getActions()

    // Build column definitions with JSX rendering
    const columns: ColumnDef<Skill>[] = columnsConfig.map((col) => {
        const column: ColumnDef<Skill> = {
            header: col.header,
            accessorKey: col.accessorKey,
            headerClassName: col.headerClassName,
            className: col.className,
        }

        // Add custom cell renderers based on column
        if (col.accessorKey === "name") {
            column.cell = (skill) => (
                <div>
                    <p className="font-medium text-foreground">{skill.name}</p>
                </div>
            )
        } else if (col.accessorKey === "category") {
            column.cell = (skill) => (
                <p className="text-sm text-muted-foreground capitalize">{skill.category}</p>
            )
        } else if (col.accessorKey === "proficiency_level") {
            column.cell = (skill) => (
                <Badge
                    variant="secondary"
                    className={proficiencyColors[skill.proficiency_level as keyof typeof proficiencyColors]}
                >
                    {skill.proficiency_level}
                </Badge>
            )
        } else if (col.header === "Actions") {
            column.cell = (skill) => (
                <div className="flex justify-end gap-2">
                    <CreateEditModal
                        title="Edit Skill"
                        description="Update skill information"
                        schema={skillCreateSchema}
                        fields={skillFields}
                        defaultValues={{
                            name: skill.name,
                            category: skill.category as "frontend" | "backend" | "database" | "devops" | "deployment" | "others",
                            proficiency_level: skill.proficiency_level as "Beginner" | "Intermediate" | "Advanced" | "Expert",
                        }}
                        onSubmit={handleEdit}
                        submitButtonText="Save Changes"
                        open={editModalOpen && editingSkill?.id === skill.id}
                        onOpenChange={(open) => {
                            setEditModalOpen(open)
                            if (open) {
                                setEditingSkill(skill)
                            } else {
                                setEditingSkill(null)
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
                        id={skill.id}
                        title="Delete Skill?"
                        description="Are you sure you want to delete this skill? This action cannot be undone."
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

    // Show custom empty state if no skills
    if (initialSkills.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-lg font-medium text-muted-foreground">{emptyConfig.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{emptyConfig.description}</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Filter Section */}
            <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="h-4 w-4" />
                    <span className="font-medium">Filters:</span>
                </div>

                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value=" ">All Categories</SelectItem>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="database">Database</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                        <SelectItem value="deployment">Deployment</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                </Select>

                {/* Proficiency Filter */}
                <Select value={proficiencyFilter} onValueChange={setProficiencyFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Proficiency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value=" ">All Proficiency</SelectItem>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                    </SelectContent>
                </Select>

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="h-9 px-2 lg:px-3"
                    >
                        <X className="mr-2 h-4 w-4" />
                        Clear Filters
                    </Button>
                )}

                {/* Show count of filtered results */}
                {hasActiveFilters && (
                    <span className="text-sm text-muted-foreground">
                        Showing {filteredSkills.length} of {initialSkills.length} skills
                    </span>
                )}
            </div>

            {/* Data Table */}
            <DataTable<Skill>
                data={filteredSkills}
                columns={columns}
                emptyMessage={emptyConfig.title}
            />
        </div>
    )
}
