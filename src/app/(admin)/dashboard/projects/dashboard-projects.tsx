"use client"

import Heading from "@/components/heading"
import ProjectItem from "@/components/project-item"
import { Button } from "@/components/ui/button"
import { ProjectItemType } from "@/types"
import { Loader2 } from "lucide-react"
import React from "react"
import { toast } from "sonner"
import { ProjectCreateFormDialogue, ProjectEditFormDialogue } from "./project-form-dialogue"

const DashboardProjects = ({ data }: { data: ProjectItemType[] }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [projects, setProjects] = React.useState<ProjectItemType[]>(data);
    const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

    const createProject = async (formData: FormData): Promise<void> => {
        try {
            const response = await fetch("/api/project", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to create project");
                return;
            }

            const data = await response.json();
            toast.success(data.msg);
            setProjects((prev) => [...prev, data.data]);
        } catch (error) {
            toast.error("Failed to create project");
        } finally {
            setIsOpen(false);
        }
    }

    const updateProject = async (formData: FormData) => {
        try {
            const response = await fetch("/api/project", {
                method: "PATCH",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to update project");
                return;
            }

            const data = await response.json();
            toast.success(data.msg);
            setProjects((prev) => prev.map((p) => p._id === data.data._id ? data.data : p));
        } catch (error) {
            toast.error("Failed to update project");
        }
    }

    const deleteProject = async (projectId: string) => {
        try {
            setIsDeleting(true);
            const response = await fetch(`/api/project/?_id=${projectId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to delete project");
                return;
            }

            const data = await response.json();

            toast.success(data.msg);

            setProjects((prev) => prev.filter((p) => p._id !== projectId));
        } catch (error) {
            toast.error("Failed to delete project");
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center justify-between w-full mb-8">
                <div></div>
                <div className="flex flex-col gap-4 w-fit">
                    <Heading title="All Projects" />
                </div>
                <ProjectCreateFormDialogue createProject={createProject} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {projects.length === 0 && (
                <div className="text-center text-muted-foreground">
                    No projects found. Please add a new project.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects && projects.map((project, index) => (
                        <ProjectItem key={project._id} item={project}>
                            <div className="grid grid-cols-2 gap-4">
                                <ProjectEditFormDialogue updateProject={updateProject} project={project} />
                                <Button className="bg-red-500 hover:bg-red-600 cursor-pointer hover:scale-105 text-white" onClick={() => project._id && deleteProject(project._id)} disabled={isDeleting}>
                                    {isDeleting && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
                                    {isDeleting ? "Deleting..." : "Delete Project"}
                                </Button>
                            </div>
                        </ProjectItem>
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardProjects