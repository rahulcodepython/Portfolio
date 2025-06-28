import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { projectsTabs } from "@/constant";
import { ProjectItemType, ProjectName } from "@/types";
import { Loader2, X } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const ProjectForm = ({
    onSubmit,
    edit = false,
    project
}: {
    onSubmit: (formData: FormData) => Promise<void>;
    edit?: boolean;
    project?: ProjectItemType
}) => {
    const [id, setId] = React.useState<string | null>(project?._id || null);
    const [title, setTitle] = React.useState<string>(project?.title || "");
    const [description, setDescription] = React.useState<string>(project?.description || "");
    const [image, setImage] = React.useState<File | null>(null);
    const [tag, setTag] = React.useState<string>();
    const [tags, setTags] = React.useState<string[]>(project?.technologies || []);
    const [github, setGithub] = React.useState<string>(project?.github || "");
    const [live, setLive] = React.useState<string>(project?.live || "");
    const [category, setCategory] = React.useState<ProjectName>(project?.category as ProjectName || "Frontend");

    const [loading, setLoading] = React.useState(false);

    const fileRef = React.useRef(null as HTMLInputElement | null);

    const addTag = () => {
        if (tag?.trim() === "") return;
        setTags((prev) => [...prev, tag!]);
        setTag("");
    }

    const removeTag = (index: number) => {
        setTags((prev) => prev.filter((_, i) => i !== index));
    }

    const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }

    const handleSubmit = async () => {
        if (title.trim().length <= 0 || description.trim().length <= 0 || tags.length === 0 || github.trim().length <= 0 || live.trim().length <= 0) {
            toast.error("All fields are required.");
            return;
        }

        const formData = new FormData();
        if (edit) {
            if (!id) {
                toast.error("Project ID is required for editing.");
                return;
            }
            formData.append("_id", id);

            if (image) {
                formData.append("image", image);
            }
        } else {
            if (!image) {
                toast.error("Please upload an image file.");
                return;
            }
            formData.append("image", image);
        }

        formData.append("title", title);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("technologies", JSON.stringify(tags));
        formData.append("github", github);
        formData.append("live", live);

        setLoading(true);

        await onSubmit(formData).finally(() => {
            setLoading(false);

            if (edit) return;

            setId(null);
            setTitle("");
            setCategory("Frontend");
            setDescription("");
            setImage(null);
            fileRef.current!.value = "";
            setTags([]);
            setGithub("");
            setLive("");
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label className="gap-1 block text-gray-700 dark:text-white" htmlFor="image">Image File</label>
                <Input type="file" accept=".jpg,.jpeg,.png" className="block w-full p-2 border border-gray-300 rounded" id="image" placeholder="Enter image" onChange={imageUploadHandler} ref={fileRef} />
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="title">Title</label>
                <Input className="block w-full p-2 border border-gray-300 rounded" value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" placeholder="Enter title" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="category">Category</label>
                <Select onValueChange={(value) => setCategory(value as ProjectName)} value={category} defaultValue={category}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            projectsTabs.map((tab) => (
                                (tab.value !== "all") && <SelectItem key={tab.value} value={tab.name}>
                                    {tab.name}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="description">Description</label>
                <Textarea className="block w-full p-2 border border-gray-300 rounded" value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={4} placeholder="Enter Description" ></Textarea>
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="tag">Tag</label>
                <div className="relative flex flex-col gap-1 p-2 border border-gray-300 rounded">
                    <div className="flex flex-wrap gap-2 max-w-md overflow-x-scroll">
                        {
                            tags.map((tag, index) => (
                                <span key={index} className="inline-flex gap-0.5 items-center justify-center px-2 py-1 text-sm font-medium text-gray-700 dark:text-white bg-gray-200 dark:bg-bg-dark rounded-full relative">
                                    <span className="truncate">
                                        {tag}
                                    </span>
                                    <span onClick={() => removeTag(index)} className="cursor-pointer -mt-0.5 text-gray-500 hover:text-gray-700 dark:text-white">
                                        <X className="w-4 h-4" />
                                    </span>
                                </span>
                            ))
                        }
                    </div>
                    <Input className="block w-full p-2 border-none" value={tag} onChange={(e) => setTag(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTag()} type="text" id="tag" placeholder="Enter Tag" disabled={tags.length >= 5} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="githublink">GitHub Link</label>
                <Input className="block w-full p-2 border border-gray-300 rounded" value={github} onChange={(e) => setGithub(e.target.value)} type="text" id="githublink" placeholder="Enter GitHub link" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-white" htmlFor="live">Live Link</label>
                <Input className="block w-full p-2 border border-gray-300 rounded" value={live} onChange={(e) => setLive(e.target.value)} type="text" id="live" placeholder="Enter live link" />
            </div>
            <Button className="cursor-pointer w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition-colors duration-300" onClick={handleSubmit} disabled={loading}>
                {loading && <Loader2 className="animate-spin w-4 h-4" />}
                {loading ? "Creating Project..." : edit ? "Update Project" : "Create Project"}
            </Button>
        </div>
    )
}

export default ProjectForm