"use client"
import { BlogItemType } from "@/types"
import { Loader2 } from "lucide-react"
import React from "react"
import { toast } from "sonner"
import BlogCard from "./blog-card"
import { BlogCreateFormDialogue, BlogEditFormDialogue } from "./blog-form-dialogue"
import Heading from "./heading"
import { Button } from "./ui/button"

const DashboardBlogs = ({ data }: { data: BlogItemType[] }) => {
    const [blogs, setBlogs] = React.useState<BlogItemType[]>(data);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);

    const createBlog = async (formData: FormData): Promise<void> => {
        try {
            const response = await fetch("/api/blog", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to create blog.");
                return;
            }
            const data = await response.json();
            toast.success(data.msg || "Blog created successfully");
            setBlogs((prev) => [...prev, data.data]);
        } catch (error) {
            toast.error("Failed to create blog.");
        } finally {
            setIsOpen(false);
        }
    }

    const editBlog = async (formData: FormData): Promise<void> => {
        try {
            const response = await fetch("/api/blog", {
                method: "PATCH",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to edit blog.")
            }

            const data = await response.json();
            toast.success(data.msg || "Blog edited successfully");
            setBlogs((prev) => prev.map(blog => blog._id === data.data._id ? data.data : blog));
        } catch (error) {
            toast.error("Failed to edit blog.");
        }
    }

    const deleteBlog = async (blogId: string) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/blog/?_id=${blogId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to delete blog");
            }

            setBlogs((prev) => prev.filter(blog => blog._id !== blogId));
            toast.success("Blog deleted successfully");
        } catch (error) {
            toast.error("Failed to delete blog.");
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center justify-between w-full mb-8">
                <div></div>
                <div className="text-center flex flex-col gap-4 w-fit">
                    <Heading title="All Blogs" />
                </div>
                <BlogCreateFormDialogue createBlog={createBlog} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {blogs.length === 0 && <div className="text-center">No blogs available. Please add new blogs.</div>}
            {
                blogs.length !== 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog}>
                                <div className="grid grid-cols-2 gap-4">
                                    <BlogEditFormDialogue editBlog={editBlog} blog={blog} />
                                    <Button className="bg-red-500 hover:bg-red-600 cursor-pointer hover:scale-105 dark:text-white" onClick={() => blog._id && deleteBlog(blog._id)}>
                                        {isDeleting && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
                                        {isDeleting ? "Deleting..." : "Delete Blog"}
                                    </Button>
                                </div>
                            </BlogCard>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default DashboardBlogs