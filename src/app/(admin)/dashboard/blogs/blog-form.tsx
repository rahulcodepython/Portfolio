import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BlogItemType } from "@/types";
import matter from "gray-matter";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const BlogForm = ({
    onSubmit,
    edit = false,
    blog,
}: {
    onSubmit: (formData: FormData) => Promise<void>;
    edit?: boolean;
    blog?: BlogItemType;
}) => {
    const [id, setId] = React.useState(blog?._id || null);
    const [title, setTitle] = React.useState(blog?.title || "");
    const [description, setDescription] = React.useState(blog?.description || "");
    const [date, setDate] = React.useState(blog?.date || "");
    const [image, setImage] = React.useState<File | null>(null);
    const [file, setFile] = React.useState<File | null>(null);

    const [loading, setLoading] = React.useState(false);

    const fileRef = React.useRef(null as HTMLInputElement | null);
    const imageRef = React.useRef(null as HTMLInputElement | null);

    const fileUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Handle file upload logic here
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target?.result;

                if (typeof fileContent !== 'string') {
                    toast.error("File content is not a string");
                    return;
                }

                const { content, data } = matter(fileContent);
                setTitle(data.title || "");
                setDescription(data.description || "");
                setDate(data.date || "");
                setFile(file);
            };
            reader.readAsText(file);
        }
    }

    const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Handle image upload logic here
            setImage(file);
        }
    }

    const handleSubmit = async () => {
        if (title.trim().length <= 0 || description.trim().length <= 0 || date.trim().length <= 0) {
            toast.error("All fields are required.");
            return;
        }

        const formData = new FormData();

        if (edit) {
            if (file) {
                formData.append("file", file);
            }
            if (image) {
                formData.append("image", image);
            }
            if (!id) {
                toast.error("Blog ID is required for editing.");
                return;
            }
            formData.append("_id", id);
        } else {
            if (!file || !image) {
                toast.error("Both readme and image files are required.");
                return;
            }

            formData.append("file", file);
            formData.append("image", image);
        }

        formData.append("title", title);
        formData.append("description", description);
        formData.append("date", date);

        setLoading(true);

        await onSubmit(formData).finally(() => {
            setLoading(false);
            if (!edit) {
                setTitle("");
                setDescription("");
                setDate("");
                setImage(null);
                setFile(null);
                fileRef.current!.value = "";
                imageRef.current!.value = "";
            }
        });
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="file">Readme File</label>
                <Input type="file" accept=".md" className="block w-full p-2 border border-gray-300 rounded" id="file" placeholder="Enter file" onChange={fileUploadHandler} ref={fileRef} />
                {
                    blog?.content && <p className="text-sm text-gray-500 dark:text-gray-300">
                        {blog.content.length > 50 ? blog.content.slice(0, 50) + "..." : blog.content}
                    </p>
                }
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="image">Image File</label>
                <Input type="file" accept=".jpg,.jpeg,.png" className="block w-full p-2 border border-gray-300 rounded" id="image" placeholder="Enter image" onChange={imageUploadHandler} ref={imageRef} />
                {
                    blog?.image && <p>
                        {blog.image.length > 50 ? blog.image.slice(0, 50) + "..." : blog.image}
                    </p>
                }
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="title">Title</label>
                <Input className="block w-full p-2 border border-gray-300 rounded" value={title} type="text" id="title" placeholder="Enter title" readOnly />
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="description">Description</label>
                <Textarea className="block w-full p-2 border border-gray-300 rounded" value={description} id="description" rows={4} placeholder="Enter Description" readOnly></Textarea>
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="date">Date</label>
                <Input className="block w-full p-2 border border-gray-300 rounded" value={date} type="text" id="date" placeholder="Enter Date" readOnly />
            </div>
            <Button className="w-full bg-sky-500 cursor-pointer text-white py-2 rounded hover:bg-sky-600 transition-colors duration-300" onClick={handleSubmit} disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2 w-4 h-4" /> : null}
                {loading ? "Submitting..." : edit ? "Update Blog" : "Create Blog"}
            </Button>
        </div>
    )
}

export default BlogForm