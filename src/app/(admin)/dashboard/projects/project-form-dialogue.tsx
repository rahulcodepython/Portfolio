import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProjectItemType } from "@/types"
import ProjectForm from "./project-form"

export const ProjectCreateFormDialogue = ({
    createProject,
    isOpen,
    setIsOpen,
}: {
    createProject: (formData: FormData) => Promise<void>
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-hover cursor-pointer hover:scale-105 text-white">
                    New Project
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription className="mt-4" asChild>
                        <ProjectForm onSubmit={createProject} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export const ProjectEditFormDialogue = ({
    updateProject,
    project,
}: {
    updateProject: (formData: FormData) => Promise<void>
    project: ProjectItemType
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-hover cursor-pointer hover:scale-105 text-white">
                    Edit Project
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                    <DialogDescription className="mt-4" asChild>
                        <ProjectForm onSubmit={updateProject} edit project={project} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
