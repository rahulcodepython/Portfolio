import BlogForm from "@/app/(admin)/dashboard/blogs/blog-form"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { BlogItemType } from "@/types"

export const BlogCreateFormDialogue = ({
    createBlog,
    isOpen,
    setIsOpen,
}: {
    createBlog: (formData: FormData) => Promise<void>
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-hover cursor-pointer hover:scale-105 text-white">New Blog</Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>Create New Blog</DialogTitle>
                    <DialogDescription asChild>
                        <BlogForm onSubmit={createBlog} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export const BlogEditFormDialogue = ({
    editBlog,
    blog,
}: {
    editBlog: (formData: FormData) => Promise<void>
    blog: BlogItemType
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-hover cursor-pointer hover:scale-105 text-white">
                    Edit Blog
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>Edit Blog</DialogTitle>
                    <DialogDescription asChild>
                        <BlogForm onSubmit={editBlog} edit blog={blog} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}